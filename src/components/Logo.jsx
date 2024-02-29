import { GiAnvilImpact } from "react-icons/gi";


const Logo = ({href}) => {
    return(
        <a className="logo-icon m-0 mr-1 p-1" href={"#"+href}>
            {<GiAnvilImpact  size="64"/>}
        </a>
)
}

export default Logo;