import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

// home layout for the home page
function HomeLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    // check if darkmode is set in local storage
    useEffect(() => {
        if (localStorage.getItem("darkMode") === "true") {
            setDarkMode(true);
        }
    }, []);


    return (
        <div className={(darkMode ? "dark" : "") + " "}>
            <main className=' bg-slate-100 dark:bg-gray-900 flex flex-col min-h-screen'>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className='flex-grow'>{children}</div>
                <Footer />
            </main>
        </div>
    );
}

export default HomeLayout;
