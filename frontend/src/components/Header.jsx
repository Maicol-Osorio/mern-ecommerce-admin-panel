import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import logout from "../assets/logout.svg"
import user from "../assets/user.svg"
import Navbar from "./Navbar"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart } from "react-icons/fa"

const Header = () => {

  const [menuOpend, setMenuOpend] = useState(false)
  const ToggleMenu = () => {
    setMenuOpend(!menuOpend)
  }
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white  ring-1 ring-slate-900/5 z-10">
      <div className="border border-2 border-green-500 px-4 flexBetween py-3 max-xl:px-2">
        {/*logo*/}
        <Link><img src={logo} alt="" height={66} width={88} /></Link>
        {/* Navbar Desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* Navar mobile */}
        <Navbar
          containerStyles={`${menuOpend ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12  bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duraction-300" : "flex item-start flex-col gap-y-12 fixed top-20 p-12  bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duraction-300 -right-[100%]"}`}
        />
        {/* Buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpend ?
            (<MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" onClick={ToggleMenu} />) :
            (<MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary" onClick={ToggleMenu} />)}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex "}>
              <FaOpencart className="p-1 h-8 w-8 ring-1 ring-slate-900/30 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 top-2">0</span>
            </NavLink>
            {/* <NavLink to={"logout"} className={"btn_secondary_rounded flexCenter medium-16 gap-x-2 hi"}><img src={logout} alt="logout" height={19} width={19} /> logout</NavLink> */}
            <NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={user} width={19} height={19}/>login</NavLink>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
