import { Header } from '../../components/Header/Header';
import contactImg from '../../assets/imagecontact.png';
import { useState, useRef, useEffect } from 'react';
import { UilTimes, UilInfoCircle } from '@iconscout/react-unicons';
import axios from 'axios';
import * as styles from './Contact.styles';

export const Contact = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [pronouns, setPronouns] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [snackMessage, setSnackMessage] = useState<string>('');
	const [snackMessageDisplay, setSnackMessageDisplay] = useState<string>('none');
	const [snackBackgroundColor, setSnackBackgroundColor] = useState<string>('');
	const myDivRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (snackMessageDisplay === 'flex' && myDivRef.current) {		
			myDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}, [snackMessageDisplay]);

	function showMessage(message:string, color:string) {
		if(snackMessageDisplay === 'none'){
			setSnackMessage(message);
			setSnackBackgroundColor(color);
			setSnackMessageDisplay('flex');
			setTimeout(function() {
				setSnackMessageDisplay('none');
			}, 5000);
		}
	}

	function hideMessage() {
		setSnackMessageDisplay('none');
	}	
	function SendEmail(): void {
		const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (email === '' || name === '' || message === ''|| pronouns === '') {
			showMessage('Preencha todos os campos!', '#cb6d01');
			
		}
		else if(!validRegex.test(email)) {
			showMessage('Email inválido!', '#cb6d01');
		}else{
			
			axios.post('https://api.sendinblue.com/v3/smtp/email', {
				sender: {
					name: name,
					email: email
				},
				to: [{ email: 'contato@isitsafe.com.br'}],
				templateId: 1,
				subject: `Menssagem de ${name}`,
				params: {
					name: name,
					pronouns: pronouns,
					message: message,
					email: email
				}
			}, {
				headers: {
					'Content-Type': 'application/json',
					'api-key': import.meta.env.VITE_EMAIL_API_KEY
				}
			})
				.then(response => {
					console.log(response.data);
					showMessage('Mensagem enviada com sucesso!', '#6202EE');
				})
				.catch(error => {
					console.error(error);
					showMessage('Erro ao enviar mensagem!', '#EB3D3D');
					});
		}
	}

	return (
		<>
			<Header />
			<styles.ContactMain id="contact-main">
				<styles.Title>
					<h2>Quero entrar em contato</h2>
					<p>Fique à vontade para entrar em contato com a nossa equipe!</p>
				</styles.Title>

				<styles.SnackMessage ref={myDivRef} id="snackMessage" color={snackBackgroundColor} display={snackMessageDisplay}>
					<div className="snackMessageInfoIcon">
						<UilInfoCircle style={{color:'white'}} />
					</div>
					<span>{snackMessage}</span>
					<div className="snackMessageCloseIcon" onClick={hideMessage}>
						<UilTimes style={{color:'white'}}/>
					</div>
				</styles.SnackMessage >

				<styles.FormContainer>
					<styles.Form
						id="emailForm"
						action="mailto:contato@isitsafe.com.br"
						method="post"
						encType="text/plain"
					>
						<label htmlFor="name">Nome</label>
						<styles.Input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor="email">E-mail:</label>
						<styles.Input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="pronouns">Pronomes:</label>
						<styles.Input
							type="text"
							id="pronouns"
							name="pronouns"
							value={pronouns}
							onChange={(e) => setPronouns(e.target.value)}
						/>

						<label htmlFor="message">Mensagem:</label>
						<styles.TextArea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></styles.TextArea>

						<styles.ButtonContainer>
							<styles.Button id="submitBtn" type="button" onClick={()=> SendEmail()}>
							enviar
							</styles.Button>
						</styles.ButtonContainer>
					</styles.Form>

					<styles.ImageContainer>
						<img src={contactImg} alt="Imagem" />
					</styles.ImageContainer>
				</styles.FormContainer>
			</styles.ContactMain>
		</>
	);
};
