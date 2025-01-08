import React from 'react';
import ROUTES from './routesModel';
import CardsPage from '../Cards/Pages/CardsPage';
import AboutPage from '../Pages/AboutPage';
import ErrorPage from '../Pages/ErrorPage';
import CardsPageDetails from '../Cards/Pages/CardsPageDetails';
import SignUpPage from '../users/pages/SignUpPage';
import LoginPage from '../users/pages/LoginPage';
import AddCardPage from '../Cards/Pages/AddCardPage';
import EditCardPage from '../Cards/Pages/EditCardPage';
import MyCardsPage from '../Cards/Pages/MyCardsPage';
import FavoritesPage from '../Cards/Pages/FavoritesPage';
import ContactPage from '../contact/Pages/ContactPage';
import SearchPage from '../layout/header/topNavBar/right-navigation/Search/SearchPage';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../users/pages/ProfilePage';
import EditProfilePage from '../users/pages/EditProfilePage';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/CardifyPro" element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CARDS} element={<CardsPage />} />
        <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
        <Route path={ROUTES.FAV_CARDS} element={<FavoritesPage />} />
        <Route path={ROUTES.SEARCH_CARDS} element={<SearchPage />} />
        <Route path={ROUTES.USER_PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.EDIT_USER} element={<EditProfilePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
        <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
        <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardsPageDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}
