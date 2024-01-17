import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProviderPage from './pages/provider';
import PayStatePage from './pages/pay.state';
import PayLinkPage from './pages/paylink';
import LoginPage from './pages/login.page';
import SignUpPage from './pages/sign.up';
import HomePage from './pages/home';


// Utiliza React Lazy para cargar los componentes de forma diferida
const IndexPageLazy = lazy(() => import('./pages/index'));
const Navbar = lazy(() => import('./components/common/nav'));
const NewLinkPage = lazy(() => import('./pages/new.link'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Fallback mientras los componentes se cargan */}
      <Routes>
        <Route path="/" element={<>
          <IndexPageLazy />
        </>} />

        <Route path="/ingresar" element={<>
            <LoginPage />
        </>
        } />

        <Route path="/registrarse" element={<>
            <SignUpPage />
        </>
        } />

        <Route path="/home" element={<>
          <HomePage/>
        </>}/>

        <Route path="/home/new-link" element={<>
        
          <Navbar />
          <NewLinkPage/>
        </>} />

        <Route path="/:provider/pay" element={<>
          <Navbar />
          <h1>Pay</h1>
          <ProviderPage/>
        </>} />

        <Route path="/:provider/pay/success" element={<>
          <PayStatePage state='success' />
        </>} />

        <Route path="/:provider/pay/pending" element={<>
          <PayStatePage state='pending' />
       </>} />

       <Route path="/:provider/pay/failed" element={<>
        <PayStatePage state='failed' />
       </>} />
        
        <Route path='links/:user/:paylink' element={<>
          <PayLinkPage />
        </>} />

        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </Suspense>
  );
}

export default App;