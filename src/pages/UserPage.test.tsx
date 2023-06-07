import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import UserPage from './UserPage';

const testResponseData = { name: 'Jack', email: 'jack@test.com' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      }
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('User Page', () => {
  it('should fint the page title', () => {
    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    const title = screen.getByRole('heading', { name: /User Page/i });
    expect(title).toBeInTheDocument();
  });

  it('should show loading text is shown while API request is in progress', async () => {
    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it("should render user's name", async () => {
    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );

    const userName = await screen.findByText(/Jack/);
    expect(userName).toBeInTheDocument();
  });

  it('should show an error message', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValueOnce({ message: 'API is down' });

    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );
    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});
