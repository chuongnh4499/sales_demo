import React from 'react'

function ListProducts() {
    return (
        <div>
            <h2>List Products</h2>
            <ul>
                <li style={{ listStyleType: 'none'}}>
                    <span style={{ margin: '10px' }}>Iphone 8</span>
                    <button>Buy</button>
                </li>
                <li style={{ listStyleType: 'none'}}>
                    <span style={{ margin: '10px' }}>Iphone X</span>
                    <button>Buy</button>
                </li>
                <li style={{ listStyleType: 'none'}}>
                    <span style={{ margin: '10px' }}>Iphone 11</span>
                    <button>Buy</button>
                </li>
                <li style={{ listStyleType: 'none'}}>
                    <span style={{ margin: '10px' }}>Iphone 13</span>
                    <button>Buy</button>
                </li>
            </ul>
        </div>
    )
}

export default ListProducts
