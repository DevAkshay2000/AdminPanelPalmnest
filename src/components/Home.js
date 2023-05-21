import React, { useState } from 'react'
import '../components/Home.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Home = () => {
    const [homeData, setHomeData] = useState([]);
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
        axios.post(`${process.env.REACT_APP_BASEURL}/home/addhomecarousel`, payLoad, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        }).then((res) => {
            setHomeData(res.data)
            notify(1, "Image Added Successfully..!");
        }).catch((err) => {
            notify(0, "Oops...Something went wrong..!")
        })

    }

    return (
        <>
            <div className="container-fluid">
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <div className="row mt-5">
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className="container">
                            <div className="card p-4">
                                {/* <div className="row w-25 mt-2"> */}

                                {/* </div> */}
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add Carousel Image</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="title" className="form-label">Image Title</label>
                                    <input type="text" name="title" id="title" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">Image</label>
                                    <input class="form-control" type="file" id="image" name="image" />
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

export default Home