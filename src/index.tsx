import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import 'antd/dist/antd.less';
import './assets/styles/main.less';

ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>, 
  document.querySelector('#root')
);

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
