import * as S from './style';

import { useEffect, useState } from 'react';

import { PropsProject, project } from '../../themes/project';
import { Projects } from '../Projects';

import { useAppSelector } from '../../store/hookes';

export const ProjetcDestaques = () => {
	const [projectAll, setProjectAll] = useState<PropsProject[]>([]);
	const { colorOn } = useAppSelector(item => item.menu);

	useEffect(() => {
		setProjectAll(project);
	}, []);

	return (
		<S.Conteiner>
			<S.Hearding colorOn={colorOn}>Destaques</S.Hearding>
			<S.Paragrafo>Click nos cards abaixo</S.Paragrafo>
			<S.ConteinerProject>
				{
					projectAll.filter(item => item.destaque === true).map(item => (
						<Projects 
							key={item.id} 
							data={item.date} 
							img={item.img} 
							tecnologias={item.tecnologias}
							text={item.name}
							id={item.id}
						/>
					))
				}
			</S.ConteinerProject>
		</S.Conteiner>
	);
};