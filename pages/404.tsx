import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const error_image = require("/public/assets/404-2.png");
const decorative_image = require("/public/assets/Group.png");

const errorPage: NextPage = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 ">
        <div className="relative">
          <div>
            <Image src={error_image} alt="404" layout="fixed" className="z-1" />
          </div>
          <div className="absolute top-4">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <Link href="/">
                <a className="mt-6 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                  Take me there!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-96 h-96 relative">
        <Image
          src={decorative_image}
          alt="404"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default errorPage;
