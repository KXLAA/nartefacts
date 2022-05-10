# nartefacts

This is a rewrite of my nartefacts application with a bunch of new technologies and improvements based of what i have learnt since V1. You can view the code for the old version [here](https://github.com/KXLAA/nartefacts-js) and a live preview [here](https://nartefacts.vercel.app/).

## Todos

### General

- [ ] Add Framer motion page transitions and regular transitions
- [ ] Add proper stories
- [ ] fix path name issue
- [ ] add loading transitions
- [ ] responsive design
- [ ] move all images used on the home page to s3 from uploadcare
- [ ] E2E tests with Cypress

### Home Page

- [ ] Implement infinite scroll
- [ ] add details to albums
- [ ] add like & unlike interaction with optimistic updates
- [ ] add global footer with info & link to portfolio
- [ ] add gradients
- [ ] Modal for more info about album

### Admin Page

- [ ] Design admin page on Figma
- [ ] Implement admin page
- [ ] connect admin page to next auth on the front end

### Create Page

- [x] Add toast notification when a user generates a color pallette
- [x] Copy to clipboard for individual colors and entire pallette
- [x] Add counter to track number of generated pallettes
- [x] Disable button state
- [x] Improve tests, replace getByTitle with getByTestId in preview component
- [x] Need to fix copy colors to clipboard functionality, it's a bit buggy
- [ ] Modal pop up to name generated palettes w react hook form
- [ ] ~~Generate palettes from Links~~
- [x] Limit amount user can create and store in local storage, im thinking ~~50~~ 60 items ?
- [ ] ~~A way to edit pallettes after they are generated~~
- [ ] ~~Increase or reduce number of colors in pallettes ?~~
- [ ] write stories for components on this route
- [ ] Gradient component (i want to do shaders ? idk may take longer)

## Demo

<!-- <p align="center">
  <img height="300" src="https://media.giphy.com/media/WXraj8aJHXUP7kRDbJ/giphy.gif" />
</p> -->

<!-- Local Storage
https://github.com/pmndrs/zustand/issues/245#issue-749551108
https://github.com/pmndrs/zustand/pull/248 -->

## Technologies used

### What has Changed since v1 ?

## Learnings and potential improvements & future features

<!-- https://github.com/vercel/next.js/tree/canary/examples/with-apollo -->
<!-- https://medium.com/@zhamdi/server-side-rendering-ssr-using-apollo-and-next-js-ac0b2e3ea461 -->
<!-- https://github.com/apollographql/apollo-client/issues/3130#issuecomment-478409066 -->
<!--
https://stackoverflow.com/questions/57472440/how-do-i-correctly-type-the-apollo-client-defaultoptions
Execute the following command to create your project:

```bash
npx create-next-app -e https://github.com/helderburato/nextjs-boilerplate

# or

yarn create next-app -e https://github.com/helderburato/nextjs-boilerplate
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
