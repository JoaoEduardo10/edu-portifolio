import * as S from './style';

import { useEffect, useState } from 'react';

import { Skills } from '../Skills';
import { PropsArreySkills, skills } from '../../themes/skills';
import { ConteinerFlex } from '../ConteinerFlex';
import { Hearding } from '../Hearding';

export const ConteinerSkills = () => {
	const [useSkills, setUseSkills] = useState<PropsArreySkills[]>([]);

	useEffect(() => {
		setUseSkills(skills);
	}, []);

	return (
		<ConteinerFlex>
			<Hearding text="Habilidades"/>
			<S.ConteinerSkills>
				{
					useSkills.map(item => (
						<Skills key={item.text} text={item.text} children={item.children} />
					))
				}
			</S.ConteinerSkills>
		</ConteinerFlex>
	);
};