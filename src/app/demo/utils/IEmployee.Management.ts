export interface IEmployee {
    name?: string;
    position?: string;
    _id?: string;
}

export interface ITask {
    name?: string;
    description?: string;
    status?: string;
    task_date?: Date;
    field_id?: string;
    employee_id?: string;
    _id?: string;
}
