import { ReactNode } from 'react';
import * as S from './style';

import { useAppSelector } from '../../store/hookes';

type Props = {
    children: ReactNode
}

export const ConteinerFlex = ({ children }: Props) => {
	const { project } = useAppSelector(item => item.completeProject);

	return (
		<S.Conteiner project={project}>
			{children}
		</S.Conteiner>
	);
};