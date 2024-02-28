import {IoChevronDownSharp} from "react-icons/io5";
import DropdownList from "./DropdownList"

const Dropdown = (props) => {
    const nav_item = props.nav_item;
    function handleClick() {
      console.log("Button click!");
    }
    return(   
        <div>
          <div className="" >
            <button onClick={handleClick} className="dropdown-button">
              <label>Categories</label> 
              <IoChevronDownSharp className="w-4 h-4 ms-2.5 mt-1"/>
            </button>
          </div>
          <div className='dropdown-list'>
              <DropdownList nav_item = {nav_item}/>
          </div>
            
        </div>           
  )
}
export default Dropdown;
