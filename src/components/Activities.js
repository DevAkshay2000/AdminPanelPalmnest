import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Activities = () => {
    const [activityData, setActivityData] = useState([]);
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

    //Converting Image into String using image formator
    const imageFormator = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                resolve(reader.result)
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data2 = Object.fromEntries(formdata.entries());

        const payLoad = { ...data2, image: await imageFormator(data2.image), }
        axios.post(`${process.env.REACT_APP_BASEURL}/activity/activities`, payLoad, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setActivityData(res.data)
            notify(1, "Activity Added Successfully..!");
        }).catch((err) => {
            notify(0, "Oops...Something went wrong..!")
        })

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                    <form onSubmit={handleSubmit} autocomplet='off'>
                        <div className="container">
                            <div className="card p-4">
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add New Activity</h3>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Activity Name</label>
                                    <input type="text" name="title" id="title" className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Activity Image</label>
                                    <input className="form-control" type="file" id="image" name="image" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Activities