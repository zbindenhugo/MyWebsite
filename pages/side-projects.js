import Head from "next/head";
import {motion} from 'framer-motion';
import Link from "next/link";
import Navigation from "./components/navigation";

export default function SideProjects(){
    return(
        <>
            <Head>
                <title>Mes projets personnels</title>
            </Head>
            {
                /*
                    <div className="fixed top-1/2 -translate-y-1/2 text-center w-full text-[#a7a9be] text-5xl">
                        <p> PAGE EN COURS DE CONSTRUCTION ... REVENEZ PLUS TARD</p>
                        <Link href='/about-me' className="text-2xl underline">Revenir à l'accueil</Link>
                    </div>
                */
            }
            <Navigation active='projects' />
            <motion.div
                className="text-[#a7a9be] sm:mt-5 mt-14"
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 0.8}}
            >
                <div className="text-center">
                    <div className="md:text-7xl text-5xl text-center text-[#fffffe]">
                        Projets personnels
                    </div>
                    <div className="text-center italic mt-5">
                        Ici vous trouverez tous les projets personnels que j'ai fait, ou que je suis entrain de faire !
                    </div>
                </div>
                <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center p-5">
                    <div>
                        <div className="text-center text-[#fffffe] text-3xl">
                            ACPédia
                        </div>
                        <div className="text-sm italic text-[#f25f4c]">
                            Site d'information pour Animal Crossing New Horizon
                        </div>
                        <div className="mt-5">
                            <p>Ma copine jouant beaucoup à Animal Crossing, j'ai voulu l'aider, et m'aider par la même occasion. 
                            J'ai donc créer ce site se basant sur une API gratuite, donnant des information sur les créatures du jeu.</p>
                            <p>Ce site est réaliser en <strong>ReactJS</strong> et utilise le framework css <strong>Bootstrap</strong></p>
                            <p>Lien vers le site : <a href="https://acpedia.netlify.app" className="text-[#e53170]" target='_blank'>ACPédia</a></p>
                        </div>
                    </div>
                    <div>
                        <div className="text-center text-[#fffffe] text-3xl">
                            EShop
                        </div>
                        <div className="text-sm italic text-[#f25f4c]">
                            Site d'exemple pour un commerce en ligne
                        </div>
                        <div className="mt-5">
                            <p>
                                Voulant un site plus professionnel, j'ai créer un site qui permet de montrer mes compétences en matière de site 
                                professionnel. Ce site permet donc de voir des produits issus d'une API en ligne. J'ai donc créer ce site dans l'optique
                                où je serais en auto-entrepreneur, il serait ma vitrine de mes compétences.
                            </p>
                            <p>Ce site est réaliser en <strong>ReactJS</strong> et utilise le framework css <strong>TailwindCSS</strong></p>
                            <p>Lien vers le site : <a href="https://eshop-example.netlify.app" className="text-[#e53170]" target='_blank'>Eshop</a></p>
                        </div>
                    </div>
                    <div>
                        <div className="text-center text-[#fffffe] text-3xl">
                            Train My Brain
                        </div>
                        <div className="text-sm italic text-[#f25f4c]">
                            Site de quizz en ligne
                        </div>
                        <div className="mt-5">
                            <p>
                                Ma copine et moi sommes très curieux, et il nous arrive de faire des quizz de temps en temps. Cela m'a donc
                                donner l'idée de faire mon site de quizz moi même. Il se base sur une API en ligne gratuite. Alors pourquoi n'iriez-vous
                                pas tester votre culture G là-bas ? ;)
                            </p>
                            <p>Ce site est réaliser en <strong>ReactJS</strong> et utilise le framework css <strong>TailwindCSS</strong></p>
                            <p>Lien vers le site : <a href="https://trainmybrain.netlify.app" className="text-[#e53170]" target='_blank'>Trainmybrain</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}