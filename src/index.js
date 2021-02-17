import React from 'react'
import ReactDOM from 'react-dom'
import puppeteer from 'puppeteer'

const App = () => <p>Hello World</p>

ReactDOM.render(<App />,
    document.getElementById('root'));

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com');
//     await page.screenshot({ path: 'google.png' });
//     await browser.close()
// })();