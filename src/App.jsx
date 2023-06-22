import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Shop from './components/Shop/shop';
import Cart from './components/Cart/cart';

import './styles/app.scss'
import CardAbout from './components/CardAbout/CardAbout';
import Contacts from './components/Contacts/contacts';
import AdminPage from './components/adminPage/AuthPage';
import LayoutAuth from './components/layout/LayoutAuth';
import RegPage from './components/regPage/RegPage';
import { LayoutAuthRoutes, LayoutPublicRoutes, authRotes, publicRoutes } from './routes/routes';

const isAuth = true

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {isAuth &&
              authRotes.map(({ path, Component }) =>
                <Route key={path} path={path} Component={Component}></Route>
              )
            }
            {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} Component={Component}></Route>
            )
            }
          </Route>
        </Routes>
        {/* <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Shop />}></Route>
            <Route exact path='/shop' element={<Shop />}></Route>
            <Route path="/shop/:id" element={<CardAbout />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/contacts' element={<Contacts />}></Route>
          </Route>
        </Routes>
        <Routes>
          <Route path='/' element={<LayoutAuth />}>
            <Route exact path='/register' element={<RegPage />}></Route>
            <Route exact path='/login' element={<AdminPage />}></Route>
          </Route>
        </Routes> */}
      </HashRouter>
    </div>
  );
}

export default App;
