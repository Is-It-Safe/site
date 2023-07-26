import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import './Footer.styles.css';

export const Footer = () => {
	return (
		<>
			<footer id="contact">
				<a id="logo" href="home">
					<img src={logo} alt="Is it safe?" />
				</a>
				<div className="contact">
					<h3>Dúvidas e Suporte</h3>
					<a id="link" href="contato@isitsafe.com.br">
						contato@isitsafe.com.br
					</a>
					<a id="link-mobile" href="privacy_policy">
					Politica de Privacidade
					</a>
					<br />
					<a id="link-mobile" href="terms_and_conditions">
					Termos e Condições
					</a>
				</div>
				<div  className="legal">
					<a id="link" href="privacy_policy">
					Politica de Privacidade
					</a>
					<br />
					<a id="link" href="terms_and_conditions">
					Termos e Condições
					</a>
				</div>
				<div className="socialmedia">
					<h3>Nos sigam nas redes sociais</h3>
					<a href="https://www.instagram.com/isitsafeapp/">
						<img src={instagram} alt="Instagram" />
					</a>
					<a href="https://twitter.com/IsItSafeApp">
						<img src={twitter} alt="Twitter" />
					</a>
					<a href="https://www.linkedin.com/company/is-it-safe">
						<img src={linkedin} alt="Linkedin" />
					</a>
					<a href="https://wa.me/message/5FSLCEOTE7ZVN1">
						<img src={whatsapp} alt="WhatsApp" />
					</a>
				</div>
			</footer>
		</>
	);
};
