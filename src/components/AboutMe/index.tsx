import { Hearding } from '../Hearding';
import * as S from './style';

import { useAppSelector } from '../../store/hookes';

export const AboutMe = () => {
	const { project } = useAppSelector(item => item.completeProject);

	return (
		<S.Conteiner project={project}>
			<Hearding text='Sobre mim'/>
			<S.ConteinerText>
				<h3>Teresina, PI</h3>
				<S.Paragrafo>
                    Olá, me chamo João Eduardo e sou um apaixonado por tecnologia. Meu primeiro contato com programação, foi quando vi o meu primo fazer uma calculadora com Python. Maravilhado com tudo aquilo, quis logo aprender sobre.
				</S.Paragrafo>
				<S.Paragrafo>
                    Hoje, já tenho conhecimento em algumas tecnologias voltadas para o Front-end. E continuo meus estudos, tendo sempre em mente que estamos em constante aprendizado.
				</S.Paragrafo>
			</S.ConteinerText>
		</S.Conteiner>
	);
};