import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Gallery = () => {
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

        const payLoad = { ...data2, myfile: await imageFormator(data2.myfile), }

        axios.post(`${process.env.REACT_APP_BASEURL}/gallery/addgalleryimage`, payLoad, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            notify(1, "Gallery Added Successfully..!");
        }).catch((err) => {
            notify(0, "Oops...Something went wrong..!")
        })

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                        <div className="container">
                            <div className="card p-4">
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add Gallery Images</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="eventName" className="form-label">Event Name</label>
                                    <input type="text" name="eventName" id="eventName" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="myfile" class="form-label">Image</label>
                                    <input class="form-control" type="file" id="myfile" name="myfile" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Gallery