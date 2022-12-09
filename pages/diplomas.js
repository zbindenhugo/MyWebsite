import Head from "next/head";
import Link from "next/link";
import Navigation from "./components/navigation";
import {motion} from 'framer-motion'

export default function Diplomas(){
    return(
        <>
            <Head>
                <title>Mes diplomes</title>
            </Head>
            <Navigation active='diplomas' />
            {
                
                    <div className="fixed top-1/2 -translate-y-1/2 text-center w-full text-[#a7a9be] text-5xl">
                        <p> PAGE EN COURS DE CONSTRUCTION ... REVENEZ PLUS TARD</p>
                        <Link href='/about-me' className="text-2xl underline">Revenir à l'accueil</Link>
                    </div>
                
                
            }
            {
                /*
                <motion.div 
                    className="text-[#a7a9be]"
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                >
                    <div className="text-7xl text-center text-[#fffffe]">
                        Mes diplomes
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 text-center mt-5">
                        <div>
                            <h1 className="text-2xl">LICENCE INFORMATIQUE</h1>
                            <h2 className="text-sm italic text-[#f25f4c]">Reims - Sept. 2019 / Juil. 2020</h2>
                            <div className="p-5 text-left">
                                <p className="mb-3">
                                    Obtention de la licence informatique à l'Université Reims Champagne Ardennes.
                                </p>
                                <p className="mb-3">
                                    Lors de cette licence j'ai pu renforcé mes acquis en DUT.
                                    J'ai principalement utiliser les langages suivant :
                                    <ol className="ml-5">
                                        <li>HTML / CSS / JS</li>
                                        <li>JAVA</li>
                                        <li>C</li>
                                        <li>Unreal Engine (C# + Modélisation 3D)</li>
                                    </ol>
                                </p>
                                <p>A la find de l'année j'ai effectuer un stage de 6 semaines afin de réaliser un site en PHP avec le framework Symfony pour une association de Tarot.</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">DUT INFORMATIQUE</h1>
                            <h2 className="text-sm italic text-[#f25f4c]">Reims - Sept. 2019 / Juil. 2020</h2>
                            <div className="p-5 text-left">
                                <p className="mb-3">
                                    Obtention de la licence informatique à l'Université Reims Champagne Ardennes.
                                </p>
                                <p className="mb-3">
                                    Lors de cette licence j'ai pu renforcé mes acquis en DUT.
                                    J'ai principalement utiliser les langages suivant :
                                    <ol className="ml-5">
                                        <li>HTML / CSS / JS</li>
                                        <li>JAVA</li>
                                        <li>C</li>
                                        <li>Unreal Engine (C# + Modélisation 3D)</li>
                                    </ol>
                                </p>
                                <p>A la find de l'année j'ai effectuer un stage de 6 semaines afin de réaliser un site en PHP avec le framework Symfony pour une association de Tarot.</p>
                            </div>
                        </div>
                        <div>1</div>
                    </div>

                </motion.div>
                */
            }
        </>
    )
}