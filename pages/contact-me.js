import Head from "next/head";
import Navigation from "./components/navigation";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import CustomInput from "./components/custominput";

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
            <div className="fixed sm:top-1/2 sm:-translate-y-1/2">
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
                        <CustomInput type='text'     name='from_nom'     placeholder='Nom'               value={firstname} onChange={setfirstname} />
                        <CustomInput type='text'     name='from_prenom'  placeholder='Prénom'            value={lastname}  onChange={setlastname} />
                        <CustomInput type='text'     name='from_email'   placeholder='Email'             value={email}     onChange={setemail} />
                        <CustomInput type='textarea' name='from_message' placeholder='Votre message ...' value={message}   onChange={setmessage} />
                        <button type="submit" className="p-5 bg-[#f25f4c] text-[#fffffe] col-span-2" value='Send'>
                            Envoyer le message !
                        </button>
                    </form>
                    <div />
                </div>
            </div>
        </>
    )
}