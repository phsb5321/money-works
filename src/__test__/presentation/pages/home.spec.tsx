import { HomePage } from '@/presentation/pages';
import { useStyles } from '@/presentation/pages/signUp/style';

import { render } from '@testing-library/react';
import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest';

import { AddAccountMock, GetAuthTokenMock, ListTransactionsMock } from '@/__test__/presentation/mocks';

import { MantineProvider } from '@mantine/core';

import { JSDOM } from 'jsdom';
import { MemoryRouter } from 'react-router';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window as unknown as Window & typeof globalThis;

describe('HomePage', () => {
  let sut: ReturnType<typeof render>;

  beforeEach(() => {
    renderHook(() => useStyles());

    sut = render(
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MemoryRouter>
          <HomePage
            listTransactions={new ListTransactionsMock}
          />
        </MemoryRouter>
      </MantineProvider>);
  });

  afterEach(() => {
    cleanup();
    sut.unmount();
  });

  it('should render the page', () => {
    expect(sut).toBeDefined();
  })

})