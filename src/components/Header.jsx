import 'remixicon/fonts/remixicon.css';




const Header = () => {
    // simple function to toggle the mobile nemu

    const toggleMobileMenu = () => {
        // get the mobile menu
        const mobileMenu = document.getElementById('mobileMenu')
        // if it has the 'hidden' remove it. otherwise, add it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');

        }


    };

    return (
        <header className="
      py-4 px-4  lg:px-20 stick  ">
            <div className="container backdrop-blur-sm  mx-auto ">
                <nav className=" flex items-center justify-between">
                    <div className="text-3xl md:text-4xl lg:text-5xl
                font-light m-0 ">MCODE</div>
                    <ul className="gap-12 hidden md:flex">
                        <li><a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">COMPANY</a></li>
                        <li><a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">FEATURES</a></li>
                        <li><a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">RESOURCES</a></li>
                        <li><a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">DOCS</a></li>
                    </ul>
                    <button className="hidden md:block bg-[#a7a7] text-black py-3 px-8 
                    rounded-full border-none font-medium transition-all duration-500  hover:bg-white cursor-pointer"
                    >SIGNIN</button>

                    {/* mobile menu button  visible only on mobile*/}
                    <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50 '>
                        <i class="ri-menu-line"></i>
                    </button>

                    {/* mobile menu- hidden by default */}
                    <div id='mobileMenu' className='hidden fixed top-16 h-screen bottom-0 right-0 left-0 p-5 md:hidden 
                    z-40  bg-black/70 backdrop-blur-md '>
                        <nav className='flex flex-col gap-6 items-center'>
                            <a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">COMPANY</a>
                            <a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">FEATURES</a>
                            <a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">RESOURCES</a>
                            <a className="text-base tracking-wider 
                        transition-colors hover:text-gray-300
                        z-50" href="#">DOCS</a>
                        </nav>
                    </div>



                </nav>
            </div>

        </header>
    )
}

export default Header

