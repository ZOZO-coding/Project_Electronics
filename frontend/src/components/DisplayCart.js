import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCart = ({ cart }) => {
    return (
        <div className='display-cart'>
            <Link
                to="/shoppingCart"
                className="link"
            >
                Cart:({cart.length})
            </Link>
        </div>
    )
}

export default DisplayCart