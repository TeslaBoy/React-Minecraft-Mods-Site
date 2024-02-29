import {IoChevronDownSharp} from "react-icons/io5";
import DropdownList from "./DropdownList"
import React, {useState} from "react";

const Dropdown = (props) => {
  const [isElementOn, setIsElementOn] = useState(false);

  const toggleElement = () => {
    // setIsElementOn(prevState => !prevState); 
    setIsElementOn(true);
  };

    // const nav_item = props.nav_item;
    function handleClick() {
      toggleElement();
    }
    return(   
        <div>
          <div className="" >
            <button onClick={handleClick} className="dropdown-button">
              <label className="hidden md:block w-32">Categories</label> 
              <IoChevronDownSharp className="w-6 h-4mt-1"/>
            </button>
          </div>
          {
            isElementOn && 
            <div className='dropdown-list'>
              <DropdownList state = {props.state}/> 
            </div>
          }
        </div>           
  )
}
export default Dropdown;