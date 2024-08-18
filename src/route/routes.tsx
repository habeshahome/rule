import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Form } from '../Forms/Form'


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/form',
        element: <Form />
    },
    {
        path: '*',
        element: <> Page not found </>
    }
])