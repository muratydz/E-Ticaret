import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice';

function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { title, price, description, caregory, image } = selectedProduct

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })

    }

    return (
        <div style={{display:"flex", alignContent:"center", justifyContent:"center", flexDirection:"column"}}>
            <div className='flex-row'>
                <div style={{ alignItems: "center", justifyContent: "center"}}>
                    <img className='selectedImg' src={image} alt='' />
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h1 style={{ width: "500px", height: "100px" }}> {title}</h1>
                    <h3 style={{ width: "500px", height: "150px" }}> {description}</h3>
                    <h3> {caregory}</h3>
                    <h2 style={{ fontSize: "35px", display: "flex", alignContent: "center", justifyContent: "center" }}> {price} tl</h2>
                </div>
            </div>
            <div style={{display:"flex", alignContent: "center", justifyContent: "center" }}>
                <button className='basketbt'>Sepete Ekle</button>
            </div>
        </div>
    )
}

export default ProductDetails
