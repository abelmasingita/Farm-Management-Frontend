export interface IFarm {
    name?: string;
    location?: string;
    owner?: string;
    contactInformation?: string;
    size?: number;
    _id?: string;
}

export interface IField {
    name?: string;
    cropType?: string;
    irrigationMethod?: string;
    soilType?: string;
    size?: number;
    _id?: string;
    farmId?: string;
}

export interface ICrop {
    _id?: string;
    name?: string;
    variety?: string;
    planting_date?: Date;
    harvest_date?: Date;
}
