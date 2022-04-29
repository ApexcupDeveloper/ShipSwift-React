# Ship Swift UI

This is a [React.js](https://reactjs.org/) project bootstrapped with [create-react-app](https://create-react-app.dev/docs/adding-typescript/) on typescript.

## Getting Started

1. Install packages

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/index.tsx`. The page auto-updates as you edit the file.

## Docker

> Replace * by **dev** or **prod**

1. Build docker image:

```bash
npm run *-docker:build
# or
yarn *-docker:build
```

2. Run app with docker:

```bash
npm run *-docker:start
# or
yarn *-docker:start
```

3. Clean images and containers after work :)

```bash
npm run *-docker:clean
# or
yarn *-docker:clean
```

## Learn More

To learn more about React.js, take a look at the following resources:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.js features and API.
- [Learn React.js](https://reactjs.org/docs/hello-world.html) - an interactive React.js tutorial.
