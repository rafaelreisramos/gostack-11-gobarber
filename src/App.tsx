import React from 'react';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
