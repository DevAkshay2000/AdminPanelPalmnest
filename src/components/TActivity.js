import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import DelIcon from '../components/images/Icons/bin.png'

const TActivity = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [activityTable, setActivityTable] = useState();
    const [status, setStatus] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/activity/getactivity`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setActivityTable(res.data)
            console.log(res.data)
        }).catch((err) => {
            notify(0, "Oops..Something went wrong!")
        })
    }, [status])


    //Delete Activity
    const deleteUser = (id) => {
        const res = window.confirm("Do You Really Want to Delete Activity?")
        if (res) {
            axios.post(`${process.env.REACT_APP_BASEURL}/activity/deleteactivityimage`, { id }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }
            }).then((res) => {
                setStatus(!status)
                notify(1, "Activity Deleted Successfully..!")
            }).catch((err) => {
                notify(0, "Oops...Something went wrong!")
            })
        }
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                    <h3 className='text-center mt-t m-4'>Activities Table</h3>
                    <Link to="/activity">
                        <button className='btn btn-primary btn-md float-end mb-3'>Add New Activity</button>
                    </Link>
                </div>
                <div className="row ">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Activity Name</th>
                                <th scope="col">Activity Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                activityTable?.map((val, id) => {
                                    return (
                                        <tr>
                                            <th scope="row" key={id}>{id + 1}</th>
                                            <td>{val.title}</td>
                                            <td> <img src={val.image.url} alt="" width="100px" /> </td>
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

export default TActivity