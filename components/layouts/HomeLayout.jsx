import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

// home layout for the home page
function HomeLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={(darkMode ? "dark" : "") + " "}>
            <main className=' bg-white dark:bg-gray-900 flex flex-col min-h-screen'>
                <Header setDarkMode={setDarkMode} />
                <div className='flex-grow'>{children}</div>
                <Footer />
            </main>
        </div>
    );
}

export default HomeLayout;
