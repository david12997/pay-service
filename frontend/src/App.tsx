import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProviderPage from './pages/provider';
import PayStatePage from './pages/pay.state';


// Utiliza React Lazy para cargar los componentes de forma diferida
const IndexPageLazy = lazy(() => import('./pages/index'));
const Navbar = lazy(() => import('./components/common/nav'));
const NewLinkPage = lazy(() => import('./pages/new.link'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Fallback mientras los componentes se cargan */}
      <Routes>
        <Route path="/" element={<h1> Root</h1>} />
        <Route path="/login" element={<h1> Login </h1>} />

        <Route path="/home" element={<>
          <Navbar />
          <IndexPageLazy />
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

      </Routes>
    </Suspense>
  );
}

export default App;