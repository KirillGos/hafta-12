import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './MemoOrnek';
import UMemo from './UMemo';
import Kullanicilar from './Kullanicilar';
import Yazilar from './Yazilar';
import Yorumlar from './Yorumlar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Kullanicilar />
        <Yazilar />
        <Yorumlar />
    </>
);
