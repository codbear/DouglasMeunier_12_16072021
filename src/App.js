import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import ProfileScreen from './screens/Profile/ProfileScreen';

function App() {
  return (
    <Router>
      <ProfileScreen />
    </Router>
  );
}

export default App;
