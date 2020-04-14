import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';
import './index.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Routes/>, document.getElementById('root'));

registerServiceWorker();