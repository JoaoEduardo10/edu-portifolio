import { AboutMe } from '../components/AboutMe';
import { CompleteProject } from '../components/CompleteProject';
import { ConteinerProject } from '../components/ConteinerProject';
import { ConteinerSkills } from '../components/ConteinerSkills';
import { Hearder } from '../components/Hearder';
import * as S from './style';

import { useAppSelector } from '../store/hookes';
import { Contacts } from '../components/ Contacts';

import aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


export const  Home = () => {
	const { project, id } = useAppSelector(item => item.completeProject);

	useEffect(() => {
		aos.init({ duration: 1000 });
	}, []);

	return (
		<S.Conteiner project={project}>
			{
				project && (
					<CompleteProject id={id} />
				)
			}
			<Hearder />
			<AboutMe />
			<ConteinerSkills />
			<ConteinerProject />
			<Contacts />

		</S.Conteiner>
	);
};
