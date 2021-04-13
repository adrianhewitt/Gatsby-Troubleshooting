import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = (props) => <header className="header mt-0 z-10 fixed w-full top-0" role="banner">
	<nav className="main">
        <div className="mx-auto flex flex-wrap items-center">
		    <div role="navigation" className="flex w-full md:w-1/2 justify-start text-white font-extrabold  h-1">


				<ul 
					className={[headerStyles.menu, "list-reset flex justify-between flex-1 md:flex-none items-center mb-0 pl-5 pr-2 select-none"].join(' ')} 
					aria-label="Main"
					>
				  <li className="mr-3">
						<Link to="/" aria-label="Home">Home</Link>
				  </li>
				  <li className="mr-3">
						<Link to="/work/" aria-label="Work">Work</Link>
				  </li>
				</ul>
            </div>
        </div>
    </nav>
</header>

export default Header