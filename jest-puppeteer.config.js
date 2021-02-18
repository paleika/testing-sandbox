module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    devtools: process.env.HEADLESS === 'false'
  },
  server: {
    command: 'webpack serve', // run webpack-dev-server in webpack-5 style
    port: 8080,
    protocol: 'http',
    usedPortAction: 'ignore'
  },
}