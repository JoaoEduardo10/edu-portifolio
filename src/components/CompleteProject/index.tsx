import { useEffect, useState } from 'react';
import { project, PropsProject } from '../../themes/project';
import { ButtonLinks } from '../Buttons';

import { useAppDispatch, useAppSelector } from '../../store/hookes';
import {  addId, addProject } from '../../store/interfaces/completeProject/completProjectSlice';

import { HiOutlinePlus } from 'react-icons/hi';

import * as S from './style';

export type PropsCompleteProject = {
    id: string
}

export const CompleteProject = ({ id }: PropsCompleteProject) => {
	const [allProject, setAllProject] = useState<PropsProject[]>([]);
	const projectFilter = allProject.filter(item => item.id === id);
	const [video] = projectFilter.map(item => item.video);
	const dispatch = useAppDispatch();
	const boolean = useAppSelector(item => item.completeProject);
	
	useEffect(() => {
		setAllProject(project);
	}, [id]);

	const handleClick = () => {
		dispatch(addId(''));
		dispatch(addProject(false));
	};

	return (
		<S.Conteiner className={boolean.project ? 'aparecer' : ''}>
			<S.ConteinerProject>
				<S.ConteinerVideo>
					<S.Video>
						<video  autoPlay loop muted src={video}></video>
					</S.Video>
					<S.ConteinerButtons>
						<ButtonLinks 
							link='123'
							text='Click a que'
						/>
						<ButtonLinks 
							link='123'
							text='Click a que'
						/>
					</S.ConteinerButtons>
				</S.ConteinerVideo>
				<S.ConteinerTexts>
					<h1 className='titulo'>
						<span>
							{
								projectFilter.map(item => item.name)
							}
						</span>
						<span onClick={handleClick}> <HiOutlinePlus /> </span>
					</h1>
					<p className='text'>
						{
							projectFilter.map(item => item.text)
						}
					</p>
					<p className='text'>
						{
							projectFilter.map(item => item.text2)
						}
					</p>
					<S.ConteinerData>
						<p>
							{
								projectFilter.map(item => item.date)
							}
						</p>
					</S.ConteinerData>
				</S.ConteinerTexts>
			</S.ConteinerProject>
		</S.Conteiner>
	);
};