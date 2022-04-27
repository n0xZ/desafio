import{ useState } from 'react';
import sweetalert from 'sweetalert2';
import ProjectPagination from './ProjectPagination';
import ProjectItem from './ProjectItem';
import { Project } from 'types';
interface IProjectsList {
	projects: Project[];
}

const ProjectsList = ({ projects }: IProjectsList) => {
	const [MustToggle, setMustToggle] = useState(false);
	const [Projects, setProjects] = useState(projects);
	const [ItemsPerPage, setItemsPerPage] = useState(0);
	const [SelectedProject, setSelectedProject] = useState('');

	const SlicedProjects = () => {
		return Projects.slice(ItemsPerPage, ItemsPerPage + 5);
	};
	const DeleteProject = (id: string) => {
		const API_URL = String(process.env.API_URL);
		sweetalert
			.fire({
				title: 'Desea borrar el projecto?',
				showDenyButton: true,
				showConfirmButton: true,
				confirmButtonText: 'Si',
			})
			.then(async (result) => {
				if (result.isConfirmed) {
					const deleteResponse = await fetch(
						`${API_URL}/${id}`,
						{
							method: 'DELETE',
							headers: {
								'Content-type': 'application/json; charset=UTF-8',
							},
						}
					).then((res) => res.json());
					const projectsFiltered = Projects.filter(
						(project) => project.id !== id
					);
					setProjects(projectsFiltered);
					sweetalert.fire(deleteResponse.message);
				}
			});
	};
	const ToggleMenu = (name: string) => {
		setSelectedProject(name);
		setMustToggle((prev) => (prev = !prev));
	};
	const NextPage = () => {
		if (ItemsPerPage + 5 <= Projects.length)
			setItemsPerPage((prev) => prev + 5);
	};
	const PreviousPage = () => {
		if (ItemsPerPage > 0) setItemsPerPage((prev) => prev - 5);
	};

	return (
		<div className="flex flex-col justify-between min-h-screen w-full">
			<div>
				{SlicedProjects().map((project) => (
					<ProjectItem
						key={project.id}
						ToggleMenu={ToggleMenu}
						deleteProject={DeleteProject}
						mustToggleMenu={MustToggle}
						project={project}
						selectedProject={SelectedProject}
					/>
				))}
			</div>
			<ProjectPagination
				nextPage={NextPage}
				previousPage={PreviousPage}
			/>
		</div>
	);
};

export default ProjectsList;
