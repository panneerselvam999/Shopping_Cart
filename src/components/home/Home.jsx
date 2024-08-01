import React from 'react'
import { CartState } from '../../context/Context'
import SingleProduct from './SingleProduct';
import Filter from '../filter/Filter';

const Home = () => {
    const { state: { products } } = CartState()
    // console.log(products);
    return (
        <div className='flex'>
            <div>
                <Filter />
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-2 border-black'>
                {
                    products.map(data => (
                        <SingleProduct data={data} key={data.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
