import { ReactNode, useState } from 'react';
import * as S from './style';

import { useAppDispatch, useAppSelector } from '../../store/hookes';
import { addId, addProject } from '../../store/interfaces/completeProject/completProjectSlice';

export type PropsDestaques = {
    img: string
    text: string
    tecnologias: ReactNode[]
    data: string
	id: string
}

export const Projects = ({ img, tecnologias, text, data, id }:PropsDestaques) => {
	const [show, setShow] = useState(false);
	const [color, setColor] = useState(false);
	const dispatch = useAppDispatch();
	const { colorOn } = useAppSelector(item => item.menu);


	const handleMouseEnter = () => {
		setShow(true);

		setTimeout(() => {
			setColor(true);
		},300);
	};

	const handleMouseOut = () => {
		setShow(false);
		setColor(false);
	};

	const handleClick = () => {
		dispatch(addId(id));
		dispatch(addProject(true));
	};

	return (
		<S.Conteiner 
			onMouseEnter={handleMouseEnter} 
			onMouseLeave={handleMouseOut}
			onClick={handleClick}
			colorOn={colorOn}
		>
			<S.conteinerImg  >
				<img src={img} alt={text} />
				{
					!show && (
						<S.ConteinerData>
							<S.Hearding>
								{text}
							</S.Hearding>
							<S.ConteinerTecnologias>
								{
									tecnologias.map((item) => (
										item
									))
								}
							</S.ConteinerTecnologias>
						</S.ConteinerData>
					)
				}
			</S.conteinerImg>
			{
				show && (
					<S.ConteinerDate className={`${show ? 'show' : 'notShow'}`}>
						<S.Data>{data}</S.Data>
						<S.button onClick={handleClick} className={`${color ? 'color' : ''}`}>Ver mais</S.button>
					</S.ConteinerDate>
				)
			}
		</S.Conteiner>
	);
};