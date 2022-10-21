import React from "react";
import { Routes ,Route } from 'react-router-dom';

// import User from './pages/User';
import Os from './pages/os/List';

function Rota() {
    return (
        <Routes>
            <Route path='/' element={<Os />} />
        </Routes>
    );
}

export default Rota;