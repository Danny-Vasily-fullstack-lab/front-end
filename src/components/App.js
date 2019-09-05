import React from 'react';
import AddContactContainer from '../containers/AddContactContainer';
import { useAuth0 } from '../AuthProvider';

export default function App() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  return (
    <>
      {!isAuthenticated && <button onClick={login}>LOGIN</button>}
      {isAuthenticated && <button onClick={logout}>LOGOUT</button>}
    <h1>PHONEBOOK</h1>
      <AddContactContainer />
    </>
  );
}
