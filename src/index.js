import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './MemoOrnek';
import UMemo from './UMemo';
import Kullanicilar from './Kullanicilar';
import Yazilar from './Yazilar';
import Yorumlar from './Yorumlar';
import Sayac from './Sayac';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Sayac />
    </>
);
