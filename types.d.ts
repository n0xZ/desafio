export interface Project {
    id: string;
    createdAt: any;
    name: string;
    description: string;
    projectManager: string;
    assignedTo: string;
    status: string;
}

export interface ProjectForm {
    name: string;
    description: string;
    projectManager: string;
    assignedTo: string;
    status: string;
}
