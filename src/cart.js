import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Cart  = () =>{
    const[productlist, updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/cart")
        .then(response=>{
            if(response.data.length > 0){
                updateProduct(response.data);
            }
        })
    }

    const deleteFromCart = (id) =>{
        var url = "http://localhost:1234/cart/"+id;
        axios.delete(url)
        .then(response=>{
            getProduct();// to reload the cart list after delete
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1]);

    const[fullname, pickName] = useState("");
    const[mobileno, pickMobile] = useState("");
    const[email, pickEmail] = useState("");
    const[address, pickAddress] = useState("");

    const saveOrder = () =>{
        var url = "http://localhost:1234/order";
        var orderData = {
            "customername":fullname, 
            "mobile":mobileno,
            "email":email,
            "address":address,
            "product":productlist
        };
        axios.post(url, orderData)
        .then(response=>{
            alert("Your Order Placed Successfully");
        })
    }
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="p-3 shadow rounded">
                        <h4> Customer Details </h4>
                        <div className='mb-3'>
                            <label>Customer Name</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label>Customer Mobile No</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickMobile(obj.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label>Customer e-Mail Id</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label>Customer Address</label>
                            <textarea className='form-control'
                            onChange={obj=>pickAddress(obj.target.value)}></textarea>
                        </div>
                        <button className="btn btn-primary" onClick={saveOrder}>
                            Place My Order
                        </button>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h4 className='text-center'> {productlist.length} : Item In Cart </h4>
                    <table className="table table-bordered shadow mt-3">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productlist.map((product, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> 1 </td>
                                            <td>
                                                <i 
                                                    className='fa fa-trash fa-2x text-danger'
                                                    onClick={deleteFromCart.bind(this, product.id)}>
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
    )
}

export default Cart;