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
              <label className="hidden md:block w-32">Categories</label> 
              <IoChevronDownSharp className="w-6 h-4mt-1"/>
            </button>
          </div>
          <div className='dropdown-list'>
              <DropdownList nav_item = {nav_item}/>
          </div>
            
        </div>           
  )
}
export default Dropdown;
