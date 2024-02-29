import { FaDownload } from "react-icons/fa";
let filter_type = ""

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
            <button className='flex icon-colors p-2 font-semibold' type="button">
              <label className="hidden md:block mr-2">Download</label>
              <FaDownload  size="20"/>
              </button>
          </div>
        </div>
    );
    // console.log(content[0]!=null);
    return(
      <section className='flex flex-col min-h-64 w-full px-4 bg-gray-800 shadow-inner shadow-gray-900'>
        {
        content[0]!=null 
        ? content 
        : <div className='flex justify-center items-center'>
            <span className='text-gray-300 font-bold'>
              NOT FOUND
            </span>
          </div> 
        }
      </section>
      
    );
  }

export default Content;