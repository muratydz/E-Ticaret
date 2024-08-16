import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../compoment/ProductDetails'

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element = {<Home/>} />
                <Route path='/product-details/:id' element={<ProductDetails/>}/>
            </Routes>

        </div>
    )
}

export default RouterConfig
