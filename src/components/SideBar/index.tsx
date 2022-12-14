import * as S from './style';

import { useAppSelector, useAppDispatch } from '../../store/hookes';
import { addmenu } from '../../store/interfaces/menu/menuSlice';

export const SideBar = () => {
	const { menuOn } = useAppSelector(item => item.menu);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(addmenu(false));
	};

	return (
		<S.Conteiner menuOn={menuOn} className={`${menuOn ? 'showsidebar' : ''}`}>
			<S.Titulo>Bem Vindo ao meu Protifólio!</S.Titulo>
			<S.Nav>
				<S.Links>
					<a onClick={handleClick} href="#sobre">Sobre</a>
				</S.Links>
				<S.Links>
					<a onClick={handleClick} href='#habilidades'>Habilidades</a>
				</S.Links>
				<S.Links>
					<a onClick={handleClick} href='#projects'>Projetos</a>
				</S.Links>
				<S.Links>
					<a onClick={handleClick} href="#contato">Contato</a>
				</S.Links>
			</S.Nav>
		</S.Conteiner>
	);
};