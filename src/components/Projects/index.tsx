import { ReactNode, useState } from 'react';
import * as S from './style';

export type PropsDestaques = {
    img: string
    text: string
    tecnologias: ReactNode[]
    data: string
}

export const Destaques = ({ img, tecnologias, text, data }:PropsDestaques) => {

	const [show, setShow] = useState(false);
	const [color, setColor] = useState(false);

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
		return;
	};

	return (
		<S.Conteiner 
			className={`${show ? 'show' : 'notShow'}`}
			onMouseEnter={handleMouseEnter} 
			onMouseLeave={handleMouseOut}
			onClick={handleClick}
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