import Head from 'next/head';
import Navbar from '../components/Navbar.jsx'
import Main from './main.jsx';

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Next Flix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   

      <Navbar/>
      <Main/>
    </div>
  )
}
