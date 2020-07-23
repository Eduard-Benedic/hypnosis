import React, { useState } from "react"



const FormComponent = () => {

     const [formData, setFormData] = useState({});

     const handleInputChange = event => {
          const target = event.target;
          const value = target.value;
          const name = target.name;
          setFormData((previousdata) => {
               return { ...previousdata, [name]: value }
          })
     }

     return (
          <>
               <div className="py-10 flex flex-col justify-center">
                    <div className="md:w-3/4 mx-auto px-4">
                         <h2 className="max-w-2xl text-2xl text-custom-white  mb-10 pb-4 underdash">Daca aveti orice intrebare, va rugam sa completati formularul de mai jos:</h2>
                         <form>
                              <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 mb-8">
                                   <div>
                                        <label htmlFor="firstName" className="inline-block text-base sm:text-xl text-custom-white">First name</label>
                                        <span className="block mb-2  text-xs text-second-color">*Required</span>
                                        <input
                                             onChange={(e) => handleInputChange(e)}
                                             value={formData.firstName || ''}
                                             id="firstName"
                                             type="text"
                                             name="firstName"
                                             className="block w-full p-2 bg-transparent text-sm sm:text-base  text-custom-white border border-solid border-custom-white rounded-md outline-none"
                                             required
                                        />
                                   </div>
                                   <div>
                                        <label
                                             htmlFor="lastName"
                                             className="inline-block  text-base sm:text-xl text-custom-white">Last name</label>
                                        <span className="block mb-2  text-xs text-second-color">*Required</span>
                                        <input
                                             onChange={(e) => handleInputChange(e)}
                                             value={formData.lastName || ''}
                                             id="lastName"
                                             name="lastName"
                                             type="text"
                                             className="block w-full p-2 bg-transparent text-sm sm:text-base  text-custom-white border border-solid border-custom-white rounded-md outline-none"
                                             required
                                        />
                                   </div>
                              </div>
                              <div className="grid grid-cols-1 gap-4 md:gap-8  md:grid-cols-2 mb-8">
                                   <div>
                                        <label htmlFor="phone-number" className="inline-block mb-2 text-base sm:text-xl text-custom-white">Phone number</label>
                                        <input
                                             onChange={(e) => handleInputChange(e)}
                                             value={formData.phoneNumber || ''}
                                             id="phone-number"
                                             type="text"
                                             name="phoneNumber"
                                             className="block w-full p-2 bg-transparent  text-sm sm:text-base text-custom-white border border-solid border-custom-white rounded-md outline-none"
                                             required
                                        />
                                   </div>

                                   <div>
                                        <label htmlFor="email" className="inline-block mb-2 text-base sm:text-xl  text-custom-white">E-mail</label>
                                        <input
                                             onChange={(e) => handleInputChange(e)}
                                             value={formData.email || ''}
                                             id="email"
                                             type="email"
                                             name="email"
                                             className="block w-full p-2 bg-transparent  text-sm sm:text-base text-custom-white border border-solid border-custom-white rounded-md outline-none"
                                             required
                                        />
                                   </div>
                              </div>
                              <div>
                                   <label htmlFor="lifestyle-textarea" className="inline-block mb-2 text-base sm:text-xl  text-custom-white">Please describe a brief</label>
                                   <textarea
                                        onChange={(e) => handleInputChange(e)}
                                        id="lifestyle-textarea"
                                        name="lifestyleTextarea"
                                        className="w-full h-40 p-2 bg-transparent text-sm sm:text-base text-custom-white border border-solid border-custom-white rounded-md outline-none">

                                   </textarea>
                              </div>
                              <button className="w-full sm:w-40 btn mt-10 btn bg-second-color">Send</button>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default FormComponent
