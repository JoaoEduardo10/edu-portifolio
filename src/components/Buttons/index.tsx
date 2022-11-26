import * as S from './style';

export type ButtonDownload = {
    link: string
    text: string
}

export type PropsButtonClick = {
	text: string
	handleClick: () => void
}

export const ButtoDownload = ({ link, text }: ButtonDownload) => {
	return (
		<S.Conteiner >
			<a href={link} download>{text}</a>
		</S.Conteiner>
	);
};

export const ButtonClick = ({ handleClick, text }: PropsButtonClick) => {
	return (
		<S.Conteiner onClick={handleClick}>
			<S.Texto>{text}</S.Texto>
		</S.Conteiner>
	);
};