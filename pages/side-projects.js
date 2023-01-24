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
                    <div className="text-center italic mt-5 p-2">
                        Ici vous trouverez tous les projets personnels que j'ai fait, ou que je suis entrain de faire !
                    </div>
                </div>
                <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center p-5">
                    <div className="sm:mb-10 mb-20">
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
                    <div className="sm:mb-10 mb-20">
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
                    <div className="sm:mb-10 mb-20">
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
                    <div className="sm:mb-10 mb-20">
                        <div className="justify-center text-[#fffffe] text-3xl">
                            Ce site
                        </div>
                        <div className="text-sm italic text-[#f25f4c]">
                            Mon site personnel
                        </div>
                        <div className="mt-5">
                            <p>
                                Bon, bien évidemment ce site est présent en tant que projet personnel. En tant que développeur web, cela aurait été 
                                une honte que je n'ai pas mon site personnel !
                            </p>
                            <p>Ce site est réaliser en <strong>NextJS</strong> et utilise le framework css <strong>TailwindCSS</strong></p>
                            <p>Pas besoin de lien vous êtes déjà dessus ... </p>
                        </div>
                    </div>
                    <div className="sm:mb-10 mb-20">
                        <div className="justify-center text-[#fffffe] text-3xl">
                            F1 News
                        </div>
                        <div className="text-sm italic text-[#f25f4c]">
                            Site pour fans de F1
                        </div>
                        <div className="mt-5">
                            <p>
                                Une de mes grande passion est le sport automobile, particulièrement la Formule 1. C'est un sport noble qui demande des
                                capacité physiqye hors du commun. Dans cette optique je suis actuellement entrain de développer un site pour fans de F1,
                                où l'on pourra discuter de chaques Grand Prix entre fans, avoir les résultats quasiment en temps réel.
                                Ce site est en anglais, car je trouvais cela important de ne pas le faire qu'en français afin que toutes les communautés de fans puissent se réunir.
                            </p>
                            <p>Ce site est réaliser en <strong>ReactJS</strong> et utilise le framework css <strong>Bootstrap</strong></p>
                            <p>Lien vers le site : <a href="https://myf1news.netlify.app" className="text-[#e53170]" target='_blank'>F1 News</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}