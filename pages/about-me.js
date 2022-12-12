import {motion} from 'framer-motion'
import Navigation from './components/navigation'
import Head from 'next/head'

export default function AboutMe(){
    return(
        <>
            <Head>
                <title>A propos de moi</title>
            </Head>
            <div>
                <Navigation active='about' />
                <motion.div
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                    className='text-center text-[#fffffe] md:text-7xl text-5xl'
                >
                    Bonjour ! 
                </motion.div>
                <motion.div
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                    className='text-center text-[#a7a9be] md:text-xl text-sm p-5'
                >
                    <div className='mt-5 mb-10 md:text-2xl text-md'>
                        Je m'appelle Hugo Zbinden, et je suis un jeune développeur web.    
                    </div> 

                    <div className='grid xl:grid-cols-2 grid-cols-1'>
                        <div className='mb-10 md:text-left'>
                            <h1 className='md:text-5xl text-2xl text-[#fffffe] text-center'>Pourquoi j'aime le Web ?</h1>
                            <div className='md:ml-10 mt-4'>
                                <p>Le web est un domaine qui me passionne depuis le début de mes études (~5ans).</p>
                                <p>Après avoir appris les bases sur <strong>HTML</strong> / <strong>CSS</strong> / <strong>JS</strong>, j'ai travailler sur <strong>PHP</strong> avec le framework <strong>Symfony</strong>.</p>
                                <p>Ensuite je me suis auto formé sur <strong>ReactJS</strong> et <strong>Angular</strong> (via la plateforme OpenClassroom). D'ailleurs ce site est entièrement réaliser avec <strong>NextJS</strong> & <strong>TailwindCSS</strong>.</p>
                            </div>
                        </div> 
                        <div />

                        <div>    
                        </div>
                        <div className='mb-10 md:text-right'>
                            <h1 className='md:text-5xl text-2xl text-[#fffffe] text-center'>Mes passions ?</h1>
                            <div className='md:mr-10 mt-4'>
                                <p>Une de mes passions c'est le Handball. J'ai pratiqué ce sport pendant 8ans ce qui m'as appris l'esprit d'équipe, l'entraide, le partage, et surtout la cohésion d'équipe.</p>    
                                <p>Une autre de mes passions est les jeux vidéos, je baigne dedans depuis tout jeune.</p>
                                <p>A l'heure actuelle je joue principalement à WoW (<a href='https://fr.wikipedia.org/wiki/World_of_Warcraft' className='text-[#ff8906] transition-all duration-150 hover:underline' target="_blank" rel="noopener noreferrer">World of Warcraft</a>) ainsi qu'à LoL (<a href='https://fr.wikipedia.org/wiki/League_of_Legends' className='text-[#ff8906] transition-all duration-150 hover:underline' target="_blank" rel="noopener noreferrer">League of Legends</a>)</p>
                            </div>
                        </div> 
                    </div>
                    
                    
                    <div className=''>
                        <div className='text-[#fffffe] md:text-3xl text-xl'>
                            <p>Voila ! Maintenant vous en savez un tout petit peu plus sur moi.</p> 
                            <p>Vous pouvez naviguer entre les pages pour en apprendre plus sur mon parcours scolaire et professionnel ! </p>    
                            <p>Et surtout, merci d'être venu ! </p>
                        </div>
                    </div> 
                </motion.div>
            </div>
        </>
    )
}