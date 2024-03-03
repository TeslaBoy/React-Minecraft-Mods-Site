import {IoChevronDownSharp} from "react-icons/io5";
import DropdownList from "./DropdownList"
import React, {useState, useEffect, useRef} from "react";

const Dropdown = (props) => {
  const [isElementOn, setIsElementOn] = useState(false);

  const toggleElement = () => {
    setIsElementOn(prevState => !prevState); 
  };
  let menuRef = useRef();

  useEffect(()=>{
    document.addEventListener("mousedown", 
      (e)=> {
        if (menuRef.current)
          if (!menuRef.current.contains(e.target))
            setIsElementOn(false);
        })
  });

    function handleClick() {
      toggleElement();
    }
    return(   
        <div>
          <div className="">
            <button onClick={handleClick} className="dropdown-button">
              <label className="hidden md:block w-32">Categories</label> 
              <IoChevronDownSharp className="w-6 h-4mt-1"/>
            </button>
          </div>
          {
            isElementOn && 
            <div className='dropdown-list' ref={menuRef}>
              <DropdownList onChangeFilter={props.onChangeFilter} 
                            state = {props.state}/> 
            </div>
          }
        </div>           
  )
}
export default Dropdown;
