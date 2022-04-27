import Link from 'next/link';
import { FC } from 'react';
import { FiEdit } from 'react-icons/fi';
interface Props {
	projectId: string;
}
const EditProject: FC<Props> = ({ projectId }) => {
	return (
		<div className="text-left  w-full flex flex-row ml-2 justify-start items-center">
			<Link href={`/edit/${projectId}`}>
				<a className="flex flex-row justify-start items-center">
					<FiEdit className="xl:h-5 xl:w-5 h-4 w-4" />{' '}
					<p className="mx-2">Editar</p>
				</a>
			</Link>
		</div>
	);
};

export default EditProject;
