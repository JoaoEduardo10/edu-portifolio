import * as S from './style';

import { useEffect, useState } from 'react';

import { Skills } from '../Skills';
import { PropsArreySkills, skills } from '../../themes/skills';

export const ConteinerSkills = () => {
	const [useSkills, setUseSkills] = useState<PropsArreySkills[]>([]);

	useEffect(() => {
		setUseSkills(skills);
	}, []);

	return (
		<S.Conteiner>
			<S.Heading>Habilidades</S.Heading>
			<S.ConteinerSkills>
				{
					useSkills.map(item => (
						<Skills key={item.text} text={item.text} children={item.children} />
					))
				}
			</S.ConteinerSkills>
		</S.Conteiner>
	);
};