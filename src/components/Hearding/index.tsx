import * as S from './style';

type Props = {
    text: string
}

export const Hearding = ({ text }: Props) => {
	return (
		<S.Conteiner>
			{text}
		</S.Conteiner>
	);
};