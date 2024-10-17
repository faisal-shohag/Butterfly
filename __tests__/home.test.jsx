import { render } from '@testing-library/react'
import Home from '../src/app/page'
 
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})