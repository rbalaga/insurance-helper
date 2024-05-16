import { PaperProps } from '@mantine/core';

export type AuthenticationPagesProps = PaperProps & { authType: AuthTypes };

export type AuthTypes = 'login' | 'signup';
export interface UserDataType {
    avatar: string;
    name: string;
    job: string;
    email: string;
    phone: string;
}