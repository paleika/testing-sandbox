module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    devtools: process.env.HEADLESS === 'false'
  },
  server: {
    command: 'npm start',
    port: 8080,
  },
}