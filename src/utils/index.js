// Application constants
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
    },
    USERS: {
        PROFILE: '/users/profile',
        UPDATE: '/users/update',
    },
    MENTORS: {
        LIST: '/mentors',
        REGISTER: '/mentors/register',
        DASHBOARD: '/mentors/dashboard',
    },
    ADMIN: {
        USERS: '/admin/users',
        CONTENT: '/admin/content',
        ANALYTICS: '/admin/analytics',
    },
};

export const USER_ROLES = {
    ADMIN: 'admin',
    MODERATOR: 'moderator',
    MENTOR: 'mentor',
    USER: 'user',
};

export const STORAGE_KEYS = {
    AUTH_STATE: 'authState',
    THEME: 'theme',
    TOKEN: 'token',
};