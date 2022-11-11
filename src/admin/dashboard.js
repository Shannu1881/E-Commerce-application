import React from 'react';
import AdminHeader from './adminheader';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Dashboard = () =>{
        const[allproduct, updateProduct] = useState([]);
        const[allorders, updateOrder] = useState([]);
        
        const getProduct = () =>{
            axios.get("http://localhost:1234/product")
            .then(response=>{
                if(response.data.length>0){
                    updateProduct(response.data);
                }
            })
        }

        const getOrders = () =>{
            axios.get("http://localhost:1234/order")
            .then(response=>{
                if(response.data.length>0){
                    updateOrder(response.data);
                }
            })
        }

        useEffect(()=>{
            getProduct();
            getOrders();
        },[1])

    return(
        <>
            <AdminHeader/>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h3> Dashboard </h3>
                    </div>
                </div>
                <div className='row mt-4 text-center'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4'>
                        <div className='p-4 rounded shadow text-primary'>
                            <i className="fa fa-suitcase fa-2x"></i>
                            <h5> Total Products <br/> {allproduct.length} </h5>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='p-4 rounded shadow text-primary'>
                            <i className="fa fa-phone fa-2x"></i>
                            <h5> Total Orders <br/> {allorders.length} </h5>
                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;