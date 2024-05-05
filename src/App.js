
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';
import UserProvider from './users/providers/UserProvider';
import CustomThemeProvider from './providers/CustomThemeProvider';

function App() {
  return (
   <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <Layout>
            <Router/>
          </Layout>
        </CustomThemeProvider>
      </UserProvider>
   </BrowserRouter>
  );
}

export default App;
