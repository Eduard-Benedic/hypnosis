import React from 'react'

import Layout from '../components/layout'
import Form from '../components/Form'



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
            <div className="bg-main-color my-20">

                    <Form />
               
            </div>
            
        </Layout>
           
        </>
    )
}



export default ContactPage;