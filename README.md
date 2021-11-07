# 10 Hour Labs Inc.

This is the official website repository for 10 Hour Labs. Please note https://10hourlab.com is setup to redirect to https://10hourlabs.com

## Getting Started

The only requirements you need to setup this repo is [Docker](https://www.docker.com/)

After cloning this repository, the only command you need to run the development server is 

```bash
make up 
# or 
make upd
```

Run `make help` to see all available commands locally

## Development

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

We use Next.js primarily for this repository. To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Useful commands

Run `make help` in this repo to see the list of available commands

```
Available commands:

help:  Output available commands
up:  Starts the devlopment environment
upd:  Starts the dev environment in detach mode
down:  Bring down the devlopment environment
test:  Run all tests
test-watch:  Run all tests in watch mode
lint:  Run eslint on all files
```

## On windows ?

`make` is a GNU command, the only way you can have it work on Windows is by installing a Windows version. 

If you use choco then the following command should do it 

```
choco install make
```

Refer to this [StackOverflow](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows) answer for more help

## Contributing

Is something missing in the docs you'd like to add, please feel free to raise a PR
