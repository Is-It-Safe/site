import gooderslogo from '../../assets/gooderslogo.png';
import { Header } from '../../components/Header/Header';

import './Donations.styles.css';

export const Donations = () => {
	return (
		<>
			<Header />
			<section id="donations">
				<div id="querocontribuir">
					<div>
						<h2>quero contribuir</h2>
						<p>
							Nosso projeto não visa nenhum lucro e está sendo
							construído através de <span>voluntários</span>, no
							entanto contribuições financeiras nos ajudam
							manter-lo e continuar o seu desenvolvimento. Se você
							acredita na nossa causa e <span>gostaria</span> de
							contribuir qualquer valor é muito bem-vindo.
						</p>
						<p>
							Para contribuir <span>financeiramente</span> com o
							nosso projeto, você pode fazer um
							<span>pix</span>, com qualquer valor, através da
							nossa chave ou através da plataforma 
							<span> Gooders</span> clicando no botão abaixo.{' '}
						</p>
					</div>
				</div>

				<div id="qrcode">
					<img src="src/assets/qrcodedonation.png" alt="" />
					<span>e9203d92-f28e-4e4e-8ba2-761e3ab2e347</span>
				</div>

				<div className="container" id="bannergooders">
					<p>
						Fazendo sua doação pela <span>Gooders</span>, você pode
						converter o valor doado em pontos que podem ser trocados
						por benefícios e descontos em empresas parceiras em todo
						Brasil.
					</p>
					<a
						className="button"
						id="buttongooders"
						href="https://goodersofficial.com/home/buscas/details/?doacao/611153256149fb892890aa24"
					>
						contribuir pela
						<img src={gooderslogo} alt="" />
					</a>
				</div>
			</section>
		</>
	);
};
