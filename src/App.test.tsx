// eslint-disable-next-line @typescript-eslint/no-redeclare
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders "My Bag" title', () => {
    render(<App />)
    const title = screen.getByText(/My Bag/i)
    expect(title).toBeInTheDocument()
})
