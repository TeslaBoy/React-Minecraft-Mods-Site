const DropdownButton = (props)=>{
    const nav_item = props.nav_item;
    const listItems = nav_item.map((item)=>
      <li key={item["name"]}><a className="dropdown-item" href={item["href"]}>{item["name"]}</a></li>
    );
    return(
        <nav className="">
          <ul className="flex flex-col justify-between items-start">
            {listItems}
          </ul>
        </nav>
    );
  }
  
export default DropdownButton;
