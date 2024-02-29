const DropdownList = (props)=>{
    const nav_item = props.state.item;
    function handleClick() {
      console.log();
    }
    const listItems = nav_item.map((item)=>
      <li key={item["name"]}>
        <button onClick={handleClick} className="dropdown-item">
          {item["name"]}
        </button>
      </li>
    );
    return(
        <nav className="">
          <ul className="flex flex-col justify-between items-start">
            {listItems}
          </ul>
        </nav>
    );
  }
  
export default DropdownList;
