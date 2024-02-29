import Logo from './components/Logo'
import SidebarToggler from "./components/SidebarToggler"
import ThemeButton from "./components/ThemeButton"
import Menu from "./components/Menu"
import Search from "./components/Search"
import { useState } from "react";

// let search = ""
let filter_type = "mod"

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

const App = () => {
  const [search, setSearch] = useState('');
    console.log(search);  
  return(
  <div className="flex flex-col bg-gray-800">
    <header className="flex flex-row items-center justify-between content-start bg-gray-800 mt-0 p-0 border-0">
      <div className='flex flex-row'>
        <Logo href="/"/>
        <Search onChange={setSearch} state = {nav_item}/>
       { console.log(nav_item.item[0])}
      </div>
      <div className='flex flex-row'>
        <ThemeButton/>
        {/* <Menu/> */}
      </div>
      
    </header>
    <main className="flex bg-slate-100">
      <Content search = {search} data ={data}/>
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


const Content = (props)=>{
  const data = props.data;
  const search = props.search;
  
  const content = 
    data.
    filter((item)=>{
      return search.toLowerCase() === ''
      ? item
      : item.name.toLowerCase().includes(search)
    })
    .
    filter((item)=>{
      return filter_type.toLowerCase() === ''
      ? item
      : item.type.toLowerCase().includes(filter_type)
    })
    .map((item)=>
      <div className='flex bg-gray-600 p-2 m-1 h-24' key={item.id}>
        <img className="h-20 max-w-full rounded-lg" src={item.img} alt="" />
        <div className='flex px-2 flex-col w-full'>
          <label className=" text-gray-300 font-bold">{item.name}</label>
          <div className='flex h-full overflow-clip'>
            <label className="text-sm text-gray-300">{item.description}</label>
          </div>
          <div className='flex'>
            <label className="teg">#{item.type}</label>
          </div>
          
        </div>
        <div className='flex px-2 py-1 flex-row items-center'>
          <button className='icon-colors p-2 font-semibold' type="button">Download</button>
        </div>
      </div>
  );
  return(
    <section className='flex flex-col w-full px-4 bg-gray-800 shadow-inner shadow-gray-900'>
      {content}
    </section>
    
  );
}
  
export default App;

