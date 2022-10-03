export type FileType = 'png' | 'jpeg';
// export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    theme: string;
    md: boolean;
    fontSize: string;
    images: string[];
    widths: string[];
    heights: string[];
    username: string;
    profile: string[];
}
