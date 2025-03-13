import React from 'react';
import useAuthContext from '../../contexts/AuthContext';

function Kezdolap() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Betöltés...</div>;
  }

  return (
    <div>
      <h1>Kezdőlap</h1>
      <p>Bejelentkezett felhasználó: {user === null ? "Nincs bejelentkezett felhasználó!" : user.name}</p>
      <h1>Test VENDEG</h1>
      {user && <h1>Jogosultság: {user.permission}</h1>}
    </div>
  );
}

export default Kezdolap;