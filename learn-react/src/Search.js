function Search(props) {

    return(
        
        <div>
             Search:  
            <input type="text" value={props.searchItem} onChange={props.handleEvent}></input>
        </div>
    );
}

export default Search;