import * as S from './style';

import { FiMenu } from 'react-icons/fi';
import { HiOutlinePlus } from 'react-icons/hi';

import { useAppSelector, useAppDispatch } from '../../store/hookes';
import { addmenu, addColor } from '../../store/interfaces/menu/menuSlice';

export const TopBar = () => {
	const { project } = useAppSelector(item => item.completeProject);
	const { menuOn, colorOn } = useAppSelector(item => item.menu);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		if(menuOn) {
			dispatch(addmenu(false));
			return;
		}
		dispatch(addmenu(true));
	};

	const handleClickBackground = () => {
		if(colorOn) {
			dispatch(addColor(false));
			return;
		}
		dispatch(addColor(true));
	};

	return (
		<S.Conteiner project={project}>
			<S.ConteinerIconMenu>
				{
					menuOn ?  <HiOutlinePlus className='svg' onClick={handleClick} /> : <FiMenu onClick={handleClick} />
				}
			</S.ConteinerIconMenu>
			<S.Hearding>
                Portifólio
			</S.Hearding>
			<S.ConteinerBackground 
				className={`${colorOn ? 'round-left' : 'round-right'}`}
				onClick={handleClickBackground}
			>
				<S.Roundbackground></S.Roundbackground>
			</S.ConteinerBackground>
		</S.Conteiner>
	);
};