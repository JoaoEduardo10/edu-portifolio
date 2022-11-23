import { ReactNode } from 'react';
import * as S from './style';

export type PropsSkills = {
    children: ReactNode
    text: string
}

export const Skills = ({ children, text }: PropsSkills) => {
	return (
		<S.Conteiner>
			<h3>{text}</h3>
			{children}
		</S.Conteiner>
	);
};