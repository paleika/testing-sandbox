const puppeteer = require('puppeteer');

describe('Notification component', () => {
    test('renders without error', async () => {

        await page.goto('http://localhost:8080/');
        await expect(page).toMatchElement('.button-component', { text: 'Get Started' })

    });
})