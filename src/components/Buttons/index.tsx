import * as S from './style';

export type ButtonDownload = {
    link: string
    text: string
}

export const ButtoDownload = ({ link, text }: ButtonDownload) => {
	return (
		<S.Conteiner >
			<a href={link} download>{text}</a>
		</S.Conteiner>
	);
};