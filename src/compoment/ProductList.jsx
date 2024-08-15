import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice'
import { store } from '../redux/store'

function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    return (
        <div>

        </div>
    )
}

export default ProductList
