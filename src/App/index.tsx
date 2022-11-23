import { AboutMe } from '../components/AboutMe';
import { ConteinerSkills } from '../components/ConteinerSkills';
import { Hearder } from '../components/Hearder';
import * as S from './style';

export const  Home = () => {
	return (
		<S.Conteiner>
			<Hearder />
			<AboutMe />
			<ConteinerSkills />
		</S.Conteiner>
	);
};
