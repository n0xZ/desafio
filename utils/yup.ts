import * as Yup from 'yup';
export const ProjectSchema = Yup.object().shape({
    name: Yup.string().required('Project name field is required'),
    description: Yup.string().required('Description field is required'),
    projectManager: Yup.string()
        .required('Project Manager field is required')
        .test((value) => {
            return value !== 'Project Manager';
        }),
    assignedTo: Yup.string()
        .required('Assigned To field is required')
        .test((value) => {
            return value !== 'Assigned to';
        }),
    status: Yup.string()
        .required('Status field field is required')
        .test((value) => {
            return value !== 'Status';
        }),
});
