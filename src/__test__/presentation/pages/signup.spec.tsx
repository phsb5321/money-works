import { SignUpPage } from '@/presentation/pages';
import { useStyles } from '@/presentation/pages/signUp/style';

import { render } from '@testing-library/react';
import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest';

import { AddAccountMock, GetAuthTokenMock } from '@/__test__/presentation/mocks';

import { MantineProvider } from '@mantine/core';

import { JSDOM } from 'jsdom';
import { MemoryRouter } from 'react-router';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window as unknown as Window & typeof globalThis;

describe('SignUpPage', () => {
  let sut: ReturnType<typeof render>;

  beforeEach(() => {
    renderHook(() => useStyles());

    sut = render(
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MemoryRouter>
          <SignUpPage
            addAccount={new AddAccountMock()}
            getAuthToken={new GetAuthTokenMock()}
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

  it('should render the title', () => {
    const { getByTestId } = sut;
    const title = getByTestId('signup-title');
    expect(title).toBeDefined();
  })

  it('should render the form', () => {
    const { getByTestId } = sut;
    const form = getByTestId('signup-form');
    expect(form).toBeDefined();
  })

  it('should render the email input', () => {
    const { getByTestId } = sut;
    const emailInput = getByTestId('signup-email-input');
    expect(emailInput).toBeDefined();
  })

})