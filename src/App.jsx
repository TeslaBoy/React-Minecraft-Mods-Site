import Logo from './components/Logo'
import SidebarToggler from "./components/SidebarToggler"
import ThemeButton from "./components/ThemeButton"
import Menu from "./components/Menu"
import Search from "./components/Search"

const nav_item = [
  {
    "name": "mods",
    "href": "mods",
  },
  {
    "name": "data packs",
    "href": "datapacks",
  },
  {
    "name": "resource packs",
    "href": "resourcepacks",
  },
]
const sidebar_item = [
  {
    "categoty": "type",
    "filter": [
      "mechanic", 
      "tool", 
      "redstone",
      "automatization",
      "tech",
      "generaions",
    ],
  },
  {
    "name": "data packs",
    "href": "datapacks",
  },
  {
    "name": "resource packs",
    "href": "resourcepacks",
  },
]


const App = () => {
  return(
  <div className="flex flex-col  min-h-full">
    <header className="flex flex-row items-center justify-between content-start bg-gray-800 mt-0 p-0 border-0">
      <div className='flex flex-row'>
        <Logo href="/"/>
        <Search nav_item = {nav_item}/>
        
      </div>
      <div className='flex flex-row'>
        <ThemeButton/>
        {/* <Menu/> */}
      </div>
      
    </header>
    <main className="flex bg-slate-100">
      
      <Content/>
    </main>

    {/* footer */}
    <footer className="border-t mt-10 py-10 px-2">
      <div>
        <div>
          <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a className="inline-block text-gray-500 py-2" href="#">Team</a></li>
            <li><a className="inline-block text-gray-500 py-2" href="#">About us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  );
}



const SideBar = (props)=>{
  const item = props.item[0]["filter"];
  const Items = item.map((item)=>
    <li className="flex justify-between items-center" key={item}>
      <label className="sidebar-filters ml-1 mb-1" >{item}</label>
      <input className='check-box' type="checkbox" value={item}></input>
      {/* <a className="sidebar-filters" ></a> */}
      </li>
  );
  return(
    <div className='menu-colors w-40'>
      <nav className="flex flex-col"> {props.item[0]["categoty"]}
        <ul className="flex flex-col text-gray-500 font-semibold">
          
          {Items}
        </ul>
      </nav>
    </div>
    
  );
}

const SideBarCategoty = (props)=>{
  const item = props.item;
  const Items = item.map((item)=>
    <li key={item["name"]}><a className="sidebar-filters" href={item["href"]}>{item["name"]}</a></li>
  );
  return(
    <div className=''>
      <nav className="flex">
        <ul className="flex flex-col text-gray-500 font-semibold">
          {Items}
        </ul>
      </nav>
    </div>
    
  );
}



const Content = (props)=>(
  <div className=" bg-slate-600">
  </div>
)

const Navigation = (props)=>{
  const nav_item = props.nav_item;
  const listItems = nav_item.map((item)=>
    <li key={item["name"]}><a className="header-nav" href={item["href"]}>{item["name"]}</a></li>
  );
  return(
    <div className='hidden md:flex'>
      <nav className="flex">
        <ul className="flex flex-row text-gray-500 font-semibold">
          {listItems}
        </ul>
      </nav>
    </div>
    
  );
}


export default App;

