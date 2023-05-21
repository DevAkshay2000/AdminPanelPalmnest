import React from 'react'
import { Link } from 'react-router-dom'

const TActivity = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className='text-center mt-t m-4'>Activities Table</h3>
                    <Link to="/activity">
                        <button className='btn btn-primary btn-md float-end mb-3'>Add New Activity</button>
                    </Link>
                </div>
                <div className="row ">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TActivity