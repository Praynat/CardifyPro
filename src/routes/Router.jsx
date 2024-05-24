import React from 'react';
import ROUTES from './routesModel';
import {Routes,Route} from "react-router-dom"
import CardsPage from '../Cards/Pages/CardsPage';
import AboutPage from '../Pages/AboutPage';
import ErrorPage from '../Pages/ErrorPage';
import CardsPageDetails from '../Cards/Pages/CardsPageDetails';
import SandboxPage from '../Sandbox/Pages/SandboxPage';
import Counter from '../Sandbox/Components/Counter';
import LifeCycle from '../Sandbox/Components/LifeCycle';
import Countries from '../Sandbox/Components/Countries';
import FormExample from '../Sandbox/Components/FormExample';
import WindowResize from '../Sandbox/Components/WindowResize';
import SignUpPage from '../users/pages/SignUpPage';
import LoginPage from '../users/pages/LoginPage';
import ParentComponent from '../Sandbox/optimization/ParentComponent';
import ParentComponentPage from '../Sandbox/context/ParentComponentPage';
import AddCardPage from '../Cards/Pages/AddCardPage';
import EditCardPage from '../Cards/Pages/EditCardPage';
import MyCardsPage from '../Cards/Pages/MyCardsPage';
import FavoritesPage from '../Cards/Pages/FavoritesPage';
import ContactPage from '../contact/Pages/ContactPage';
import SearchPage from '../layout/header/topNavBar/right-navigation/Search/SearchPage';
import HomePage from '../Pages/HomePage';

export default function Router() {
  return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<HomePage/>}/>
        <Route path={ROUTES.HOME} element={<HomePage/>}/>
        <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
        <Route path={ROUTES.MY_CARDS} element={<MyCardsPage/>}/>
        <Route path={ROUTES.FAV_CARDS} element={<FavoritesPage/>}/>
        <Route path={ROUTES.SEARCH_CARDS} element={<SearchPage/>}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
        <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
        <Route path={ROUTES.SIGNUP} element={<SignUpPage/>}/>   
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>    
        <Route path={ROUTES.CREATE_CARD} element={<AddCardPage/>}/>
        <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
        <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardsPageDetails/>}/>
        <Route path={ROUTES.SANDBOX} element={<SandboxPage/>}>
          <Route index element={<WindowResize />} />
          <Route path="counter" element={<Counter/>}/>          
          <Route path="lifeCycle" element={<LifeCycle/>}/>
          <Route path="Countries" element={<Countries/>}/>
          <Route path="form" element={<FormExample/>}/>
          <Route path="WindowSize" element={<WindowResize/>}/>
          <Route path="Optimization" element={<ParentComponent/>}/>
          <Route path="context" element={<ParentComponentPage/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}
