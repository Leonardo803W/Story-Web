import { Link } from "react-router-dom";

type Props = {
    to: string;
    children: React.ReactNode;
    className?: string;
};

export function ButtonLink({ to, children, className }: Props) {
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}