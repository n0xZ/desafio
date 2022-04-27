import Link from 'next/link';
import { FC } from 'react';

import { GoKebabVertical } from 'react-icons/go';
import { Project } from '@prisma/client';
import ProjectContent from './ProjectContent';
import EditProject from './EditProject';
import DeleteProject from './DeleteProject';

interface Props {
	project: Project;
	deleteProject: (id: string) => void;
	ToggleMenu: (id: string) => void;
	selectedProject: string;
	mustToggleMenu: boolean;
}
const ProjectItem: FC<Props> = ({
	project,
	deleteProject,
	ToggleMenu,
	selectedProject,
	mustToggleMenu,
}) => {
	return (
		<div
			key={project.id}
			className="flex flex-row justify-start items-center  min-h-2/6 w-full p-3 bg-white border-gray-400 border-b-2  "
		>
			<ProjectContent
				createdAt={project.createdAt}
				projectManager={project.projectManager}
				projectName={project.name}
			/>
			<div className="flex flex-row mx-3 justify-end h-full w-full items-center">
				<div
					key={project.projectManager}
					className={
						mustToggleMenu && selectedProject === project.id
							? ' h-full xl:w-4/12 mx-4 w-2/4 rounded-md shadow-md flex flex-col justify-center items-center  bg-gray-50'
							: ' hidden '
					}
				>
					<DeleteProject
						deleteProject={deleteProject}
						projectId={project.id}
					/>
					<EditProject projectId={project.id} />
				</div>
				<GoKebabVertical
					className="h-2/5"
					onClick={() => ToggleMenu(project.id)}
				/>
			</div>
		</div>
	);
};

export default ProjectItem;
