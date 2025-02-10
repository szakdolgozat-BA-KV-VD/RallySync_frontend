import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from '../contexts/AuthContext';

function NavigacioSzervezo() {
    const { logout } = useAuthContext();
    return (
        <nav className="szervnav navbar navbar-expand-sm">
        <div className="container-fluid">
            <ul className="navbar-nav d-flex w-100 justify-content-between">
                <li className="ni navbar-item ms-2">
                    <Link className="nav-link" to="./leszervezett">
                    Versenyeim
                    </Link>
                </li>
                <li className="ni navbar-item">
                    <Link className="nav-link" to="./letrehoz">
                        Létrehozás
                    </Link>
                </li>
                <li className="ni navbar-item">
                    <Link className="nav-link" to="./profil">
                    ...
                    </Link>
                </li>
                <li className="ni navbar-item">
                    <Link className="nav-link" to="/">
                    Ez meg még valami lesz:)
                    </Link>
                </li>                    
                <li className="navbar-item ms-2">
                        <button
                            className="btn btn-outline-primary w-100"
                            onClick={() => {
                                logout();
                            }}
                        >
                            Kijelentkezés
                        </button>
                    </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavigacioSzervezo
