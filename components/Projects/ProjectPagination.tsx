import { FC } from 'react';
interface Props {
	nextPage: () => void;
	previousPage: () => void;
}
const ProjectPagination: FC<Props> = ({
	nextPage,
	previousPage,
}) => {
	return (
		<div className="flex flex-col bg-red justify-center items-center w-full h-full mt-5">
			<div className="flex flex-row items-center ">
				<button
					className="px-3 py-2 mx-6 rounded bg-red-600  font-roboto  text-white hover:bg-red-800 transition ease-in "
					onClick={previousPage}
				>
					Previous
				</button>

				<button
					className="px-6 py-2 mx-2 rounded bg-blue-600  font-roboto  text-white hover:bg-blue-800 transition ease-in "
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProjectPagination;
