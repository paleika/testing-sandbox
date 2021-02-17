import React from 'react'
import { shallow } from 'enzyme'

import Button from './button.jsx'

describe('Button component', () => {
    let buttonName, wrapper;

    beforeEach(() => {
        buttonName = 'test-name';
        wrapper = shallow(<Button name={buttonName} />);
    })

    it('renders button name from props', () => {
        const buttonNode = wrapper.find('button');
        expect(buttonNode.text()).toBe(buttonName);
    });
    it('renders with regular font-weight on load', () => {
        const buttonFontWeight = wrapper.props().style.fontWeight;
        expect(buttonFontWeight).toBe(300);
    })
});