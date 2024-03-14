import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from '../user/admin/container/Products/Products'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="products/*" element={<Products />} />
        </Routes>
    )
}

export default AdminRoutes
