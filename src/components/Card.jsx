import { FaDownload } from "react-icons/fa";

const Card = ({item}) => {
    return(
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
    )
}

export default Card;