import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id='about' className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-md w-[300px] h-[300]"
        alt="hero"
        src="/image/profile.png"
        width={500}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
        I am From Kandhkot Sindh Pakistan, I have completed my Bachlo's from Shah Abdul Latif University of Khairpur. 
        In my spare time I enjoy the reading novels, watching TV Programs and Playing cricket
      </p>
      
      <div className="flex justify-center">
      <Link href={'/#Contact'}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact Me
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
