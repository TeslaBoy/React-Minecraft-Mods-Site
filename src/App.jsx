import Logo from './components/Logo'
import SidebarToggler from "./components/SidebarToggler"
import ThemeButton from "./components/ThemeButton"
import Menu from "./components/Menu"

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
const App = () => {
  return(
  <div className="flex flex-col  min-h-full">
    <header className="flex flex-row items-center justify-between content-start bg-gray-800 mt-0 p-0 border-0">
      <div className='flex flex-row'>
        <Logo href="/"/>
        <Navigation nav_item = {nav_item}/>
        {/* <SidebarToggler/> */}
        
      </div>
      <div className='flex flex-row'>
        <ThemeButton/>
        <Menu/>
      </div>
      
      
    </header>
    <main className="bg-slate-600">
      {/* breadcrumbs */}
      {/* <div>
        <div className="py-4 overflow-y-auto whitespace-nowrap">
          <a className="text-gray-600" href="#">Home</a>
          <span className="mx-2 text-gray-500 hover:text-gray-900">&gt;</span>
          <a className="text-gray-600 hover:text-gray-900" href="#">News</a>
          <span className="mx-2 text-gray-500">&gt;</span>
          <a className="text-gray-600 hover:text-gray-900" href="#">Tech</a>
        </div>
      </div> */}
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



const SideBarIcon = ({icon})=>(
  <div className="sidebar-icon">
    {icon}
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

