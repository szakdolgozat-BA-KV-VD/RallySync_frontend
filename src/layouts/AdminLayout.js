import React from 'react'
import NavigacioAdmin from '../navigations/NavigacioAdmin';
import { Outlet } from 'react-router';
import '../css/szervezonav.css'

function AdminLayout() {
    return (
        <div className="szervezo">
            <NavigacioAdmin />
            <Outlet />
        </div>
    );
}

export default AdminLayout
