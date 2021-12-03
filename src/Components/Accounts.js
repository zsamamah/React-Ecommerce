import React, { Component } from 'react';
import '../accounts.css'
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Register';

export class Accounts extends Component {
    render() {
        return (
            <div id="accounts-form-container">
                <div>
                    <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                    </Routes>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Accounts
