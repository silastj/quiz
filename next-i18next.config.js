const path = require('path')

module.exports = {
  i18n:{
    locales: ['pt', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath:path.resolve('./public/locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}