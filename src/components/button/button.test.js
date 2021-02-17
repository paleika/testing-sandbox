import React from 'react'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import Button from './button.jsx'

it('renders button name from props', () => {
    const buttonName = 'test-name'
    const wrapper = shallow(<Button name={buttonName} />)
    const buttonNode = wrapper.find('button')
    expect(buttonNode.text()).to.eq(buttonName)
})