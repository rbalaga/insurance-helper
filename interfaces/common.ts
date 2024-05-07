import { PaperProps } from '@mantine/core';

export type AuthenticationPagesProps = PaperProps & { authType: AuthTypes };

export type AuthTypes = 'login' | 'signup';