import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const EBlog = () => {
    const navigate = useNavigate();
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [prevImg, setPrevImg] = useState('')
    const [prev, setPrev] = useState([])
    const location = useLocation();
    
    const imageFormator = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                resolve(reader.result)
            }
        })
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASEURL}/blog/blogbyid?id=${location.state.id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": localStorage.getItem('token')
            },
        }).then((res) => {
            console.log(res.data)
            setPrevImg(res.data.image)
            setPrev(res.data)
        }).catch((err) => {

            notify(0, "Internal server error..")

        });
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        let newImg
        data.image.name === "" ? (newImg = prevImg) : (newImg = await imageFormator(data.image))
        const payLoad = { ...data, image: newImg, id: location.state.id }

        axios.post(``, payLoad, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            notify(1, "Success Story Updated..!")
            setTimeout(() => {
                navigate('/successstories')
            }, 2000)
        }).catch((err) => {
            notify(0, "Oops..Something went wrong..!")
        })

    }

    return (
        <>
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

            <div className="container-fluid">
                <div className="row mt-5">
                    <form>
                        <div className="container">
                            <div className="card p-4">
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Update Blog Details</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Update Blog Title</label>
                                    <input type="text" name="" id="" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Update Blog Name</label>
                                    <input type="text" name="" id="" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Update Blog Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Update Blog Image</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <button type="button" class="btn btn-primary">Update  </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EBlog