import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProductTable(props){
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)
    
    return (
        <div className="container">
            <SearchBar setFilterText={setFilterText} 
                       setInStockOnly={setInStockOnly}/>
            <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    )
}

export default FilterableProductTable