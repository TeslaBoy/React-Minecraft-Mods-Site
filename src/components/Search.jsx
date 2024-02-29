import {IoSearch } from "react-icons/io5";
import Dropdown from "./Dropdown"

const Search = (props) => {
    // const nav_item = props.nav_item;
    return(   
        <div className="flex flex-row icon m-2 mr-3 ">
            <Dropdown state = {props.state}/>
            <div className="flex flex-row">
                {/* <span className="">Search</span> */}
                <input className="search-input" type="search" name="" id="" />
                <IoSearch size="40"className="search-button"/>
            </div>
        </div>           
    )
}

export default Search;