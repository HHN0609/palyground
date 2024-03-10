import { createBrowserRouter } from 'react-router-dom'
import ArrayBufferTest from './pages/ArrayBuffer';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/ArrayBufferTest',
        element: <ArrayBufferTest></ArrayBufferTest>
    }
]);
