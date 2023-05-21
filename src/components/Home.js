import React from 'react'
import '../components/Home.css';
const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <form>
                        <div className="container">
                            <div className="card p-4">
                                {/* <div className="row w-25 mt-2"> */}

                                {/* </div> */}
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add Carousel Image</h3>
                                    {/* <button className="btn-primary btn-sm float-end mt-2 mb-3">Add New</button> */}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Image Title</label>
                                    <input type="text" name="" id="" className='form-control' />
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Image</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home