import '@shared/lib/i18n';
import './styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { USE_MSW } from '@shared/constants';
import { App } from './App';

const createdRoot = createRoot(document.getElementById('root')!);

const AppComponent = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

if (USE_MSW === 'true') {
  import('@/shared/api/msw')
    .then(({ initWorker }) => initWorker())
    .then(() => {
      createdRoot.render(<AppComponent />);
    })
    .catch(error => {
      console.error('MSW failed to start:', error);
      createdRoot.render(<AppComponent />);
    });
} else {
  createdRoot.render(<AppComponent />);
}
