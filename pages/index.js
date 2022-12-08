import Head from 'next/head'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo's World</title>
      </Head>
      <div className="h-screen w-screen text-center">
        <div className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#fffffe]'>
          <motion.div 
            initial={{opacity: 0}}
            transition={{delay: 0.5, duration: 0.5}}
            animate={{opacity: 1}}
            className='text-[#fffffe] xl:text-7xl text-3xl'

          >
            Hugo Zbinden
          </motion.div>
          <motion.div 
            initial={{opacity: 0}}
            transition={{delay: 0.6, duration: 0.5}}
            animate={{opacity: 1}}
            className='text-[#a7a9be] xl:text-md text'
          >
            Jeune développeur web
          </motion.div>
          <motion.div 
            initial={{opacity: 0}}
            transition={{delay: 1.5, duration: 0.3}}
            animate={{opacity: 1}}
            className='text-[#a7a9be] mt-20 animate-bounce transition-all duration-75'
            href='/about-me'
          >
            <Link href='/about-me' className='w-full h-full transition-all duration-150 hover:tracking-widest text-xl'>Cliquez pour en savoir plus</Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
