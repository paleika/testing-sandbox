// Configure Enzyme Adapter

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
var context = require.context('../src', true, /.+\.test\.js$/);
context.keys().forEach(context);
module.exports = context;