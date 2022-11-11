import React,{useState, useEffect} from 'react';
import AdminHeader from './adminheader';
import axios from 'axios';

const AdminOrder = () =>{
    const[order, updateOrder] = useState([]);
    const getOrders = () =>{
        axios.get("http://localhost:1234/order")
        .then(response=>{
            if(response.data.length>0){
                updateOrder(response.data.reverse());
            }
        })
    }

    useEffect(()=>{
        getOrders();
    },[1]);


    return(
        <>
        <AdminHeader/>
        <div className="container mt-5">
            <div className="row">
                <div className='col-lg-12 mb-4 text-center'>
                    <h3> {order.length} - Order Management </h3>
                </div>
            </div>
            {
                order.map((myorder, index)=>{
                   return(
                        <div className="row mb-5 border-bottom" key={index}>
                            <div className='col-lg-4'>
                                <h6> Customer Details </h6>
                                <p>{myorder.customername}</p>
                                <p>{myorder.mobile}</p>
                                <p>{myorder.email}</p>
                                <p>{myorder.address}</p>
                            </div>
                            <div className='col-lg-8'>
                                <h6 className='text-center'> 
                                    Order Items - {myorder.product.length} 
                                </h6>
                                <table className="table table-bordered mt-3 shadow">
                                    <thead>
                                        <tr className='bg-light text-primary'>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myorder.product.map((pinfo, index2)=>{
                                                return(
                                                    <tr key={index2}>
                                                        <td> {pinfo.name} </td>
                                                        <td> {pinfo.price} </td>
                                                        <td>
                                                <img height={50} width={50} src={pinfo.photo}/>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
        </>
    )
}

export default AdminOrder;