import { Tag } from './tag';

export class Notice {
    id: number;
    name: string;
    description: string;
    creatorName: string;
    creationDate: Date;
    tags: Tag[];
}
