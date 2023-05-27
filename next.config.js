const {i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['www.google.com.br']
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {key: 'Acess-Control-Allow-Origin', value: '*'}
        ]
      }
    ]
  },
  i18n
}

module.exports = nextConfig