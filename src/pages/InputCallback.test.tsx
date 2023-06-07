import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import renderWithRouter from '../../__tests__/renderWithRouter';
import Input from '../components/Input';
import InputCallbackPage from './InputCallback';

describe('Callback test', () => {
  it('should input value updated correctly', async () => {
    const { user } = renderWithRouter(<InputCallbackPage />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await user.type(input, 'React Testing with vite');

    expect(input.value).toBe('React Testing with vite');
  });

  it('should call the callback every time input value is changed', async () => {
    const handleChange = vi.fn();
    const { user } = renderWithRouter(
      <Input handleChange={handleChange} inputValue="" />
    );
    const input: HTMLInputElement = screen.getByRole('textbox');
    await user.type(input, 'React');

    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
