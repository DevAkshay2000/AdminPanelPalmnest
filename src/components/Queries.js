import axios from 'axios';
import React, { useState } from 'react'

const Queries = () => {
    const [data, setData] = useState([]);
    axios.get(`${process.env.REACT_APP_BASEURL}/query/userquery`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    }).then((res) => {
        setData(res.data)
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className='text-center mt-5 mb-5'>Queries From Customers</h3>
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
                            {/* {
                                data?.map((val, id) => {
                                    return (
                                        <tr>
                                            <th scope="row">{id+1}</th>
                                            <td key={id}>{val}</td>
                                        </tr>
                                    )
                                })
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Queries