import { useState } from "react"
import Logo from "../../assets/logo.svg"
import NavLink from '../nav-bar/NavLinks'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const NavBar = () => {
  const [isMenuSelected, setIsMenuSelected] = useState<boolean>(false)

  return (
    <nav className="fixed bg-primary-intro top-0 w-full p-8 font-primary text-sm z-30 lg:px-16">
      <div className="flex-between">
        {/* Navbar Logo */}
        <section className="w-[120px] cursor-pointer">
          <img src={Logo} alt="logo" />
        </section>

        {/* Navbar Links */}
        <section className="hidden md:w-2/5 md:flex-between">
          <NavLink page="Home"/>
          <NavLink page="Features"/>
          <NavLink page="Services"/>
          <NavLink page="Feedbacks"/>
        </section>

        {/* Sign In Button and Menu Icon */}
        <section className="flex-between gap-8">
          {/* Sign In Button */}
          <button className="bg-accent-blue font-semibold px-8 py-[6px] rounded-full md:px-10 md:py-2 cursor-pointer hover:bg-accent-cyan">
            Sign In
          </button>

          {/* Menu Icon */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsMenuSelected(!isMenuSelected)}>
            <Bars3Icon className="w-9 h-9"/>
          </button>
        </section>
      </div>

      {isMenuSelected && (
        <div className="fixed right-0 bottom-0 w-[300px] h-full bg-primary-intro p-8">
          {/* Close Icon */}
          <section className="flex justify-end">
            <button className="cursor-pointer" onClick={() => setIsMenuSelected(!isMenuSelected)}>
              <XMarkIcon className="w-9 h-9"/>
            </button>
          </section>

          {/* Navbar Links */}
        <section className="flex flex-col gap-14 text-lg py-16">
          <NavLink page="Home"/>
          <NavLink page="Features"/>
          <NavLink page="Services"/>
          <NavLink page="Feedbacks"/>
        </section>
        </div>
      )}
    </nav>
  )
}

export default NavBar
