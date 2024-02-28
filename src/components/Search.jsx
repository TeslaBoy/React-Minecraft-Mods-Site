import {IoSearch } from "react-icons/io5";
import Dropdown from "./Dropdown"

const Search = (props) => {
    const nav_item = props.nav_item;
    return(   
        <div className="flex flex-row icon m-2 mr-3 ">
            <Dropdown nav_item = {nav_item}/>
            <div className="flex flex-row">
                {/* <span className="">Search</span> */}
                <input className="dropdown-button" type="search" name="" id="" />
                <IoSearch size="40"className="dropdown-button"/>
            </div>
        </div>           
    )
}

export default Search;