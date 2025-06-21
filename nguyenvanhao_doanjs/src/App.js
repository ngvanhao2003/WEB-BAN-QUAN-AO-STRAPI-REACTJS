import logo from './logo.svg';
import './App.css';
import Index from './frontend';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import FrontendRoute from './route/frontend';
import { UserProvider } from './frontend/context/userContext';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import BackendRoute from './route/backend';
import IndexAdmin from './backend';

function App() {
  return (
    <Provider store = {store}>
      <UserProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Index/>}> 
            {
              FrontendRoute.map((route,index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page/>}/>
              })
            }
          </Route>

          <Route path="/admin" element={<IndexAdmin/>}> 
            {
              BackendRoute.map((route,index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page/>}/>
              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
      </Provider>
  );
}

export default App;
