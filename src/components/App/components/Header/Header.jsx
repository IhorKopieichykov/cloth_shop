import "./Header.scss";
import logo from "../../../../shared/images/header/logo.svg";
import { Nav } from "./components/Nav";
import { HeaderCart } from "./components/HeaderCart";
import { Currency } from "./components/Currency/Currency";
import { Search } from "./components/Search";
import { HeaderUser } from "./components/HeaderUser";
import { BurgerMenu } from "./components/BurgerMenu";
import { Link } from "react-router-dom";

function Header() {
	const menuItems = [
		{
			title: "home",
			link: "/",
		},
		{
			title: "women",
			link: "/women",
		},
		{
			title: "men",
			link: "/men",
		},
		{
			title: "kids",
			link: "/kids",
		},
	];

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo left">
					<img src={logo} alt="logo" />
				</Link>
				<BurgerMenu menuItems={menuItems} />
				<Nav menuItems={menuItems} />
				<div className="header__center"></div>
				<Search />
				<div className="header__options">
					<Currency />
					<HeaderCart />
					<HeaderUser />
				</div>
				<Link to="/" className="header__logo right">
					<img src={logo} alt="logo" />
				</Link>
			</div>
		</header>
	);
}

export default Header;
