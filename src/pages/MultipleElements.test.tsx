import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import MultipleElements from './MultipleElements';

describe('MultipleElements Page', () => {
  it('should find the page title', () => {
    render(
      <MemoryRouter>
        <MultipleElements />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /MultipleElements/i })
    ).toBeInTheDocument();
  });
  it('should have a list with className "animals" which contain 5 animals', () => {
    render(
      <MemoryRouter>
        <MultipleElements />
      </MemoryRouter>
    );
    const listElement = screen.getByRole('animals-list');
    const listItems = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
  });
});
