import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Threshold from '.'

describe('<Threshold />', () => {
  it('should render without crashing', () => {
    // Props and mount are scoped to keep jest.fn() accurate
    const mockProps = {
      setThreshold: jest.fn(),
      threshold: 15,
    }
    const threshold = mount(<Threshold {...mockProps} />)

    expect(threshold).toBeTruthy()
  })

  it('should handle user input on submit', () => {
    const mockProps = {
      setThreshold: jest.fn(),
      threshold: 15,
    }
    const threshold = mount(<Threshold {...mockProps} />)
    const userInput = threshold.find('#threshold-input')
    const thresholdForm = threshold.find('#threshold-form')
    userInput.simulate('change', { target: { value: 25 } })
    thresholdForm.simulate('submit')
    expect(mockProps.setThreshold).toHaveBeenCalledTimes(1)
    expect(mockProps.setThreshold).toHaveBeenCalledWith(25)
  })

  it('should submit user input button click', () => {
    const mockProps = {
      setThreshold: jest.fn(),
      threshold: 15,
    }
    const threshold = mount(<Threshold {...mockProps} />)
    const userInput = threshold.find('#threshold-input')
    const thresholdButton = threshold.find('#threshold-submit')
    userInput.simulate('change', { target: { value: 40 } })
    thresholdButton.simulate('click')
    expect(mockProps.setThreshold).toHaveBeenCalledTimes(1)
    expect(mockProps.setThreshold).toHaveBeenCalledWith(40)
  })
  it('should match snapshot', () => {
    const mockProps = {
      setThreshold: jest.fn(),
      threshold: 15,
    }
    const thresholdSnap = renderer.create(<Threshold {...mockProps} />)
    expect(thresholdSnap.toJSON()).toMatchSnapshot()
  })
})
