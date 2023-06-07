import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import renderWithRouter from '../__tests__/renderWithRouter';
import App from './App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Our First Test/i)).toBeInTheDocument();
    expect(screen.getByRole('heading').textContent).toMatch(/Our First Test/);
  });

  it('should increment to one when click button', async () => {
    const { user } = renderWithRouter(<App />, { route: '/home' });

    const countButton = screen.getByRole('button', { name: /count is/i });
    // const countDisplay = screen.getByText(/count is/i);

    // Initial count should be 0
    expect(countButton.textContent).toMatch('count is 0');

    // Click the button
    await user.click(countButton);

    // Count should be incremented to 1
    expect(countButton.textContent).toMatch('count is 1');

    // Click the button
    await user.click(countButton);

    // Count should be incremented to 2
    expect(countButton.textContent).toMatch('count is 2');
  });

  it('should navigate to the /multiple-elements', async () => {
    const { user } = renderWithRouter(<App />, { route: '/home' });
    const multipleElementsLink = screen.getByRole('link', { name: /Multiple Elements/i });
    const spyAnchorTag = vi.spyOn(user, 'click');

    expect(multipleElementsLink).toBeInTheDocument();

    await user.click(multipleElementsLink);
    expect(spyAnchorTag).toHaveBeenCalledTimes(1);
  });
});
