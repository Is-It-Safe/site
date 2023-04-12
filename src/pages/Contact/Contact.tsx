import { Header } from '../../components/Header/Header';
import contactImg from '../../assets/imagecontact.png';

import './Contact.styles.css';

export const Contact = () => {
	return (
		<>
			<Header />
			<section id="contact-main">
				<div className="title">
					<h2>Quero entrar em contato</h2>
					<p>
						Fique à vontade para entrar em contato com a nossa
						equipe!
					</p>
				</div>

				<div className="snackMessage" id="snackMessage" />

				<div className="formContainer">
					<form
						id="emailForm"
						action="mailto:contato@isitsafe.com.br"
						method="post"
						encType="text/plain"
					>
						<label htmlFor="name">Nome</label>
						<input type="text" id="name" name="name" required />

						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" name="email" required />

						<label htmlFor="pronouns">Pronomes</label>
						<input
							type="text"
							id="pronouns"
							name="pronouns"
							required
						/>

						<label htmlFor="message">Mensagem</label>
						<textarea id="message" name="message"></textarea>

						<div className="buttonContainer">
							<button id="submitBtn" type="button">
								enviar
							</button>
						</div>
					</form>

					<div className="imageContainer">
						<img src={contactImg} alt="Imagem" />
					</div>
				</div>
			</section>
		</>
	);
};
