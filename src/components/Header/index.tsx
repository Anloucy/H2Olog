import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-center text-center gap-4 w-full h-16 text-lg">
            <Link href='/' className="flex items-center hover:text-blue-400 transition-colors duration-200">
                H2Olog
            </Link>
            <Link href='/' className="flex items-center hover:text-blue-400 transition-colors duration-200">
                Sobre
            </Link>
        </header>
    )
}