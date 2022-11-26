import { AboutMe } from '../components/AboutMe';
import { ConteinerProject } from '../components/ConteinerProject';
import { ConteinerSkills } from '../components/ConteinerSkills';
import { Hearder } from '../components/Hearder';
import * as S from './style';

export const  Home = () => {
	return (
		<S.Conteiner>
			<Hearder />
			<AboutMe />
			<ConteinerSkills />
			<ConteinerProject />
		</S.Conteiner>
	);
};
