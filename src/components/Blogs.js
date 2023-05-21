import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Blogs = () => {
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
        const payLoad = { ...data2, image: await imageFormator(data2.myfile), }
        axios.post(`${process.env.REACT_APP_BASEURL}/blog/blogs`, payLoad, {
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
        <div className="container-fluid">
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

            <div className="row mt-5">
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className="container">
                        <div className="card p-4">
                            <div className="title_div">
                                <h3 className='text-center mt-4 mb-4'>Add New Blog</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Blog Title</label>
                                <input type="text" name="title" id="" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Author Name</label>
                                <input type="text" name="author" id="" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Blog Description</label>
                                <textarea class="form-control" name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Blog Image</label>
                                <input class="form-control" type="file" id="formFile" name='myfile' />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Blogs