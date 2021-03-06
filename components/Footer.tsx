import Image from 'next/image';

function Footer() {
  return (
    <div className='pt-16'>
      <div className='w-full border-gray-300 border-t lg:max-w-7xl md:w-11/12 lg:mx-auto md:mx-auto'>
        <div className='container mx-auto py-12'>
          <div className='xl:flex lg:flex md:flex pt-6'>
            <div className='w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0'>
              <div className='flex items-center mb-6 xl:mb-0 lg:mb-0'>
                <svg
                  className='w-12 h-12'
                  id='logo'
                  enableBackground='new 0 0 300 300'
                  height={44}
                  viewBox='0 0 300 300'
                  width={43}
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g>
                    <path
                      fill='#4c51bf'
                      d='m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z'
                    />
                  </g>
                </svg>
                <p className='ml-3 font-bold text-xl'>Blueberry Clothing</p>
              </div>
              <p className='pt-5'>
                All items listed in this website are FAKE and SHOULD NOT be
                bought. <br />
                Checkout button is only displayed for demonstration purposes.
              </p>
            </div>
            <div className='w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0'>
              <ul>
                <li className='text-gray-800 font-bold text-xl mb-6'>
                  Community
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>About Us</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Guidelines and how to</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Quote from the best</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>How to start a blog</a>
                </li>
              </ul>
            </div>
            <div className='w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0'>
              <ul>
                <li className='text-gray-800 font-bold text-xl mb-6'>
                  Getting Started
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>About Us</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Guidelines and how to</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Quote from the best</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>How to start a blog</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Quote from the best</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Guidelines and how to</a>
                </li>
              </ul>
            </div>
            <div className='w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0'>
              <ul>
                <li className='text-gray-800 font-bold text-xl mb-6'>
                  Resources
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Accessibility</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Usability</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Marketplace</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Design &amp; Dev</a>
                </li>
                <li className='text-base text-gray-600 hover:text-gray-700 mb-5'>
                  <a href=''>Marketplace</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0'>
            <div className='w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0'>
              <p className='text-gray-800 text-base'>
                Prototype made by Matias Pedelhez @ 2022
              </p>
            </div>
            <div className='w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0'>
              <ul className='xl:flex lg:flex md:flex sm:flex justify-between'>
                <li className='text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0'>
                  <a href=''>Terms of service</a>
                </li>
                <li className='text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0'>
                  <a href=''>Privacy Policy</a>
                </li>
                <li className='text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0'>
                  <a href=''>Security</a>
                </li>
                <li className='text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0'>
                  <a href=''>Sitemap</a>
                </li>
              </ul>
            </div>
            <div className='w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0'>
              <div className='flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0'>
                <div>
                  <a
                    href='https://github.com/matiaspedelhez'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='https://img.icons8.com/material-rounded/344/github.png'
                      layout='fixed'
                      height='32'
                      width='32'
                      alt='github'
                    />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/matias-pedelhez-a84b061b4/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png'
                      layout='fixed'
                      height='32'
                      width='32'
                      alt='linkedin'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
