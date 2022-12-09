import Link from "next/link";
import {motion} from 'framer-motion'

export default function Navigation({ active }){

    return(
        <nav className="w-full bg-transparent  mb-10 text-center sm:opacity-100 opacity-0 border-b border-[#ff8906]">
            <ul className="text-[#fffffe] flex md:gap-10 gap-2 md:text-xl text-md p-4 left-1/2 justify-center">
                <Link className={active === 'about' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/about-me'>Accueil</Link>
                <Link className={active === 'diplomas' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/diplomas'>Mes diplômes</Link>
                <Link className={active === 'experiences' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/experiences'>Mes expériences</Link>
                <Link className={active === 'projects' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/side-projects'>Mes projets persos</Link>
                <Link className={active === 'contact' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/contact-me'>Me contacter</Link>
            </ul>
        </nav>
    )
}