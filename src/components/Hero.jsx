// import 'remixicon/fonts/remixicon.css';
import Spline from "@splinetool/react-spline"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row
       justify-between items-center min-h-[calc(90vh-6rem)] ">
            <div className="max-w-xl ml-[5%] z-10 mt-[90%] 
            md:mt-[60%] lg:mt-0" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                {/* Tag box-with gradient border */}
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r
                from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)]
                rounded-full">
                    <div className="absolute gap-2 inset-[3px] bg-black rounded-full 
                    flex justify-center items-center">
                        <i class="ri-vip-diamond-line"></i>
                        INTRODUCING
                    </div>
                </div>

                {/* main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold
                tracking-wider my-8 ">
                    NEXT GEM
                    <br />
                    DEVELOPERS
                </h1>

                {/* description */}
                <p className="text-base sm:text-lg tracking-wider 
                text-gra-400 max-w-[25rem] lg:max-w-[30rem]">
                    the best way to reach humens instead of spam folders, delivery transactional and marketing emails at scale.
                </p>

                {/* botton */}
                <div className="flex gap-4 mt-12">
                    <a href="#" className="border border-[#2a2a2a]
                    py-2 sm:py-3  px-4 sm:px-5 rounded-full sm:text-lg text-sm
                    font-semibold tracking-wider transition-all
                    duration-300 hover:bg-[#1a1a1a]">
                        Documentation <i class="ri-external-link-line"></i>
                    </a>

                    <a href="#" className="border border-[#2a2a2a]
                    py-2 sm:py-3  px-8 sm:px-10 rounded-full sm:text-lg text-sm
                    font-semibold tracking-wider transition-all
                    duration-300 bg-gray-300 text-black hover:text-white">
                        GetStarted <i class="ri-external-link-line"></i>
                    </a>
                </div>

            </div>

            <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%]  h-full" scene="https://prod.spline.design/OefXunTQ7miztn1R/scene.splinecode" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
            />

        </main>
    )
}

export default Hero