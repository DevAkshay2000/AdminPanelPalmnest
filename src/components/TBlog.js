import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import DelIcon from '../components/images/Icons/bin.png'
import EditIcon from '../components/images/Icons/edit.png'
const TBlog = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/blog/blogs`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setData(res.data)

        }).catch((err) => {
            notify(0, "Oops..Something went wrong!")
        })
    }, [status])

    //Delete Activity
    const deleteUser = (id) => {
        const res = window.confirm("Do You Really Want to Delete Blog?")
        if (res) {
            axios.delete(`${process.env.REACT_APP_BASEURL}/blog/blogs?id=${id}`, {
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
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

            <div className="container">
                <div className="row">
                    <h3 className='text-center mt-t m-4'>Blogs Table</h3>
                    <Link to="/blogs">
                        <button className='btn btn-primary btn-md float-end mb-3'>Add New Blog</button>
                    </Link>
                </div>
                <div className="row ">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">image</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, idx) => {
                                    return (
                                        <tr>
                                            <th scope="row">{idx + 1}</th>
                                            <td>{val.title}</td>
                                            <td>{val.author}</td>
                                            <td> <img src={val.image.url} alt="" width="100px" /> </td>
                                            <td>
                                                <button className='btn border-none' onClick={() => deleteUser(val._id)}
                                                    to="/blogsEdit" state={{ id: val._id }}>
                                                    <img src={DelIcon} alt="Icon" />
                                                </button>
                                            </td>
                                            <td>
                                                <Link to="/blogsEdit" state={{ id: val._id }}>
                                                    <button className='btn1 border-none' >
                                                        <img src={EditIcon} alt="Icon" />
                                                    </button>

                                                </Link>

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

export default TBlog