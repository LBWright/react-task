import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Chart from '.'

const mockProps = {
  data: [
    {
      timestamp: '1',
      value: 1,
    },
    {
      timestamp: '1',
      value: 2,
    },
  ],
}
describe('<Chart />', () => {
  it('should render without crashing', () => {
    const chart = mount(<Chart {...mockProps} />)
    expect(chart).toBeTruthy()
  })
  it('should render a line chart for this data', () => {
    const chart = mount(<Chart {...mockProps} />)
    expect(chart.find('Line')).toBeTruthy()
  })
  it('should match snapshot', () => {
    const chartSnap = renderer.create(<Chart {...mockProps} />)
    expect(chartSnap.toJSON()).toMatchSnapshot()
  })
})
