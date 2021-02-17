import React from 'react'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import Notification from './notification.jsx'

describe('Notification component', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Notification />)
        expect(wrapper).to.be.ok;
    })
})

