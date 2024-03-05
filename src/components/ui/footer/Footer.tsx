import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-secondaryBgColorLight dark:bg-secondaryBgColorDark dark:border-tableBorderColorDark">
        <div className="w-full max-auto p-4 md:px-16 py-6 lg:py-8">
          {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-secondTextDark">
              © {currentYear}{" "}
              <Link
                href="https://jrfullstackporfolio.netlify.app/"
                className="hover:underline hover:text-white"
                target="_blank">
                JRFullStack
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                href="https://www.linkedin.com/in/jimmy-reyes-c/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FaLinkedin />
                <span className="sr-only">Linkedin Page</span>
              </Link>
              <Link
                href="https://github.com/jrfullstack"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaGithub />
                <span className="sr-only">Github page</span>
              </Link>
              <Link
                href="https://jrfullstackporfolio.netlify.app/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <TbWorldWww />
                <span className="sr-only">Developer page</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
