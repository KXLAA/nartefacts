import { APIRoute } from 'next-s3-upload'

export default APIRoute.configure({
  key(req, filename) {
    return process.env.NODE_ENV === 'development'
      ? `narefacts-dev-uploads/images/${filename}`
      : `narefacts-uploads/images/${filename}`
  },
})
