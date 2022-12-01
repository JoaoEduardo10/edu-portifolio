import { ReactNode } from 'react';
import * as S from './style';

type Props = {
    children: ReactNode
	viwPort?: boolean
}

export const ConteinerFlex = ({ children, viwPort = false }: Props) => {

	return (
		<S.Conteiner viwport={viwPort}>
			{children}
		</S.Conteiner>
	);
};