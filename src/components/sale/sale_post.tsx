import React from 'react'

function SalePost() {
    return (
        <div>
            <h2>Sale Post</h2>
            <div>
                <span>Product Name: </span>
                <input type="text" /> <br />
                <span>Product Price: </span>
                <input type="text" /> <br />
                <span>Description: </span>
                <textarea id="Description" name="Description" >
                </textarea> <br />
                <button>Post</button>
            </div>
        </div>
    )
}

export default SalePost
