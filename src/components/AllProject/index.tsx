import * as S from './style';

import { useState, useEffect } from 'react';

import { project, PropsProject } from '../../themes/project';
import { Projects } from '../Projects';

export const AllProject = () => {
	const [allProject, setAllProject] = useState<PropsProject[]>([]);

	useEffect(() => {
		setAllProject(project);
	}, []);

	return (
		<S.Conteiner>
			<S.Hearding>Todos os Projetos</S.Hearding>
			<S.Paragrafo>Click nos cards abaixo.</S.Paragrafo>
			<S.ConteinerProject>
				{
					allProject.map(item => (
						<Projects 
							key={item.id}
							data={item.date}
							img={item.img}
							text={item.name}
							tecnologias={item.tecnologias}
							id={item.id}
						/>
					))
				}
			</S.ConteinerProject>
		</S.Conteiner>
	);
};