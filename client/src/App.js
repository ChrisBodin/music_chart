import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectRoute';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
    <Container>
      <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>

        </Route>
        <Route path='/*' element={<Nomatch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </>
    </Container>
  </FetchUser>
  </>
)
export default App;
