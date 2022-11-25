import React from 'react';
import AdminHeader from './adminheader';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProduct = () =>{
     const[allproduct, updateProduct] = useState([]);  

    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            if(response.data.length>0){
                updateProduct(response.data);
            }
        })
    }

    useEffect(()=>{
        getProduct();
    },[1]);

    const[pname, pickName] = useState("");
    const[pprice, pickPrice] = useState("");
    const[pphoto, pickPhoto] = useState("");
    const[pdetails, pickDetails] = useState("");
    const[msg, updatemsg] = useState("");

    const save = () =>{
        var url = "http://localhost:1234/product";
        var pdata = {
            "name":pname,
            "price":pprice,
            "photo":pphoto,
            "details":pdetails
        }
        axios.post(url, pdata)
        .then(response=>{
            updatemsg(pname + " Added Successfully");
            getProduct();
            pickName(""); 
            pickPrice("");  
            pickPhoto("");  
            pickDetails("");
        })
    }

    const deletePro = (pid, name)=>{
        var url = "http://localhost:1234/product/"+pid;
        axios.delete(url)
        .then(response=>{
            updatemsg(name + " Deleted Successfully");
            getProduct(); 
        })
    }

    return(
        <>
        <AdminHeader/>
        <div className="container mt-5">
            <div className="row">
                <div className='col-lg-3 mt-4'>
                    <h4> Add Product </h4>
                    <div className='mb-3'>
                        <label>Product Name</label>
                        <input type="text" className="form-control"
                        onChange={obj=>pickName(obj.target.value)}
                        value={pname}/>
                    </div>
                    <div className='mb-3'>
                        <label>Product Price</label>
                        <input type="text" className="form-control"
                        onChange={obj=>pickPrice(obj.target.value)}
                        value={pprice}/>
                    </div>
                    <div className='mb-3'>
                        <label>Product Photo</label>
                        <input type="text" className="form-control"
                        onChange={obj=>pickPhoto(obj.target.value)}
                        value={pphoto}/>
                    </div>
                    <div className='mb-3'>
                        <label>Product Details</label>
                        <textarea className="form-control" 
                        onChange={obj=>pickDetails(obj.target.value)}
                        value={pdetails}></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'
                        onClick={save}> Save Product </button>
                    </div>
                </div>
                <div className='col-lg-9 mt-4'>
                    <h4 className='text-center'> {allproduct.length} - Available Products </h4>
                    <p className="text-center text-danger"> {msg} </p>
                    <table className="table table-bordered mt-3 shadow text-center">
                        <thead>
                            <tr className='bg-light text-primary'>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((pinfo, index)=>{
                                    return(
                                        <tr key={index}>
                                           <td> {pinfo.id} </td>   
                                           <td> {pinfo.name} </td>
                                           <td> {pinfo.price} </td>
                                           <td> {pinfo.details} </td>
                                            <td> 
                                                <img height={50} width={50} src={pinfo.photo}/>
                                            </td>
                                            <td>
                                                <i 
                                                className="fa fa-trash fa-lg text-danger"
                                                onClick={deletePro.bind(this, pinfo.id, pinfo.name)}>
                                                </i>
                                            </td> 
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminProduct;