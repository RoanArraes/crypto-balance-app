import './App.css';
import Theme from './utils/Theme';
import { ROUTES } from './utils/constants/routes';
import { 
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';

import {
  WalletPortfolios,
  WalletBalance
} from "./pages";


function App() {
  return (
    <Theme>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME.url} element={<WalletPortfolios />} />
            <Route path={ROUTES.BALANCE.url} element={<WalletBalance />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Theme>
  );
}

export default App;
