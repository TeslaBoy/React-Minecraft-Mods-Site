// import { MdLightMode } from "react-icons/md";
import { IoSunny, IoMoon} from "react-icons/io5";

const ThemeButton = ({href}) => {
    return(
        <button className="theme-button-icon m-2 mr-3 " href={href}>
            {<IoSunny  className="ml-2" size="24"/>} 
            <span className="mr-2"></span>
            {/* {<IoMoon className="mr-2" size="24"/>}  */}
            <div className="hidden md:block mx-2">Cange Theme</div>
        </button>
        
)
}

export default ThemeButton;