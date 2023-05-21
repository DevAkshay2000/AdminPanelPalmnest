import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import DelIcon from '../components/images/Icons/bin.png'

const TGallery = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [galleryData, setGalleryData] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/gallery/getgallery`).then((res) => {
            setGalleryData(res.data)
        }).catch((err) => {
            notify(0, "Oops...Something went wrong..!")
        })
    }, [status])

    //Delete Gallery
    const deleteUser = (id) => {
        const res = window.confirm("Do You Really Want to Delete Image?")
        if (res) {
            axios.post(`${process.env.REACT_APP_BASEURL}/gallery/deletegalleryimage`, { id }, {
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
                    <h3 className='text-center mt-t m-4'>Gallery Images Table</h3>
                    <Link to="/gallery">
                        <button className='btn btn-primary btn-md float-end mb-3'>Add New Image</button>
                    </Link>
                </div>
                <div className="row ">
                    <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                galleryData?.map((val, id) => {
                                    return (
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{val.eventName}</td>
                                            <td><img src={val.image.url} alt="" width="100px" /></td>
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

export default TGallery