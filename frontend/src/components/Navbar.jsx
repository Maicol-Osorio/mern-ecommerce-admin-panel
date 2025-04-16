import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

const Navbar = ({ containerStyles }) => {
    return (
        <div>
            <nav className={`${containerStyles}`}>
                <NavLink to={"/"}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
                <NavLink to={"/mens"}><div className="flexCenter gap-x-1"><MdCategory />men's</div></NavLink>
                <NavLink to={"/womens"}><div className="flexCenter gap-x-1"><MdShop2 />women's</div></NavLink>
                <NavLink to={"/kids"}><div className="flexCenter gap-x-1"><MdContacts />kid's</div></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
