import React from 'react'
import useAuthContext from '../../contexts/AuthContext';


export default function VersenyzoKezdolap() {
     const { user } = useAuthContext(); 

    return (
        <div>
            <h1>Kezdőlap 1</h1>
            <p>Bejelentkezett felhasználó: { user===null?"Nincs bejelentkezett felhasználó!":user.name }</p>
            <h1>Test</h1>
            <h1>{user.permission}</h1>
        </div>
        
    );
}