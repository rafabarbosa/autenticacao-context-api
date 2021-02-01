import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Loading from '../components/loading';
import {useAuth} from '../hooks/auth';

const Routes = () => {
  const {token, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return token ? <AppRoutes token={token} /> : <AuthRoutes />;
};

export default Routes;
