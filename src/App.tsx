import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-virtualized/styles.css';
import { LocaleEditor } from './components/locale-editor';
import { Toastr } from './components/toastr';

const App = () => (
    <>
        <Toastr />
        <LocaleEditor />
    </>
);

export default App;
