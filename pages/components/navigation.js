import Link from "next/link";
import {motion} from 'framer-motion'
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai'
import { useState } from "react";

export default function Navigation({ active }){

    const [showMenu, setShowMenu] = useState(false)
    
    const clickShowMessage = () => {

    }

    return(
        <>
            <nav className="sticky top-0 w-full bg-[#0f0e17] mb-5 text-center sm:block hidden  border-b border-[#ff8906] z-10">
                <ul className="text-[#fffffe] flex md:gap-10 gap-2 md:text-xl text-md p-4 left-1/2 justify-center">
                    <Link className={active === 'about' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/about-me'>Accueil</Link>
                    <Link className={active === 'diplomas' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/diplomas'>Mes diplômes</Link>
                    <Link className={active === 'experiences' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/experiences'>Mes expériences</Link>
                    <Link className={active === 'projects' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/side-projects'>Mes projets persos</Link>
                    <Link className={active === 'contact' ? 'border-b-2 font-bold border-[#ff8906]' : ''} href='/contact-me'>Me contacter</Link>
                </ul>
            </nav>
            <AiOutlineMenuUnfold className="sm:hidden text-white scale-[300%] mt-10 ml-10 cursor-pointer" onClick={() => setShowMenu(!showMenu)}/>
            <motion.nav 
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 0.8}}
                className="sm:hidden fixed top-0 -left-[100vw] h-[100vh] w-[100vw] bg-[#0f0e17] z-10 open:left-0 transition-all duration-500" open={showMenu}
            >
                <AiOutlineMenuFold className="sm:hidden text-white scale-[300%] mt-10 ml-10 cursor-pointer" onClick={() => setShowMenu(!showMenu)}/>   
                <div className="text-center grid grid-cols-1 fixed top-1/2 -translate-y-1/2 gap-5 left-1/2 -translate-x-1/2">
                    <Link className={active === 'about' ? 'font-bold text-[#ff8906] text-3xl' : 'text-[#a7a9be] transition-all duration-150 hover:tracking-widest text-xl'} href='/about-me'>Accueil</Link>
                    <Link className={active === 'diplomas' ? 'font-bold text-[#ff8906] text-3xl' : 'text-[#a7a9be] transition-all duration-150 hover:tracking-widest text-xl'} href='/diplomas'>Mes diplômes</Link>
                    <Link className={active === 'experiences' ? 'font-bold text-[#ff8906] text-3xl' : 'text-[#a7a9be] transition-all duration-150 hover:tracking-widest text-xl'} href='/experiences'>Mes expériences</Link>
                    <Link className={active === 'projects' ? 'font-bold text-[#ff8906] text-3xl' : 'text-[#a7a9be] transition-all duration-150 hover:tracking-widest text-xl'} href='/side-projects'>Mes projets persos</Link>
                    <Link className={active === 'contact' ? 'font-bold text-[#ff8906] text-3xl' : 'text-[#a7a9be] transition-all duration-150 hover:tracking-widest text-xl'} href='/contact-me'>Me contacter</Link>
                </div>
            </motion.nav>
        </>
    )
}