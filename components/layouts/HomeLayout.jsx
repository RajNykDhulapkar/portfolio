// home layout for the home page
function HomeLayout({ children }) {
    return (
        <div className='home-layout'>
            <Header />
            {children}
        </div>
    );
}
