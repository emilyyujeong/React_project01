import { Link } from "react-router-dom"
import { Inner } from "./common"
import GlobalNav from "./GlobalNav";
import { BsPerson, BsCart, BsSearch } from "react-icons/bs";



const Header = ({ DEFAULT, NAV }) => {
    return (
        <header className="Header">
            <Inner className="inner">
                <nav className="GlobalGnb">
                    <GlobalNav NAV={NAV} />
                </nav>
                <h1>
                    <Link to='/'>
                        <img
                            src={process.env.PUBLIC_URL + '/assets/logo.png'}
                            alt={DEFAULT.company} />
                    </Link>
                </h1>

                <div className="right">
                    <BsSearch />
                    <BsPerson />
                    <BsCart />
                </div>
            </Inner>
        </header>
    )
}

export default Header;