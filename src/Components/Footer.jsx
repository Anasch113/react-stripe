import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-5 bg-extra-light-purple min-h-custom w-full'>

      {/* first */}
      <div className='flex text-gray-600 font-poppins items-center justify-around w-full flex-row max-[430px]:flex-col-reverse '>
    {/* | */}
      <div className="flex flex-col items-center gap-2">
      <h3 className=' font-poppins text-2xl font-semibold max-[430px]:text-xl'>Quick Links</h3>
      <ul className=' list-disc max-[430px]:text-sm'>
        <li><a>Home</a></li>
        <li><a>Products/Services</a></li>
        <li><a >Blog</a></li>
        <li><a >Contact Us</a></li>
      </ul>
    </div>
    {/* || */}
    <div className="flex flex-col items-center gap-2">
      <h3 className=' font-poppins text-2xl font-semibold max-[430px]:text-xl'>Contact Information</h3>
      <p className='max-[430px]:text-sm'>Address: 123 Street, Multan, Pakistan</p>
      <p className='max-[430px]:text-sm'>Email: info@ebusiness.com</p>
      <p className='max-[430px]:text-sm'>Phone: (+92) 3289602109</p>
    </div>
      </div>
{/* second */}
      <div>
      <p> &copy; 2023 E-Business. All rights reserved by Anas Ch. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer
