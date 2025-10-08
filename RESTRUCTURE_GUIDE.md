# Cấu trúc dự án đã được tổ chức lại

## Cấu trúc mới:

```
src/
├── components/                # Shared UI components
│   ├── common/               # Common components (Header, Footer, ThemeToggle)
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ThemeToggle/
│   │   └── index.js         # Barrel exports
│   ├── layout/              # Layout components (Layout, AuthLayout)
│   │   ├── Layout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── index.js         # Barrel exports
│   └── index.js             # Main components barrel export
│
├── features/                 # Feature-based organization
│   ├── admin/               # Admin feature
│   │   ├── components/      # Admin-specific components
│   │   ├── pages/          # Admin pages
│   │   └── index.js        # Admin feature exports
│   ├── auth/               # Authentication feature
│   │   ├── components/     # Auth components
│   │   ├── pages/         # Auth pages (Login, Register)
│   │   └── index.js       # Auth feature exports
│   ├── mentor/            # Mentor feature
│   │   ├── components/    # Mentor components
│   │   │   └── dashboard/ # Dashboard components
│   │   ├── pages/        # Mentor pages
│   │   └── index.js      # Mentor feature exports
│   ├── moderator/        # Moderator feature
│   │   ├── components/   # Moderator components
│   │   ├── pages/       # Moderator pages
│   │   └── index.js     # Moderator feature exports
│   └── index.js         # Main features barrel export
│
├── pages/                # Common pages
│   ├── common/          # HomePage, NotFoundPage, ProfilePage
│   └── index.js         # Pages barrel export
│
├── shared/              # Shared utilities, services, etc.
│   ├── api/            # API layer
│   ├── config/         # Configuration (axios, theme)
│   ├── constants/      # Application constants
│   ├── contexts/       # React contexts (Auth, Theme)
│   ├── hooks/          # Custom hooks
│   ├── services/       # Business logic services
│   ├── utils/          # Utility functions
│   └── index.js        # Shared barrel export
│
├── assets/             # Static assets
├── routes/             # Route definitions
└── App.jsx             # Main app component
```

## Lợi ích của cấu trúc mới:

1. **Feature-based organization**: Mỗi feature độc lập, dễ maintain
2. **Barrel exports**: Import/export dễ dàng và clean
3. **Shared layer**: Tái sử dụng code hiệu quả
4. **Clear separation**: Tách biệt rõ ràng giữa business logic và UI
5. **Scalable**: Dễ dàng thêm features mới

## Cách sử dụng imports mới:

```jsx
// Feature imports
import { LoginPage, RegisterPage } from '../features/auth';
import { AdminPage } from '../features/admin';

// Shared imports  
import { useAuth, useTheme } from '../shared/contexts';
import { API_ENDPOINTS, USER_ROLES } from '../shared/constants';

// Component imports
import { Header, Footer } from '../components/common';
import { Layout } from '../components/layout';
```