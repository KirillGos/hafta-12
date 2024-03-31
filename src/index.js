import React, { memo, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemoOrnek from './MemoOrnek';
import UMemo from './UMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UMemo />); 