import { FC } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
interface Props {
	deleteProject: (id: string) => void;
	projectId: string;
}
const DeleteProject: FC<Props> = ({
	deleteProject,
	projectId,
}) => {
	return (
		<div className="text-left  w-full flex flex-row  justify-start items-center">
			<button
				onClick={() => deleteProject(projectId)}
				className="text-left  border-b-2 border-gray-200 w-full flex flex-row justify-start items-center"
			>
				<RiDeleteBin7Line className="xl:h-6 xl:w-6  w-16" />{' '}
				<p className="mx-2">Eliminar</p>
			</button>
		</div>
	);
};

export default DeleteProject;
