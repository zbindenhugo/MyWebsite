import Head from "next/head";
import Link from "next/link";
import Navigation from "./components/navigation";

export default function Experiences(){
    return(
        <>
            <Head>
                <title>Mes expériences professionelles</title>
            </Head>
            <Navigation active='experiences' />
            {
                /*
                    <div className="fixed top-1/2 -translate-y-1/2 text-center w-full text-[#a7a9be] text-5xl">
                        <p> PAGE EN COURS DE CONSTRUCTION ... REVENEZ PLUS TARD</p>
                        <Link href='/about-me' className="text-2xl underline">Revenir à l'accueil</Link>
                    </div>
                */
            }
            <div className="text-[#a7a9be]">
                <div className="md:text-7xl text-5xl text-center text-[#fffffe]">
                    Expériences professionelles
                </div>
                <div className="text-center italic mt-5">
                    Voici toutes les expériences professionelles que j'ai à ce jour !
                </div>
                <div className="p-14 text-center grid md:grid-cols-2 grid-cols-1">
                    <div className="md:mb-0 mb-10">
                        <div>
                            <div className="mt-5">
                                <div className="text-center text-[#fffffe] text-3xl">
                                    Analyste Programmeur chez <span>Autajon</span>
                                </div>
                                <div className="text-sm italic text-[#f25f4c]">
                                    De Septembre 2021 à Maintenant (en poste)
                                </div>
                            </div>
                        </div>
                        <div className="text-left mt-5">
                            <div>
                                <p>Langages utilisés : <strong>Delphi</strong> / <strong>ReactJS</strong> / <strong>NodeJS</strong> / <strong>SQL</strong> </p>  
                            </div> 
                            <div>
                                <p>Environnement Technique : <strong>Windows 10</strong> / <strong>ReactJS</strong> / <strong>NodeJS</strong> / <strong>SQL</strong> </p>  
                            </div> 
                            <div>
                                <p className="mb-2 mt-2 font-bold text-xl">Présentation du poste :</p>
                                <p className="ml-5">Réalisation d'applications en Delphi principalement pour la production.</p>
                                <p className="ml-5">Analyser les besoins avec un développeur sénior, puis celui-ci en rédigeait une spécification</p>
                                <p className="ml-5">Migration d'une application delphi en ReactJS / NodeJS pour présentation du Web.</p>
                                <p className="ml-5">Réalisation de flux d'automatisation avec l'outil <strong>DEX</strong></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="mt-5">
                                <div className="text-center text-[#fffffe] text-3xl">
                                    Analyste Programmeur chez <span>Schaeffer Développement</span>
                                </div>
                                <div className="text-sm italic text-[#f25f4c]">
                                    De Septembre 2021 à Maintenant (en poste)
                                </div>
                            </div>
                        </div>
                        <div className="text-left mt-5">
                        <div>
                                <p>Langages utilisés : <strong>Progress4GL</strong> / <strong>Java</strong></p>  
                            </div> 
                            <div>
                                <p>Environnement Technique : <strong>Windows 10</strong> / <strong>ReactJS</strong> / <strong>NodeJS</strong> / <strong>SQL</strong> </p>  
                            </div> 
                            <div>
                                <p className="mb-2 mt-2 font-bold text-xl">Présentation du poste :</p>
                                <p className="ml-5">Réalisation de développements en suivant une analyse en Progress4GL</p>
                                <p className="ml-5">Réalisation d'applications Android en Java (inventaire / gestion du stock)</p>
                                <p className="ml-5">Réalisation de Webservices (Api) pour les applications Android</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}