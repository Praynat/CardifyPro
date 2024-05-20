
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';
import UserProvider from './users/providers/UserProvider';
import CustomThemeProvider from './providers/CustomThemeProvider';
import SnackbarProvider from './providers/SnackbarProvider';
import { SearchProvider } from './layout/header/topNavBar/right-navigation/Search/Provider/SearchProvider';

function App() {
  return (
   <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <SnackbarProvider>
         <SearchProvider>
            <Layout>
              <Router/>
            </Layout>
         </SearchProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProvider>
   </BrowserRouter>
  );
}

export default App;
