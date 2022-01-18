/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    URL: process.env.URL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      }
    ]
  }
}

