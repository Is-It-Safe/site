import { Header } from '../../components/Header/Header';

import './Team.styles.css';

export const Team = () => {
	return (
		<>
			<Header />
			<main>
				<section id="team-main">
					<h2>Faça parte</h2>
					<p>
						Se você também apoia a causa e quer fazer parte desse
						projeto, da uma olhadinha nas nossas vagas nos links
						abaixo. <span>Todes são bem-vindes!</span>{' '}
					</p>
					<a
						id="link"
						href="https://www.atados.com.br/ong/is-it-safe"
					>
						ATADOS
					</a>
					<a id="link" href="https://forms.gle/be1BbTEXmQz4iLn59">
						FORMS DE INSCRIÇÃO
					</a>
				</section>
				<section>
					<p>
						A <span>Is It Safe?</span> é um projeto sem fins
						lucrativos, que conta com um time de profissionais
						dedicados que como <span>voluntários</span> ajudam a
						fazer nosso projeto crescer.
					</p>
					<h2>Conheça nosso time:</h2>
					<div className="team"></div>
				</section>
			</main>
		</>
	);
};
