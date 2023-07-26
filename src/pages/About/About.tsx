import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import mockup2 from '../../assets/MOCKUP2-s.png';
import avatarAbout from '../../assets/avatar-about-s.png';

import './About.styles.css';

export const About = () => {
	return (
		<>
			{' '}
			<Header />
			<main>
				<section id="about">
					<div>
						<h2>O Projeto</h2>
						<p>
							Somos um projeto sem fins lucrativos que tem como
							principal objetivo promover a segurança de pessoas
							LGBTQIA+ através de soluções tecnológicas e
							iniciativas de conscientização.
						</p>
						<p>
							Nossa aplicação tem como principal funcionalidade
							informar quais locais são seguros de se frequentar
							para os membros da comunidade, como uma tentativa de
							reduzir os índice de agressão contra a mesma.
						</p>
						<p>
							Oferecendo um ambiente seguro, para a partilha de
							experiências sobre um determinado estabelecimento ou
							local, buscamos contruir uma rede de informação para
							que outras pessoas possam identificar, com auxílio
							do nosso algoritmo, se aquele local é seguro, ou
							não, para se frequentar
						</p>
					</div>
					<picture>
						<source
							media="(max-width:912px)"
							srcSet={mockup2}
							type="image/png"
						/>
						<img src={mockup2} alt="" />
					</picture>
				</section>
				<section id="comosurgiu">
					<picture>
						<source
							media="(max-width:912px)"
							srcSet={avatarAbout}
							type="image/png"
						/>
						<img src={avatarAbout} alt="" />
					</picture>
					<div>
						<h2>Como surgiu</h2>
						<p>
							O <span>Is It Safe?</span> foi criado por Ester
							Mabel. O projeto surgiu a partir de vivências
							pessoais e através do acompanhamento de vivências de
							outras pessoas da comunidade LGBTQIA+ nas redes
							sociais. Ao presenciar e vivenciar inúmeros casos de
							LGBTfobia achamos que é fundamental a existência de
							uma plataforma que informe se um local é seguro ou
							não para a comunidade poder frequentar.
						</p>
						<p>
							<blockquote>
								- “Ao presenciar e vivenciar inúmeros casos de
								LGBTfobia achei que era fundamental a existência
								de uma plataforma que informe se um local é
								seguro ou não para a comunidade poder
								frequentar. Como não encontramos nenhuma
								ferramenta que fornecesse essas informações com
								eficiência, decidimos criar uma!”
							</blockquote>
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};
