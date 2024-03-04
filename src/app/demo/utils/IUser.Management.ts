export interface IRole {
    name?: string;
    _id?: string;
}

export interface IUser {
    firstname?: string;
    lastname?: string;
    username?: string;
    password?: string;
    phoneNumber?: string;
    roleId?: string;
    isActive?: boolean;
    _id?: string;
}
