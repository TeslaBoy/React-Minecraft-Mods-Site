import {data} from "./data"
import Logo from './components/Logo'
import ThemeButton from "./components/ThemeButton"
import Search from "./components/Search"
import { useState } from "react";
import Content from "./components/Content"

const nav_item = {
    activeItem: null,
    item: [
      {name: "mods",}, 
      {name: "data packs",}, 
      {name: "resource packs",},
    ],
  }

const App = () => {
  const [search, setSearch] = useState('');
    // console.log(search);  
  return(
  <div className="flex flex-col bg-gray-800">
    <header className="flex flex-row items-center justify-between content-start bg-gray-800 mt-0 p-0 border-0">
      <div className='flex flex-row'>
        <Logo href="/"/>
        <Search onChange={setSearch} state = {nav_item}/>
       {/* { console.log(nav_item.item[0])} */}
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



  
export default App;

