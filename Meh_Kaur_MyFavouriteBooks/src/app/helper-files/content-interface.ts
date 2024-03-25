export interface Content{
    id: number | null;
    title: string;
    description: string;
    creator: string;
    imgUrl?: string;
    type?: string;
    tags?: string[];
    isSelected?: boolean;
    }
    