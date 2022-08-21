# nartefacts

[nartefacts](https://www.nartefacts.com/) is a website that curates color palettes extracted from album covers of African musicians. The dominant colors on the covers are extracted by a package called [colour-thief](https://www.npmjs.com/package/color-thief).

This is the second version of the webapp. You can view the code for the old version [here](https://github.com/KXLAA/nartefacts-js) and a live preview [here](https://nartefacts.vercel.app/).

Version 2 has some significant code improvements:

- The webapp has been rewritten in TypeScript

- The home page is now rendered on the server with a combination of `getServerSideProps` and the apollo cache improving performance

- New unit tests for the components with the `@testing-library/react` library & `jest` library

- End to end tests for the webapp with `cypress` library
- Using prisma as a database ORM

Apart from code improvements, there are also a number of new features:

- Users can now generate color palette's from images they upload, uploads are handled with aws s3
- Users can save color pallettes they create to local storage

## Technologies used

- [x] 💅🏿 **Stitches** - One of my favorite CSS-in-Js solutions
- [x] 🔯 **React** - The frontend framework
- [x] ⛑ **TypeScript** - For my sanity
- [x] 🪣 **AWS S3** - To store uploaded images
- [x] ᠀ **Mongo DB** - Database for storing color palettes
- [x] 🦷 **GraphQL & Apollo** - GraphQL server for querying color palettes
- [x] 🧊 **Prisma** - Database ORM
- [x] 📏 **ESLint & Prettier** — For code formatting and correctness
- [x] 🧪 **Jest & React Testing Library** - To write unit tests
- [x] 🔬 **Cypress** - To write end to end tests
- [x] 🐶 **Husky** — To run scripts before committing
- [x] ♺ **Plop** — Micro-generator to generate react component files in a consistent manner
- [x] 🚓 **Commitlint** — A linter to make sure that commits follow a convention
- [x] 🚫 **lint-staged** — Run ESLint & Prettier against staged Git files
- [x] 👷 **CI Workflow** — Run tets, Type Check, lint and format on Pull Requests

## Development

Clone the repository:

```bash
git clone https://github.com/KXLAA/nartefacts.git
```

Then create a `.env` file in the root of the project with the following contents:

```bash
JWT_SESSION_SECRET=
DATABASE_URL=
S3_UPLOAD_KEY=
S3_UPLOAD_SECRET=
S3_UPLOAD_BUCKET=
S3_UPLOAD_REGION=
```

Install the dependencies:

```bash
yarn
```

Then run the server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To Query the server got to [http://localhost:3000/graphql](http://localhost:3000/graphql).
