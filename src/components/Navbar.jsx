import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Navbar = () => {
    useGSAP(() => {
        gsap.from(".main-header", {
            top: '-10vh',
            duration: 0.7,
            delay: 1
        })
        gsap.to(".main-header", {
            background: "rgba(0,0,0,0.2)",
            scrollTrigger: {
                trigger: '.main-header',
                start: 'top -90%',
                end: 'top -100%',
                scrub: true,
            }
        })
        // gsap.from(".nav-btn", {
        //     opacity: 0,
        //     scrollTrigger:{
        //         trigger: '.nav-btn',
        //         start: 'top -90%',
        //         end: 'top -100%',
        //         scrub: true,
        //     }
        // })
    })
    return (
        <header className='main-header h-[8vh] lg:h-[12vh] flex justify-between items-center sticky z-10 w-full max-w-screen-2xl left-0 top-0 mx-auto backdrop-blur-sm'>
            <div className="logo">
                <a href='#'><svg className='w-[70px] lg:w-[80px] 2xl:w-[150px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 59" fill="none">
                    <path xmlns="http://www.w3.org/2000/svg" d="M18.9424 9.128C14.6459 8.80373 12.4976 10.5264 12.4976 14.296V14.6H18.9424V22.1392H12.4976V45H4.6544V22.1392H0.2768V14.6H4.6544V14.296C4.6544 9.99947 5.85013 6.73653 8.2416 4.5072C10.6331 2.27787 14.2 1.30507 18.9424 1.5888V9.128ZM42.0811 14.6H49.9243V45H42.0811V41.4128C39.7301 44.3717 36.4267 45.8512 32.1707 45.8512C28.1173 45.8512 24.6315 44.3109 21.7131 41.2304C18.8352 38.1093 17.3963 34.2992 17.3963 29.8C17.3963 25.3008 18.8352 21.5109 21.7131 18.4304C24.6315 15.3093 28.1173 13.7488 32.1707 13.7488C36.4267 13.7488 39.7301 15.2283 42.0811 18.1872V14.6ZM27.6107 36.0016C29.1915 37.5824 31.1979 38.3728 33.6299 38.3728C36.0619 38.3728 38.0683 37.5824 39.6491 36.0016C41.2704 34.3803 42.0811 32.3131 42.0811 29.8C42.0811 27.2869 41.2704 25.24 39.6491 23.6592C38.0683 22.0379 36.0619 21.2272 33.6299 21.2272C31.1979 21.2272 29.1915 22.0379 27.6107 23.6592C26.0299 25.24 25.2395 27.2869 25.2395 29.8C25.2395 32.3131 26.0299 34.3803 27.6107 36.0016ZM52.7804 45V0.615999H60.6236V45H52.7804ZM86.8327 14.6H94.4935V43.5408C94.4935 48.2427 92.933 51.8299 89.8119 54.3024C86.7314 56.7749 83.0023 58.0112 78.6247 58.0112C75.3415 58.0112 72.4434 57.3829 69.9303 56.1264C67.4578 54.8699 65.5527 53.0256 64.2151 50.5936L70.9031 46.7632C72.4434 49.6005 75.0983 51.0192 78.8679 51.0192C81.3405 51.0192 83.2861 50.3707 84.7047 49.0736C86.1234 47.7765 86.8327 45.9323 86.8327 43.5408V40.2576C84.5223 43.3381 81.2797 44.8784 77.1047 44.8784C72.8082 44.8784 69.2007 43.3787 66.2823 40.3792C63.4045 37.3392 61.9655 33.6507 61.9655 29.3136C61.9655 25.0171 63.4247 21.3488 66.3431 18.3088C69.2615 15.2688 72.8487 13.7488 77.1047 13.7488C81.2797 13.7488 84.5223 15.2891 86.8327 18.3696V14.6ZM72.1799 35.3328C73.8013 36.8731 75.8482 37.6432 78.3207 37.6432C80.7933 37.6432 82.8199 36.8731 84.4007 35.3328C86.0221 33.752 86.8327 31.7456 86.8327 29.3136C86.8327 26.9221 86.0221 24.9563 84.4007 23.416C82.8199 21.8352 80.7933 21.0448 78.3207 21.0448C75.8482 21.0448 73.8013 21.8352 72.1799 23.416C70.5991 24.9563 69.8087 26.9221 69.8087 29.3136C69.8087 31.7456 70.5991 33.752 72.1799 35.3328ZM117.414 14.6H125.257V45H117.414V41.5952C115.509 44.4325 112.489 45.8512 108.354 45.8512C105.031 45.8512 102.274 44.7365 100.086 42.5072C97.9374 40.2779 96.8633 37.1973 96.8633 33.2656V14.6H104.706V32.2928C104.706 34.3195 105.254 35.88 106.348 36.9744C107.442 38.0283 108.902 38.5552 110.726 38.5552C112.752 38.5552 114.374 37.9269 115.59 36.6704C116.806 35.4139 117.414 33.5291 117.414 31.016V14.6ZM145.087 13.7488C148.41 13.7488 151.146 14.8635 153.295 17.0928C155.484 19.3221 156.578 22.4027 156.578 26.3344V45H148.735V27.3072C148.735 25.2805 148.188 23.7403 147.093 22.6864C145.999 21.592 144.54 21.0448 142.716 21.0448C140.689 21.0448 139.068 21.6731 137.852 22.9296C136.636 24.1861 136.028 26.0709 136.028 28.584V45H128.184V14.6H136.028V18.0048C137.933 15.1675 140.952 13.7488 145.087 13.7488ZM162.91 10.952C161.613 10.952 160.478 10.4859 159.505 9.5536C158.573 8.5808 158.107 7.44586 158.107 6.1488C158.107 4.85173 158.573 3.7168 159.505 2.744C160.478 1.7712 161.613 1.2848 162.91 1.2848C164.248 1.2848 165.383 1.7712 166.315 2.744C167.288 3.7168 167.774 4.85173 167.774 6.1488C167.774 7.44586 167.288 8.5808 166.315 9.5536C165.383 10.4859 164.248 10.952 162.91 10.952ZM159.019 45V14.6H166.862V45H159.019ZM177.993 44.2704C176.979 45.2837 175.763 45.7904 174.345 45.7904C172.926 45.7904 171.71 45.2837 170.697 44.2704C169.683 43.2571 169.177 42.0411 169.177 40.6224C169.177 39.2037 169.683 37.9877 170.697 36.9744C171.71 35.9611 172.926 35.4544 174.345 35.4544C175.763 35.4544 176.979 35.9611 177.993 36.9744C179.006 37.9877 179.513 39.2037 179.513 40.6224C179.513 42.0411 179.006 43.2571 177.993 44.2704Z" fill="#E9E9E9" />
                </svg></a>
            </div>
            <a className='nav-btn bg-[#27DFB3] shadow-2xl shadow-[#27DFB3] py-1.5 px-5 rounded-full text-[3.8vw] lg:text-[1.1vw] font-medium text-black' href="mailto:heya.falguni@gmail.com">Let's Talk.</a>
        </header>
    )
}

export default Navbar