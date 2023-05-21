import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../components/images/palmnest_logo.png';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post(`${process.env.REACT_APP_BASEURL}/auth/login`, data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate(0)
        }).catch((err) => {
            setShowError(true)
        })
    }
    console.log(`${process.env.REACT_APP_BASEURL}`);
    return (
        <>
            <div className="page-wrapper" id="main-wrapper">
                <div
                    className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="row justify-content-center w-100">
                            <div className="col-md-8 col-lg-6 col-xxl-3">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <Link to="#" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                            <img src={logo} width="180px" alt="" />
                                        </Link>
                                        <p className="text-center">Admin Login</p>
                                        <form onSubmit={handleSubmit} autoComplete='off'>
                                            <div className="mb-3">
                                                <label for="email" className="form-label">Username</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <div className="mb-4">
                                                <label for="password" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="password" name="password" required />
                                            </div>
                                            <input type="submit" value="Log In" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login