import { useQuery } from "react-query"
import { getProduct } from "../../api/product"

export const ListProducts: React.FC = () => {
    const { data } = useQuery('list-products-public', getProduct)
    
    return (
        <div>
            <h2>List Products</h2>
            <ul>
                {data?.data.items.map((value, index) => {
                    return (
                        <li key={index} style={{ listStyleType: 'none' }}>
                            <span style={{ margin: '10px' }}>{value.name}</span>
                            <button>Buy</button>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}