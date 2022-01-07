import React from 'react';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserProvider } from './context/user';

import { CookiesProvider } from 'react-cookie';
import { CartProvider } from './context/cart-context';
import { AuthProvider } from './context/auth-context';
import { ProgressBar } from './components/progress-bar';


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserProvider>
        <AuthProvider >
          <CartProvider>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <ProgressBar />
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </UserProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
