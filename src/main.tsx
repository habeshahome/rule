import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { RouterProvider } from 'react-router-dom'
import { routes } from './route/routes.tsx'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='16420122783-7k96vd2bbvr0ufc3g1oquj13vl1m2e6r.apps.googleusercontent.com'>
    <React.StrictMode>
      <Theme accentColor='red'>
        <RouterProvider router={routes} />
      </Theme>
    </React.StrictMode>
  </GoogleOAuthProvider>)


