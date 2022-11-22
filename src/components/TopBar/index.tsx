import * as S from './style';
import { FiMenu } from 'react-icons/fi';

export const TopBar = () => {
	return (
		<S.Conteiner>
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