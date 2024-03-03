import {IoSearch } from "react-icons/io5";
import Dropdown from "./Dropdown"


const Search = (props) => {
    return(   
        <div className="flex flex-row h-full justify-center icon m-2 mr-3 ">
            <Dropdown onChangeFilter={(e)=>props.onChangeFilter(e.target.value)} 
                    state = {props.state}/>
            <div className="flex flex-row">
                <input onChange={(e)=>props.onChangeSearch(e.target.value)} 
                    className="search-input" type="search" name="" id="" />
                <IoSearch size="40"className="search-button"/>
            </div>
        </div>           
    )
}

export default Search;