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
            {   /*
                
                    <div className="fixed top-1/2 -translate-y-1/2 text-center w-full text-[#a7a9be] text-5xl">
                        <p> PAGE EN COURS DE CONSTRUCTION ... REVENEZ PLUS TARD</p>
                        <Link href='/about-me' className="text-2xl underline">Revenir à l'accueil</Link>
                    </div>
                
                */
            }
            {
                
                <motion.div 
                    className="text-[#a7a9be]"
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                >
                    <div className="md:text-7xl text-5xl text-center text-[#fffffe]">
                        Mes diplomes
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-center mt-20 p-5">
                        <div>
                            <h1 className="md:text-4xl text-2xl">LICENCE INFORMATIQUE</h1>
                            <h2 className="text-sm italic text-[#f25f4c]">Reims - Sept. 2019 / Juil. 2020</h2>
                            <div className="p-5 text-left">
                                <p className="mb-2">
                                    Obtention de la licence informatique à l'Université Reims Champagne Ardennes.
                                </p>
                                <p className="mb-2">
                                    Lors de cette licence j'ai pu renforcé mes acquis en DUT.
                                    J'ai principalement utiliser les langages suivant :
                                    <ol className="ml-5">
                                        <li>- HTML / CSS / JS</li>
                                        <li>- JAVA</li>
                                        <li>- C</li>
                                        <li>- Unreal Engine (C# + Modélisation 3D)</li>
                                    </ol>
                                </p>
                                <p>A la fin de l'année j'ai effectuer un stage de 6 semaines afin de réaliser un site en PHP avec le framework Symfony pour une association de Tarot.</p>
                            </div>
                        </div>
                        <hr className="md:hidden mt-10" />
                        <div className="sm:mt-0 mt-10 p-5">
                            <h1 className="md:text-4xl text-2xl">DUT INFORMATIQUE</h1>
                            <h2 className="text-sm italic text-[#f25f4c]">Reims - Sept. 2017 / Juil. 2019</h2>
                            <div className="p-5 text-left">
                                <p className="mb-2">
                                    Obtention du DUT Informatique à Institut Universitaire de Reims Châlons-Charleville (IUT RCC).
                                </p>
                                <p className="mb-2">
                                    Durant ces deux années de DUT, j'ai pu découvrir le monde de l'informatique sous tous ces angles.
                                </p>
                                <p className="mb-2">J'ai pu découvrir la Programmation Orientée Objet avec <strong>JAVA</strong> ainsi que <strong>C++</strong></p>
                                <p className="mb-2">J'ai aussi découvert le monde du web en travaillant sur <strong>HTML / CSS / JS</strong>, ainsi que <strong>PHP</strong> en natif mais aussi avec son framework <strong>Symfony</strong>.</p>
                                <p className="mb-2">Tous ces langages vont de pair avec une base de données, ainsi nous avons appris à gerer une BD, et appris le langage <strong>SQL & PLSQL</strong>.</p>
                                <p className="mb-2">Enfin, mon DUT considérait que nous devions être capable de gérer notre entreprise. Celui-ci nous a appris la gestion d'un projet en groupe, mais également la gestion d'une entreprise en nous donnant des bases en droit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-2xl p-5">
                        Voilà c'est tout pour mes diplômes ! Pour ce qui est du bac, j'ai obtenu le BAC Scientifique Science de l'Ingénieur (SSI) avec mention <strong>ASSEZ-BIEN</strong>.
                    </div>

                </motion.div>
                
            }
        </>
    )
}