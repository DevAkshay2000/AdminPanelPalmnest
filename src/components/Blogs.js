import React from 'react'

const Blogs = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <form>
                    <div className="container">
                        <div className="card p-4">
                            <div className="title_div">
                                <h3 className='text-center mt-4 mb-4'>Add New Blog</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Blog Title</label>
                                <input type="text" name="" id="" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Blog Name</label>
                                <input type="text" name="" id="" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Blog Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Blog Image</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Blogs