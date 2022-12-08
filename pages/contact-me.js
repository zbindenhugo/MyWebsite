import Head from "next/head";
import Link from "next/link";

export default function ContactMe(){
    return(
        <>
            <Head>
                <title>Me contacter</title>
            </Head>
            <div className="fixed top-1/2 -translate-y-1/2 text-center w-full text-[#a7a9be] text-5xl">
                <p> PAGE EN COURS DE CONSTRUCTION ... REVENEZ PLUS TARD</p>
                <Link href='/about-me' className="text-2xl underline">Revenir à l'accueil</Link>
            </div>
        </>
    )
}