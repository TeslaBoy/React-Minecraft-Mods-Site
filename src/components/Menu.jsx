import { IoMenu } from "react-icons/io5";

const Menu = ({href}) => {
    return(
        <a className="md:hidden menu-icon m-0 mr-3 p-0" href={href}>
            {<IoMenu  size="32"/>}
        </a>
)
}

export default Menu;