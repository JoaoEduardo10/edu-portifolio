import * as S from './style';

import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

import { theme } from '../../style/themes';

import { ButtoDownload } from '../Buttons';
import { BiCodeAlt } from 'react-icons/bi';

export const Hearder = () => {
	const [nameOne, setNameOne] = useState(false);
	const [nameTwo, setNameTwo] = useState(false);

	return (
		<S.Conteiner data-aos="fade-down">
			<S.Conteinertext>
				<TypeAnimation 
					sequence={[
						'Olá, Sou o',
						1000,
						() => setNameOne(true)
					]}
					wrapper = "h2"
					cursor = {false}
					className="textOne"
				/>
				{
					nameOne && (
						<TypeAnimation 
							sequence={[
								'João Eduardo :)',
								1000,
								() => setNameTwo(true)
							]}
							wrapper = "h2"
							cursor = {false}
							style = {{ color: theme.colors.purple_200 }}
							className="textTwo"
						/>
					)
				}

				{
					nameTwo && (
						<TypeAnimation 
							sequence={[
								'Desenvolvedor front end',
								1000,
								'Tecnologia que utilizo',
								1000,
								'HTML5 | CSS3 | JavaScript',
								3000,
								'TypeScript | React.js | Sass',
								3000,
								'Redux | Context APi | API',
								3000,
								'Styled-Components | Git e GitHub',
								3000
                                
							]}
							wrapper = "h2"
							cursor = {true}
							repeat = {Infinity}
							style = {{ color: '#828282' }}
							className="text3"
						/>
					)
				}

				<ButtoDownload link='#' text='Download CV' />
			</S.Conteinertext>
			<S.ConteinerIcon>
				<BiCodeAlt />
			</S.ConteinerIcon>
		</S.Conteiner>
	);
};