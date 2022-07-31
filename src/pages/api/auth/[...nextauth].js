import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email address',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      authorize: async (credentials) => {
        if (credentials.email && credentials.password) {
          const res = await fetch(GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              mutation LogIn($email: String!, $password: String!) {
                logIn(email: $email, password: $password) {
                    logIn
                }
              }
                `,
              variables: {
                email: credentials.email,
                password: credentials.password,
              },
            }),
          })
          const body = await res.json()
          const token = body?.data?.logIn
          const user = jwt.verify(token, process.env.JWT_SESSION_SECRET)
          if (user && user.id) {
            return Promise.resolve({
              id: user.id,
              email: user.email,
              token,
            })
          } else {
            return Promise.resolve(null)
          }
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null)
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.apiToken = user.apiToken
      return Promise.resolve(session)
    },
    jwt: async (token, user) => {
      const isSignIn = user ? true : false
      if (isSignIn) {
        token.apiToken = user.token
      }
      return Promise.resolve(token)
    },
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SESSION_SECRET,
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login', // Error code passed in query string as ?error=
    verifyRequest: 'admin/login/verify-request', // (used for check email message)
  },
}

export default (req, res) => NextAuth(req, res, options)
