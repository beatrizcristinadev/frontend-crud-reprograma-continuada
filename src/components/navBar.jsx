
import {useState} from "react";
import {BsSearch, TiThMenuOutline} from "react-icons";
import style from "../styles/components/navBar.module.css"


const navBar = () => {

    const [menuOpen, setmenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setmenuOpen(!menuOpen)
    }
    
}

return (
    <>
    <nav>
        <div>
            
        </div>
    </nav>
    
    </>
)