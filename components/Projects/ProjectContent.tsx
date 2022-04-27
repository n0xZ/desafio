import { FC } from 'react';
interface Props {
	projectName: string;
	createdAt: any;
	projectManager: string;
}
const ProjectContent: FC<Props> = ({
	createdAt,
	projectManager,
	projectName,
}) => {
	return (
		<aside className="h-full w-full flex-col justify-start items-start ">
			<h3 className="font-roboto font-bold">{projectName}</h3>
			<p className="text-gray-500 text-xs font-roboto mx-1 mb-2">
				Created at {createdAt}
			</p>
			<h2 className="font-roboto font-bold mx-6 h-full">
				{projectManager}
			</h2>
		</aside>
	);
};

export default ProjectContent;
