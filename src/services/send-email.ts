import axios from 'axios';

export default function SendEmail(
	email: string,
	name: string,
	pronouns: string,
	message: string,
	showMessage: (message: string, color: string) => void,
) {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email === '' || name === '' || message === '' || pronouns === '') {
		showMessage('Preencha todos os campos!', '#cb6d01');
	} else if (!validRegex.test(email)) {
		showMessage('Email inválido!', '#cb6d01');
	} else {
		axios
			.post(
				'https://api.sendinblue.com/v3/smtp/email',
				{
					sender: {
						name: name,
						email: email,
					},
					to: [{ email: 'contato@isitsafe.com.br' }],
					templateId: 1,
					subject: `Menssagem de ${name}`,
					params: {
						name: name,
						pronouns: pronouns,
						message: message,
						email: email,
					},
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'api-key': import.meta.env.VITE_EMAIL_API_KEY,
					},
				},
			)
			.then((response) => {
				console.log(response.data);
				showMessage('Mensagem enviada com sucesso!', '#6202EE');
			})
			.catch((error) => {
				console.error(error);
				showMessage('Erro ao enviar mensagem!', '#EB3D3D');
			});
	}
}
