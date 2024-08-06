import Image from 'next/image';
import footerlogo from '@/../public/images/logo.png';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-[#1F2259] py-20 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-40 gap-y-3 sm:gap-y-20  lg:flex lg:flex-row lg:justify-between lg:items-start space-y-6 xs:space-y-16 sm:space-y-0 md:space-y-0 lg:space-x-6 md:pr-20">
                <div className=" flex flex-col space-y-10 pr-2">
                    <Image src={footerlogo} alt="logo" width={350} height={250} className="" />
                    <p className="text-sm text-white opacity-75 pl-4 md:pl-10 w-8/10 md:w-3/4">
                        We have been caring for you in our clinics for over 100
                        years.
                    </p>
                </div>
                <div className="pl-4 md:pl-0">
                    <p className="text-lg text-medium pb-3">Pages</p>
                    <div className="flex flex-col space-y-3 text-sm">
                        <Link href="/" className="">Home</Link>
                        <Link href="/aboutus" className="">About Us</Link>
                        <Link href="/contact" className="">Contact Us</Link>
                    </div>
                </div>
                <div className="pl-4 lg:pl-0">
                    <p className="text-lg text-medium pb-3">Quick Links</p>
                    <div className="flex flex-col space-y-3 text-sm">
                        <a className="">Services</a>
                        <a className="">Blogs</a>
                    </div>
                </div>
                <div className="pl-4 md:pl-0">
                    <p className="text-lg text-medium pb-3">Follow Us</p>
                    <div className="flex flex-col space-y-3 text-sm">
                        <a className="">Facebook</a>
                        <a className="">Insatgram</a>
                        <a className="">Twitter</a>
                        <a className="">Youtube</a>
                    </div>
                </div>
            </div>
            <span className="hidden md:flex justify-center">
                <hr className="bg-white opacity-50 mt-20 sm:w-1/4 md:w-3/4" />
            </span>
        </footer>
    );
};
export default Footer;