import { type FC } from "react";

interface NavbarProps {
    isAdmin: boolean;
}

export const Navbar: FC<NavbarProps> = ({isAdmin}) => {
    return (
        <>
            {isAdmin} ? (

            )
        </>
    );
}
