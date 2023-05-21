import React from 'react'

const Gallery = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <form>
                        <div className="container">
                            <div className="card p-4">
                                <div className="title_div">
                                    <h3 className='text-center mt-4 mb-4'>Add Gallery Images</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Event Name</label>
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

export default Gallery