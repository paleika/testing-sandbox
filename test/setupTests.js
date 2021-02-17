import Enzyme from 'enzyme';
import { JSDOM } from 'jsdom';

// Force the test environment
process.env.NODE_ENV = 'test';

// Simulate window if we're running in Node.js
if (!global.window && !global.document) {
  const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
    beforeParse(win) {
      win.scrollTo = () => {};
    },
    pretendToBeVisual: false,
    userAgent: 'mocha',
  });
  
  // Configure global variables which like to be used in testing
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
}
// Critical: This Enzyme adapter imports React, but the JSDOM above // must be created BEFORE React is imported.
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Create a place for react to grab onto.
const app = document.createElement('div');
app.id = 'root';
document
  .getElementsByTagName('body')
  .item(0)
  .appendChild(app);