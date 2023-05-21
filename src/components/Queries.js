import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Queries = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/query/userquery`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setData(res.data)
        }).catch((err) => {
            notify(0, "Oops..Something went wrong!")
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                    <h3 className='text-center mt-5 mb-5'>Queries From Customers</h3>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((val, id) => {
                                    return (
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{val.name}</td>
                                            <td>{val.mobile}</td>
                                            <td>{val.email}</td>
                                            <td>{val.message}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Queries