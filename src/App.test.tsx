import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

describe('Wordle App', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse('apple\ngrape\norange');
  });

  test('renders the game title', async () => {
    await act(async () => {
      render(<App />);
    });
    const titleElement = screen.getByText(/Wordle/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the keyboard', async () => {
    await act(async () => {
      render(<App />);
    });
    const enterKey = screen.getByText('ENTER');
    const deleteKey = screen.getByText('DELETE');
    expect(enterKey).toBeInTheDocument();
    expect(deleteKey).toBeInTheDocument();
  });

  test('renders the initial empty board', async () => {
    let container: HTMLElement;
    await act(async () => {
      const rendered = render(<App />);
      container = rendered.container;
    });
    const letters = container!.querySelectorAll('.letter');
    expect(letters.length).toBe(30);
  });
});
