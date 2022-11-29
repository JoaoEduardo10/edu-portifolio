import { AboutMe } from '../components/AboutMe';
import { CompleteProject } from '../components/CompleteProject';
import { ConteinerProject } from '../components/ConteinerProject';
import { ConteinerSkills } from '../components/ConteinerSkills';
import { Hearder } from '../components/Hearder';
import * as S from './style';


 
import { useAppSelector } from '../store/hookes';

export const  Home = () => {
	const { project, id } = useAppSelector(item => item.completeProject);

	return (
		<S.Conteiner project={project}>
			{
				project && (
					<CompleteProject id={id} />
				)
			}
			{
				!project && (
					<>
						<Hearder />
						<AboutMe />
						<ConteinerSkills />
						<ConteinerProject />
					</>
				)
			}
		</S.Conteiner>
	);
};
