import React from 'react'
import SearchProduct from './SearchProduct'
import AddToCart from './AddToCart'

const Navbar = () => {
    return (
        <nav className='flex  bg-gray-800 text-white justify-between items-center px-10 py-3'>
            <div>
                <h2>Shopping Cart</h2>
            </div>
            <div>
                <SearchProduct />
            </div>
            <div>
                <AddToCart />
            </div>
        </nav>
    )
}

export default Navbar