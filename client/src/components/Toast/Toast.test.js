import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Toast from '.'

describe('<Toast />', () => {
  // named to prevent namespacing confusion
  const toastComponent = mount(<Toast />)
  it('should render without crashing', () => {
    expect(toastComponent).toBeTruthy()
  })
  it('should render <ToastContainer />', () => {
    expect(toastComponent.find('ToastContainer')).toBeTruthy()
  })
  it('should match snapshot', () => {
    const toastSnap = renderer.create(<Toast />)
    expect(toastSnap.toJSON()).toMatchSnapshot()
  })
})
