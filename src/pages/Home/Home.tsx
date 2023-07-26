import { useState } from 'react';

import mockupHome from '../../assets/mockuphome-1.png';
import ballon1 from '../../assets/ballon1.png';
import ballon2 from '../../assets/ballon2.png';
import rainbow from '../../assets/rainbow.png';
import handpoint from '../../assets/handpoint.png';
import chat from '../../assets/chat.png';
import { Header } from '../../components/Header/Header';

import './Home.styles.css';

export const Home = () => {
	return (
		<>
			<Header isMainPage />
			<div className="parallaxelements">
				<img id="ballon1" src={ballon1} alt="" />
				<img id="ballon2" src={ballon2} alt="" />
			</div>
			<section id="mainbanner">
				<div className="mainbanner-text">
					<h1 className="mainbanner-title">Is It Safe?</h1>
					<p>
						Saiba onde frequentar com segurança. Descreva suas
						experiências e avalie estabelecimentos.
					</p>
				</div>
				<img className="mockuphome" src={mockupHome} alt="" />
			</section>
			<div id="content">
				<section>
					<div id="slogan">
						<p id="slogantxt">
							<span>
								{' '}
							Por um Brasil mais seguro
								<br /> para pessoas LGBTQIA+
							</span>{' '}
						</p>
						<img src={rainbow} alt="" />
					</div>
					<div id="presentationsection">
						<img src={chat} alt="" />
						<p id="presentationtext">
							<span>It Is Safe?</span> é uma plataforma, em
						desenvolvimento, que visa a segurança da comunidade{' '}
							<span>LGBTQIA+.</span>
						Com a meta de informar sobre lugares seguros e abrir
						espaço para a partilha de experiências, busca
						representar uma comunidade que luta para existir com
						direito dignidade e respeito todos os dias.
						</p>
					</div>
				</section>
				<section id="donation">
					<div className="container">
						<img id="handpointer" src={handpoint} alt="" />
						<div className="call">
							<p>
							Nosso projeto não visa nenhum lucro e está sendo
							construído através de <span>voluntários</span>, no
							entanto contribuições financeiras nos ajudam
							manter-lo e continuar o seu desenvolvimento. Se você
							acredita na nossa causa e <span>gostaria</span> de
							contribuir qualquer valor é muito bem-vindo.
							</p>
							<a className="button" href="donations">
							Quero contribuir
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
