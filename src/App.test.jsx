import { it, describe, expect } from 'vitest'
import { render, screen, logRoles } from '@testing-library/react'
import App from './App'

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}
describe('first', () => {
  it('demo test', () => {
    expect(1 + 1).toEqual(2)
  })

  it('sum', () => {
    expect(sum(1, 2, 3)).toEqual(6)
  })

  it('sum large array', () => {
    expect(sum(...Array.from({ length: 1000 }, () => 1))).toEqual(1000)
  })
})

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />)

    screen.debug()

    // check if App components renders headline
    expect(screen.getByText('React')).toBeTruthy()
  })

  it('renders button', () => {
    const { container } = render(<App />)
    logRoles(container)
    // check if App components renders button
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
