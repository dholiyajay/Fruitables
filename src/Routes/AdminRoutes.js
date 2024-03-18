import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from '../user/admin/container/Products/Products'
import PrivateRoutes from './PrivateRoutes'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route exact path="/*" element={<PrivateRoutes />}>
                <Route path="products/*" element={<Products />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes
