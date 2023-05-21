import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Testimonials = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data2 = Object.fromEntries(formdata.entries());
        axios.post(`${process.env.REACT_APP_BASEURL}/testimonials/addtestimonials`, data2, {
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
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

            <div className="container-fluid">
                <div className="row mt-5">
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className="container">
                            <div className="card p-4">
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add Customer Review</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Customer Name</label>
                                    <input type="text" name="author" id="" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">City</label>
                                    <input type="text" name="city" id="" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description </label>
                                    <textarea name='dscription' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default Testimonials