import * as S from './style';

import { useEffect, useState } from 'react';
import { PropsProject, project } from '../../themes/project';
import { Destaques } from '../Projects';

export const ProjetcDestaques = () => {
	const [projectAll, setProjectAll] = useState<PropsProject[]>([]);

	useEffect(() => {
		setProjectAll(project);
	}, []);

	return (
		<S.Conteiner>
			<S.Hearding>Destaques</S.Hearding>
			<S.Paragrafo>Click nos cards abaixo</S.Paragrafo>
			<S.ConteinerProject>
				{
					projectAll.filter(item => item.destaque === true).map(item => (
						<Destaques 
							key={item.id} 
							data={item.date} 
							img={item.img} 
							tecnologias={item.tecnologias}
							text={item.name}
						/>
					))
				}
			</S.ConteinerProject>
		</S.Conteiner>
	);
};