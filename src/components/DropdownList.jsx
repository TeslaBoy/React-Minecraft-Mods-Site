const DropdownList = (props)=>{
    const nav_item = props.state.item;
    // function handleClick(e) {
    //   console.log(e.target.value);
    // }
    const listItems = nav_item.map((item)=>
      <li key={item.name}>
        <button value={item.teg} onClick={props.onChangeFilter} className="dropdown-item">
          {item.name}
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
