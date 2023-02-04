const Footer = () => {
    return (
        <div className='w- mt-5  flex-grow h-fit flex flex-col gap-2 justify-end p-2'>
            {/* footer  */}
            <div className='flex justify-center items-center '>
                <p className='text-sm text-gray-500'>© 2022 - All Rights Reserved</p>
            </div>
            {/* attribution  */}
            <div className='flex  justify-center items-center'>
                <p className='text-sm text-gray-500'>
                    Made with ❤️ by
                    <a
                        className='text-blue-500'
                        href='https://github.com/RajNykDhulapkar'
                        target='_blank'
                        rel='noreferrer'
                    >
                        @rajnykdhulapkar
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
