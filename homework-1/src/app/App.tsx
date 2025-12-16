import React from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import AppRouter from './providers/router/AppRouter';

function App() {
  return (
    <MainLayout>
      <Header />
      <AppRouter />
      <Footer />
    </MainLayout>
  );
}

export default App;