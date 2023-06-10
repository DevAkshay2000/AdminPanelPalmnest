import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import DelIcon from '../components/images/Icons/bin.png'

const TTestimonials = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [homeTable, setHomeTable] = useState();
    const [status, setStatus] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/testimonials/gettestimonials`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setHomeTable(res.data)
            console.log(res.data
            )
        }).catch((err) => {
            notify(0, "Oops..Something went wrong!")
        })
    }, [status])

    //Delete User
    const deleteUser = (id) => {
        const res = window.confirm("Do You Really Want to Delete Image?")
        if (res) {
            axios.post(`${process.env.REACT_APP_BASEURL}/testimonials/deletetestimonials`, { id }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }
            }).then((res) => {
                setStatus(!status)
                notify(1, "Home Image Deleted Successfully..!")
            }).catch((err) => {
                notify(0, "Oops...Something went wrong!")
            })
        }
    }

    return (
        <>
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

            <div className="container">
                <div className="row">
                    <h3 className='text-center mt-t m-4'>Client Reviews Table</h3>
                    <Link to="/testimonials">
                        <button className='btn btn-primary btn-md float-end mb-3'>Add New Testimonial</button>
                    </Link>
                </div>
                <div className="row ">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Author</th>
                                <th scope="col">Description</th>
                                <th scope="col">City</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                homeTable?.map((val, idx) => {
                                    return (
                                        <tr>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{val.author}</td>
                                            <td>{val.description}</td>
                                            <td>{val.city}</td>
                                            <td>
                                                <button className='btn border-none' onClick={() => deleteUser(val._id)}>
                                                    <img src={DelIcon} alt="Icon" />
                                                </button>
                                            </td>
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

export default TTestimonials
