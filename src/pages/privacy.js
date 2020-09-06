import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'gatsby';
import styles from '../css/privacy.module.css'

const TitleLabel = ( props ) => (
    <h2 className="pt-6 pb-2 lineHeight-sm text-gray-800 font-bold text-2xl md:text-3xl">{props.text}</h2>
)

const BodyText = ( props ) => (
    <h2 className="pt-2 pb-16 text-gray-700 font-normal text-lg">{props.text}</h2>
)

const Privacy = ( props ) => {

    return (
        <div className={styles.margin + " pb-16"}>
            <div className="flex py-10 items-center">
                <Link to="/">
                    <img src={Logo} alt='Andante Logo' className="mr-4 w-12 h-12"/>
                </Link>
                <Link to="/" className="px-2 py-1 text-gray-800 text-xl font-medium">Andante</Link>
            </div>

            <h1 className="font-bold text-5xl text-gray-800">Privacy Policy</h1>

            <div className="flex items-center py-4 px-6 mb-6 mt-8 border-gray-300 border bg-gray-200 rounded-lg">
                <div className="text-xl pr-5">🔒</div>
                <p className="text-base font-medium text-gray-700">
                Practicing is a personal thing, and as such privacy is a top priority for Andante.
                </p>
            </div>

            <TitleLabel 
                text="You are the only one with access to your practice sessions, journal entries, etc." />
            <BodyText
                text={(<p>All of your personal data (your profiles, practice sessions, journal entries, notes, recordings) are stored locally on your iPhone.
                In order to keep improving Andante, I do receive <span className="font-semibold text-gray-800">anonymous usage data</span> to understand how people use the app, and to discover bugs and crashes.</p>)}/>
        
            <TitleLabel
                text="App Usage" />
            <BodyText
                text="Andante collects some data about how people use the app so I can improve the design. This is done completely anonymously -  when you interact with a button or start a practice session, I can see that the event happened but not who triggered the event, meaning your personal data is completely safe and separate from app usage statistics. This data is only used to improve the app and is not shared or sold." />

            <TitleLabel
                text="Error Logs" />
            <BodyText       
                text="Apple collects error logs if you have chosen to allow it on your device. If allowed, Apple anonymously shares useful data to see what may have gone wrong." />

            <TitleLabel
                text="Data Export" />
            <BodyText
                text="Apple collects error logs if you have chosen to allow it on your device. If allowed, Apple anonymously shares useful data to see what may have gone wrong." />

            <TitleLabel
                text="Questions?" />

            <a href="mailto:contact@andante.app" className="block text-lg text-blue-500 pt-2">Contact me</a>

            <p className="mt-24 text-gray-500 text-base">Last updated September 5, 2020.</p>
        </div>
        
    )

}

export default Privacy;