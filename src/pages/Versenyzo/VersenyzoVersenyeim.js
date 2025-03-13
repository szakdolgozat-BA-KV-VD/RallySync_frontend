import React from 'react'
import useAuthContext from '../../contexts/AuthContext';

function VersenyzoVersenyeim() {
    const { user } = useAuthContext(); 
  return (
    <div>
      <h1>Versenyeim {user.permission}</h1>
    </div>
  )
}

export default VersenyzoVersenyeim;