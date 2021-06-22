import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer.js'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Optica 911"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Optica 911</title>
            </Head>
            
           <Navbar />
            <main>
                {children}
                

            </main>
            {/* Únete */}
           <Footer />
        </div>
        
    )
}