import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

// home layout for the home page
function HomeLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className=' bg-white dark:bg-gray-900 '>
                <Header setDarkMode={setDarkMode} />
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default HomeLayout;
