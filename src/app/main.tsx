import '@shared/lib/i18n';
import './styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { USE_MSW } from '@shared/constants';
import { App } from './App';

const createdRoot = createRoot(document.getElementById('root')!);

if (USE_MSW === 'true') {
  import('@/shared/api/msw')
    .then(({ worker }) => worker.start())
    .then(() => {
      createdRoot.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    });
} else {
  createdRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
