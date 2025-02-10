import React from 'react'
import useAuthContext from '../../contexts/AuthContext';

function Versenyek() {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>VERSENYEK</h1>
    </div>
  )
}

export default Versenyek
