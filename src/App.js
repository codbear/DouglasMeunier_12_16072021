import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { Profile } from './screens';

function App() {
  return (
    <Router>
      <Profile />
    </Router>
  );
}

export default App;
