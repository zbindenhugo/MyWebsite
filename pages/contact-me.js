import Head from "next/head";
import Navigation from "./components/navigation";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function ContactMe(){

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const resetForm = () => {
        setemail('');
        setfirstname('');
        setlastname('');
        setmessage('');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_n16nken','template_0yfnq6o', {
            from_nom: firstname,
            from_prenom: lastname,
            from_email: email,
            from_message: message
        }, 'user_Ith7YGIQjOla8mkQEtNZd')
            .then((result) => {
                alert('Message correctement envoyé !');
                resetForm();
            }, (error) => {
                alert('Une erreur est survenue lors de l\'envoie du message. Veuillez réessayer plus tard');
                console.log(error);
            });
    }

    return(
        <>
            <Head>
                <title>Me contacter</title>
            </Head>
            <Navigation active='contact' />
            <motion.div 
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 0.8}}
                className="fixed sm:top-1/2 sm:-translate-y-1/2 sm:mt-5 mt-14">
                <div>
                    <div className="text-center text-[#fffffe] md:text-5xl text-3xl">
                        Formulaire de contact
                    </div>
                    <div className="text-center italic md:text-xl text-md text-[#a7a9be] mt-5">
                        Si vous voulez me contacter, remplissez le formulaire ci-dessous !
                    </div>

                </div>
                <div className="mt-15 grid sm:grid-cols-3 p-5">
                    <div />
                    <form onSubmit={sendEmail} className='grid sm:grid-cols-2 grid-cols-1 gap-5 '>
                        <div>
                            <input type='text' placeholder='Nom' name='from_nom' value={firstname} onChange={(e) => setfirstname(e.target.value)} className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />
                        </div>
                        <div>
                            <input type='text' placeholder='Prénom' name='from_prenom' value={lastname} onChange={(e) => setlastname(e.target.value)} className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />
                        </div>
                        <div className='col-span-2 w-full'>
                            <input type='text' placeholder='John.doe@example.com' name='from_email' value={email} onChange={(e) => setemail(e.target.value)} className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />
                        </div>
                        <div className='col-span-2 w-full'>
                            <textarea type='textarea' placeholder='Écrivez ici votre message ...' name='from_message' value={message} onChange={(e) => setmessage(e.target.value)} className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />
                        </div>
                        <button type="submit" className="p-5 bg-[#f25f4c] text-[#fffffe] col-span-2" value='Send'>
                            Envoyer le message !
                        </button>
                    </form>
                    <div />
                </div>
            </motion.div>
        </>
    )
}