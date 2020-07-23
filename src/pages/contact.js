import React from 'react'

import Layout from '../components/layout'
import Form from '../components/Form'
import SEO from '../components/seo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelopeOpen, faBuilding } from '@fortawesome/free-solid-svg-icons'



const ContactPage = () => {
 


    //==================== SEO TAGS =====================


    return (
        <>
        <Layout>
            <SEO title={'title'} 
                description={[
                  {name: 'description', content: 'contact page description'}
                ]}
            />
            <div className="px-8 container-xl mx-auto">
                 <h1 className="text-4xl mt-16 md:mt-32 mb-10 underdash-left">Have a question, get in touch</h1>
                <h3 className="mb-10 md:mb-20">Noi suntem o organizatie care are ca orientare omul dincolo de toate.</h3>
                <div className="grid grid-cols-1 row-gap-10 lg:grid-cols-3 md:col-gap-8">
                    <div className="flex flex-col justify-center shadow-lg bg-custom-white py-8">
                        <div className="flex justify-center mb-10">
                            <FontAwesomeIcon className="text-4xl text-main-color" icon={faBuilding}/>
                        </div>
                        <div className="text-center">
                            <h3 className="mb-4 text-lg">Ne puteti gasi la adresa:</h3>
                            <p className="text-lg">395 Alexandru Ioan Cuza</p>
                            <p className="text-lg">Bucuresti</p>

                        </div>
                         
                    </div>
                    <div className="flex flex-col justify-center shadow-lg bg-custom-white py-8">
                        <div className="flex justify-center mb-10">
                            <FontAwesomeIcon className="text-4xl text-main-color" icon={faEnvelopeOpen}/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg">Ne puteti trimite email la:</h3>
                                <a className="text-main-color font-bold text-2xl tracking-wider hover:text-second-color"
                                href="mailto: neurohypnosis.com@gmail.com">
                                    neurohypnosis@gmail.com
                            </a>
                        </div>
                         
                    </div>
                    <div className="flex flex-col justify-center shadow-lg bg-custom-white py-8">
                        <div className="flex justify-center mb-10">
                                <FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-main-color" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg">Ne poti contacta la numarul:</h3>
                            <a href="tel:+074834343" className="text-main-color font-bold text-2xl tracking-wider hover:text-second-color" >07434989</a>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="gradient-step my-20">
                <Form />
                
            </div>
            
        </Layout>
           
        </>
    )
}



export default ContactPage;