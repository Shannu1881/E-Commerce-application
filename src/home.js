import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home  = () =>{
    const[productlist, updateProduct] = useState([]);
    const[msg, updateMsg] = useState("");
    const[search, setSearch] =  useState("");
   
    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            if(response.data.length > 0){
                updateProduct(response.data);
            }
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1]);

    
    const addtoCart = (productinfo) =>{
        var url = "http://localhost:1234/cart";
        axios.post(url, productinfo)
        .then(response=>{
            updateMsg(productinfo.name + " Added in Your Cart");
        })
    }

    const onChange = (e) =>{
        setSearch(e.target.value)
    }

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12 mt-5 mb-5'>
                    <h1 className='text-center text-primary'>Home Shopping </h1>
                    <p className='text-danger text-center'> {msg} </p>
                    <label> <strong style={{fontSize:"18px"}}>Search here </strong></label> &nbsp;
                    <input className='p-1 shadow' type='text' onChange={onChange} value={search} placeholder='searching.....'
                      style={{width:"25%", borderRadius:"10px"}}
                    />
                </div>
                <div className=''></div>
                {
                    productlist.filter(product => product.name.toLowerCase().includes(search)).map((product, index)=>{
                        return(
                            <div className="col-lg-3 mb-5" key={index}>
                                <div className='p-3 shadow'>
                                    <h5> {product.name} </h5>
                                    <img src={product.photo} height="140" width="100%"/>
                                    <p>{product.details}</p>
                                    <p>Rs. {product.price} </p>
                                    <p className='text-center'>
                                        <button 
                                            className='btn btn-danger btn-sm'
                                            onClick={addtoCart.bind(this, product)}>
                                            <i className='fa fa-shopping-cart'></i> Add to Cart
                                        </button>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;