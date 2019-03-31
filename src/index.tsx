import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root'),
);
