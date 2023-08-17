import React from 'react';
import ReactDOM from 'react-dom/client'; //renderizar la aplicación en el DOM
import App from './App.jsx'; //entrypoint
import { BrowserRouter } from "react-router-dom"; //manejar el enrutamiento
import { Provider } from "react-redux"; //almacenamiento global a la aplicación
import store from './redux/store.js';
//import store from "./redux/store"; //almacen redux





ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
