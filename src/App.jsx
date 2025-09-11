import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from '@/components/ui/provider'
import Dashboard from './screens/dashboard/index.jsx'
import Login from './screens/login/index.jsx';

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
