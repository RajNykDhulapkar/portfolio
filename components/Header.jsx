import { BsFillMoonStarsFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import Logo from "./icons/Logo";
import Link from "next/link";

const Header = ({ setDarkMode }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav
            className={`p-3 px-5  bg-slate-300  w-[calc(100%-2rem)] m-auto sticky ${
                visible ? "top-2" : ""
            } z-50  rounded-lg  flex justify-between dark:text-white`}
        >
            {/* logo image  */}
            <div className='flex w-10 h-10  items-center gap-4 '>
                <Link href='/'>
                    <Logo />
                </Link>
            </div>
            <div className='flex items-center'>
                <div>
                    <BsFillMoonStarsFill
                        onClick={() => setDarkMode((prev) => !prev)}
                        className=' cursor-pointer text-2xl'
                    />
                </div>
                <div>
                    <a
                        className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
                        href='#'
                    >
                        Menu
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
