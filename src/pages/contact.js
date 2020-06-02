import React from 'react'

import Layout from '../components/layout'



import SEO from '../components/seo'




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
            <div className="pt-20 px-2 md:pt-32 pb-10 md:pb-20 ">
                <h1 className="font-body text-center underline-custom underline-custom--center">Some title</h1>
                <h2 className="font-body text-center">Some subtitle</h2>
                <p className="max-w-lg mx-auto text-center">Some description</p>
            </div>
            <React.Fragment>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-8 mb-12">
            <div className="flex flex-col items-center">
                            <p>paragraph</p>
                                 
                        </div>
            </div>
            </React.Fragment>
        </Layout>
           
        </>
    )
}



export default ContactPage;