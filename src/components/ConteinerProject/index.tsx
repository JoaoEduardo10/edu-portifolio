import { AllProject } from '../AllProject';
import { ConteinerFlex } from '../ConteinerFlex';
import { Hearding } from '../Hearding';
import { ProjetcDestaques } from '../projectDestaques';
import * as S from './style';

import { useAppSelector } from '../../store/hookes';

export const ConteinerProject = () => {
	const { project } = useAppSelector(item => item.completeProject);

	return (
		<S.Conteiner project={project}>
			<ConteinerFlex>
				<Hearding text='Projetos'/>
				<ProjetcDestaques />
				<AllProject />
			</ConteinerFlex>
		</S.Conteiner>
	);
};