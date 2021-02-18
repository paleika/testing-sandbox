const puppeteer = require('puppeteer');

describe('Layout', () => {
    test('has a button component', async () => {
        await page.goto('http://127.0.0.1:8080/');
        await expect(page).toMatchElement('.button-component', { text: 'Get Started' })
    });

    test('has correct title', async () => {
        await page.goto('http://google.com/', { waitUntil: 'networkidle0' });
        const pageTitle = await page.title();
        await expect(pageTitle).toBe('Google');
    })
})