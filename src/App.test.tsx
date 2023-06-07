import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(/Our First Test/);
  });

  it('should increment to one when click buttom', async () => {
    render(<App />);

    const countButton = screen.getByRole('button', { name: /count is/i });
    // const countDisplay = screen.getByText(/count is/i);

    // Initial count should be 0
    expect(countButton.textContent).toMatch('count is 0');

    // Click the button
    await userEvent.click(countButton);

    // Count should be incremented to 1
    expect(countButton.textContent).toMatch('count is 1');

    // Click the button
    await userEvent.click(countButton);

    // Count should be incremented to 2
    expect(countButton.textContent).toMatch('count is 2');
  });
});
