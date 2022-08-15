// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import Counter from '../../components/counter'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', async () => {
  render(<Counter />)
  const [decrement, increment] = screen.getAllByRole('button', {})
  await userEvent.click(increment)
  const display = await screen.getByRole('display', {})
  expect(display.textContent).toBe('Current count: 1')
  await userEvent.click(decrement)
  await userEvent.click(decrement)
  await userEvent.click(decrement)
  expect(display.textContent).toBe('Current count: -2')
})

/* eslint no-unused-vars:0 */
