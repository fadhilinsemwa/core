// types/types.ts
// types/types.ts
export interface Subject {
    id: string;
    name: string;
    grade: string;
}

export interface Course {
    id: string;
    name: string;
    subjects: Subject[];
    standards: { [key: string]: string }; // Added standards property
}
