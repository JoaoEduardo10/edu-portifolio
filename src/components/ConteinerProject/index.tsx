import { ConteinerFlex } from '../ConteinerFlex';
import { Hearding } from '../Hearding';
import { ProjetcDestaques } from '../projectDestaques';
import * as S from './style';

export const ConteinerProject = () => {

	return (
		<S.Conteiner>
			<ConteinerFlex>
				<Hearding text='Projetos'/>
				<ProjetcDestaques />
			</ConteinerFlex>
		</S.Conteiner>
	);
};