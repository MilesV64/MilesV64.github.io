import React from "react"
import DownloadButton from '../assets/download.appstore.svg'
import Illustration from '../assets/illustration.svg'
import TitleBodyGroup from '../components/TitleBodyGroup'
import Screenshots3 from '../assets/screenshots.3.png'
import Screenshots2 from '../assets/screenshots.2.png'
import Photo from '../assets/photo.png'
import MoodImg from '../assets/mood.data.png'
import FocusImg from '../assets/mood.data.png'
import Logo from '../assets/logo.png'

const HeroSection = () => (
  <div className="flex items-center -my-24 h-screen">
    <div className="flex-1">
      <div className="mr-2">
        <h1 className="text-gray-800 font-bold lineHeight-sm text-4xl lg:text-5xl">The modern<br />
          <span className="text-andanteOrange"> practice journal.</span>
        </h1>
        <p className="text-lg text-gray-600 pt-8 pb-10">
        Andante is minimal but effective practice journal to help musicians achieve calm, focused practice. 
        </p>
        <a className="block w-48" href="www.youtube.com">
          <DownloadButton className="downloadButton text-gray-800 fill-current" />
        </a>
      </div>
      
    </div>
    <div className="flex-1">
      <Illustration className="w-full max-w-xs m-auto"/>
    </div>
  </div>
)

const Section1 = () => (
  <div className="flex flex-col items-center pt-24 pb-20 text-center">
    <TitleBodyGroup 
        title="Log your sessions." 
        body="Record your sessions live with a timer and practice tools or manually add a session." />
    
    <div className="w-full max-w-2xl">
      <img className="w-full" src={Screenshots3} alt="Screenshots of Andante showing sessions and data"></img>
    </div>
    
    <TitleBodyGroup 
      title="See your progress." 
      body="Use goals, streaks, and beautiful charts to motivate you to keep working hard." />
    
  </div>
)

const Section2 = () => (
  <div>
    <img src={Photo} alt="Person practicing violin with Andante running on a phone on the music stand"></img>
    <p className="text-center text-sm text-gray-600 pt-4">I use Andante to log my violin practice</p>
  </div>
)

const Section3 = () => (
  <div className="flex flex-col lg:flex-row my-32 items-center text-center lg:text-left">
    <TitleBodyGroup className="mr-0 mb-10 lg:mr-10 lg:mb-0 flex-1"
      title="Track your mood and focus."
      body="Notice patterns in how you feel and how productive you are when you practice." />
    <div className="flex flex-col sm:flex-row">
      <img className="max-w-full px-0 py-2 sm:px-4 lg:p-2" src={MoodImg} alt="A chart showing mood data"></img>
      <div className=""><img className="max-w-full px-0 py-2 sm:px-4 lg:p-2" src={FocusImg} alt="A chart showing focus data"></img></div>
    </div>
    
  </div>
)

const Section4 = () => (
  <div className="flex flex-col-reverse lg:flex-row items-center mt-10">
    <div className="">
      <img className="" src={Screenshots2} alt="Screenshots of Andante showing journal entries"></img>
    </div>
    <TitleBodyGroup className="my-10 mx-0 lg:ml-10 lg:my-0 flex-1 text-center lg:text-left"
      title="Your thoughts, plans, notes, and ideas - all in one place."
      body="You can use the Journal for whatever you want: write about your practicing, keep a journal of your lessons, create practice plans, and more. With just enough rich text editing to stay organized, the journal is a simple and convenient place to write about your practicing." />
  </div>
)

const Section5 = () => (
  <div className="flex flex-col justify-center items-center pt-32 pb-24">
    <img className="w-48 h-48 m-auto" src={Logo}></img>
    <h2 className="font-bold text-4xl text-gray-800 py-8">Get Andante for free!</h2>
    <a className="block w-48" href="www.youtube.com">
        <DownloadButton className="downloadButton text-gray-800 fill-current" />
    </a>
  </div>
)


const Home = ( props ) => {

  return (
    <div>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )

}

export default Home;