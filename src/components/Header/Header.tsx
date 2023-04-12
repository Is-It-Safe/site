import './Header.styles.css';
import logoWhite from '../../assets/logo-white.png';

interface HeaderProps {
	isMainPage?: boolean;
}

export const Header = ({ isMainPage }: HeaderProps) => {
	return (
		<>
			{isMainPage ? (
				<header>
					<nav className="topmenu">
						<a href="sobre.html">sobre</a>
						<a href="nossaequipe.html">nossa equipe</a>
						<a href="doacoes.html">doações</a>
						<a href="contact.html">contato</a>
					</nav>
					<nav className="topmenu__mobile">
						<button className="btn-toggle" id="menu-toggle">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>
						<ul className="topmenu__mobile__list">
							<a href="sobre.html">sobre</a>
							<a href="nossaequipe.html">nossa equipe</a>
							<a href="doacoes.html">doações</a>
							<a href="contact.html">contato</a>
						</ul>
					</nav>
				</header>
			) : (
				<header>
					<nav id="nav-geral">
						<div className="topmenu-logo">
							<a id="logo" href="index.html">
								<img src={logoWhite} alt="Is it safe?" />
							</a>
						</div>
						<div className="topmenu">
							<a href="sobre.html">sobre</a>
							<a href="nossaequipe.html">nossa equipe</a>
							<a href="doacoes.html">doações</a>
							<a href="contact.html">contato</a>
						</div>
					</nav>
					<nav className="topmenu__mobile">
						<div className="topmenu-logo">
							<a id="logo" href="index.html">
								<img src={logoWhite} alt="Is it safe?" />
							</a>
						</div>
						<button className="btn-toggle" id="menu-toggle">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</button>

						<ul
							className="topmenu__mobile__list"
							style={{ display: 'none' }}
						>
							<a href="sobre.html">sobre</a>
							<a href="nossaequipe.html">nossa equipe</a>
							<a href="doacoes.html">doações</a>
						</ul>
					</nav>
				</header>
			)}
		</>
	);
};
