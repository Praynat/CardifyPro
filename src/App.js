
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';
import UserProvider from './users/providers/UserProvider';
import CustomThemeProvider from './providers/CustomThemeProvider';
import SnackbarProvider from './providers/SnackbarProvider';
import { SearchProvider } from './layout/header/topNavBar/right-navigation/Search/Provider/SearchProvider';
import { ScrollProvider } from './layout/Provider/ScrollProvider';
import 'leaflet/dist/leaflet.css';
import { DarkLightThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
   <BrowserRouter>
      <UserProvider>
        <DarkLightThemeProvider>
          <CustomThemeProvider>
            <SnackbarProvider>
              <ScrollProvider>
                <SearchProvider>
                  <Layout>
                    <Router/>
                  </Layout>
               </SearchProvider>
             </ScrollProvider>
            </SnackbarProvider>
          </CustomThemeProvider>
        </DarkLightThemeProvider>
      </UserProvider>
   </BrowserRouter>
  );
}

export default App;
