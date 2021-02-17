import React from 'react'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import Button from './button.jsx'

describe('Button component', () => {
    let buttonName, wrapper;

    beforeEach(() => {
        buttonName = 'test-name';
        wrapper = shallow(<Button name={buttonName} />);
    })

    it('renders button name from props', () => {
        const buttonNode = wrapper.find('button');
        expect(buttonNode.text()).to.eq(buttonName);
    });
    it('renders with regular font-weight on load', () => {
        const buttonFontWeight = wrapper.props().style.fontWeight;
        expect(buttonFontWeight).to.eq(300);
    })
});

