import Logo from './components/Logo'
import SidebarToggler from "./components/SidebarToggler"
import ThemeButton from "./components/ThemeButton"
import Menu from "./components/Menu"
import Search from "./components/Search"

const nav_item = {
    activeItem: null,
    item: [
      {name: "mods",}, 
      {name: "data packs",}, 
      {name: "resource packs",},
    ],
  }
const data = [
  {
    id: 0,
    name: "Just Enough Items (JEI)",
    type: "Mod",
    description: "View Items and Recipes",
    img: "https://media.forgecdn.net/avatars/thumbnails/29/69/64/64/635838945588716414.jpeg",
  },
  {
    id: 1,
    name: "Mouse Tweaks",
    type: "Mod",
    description: "Enhances inventory management by adding various functions to the mouse buttons",
    img: "https://media.forgecdn.net/avatars/thumbnails/467/691/64/64/637749969243449870.png",
  },
  {
    id: 2,
    name: "AppleSkin",
    type: "Mod",
    description: "Adds some useful information about food/hunger to the HUD",
    img: "https://media.forgecdn.net/avatars/thumbnails/47/527/64/64/636066936394500688.png",
  },
  {
    id: 3,
    name: "Create",
    type: "Mod",
    description: "Aesthetic Technology that empowers the Player",
    img: "https://media.forgecdn.net/avatars/thumbnails/393/435/64/64/637588742363737916.png",
  },
  {
    id: 4,
    name: "Create Crafts & Additions",
    type: "Mod",
    description: "Electrifying the Create mod!",
    img: "https://media.forgecdn.net/avatars/thumbnails/405/250/64/64/637616939209778882.png",
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
  <div className="flex flex-col bg-gray-800">
    <header className="flex flex-row items-center justify-between content-start bg-gray-800 mt-0 p-0 border-0">
      <div className='flex flex-row'>
        <Logo href="/"/>
        <Search state = {nav_item}/>
       { console.log(nav_item.item[0])}
      </div>
      <div className='flex flex-row'>
        <ThemeButton/>
        {/* <Menu/> */}
      </div>
      
    </header>
    <main className="flex bg-slate-100">
      <Content data ={data}/>
    </main>

    {/* footer */}
    <footer className="border-t mt-5 py-5 px-2">
      <div className='flex flex-row items-center'>
        <h6 className="font-semibold text-gray-200">Company</h6>
        <ul className='flex flex-row px-10'>
          <li><a className="px-2 inline-block text-gray-300 py-2" href="#">Team</a></li>
          <li><a className="px-2 inline-block text-gray-300 py-2" href="#">About us</a></li>
        </ul>
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



const Content = (props)=>{
  const data = props.data;
  const content = data
    .map((item)=>
      <div className='flex bg-gray-600 p-2 m-1 h-24' key={item.id}>
        <img className="h-20 max-w-full rounded-lg" src={item.img} alt="" />
        <div className='flex px-2  flex-col w-full overflow-clip'>
          <label className="text-gray-300 font-bold">{item.name}</label>
          <label className="text-gray-300">{item.description}</label>
          <label className="text-gray-300">{item.type}</label>
        </div>
        <div className='flex px-2 py-1 flex-col'>
          <button className='icon-colors p-2 font-semibold' type="button">Download</button>
        </div>
       
      </div>
  );
  return(
    <section className='flex flex-col w-full px-4 bg-gray-800'>
      {content}
    </section>
    
  );
}
  


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

