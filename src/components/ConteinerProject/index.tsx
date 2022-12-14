import { AllProject } from '../AllProject';
import { ConteinerFlex } from '../ConteinerFlex';
import { Hearding } from '../Hearding';
import { ProjetcDestaques } from '../projectDestaques';
import * as S from './style';

export const ConteinerProject = () => {

	return (
		<S.Conteiner id='projects' data-aos="zoom-in-down">
			<ConteinerFlex>
				<Hearding text='Projetos'/>
				<ProjetcDestaques />
				<AllProject />
			</ConteinerFlex>
		</S.Conteiner>
	);
};