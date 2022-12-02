import * as S from './style';

import { useState, useEffect } from 'react';

import { project, PropsProject } from '../../themes/project';
import { Projects } from '../Projects';

import { useAppSelector } from '../../store/hookes';

export const AllProject = () => {
	const [allProject, setAllProject] = useState<PropsProject[]>([]);
	const { colorOn } = useAppSelector(item => item.menu);

	useEffect(() => {
		setAllProject(project);
	}, []);

	return (
		<S.Conteiner>
			<S.Hearding colorOn={colorOn}>Todos os Projetos</S.Hearding>
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