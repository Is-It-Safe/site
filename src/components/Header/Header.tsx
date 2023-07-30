import logoWhite from '../../assets/logo-white.png';
import { useState, useRef } from 'react';
import './Header.styles.css';


interface HeaderProps {
	isMainPage?: boolean;
}


export const Header = ({ isMainPage }: HeaderProps) => {
	const [mobileMenuDisplay, setMobileMenuDisplay] = useState<string>(
		'none'
	);
	const menuRef = useRef<HTMLUListElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const closeMenu = () => {
		setMobileMenuDisplay('none');
		window.removeEventListener('click', handleClickOutside);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && buttonRef.current && !menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)){
			closeMenu();	
		}
	};

	const toggleMenu = () => {
		if (mobileMenuDisplay === 'none') {
			setMobileMenuDisplay('flex');
			window.addEventListener('click', handleClickOutside);
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
						<button ref={buttonRef} className="btn-toggle" id="menu-toggle" onClick={toggleMenu}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>
						<ul ref={menuRef} className="topmenu__mobile__list" style={{ display: mobileMenuDisplay }}>
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
						<button ref={buttonRef} className="btn-toggle" id="menu-toggle" onClick={toggleMenu}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>

						<ul
							ref={menuRef}
							className="topmenu__mobile__list"
							style={{ display: mobileMenuDisplay }}
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
