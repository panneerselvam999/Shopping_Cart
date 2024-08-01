import React from 'react'

const CardButton = ({ color, cartStatus }) => {
    return (
        <div>
            <button className={`${color}  px-4 py-1 rounded-md`}>{cartStatus ? "Add" : "Remove"}</button>
        </div>
    )
}

export default CardButton