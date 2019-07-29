import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import App from './App'

describe('<App />', () => {
  const app = mount(<App />)
  it('should render without crashing', () => {
    expect(app).toBeTruthy()
  })
  it('should render <Chart />', () => {
    expect(app.find('Chart')).toBeTruthy()
  })
  it('should render <Threshold />', () => {
    expect(app.find('Threshold')).toBeTruthy()
  })
  it('should render <Toast />', () => {
    expect(app.find('Toast')).toBeTruthy()
  })
  it('should match snapshot', () => {
    const appSnap = renderer.create(<App />)
    expect(appSnap.toJSON()).toMatchSnapshot()
  })
})
