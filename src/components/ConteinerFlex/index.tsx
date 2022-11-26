import { ReactNode } from 'react';
import * as S from './style';

type Props = {
    children: ReactNode
}

export const ConteinerFlex = ({ children }: Props) => {
	return (
		<S.Conteiner>
			{children}
		</S.Conteiner>
	);
};