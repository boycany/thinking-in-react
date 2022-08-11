function SearchBar(props){

    const handleSearch = (e) => {
        props.setFilterText(e.target.value)
    }

    const handleChecked = (e) => {
        props.setInStockOnly(e.target.checked)
    }

    return (
        <form>
            <input type="text" placeholder="Search..." onChange={handleSearch}/>
            <p>
                <input type="checkbox" onChange={handleChecked}/>
                {' '}Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar