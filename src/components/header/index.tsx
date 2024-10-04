import { AppLogo } from "@/assets/logo"
import Link from "next/link"
import { HeaderText } from "./HeaderText"

export const Header = () => {
    return (
        <Link href={'/'} className="w-full flex items-center justify-center p-4 gap-4">
            <AppLogo />
            <HeaderText />
        </Link>
    )
}