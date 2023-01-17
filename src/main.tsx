import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { router } from '@/main/routes';
import { MantineProvider } from '@mantine/core';

// 👇️ IMPORTANT: div ID has to match with index.html
const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
const root = createRoot(rootElement!);

// 👇️ render your app
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode >
)