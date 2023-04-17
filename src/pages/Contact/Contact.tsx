import { Header } from '../../components/Header/Header';
import contactImg from '../../assets/imagecontact.png';
import { useState, useRef, useEffect } from 'react';
import { UilTimes, UilInfoCircle } from '@iconscout/react-unicons';
import SendEmail from '../../services/send-email';
import * as Styles from './Contact.styles';

export const Contact = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [pronouns, setPronouns] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [snackMessage, setSnackMessage] = useState<string>('');
	const [snackMessageDisplay, setSnackMessageDisplay] =
		useState<string>('none');
	const [snackBackgroundColor, setSnackBackgroundColor] =
		useState<string>('');
	const myDivRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (snackMessageDisplay === 'flex' && myDivRef.current) {
			myDivRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	}, [snackMessageDisplay]);

	function showMessage(message: string, color: string) {
		if (snackMessageDisplay === 'none') {
			setSnackMessage(message);
			setSnackBackgroundColor(color);
			setSnackMessageDisplay('flex');
			setTimeout(function () {
				setSnackMessageDisplay('none');
			}, 5000);
		}
	}

	function hideMessage() {
		setSnackMessageDisplay('none');
	}

	return (
		<>
			<Header />
			<Styles.ContactMain id="contact-main">
				<Styles.Title>
					<h2>Quero entrar em contato</h2>
					<p>
						Fique à vontade para entrar em contato com a nossa
						equipe!
					</p>
				</Styles.Title>

				<Styles.SnackMessage
					ref={myDivRef}
					id="snackMessage"
					color={snackBackgroundColor}
					display={snackMessageDisplay}
				>
					<div className="snackMessageInfoIcon">
						<UilInfoCircle style={{ color: 'white' }} />
					</div>
					<span>{snackMessage}</span>
					<div
						className="snackMessageCloseIcon"
						onClick={hideMessage}
					>
						<UilTimes style={{ color: 'white' }} />
					</div>
				</Styles.SnackMessage>

				<Styles.FormContainer>
					<Styles.Form
						id="emailForm"
						action="mailto:contato@isitsafe.com.br"
						method="post"
						encType="text/plain"
					>
						<label htmlFor="name">Nome</label>
						<Styles.Input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor="email">E-mail:</label>
						<Styles.Input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="pronouns">Pronomes:</label>
						<Styles.Input
							type="text"
							id="pronouns"
							name="pronouns"
							value={pronouns}
							onChange={(e) => setPronouns(e.target.value)}
						/>

						<label htmlFor="message">Mensagem:</label>
						<Styles.TextArea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></Styles.TextArea>

						<Styles.ButtonContainer>
							<Styles.Button
								id="submitBtn"
								type="button"
								onClick={() =>
									SendEmail(
										email,
										name,
										pronouns,
										message,
										showMessage,
									)
								}
							>
								enviar
							</Styles.Button>
						</Styles.ButtonContainer>
					</Styles.Form>

					<Styles.ImageContainer>
						<img src={contactImg} alt="Imagem" />
					</Styles.ImageContainer>
				</Styles.FormContainer>
			</Styles.ContactMain>
		</>
	);
};
