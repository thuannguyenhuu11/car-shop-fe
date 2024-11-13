import { NavLink } from '@types';
interface WrapperProps {
    children: React.ReactNode;
    className?: string;
}

interface NavLink {
    path: string;
    label: string;
}

export { WrapperProps, NavLink };
