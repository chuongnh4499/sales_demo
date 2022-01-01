import React from 'react';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserProvider } from './context/user';

import { CookiesProvider } from 'react-cookie';


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </BrowserRouter>
      </UserProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
