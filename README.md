# waxshop

> waxshop.ca

Client site for a small business built with Nuxt/Vue. Server-side rendered and fetches business hours from a google API.

Built very quickly due to a tight timeline. I worked with their design and marketing people to implement their vision.

I use NGINX for SSL termination/reverse proxy. I'm also proxying calls to the google API for business hours. This allows restricting the API key and will allow caching in the future if rates start getting expensive.

I'm running a simple CI/CD server I wrote that rebuilds and restarts on push to github. There is a duplicate of everything on the `dev` subdomain for testing and evaluation.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
