import logoWhite from '../../assets/logo-white.png';
import { useState } from 'react';
import './Header.styles.css';


interface HeaderProps {
	isMainPage?: boolean;
}


export const Header = ({ isMainPage }: HeaderProps) => {
	const [mobileMenuDisplay, setMobileMenuDisplay] = useState<string>(
		'none'
	);

	const closeMenu = () => {
		setMobileMenuDisplay('none');
	};

	const toggleMenu = () => {
		if (mobileMenuDisplay === 'none') {
			setMobileMenuDisplay('flex');
		} else {
			closeMenu();
		}
	};

	return (
		<>
			{isMainPage ? (
				<header>
					<nav className="topmenu">
						<a href="about">sobre</a>
						<a href="team">nossa equipe</a>
						<a href="donations">doações</a>
						<a href="contact">contato</a>
					</nav>
					<nav className="topmenu__mobile__main">
						<button className="btn-toggle" id="menu-toggle" onClick={toggleMenu}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>
						<ul className="topmenu__mobile__list" style={{ display: mobileMenuDisplay }} onBlur={closeMenu}>
							<a href="about">sobre</a>
							<a href="team">nossa equipe</a>
							<a href="donations">doações</a>
							<a href="contact">contato</a>
						</ul>
					</nav>
				</header>
			) : (
				<header>
					<nav id="nav-geral">
						<div className="topmenu-logo">
							<a id="logo" href="home">
								<img src={logoWhite} alt="Is it safe?" />
							</a>
						</div>
						<div className="topmenu">
							<a href="about">sobre</a>
							<a href="team">nossa equipe</a>
							<a href="donations">doações</a>
							<a href="contact">contato</a>
						</div>
					</nav>
					<nav className="topmenu__mobile">
						<div className="topmenu-logo">
							<a id="logo" href="home">
								<img src={logoWhite} alt="Is it safe?" />
							</a>
						</div>
						<button className="btn-toggle" id="menu-toggle" onClick={toggleMenu}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>

						<ul
							className="topmenu__mobile__list"
							style={{ display: mobileMenuDisplay }}
							onBlur={closeMenu}
						>
							<a href="about">sobre</a>
							<a href="team">nossa equipe</a>
							<a href="donations">doações</a>
							<a href="contact">contato</a>
						</ul>
					</nav>
				</header>
			)}
		</>
	);
};
