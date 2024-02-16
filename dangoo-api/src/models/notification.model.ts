import {User} from "./user.model";

export class Notification {
    id?: number;

    user?: User;

    message?: string;

    title?: string;

    created_at?: Date;

    
    status?: string;
}
