import React, { memo, FC } from 'react';
import { ToastContainer } from 'react-toastify';

export const Toastr: FC = memo(() => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
});
