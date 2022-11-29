import * as S from './style';
import { FiMenu } from 'react-icons/fi';

import { useAppSelector } from '../../store/hookes';

export const TopBar = () => {
	const { project } = useAppSelector(item => item.completeProject);

	return (
		<S.Conteiner project={project}>
			<S.ConteinerIconMenu>
				<FiMenu />
			</S.ConteinerIconMenu>
			<S.Hearding>
                Portifólio
			</S.Hearding>
			<S.ConteinerBackground>
				<S.Roundbackground></S.Roundbackground>
			</S.ConteinerBackground>
		</S.Conteiner>
	);
};