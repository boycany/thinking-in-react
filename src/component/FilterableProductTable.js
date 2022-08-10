import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProductTable(props){
    return (
        <div className="container">
            <SearchBar />
            <ProductTable products={props.products}/>
        </div>
    )
}

export default FilterableProductTable