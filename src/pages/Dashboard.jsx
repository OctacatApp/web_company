import React, { useEffect, useState } from 'react'

export default function Dashboard() {
    const [scrollY, setScrollY] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrollY(offset > 10);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className='relative flex flex-col gap-10 py-5'>
            <div className={`w-full z-10 h-24 ${scrollY ? 'hidden' : 'fixed top-0 bg-[#998F82] blur-3xl pb-28'}`} />
            <div className={`container sticky z-50 ${scrollY ? 'top-0' : 'top-10'}`}>
                <nav className="bg-[#EABE6C] py-5 px-10 rounded-md flex flex-row items-center justify-between">
                    <h6 className="font-bold title text-[#240A34] text-2xl uppercase">sinergisamawa</h6>

                    <ul className='flex flex-row items-center gap-10 text-base text-white'>
                        <li>About</li>
                        <li>Product</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

            <section className='container flex flex-col gap-20 pb-48 pt-44'>
                <div className="flex flex-col gap-5 wrapper-banner">
                    <div className="max-w-3xl mx-auto wrapper-text">
                        <h1 className='font-bold leading-none text-center capitalize text-8xl'>manage your business easily.</h1>
                    </div>

                    <div className="max-w-4xl mx-auto wrapper-text">
                        <p className="m-0 text-center font-bold text-[#424242]">Lorem ipsum dolor sit amet consectetur. Blandit diam tincidunt feugiat ipsum sed phasellus non nisi fermentum. Ullamcorper gravida diam facilisi arcu nisi neque pharetra massa purus. Amet magna pharetra quam bibendum enim ullamcorper amet. Quam ut dolor sed mi id nulla eget.</p>
                    </div>
                </div>

                <div className='wrapper'>
                    <h6 className='text-xl text-[#240A34] inria-serif font-bold text-center'>Trusted by the best</h6>

                    <div className="flex flex-row items-center justify-center gap-10">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div
                                key={index}
                                className="max-w-[150px] wrapper-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D4Qd2eRM5QL3t5fET9Rkt-5_dxy0Wdg7gA&s"
                                    alt="trsuted-partner"
                                    className='w-full h-full mix-blend-multiply'
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-[#FFEDD8] py-48'>
                <div className="container flex flex-col gap-16">
                    <h1 className='text-2xl font-bold text-center inria-serif'>Our team’s goal is to build you a creative, functional church website.</h1>

                    <div className="flex flex-row items-center justify-center gap-28">
                        <div className="flex flex-col max-w-lg gap-4 wrapper-text">
                            <h6 className='text-3xl font-bold text-center capitalize inria-serif text-[#240A34]'>what we do</h6>
                            <p className="m-0 text-[#424242] text-center text-lg leading-loose">Our team is headed up by a married couple who love Jesus and feel God’s calling on their lives to serve Him in what they do best – design & websites. We currently have seven team members with a myriad of skills and talents who each bring something unique to the table.</p>
                        </div>

                        <div className="flex flex-col max-w-lg gap-4 wrapper-text">
                            <h6 className='text-3xl font-bold text-center capitalize inria-serif text-[#240A34]'>why we do it</h6>
                            <p className="m-0 text-[#424242] text-center text-lg leading-loose">Our team is headed up by a married couple who love Jesus and feel God’s calling on their lives to serve Him in what they do best – design & websites. We currently have seven team members with a myriad of skills and talents who each bring something unique to the table.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container flex flex-col gap-6 py-48'>
                <h6 className="text-3xl font-bold text-center inria-serif">Why SINERGISAMAWA?</h6>

                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="wrapper p-10 bg-[#EABE6C] w-full rounded-md">
                        <img src="/public/images1.png" alt="images" className='mb-5 bg-cover' />
                        <div className="flex flex-col gap-2">
                            <h6 className='text-xl font-medium capitalize max-w-72 text-[#240A34]'>business records management</h6>
                            <p className='text-[#65556E] text-sm leading-snug'>Easily access and share medical records with your healthcare professional, ensuring more efficient care.</p>
                        </div>
                    </div>
                    <div className="wrapper p-10 bg-[#891652] w-full rounded-md">
                        <img src="/public/images2.png" alt="images" className='mb-5 bg-cover' />
                        <div className="flex flex-col gap-2">
                            <h6 className='text-2xl font-medium capitalize max-w-72 text-[#FFEDD8]'>business records management</h6>
                            <p className='text-[#EEE2D3] text-base leading-snug'>Easily access and share medical records with your healthcare professional, ensuring more efficient care.</p>
                        </div>
                    </div>
                    <div className="wrapper p-10 bg-[#FFEDD8] w-full rounded-md">
                        <img src="/public/images3.png" alt="images" className='mb-5 bg-cover' />
                        <div className="flex flex-col gap-2">
                            <h6 className='text-xl font-medium capitalize max-w-72 text-[#240A34]'>business records management</h6>
                            <p className='text-[#65556E] text-sm leading-snug'>Easily access and share medical records with your healthcare professional, ensuring more efficient care.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#FFEDD8] py-48'>
                <div className="container flex flex-row gap-10">
                    <div className="h-[350px] w-[500px] flex-none">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s"
                            alt="people"
                            className='object-cover w-full h-full rounded-3xl'
                        />
                    </div>

                    <div className="flex flex-col gap-6 mt-4">
                        <h6 className='max-w-5xl text-4xl font-bold inria-serif'>
                            “Sinergisamawa has never been a concern since day one. It takes care of everything for you, so you can focus on the important things”
                        </h6>

                        <div className="flex flex-col gap-0">
                            <span className='text-xl font-semibold'>Johny shin</span>
                            <small className='text-lg text-[#424242]'>CEO, Marathon</small>

                            <div className="mt-6 wrapper button">
                                <button type='button' className='bg-[#EABE6C] text-[#FFEDD8] p-4 px-6 rounded-xl'>Lorem ipsum dolor sit amet.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container py-10'>
                <div className="wrapper bg-[#891652] p-20 flex flex-row items-start justify-between rounded-lg">
                    <div className="flex flex-col gap-3 mt-12">
                        <h6 className='max-w-5xl text-4xl font-bold inria-serif text-[#FFEDD8]'>
                            Get the full experience With Sinergisamawa™
                        </h6>
                        <p className='text-lg text-[#EEE2D3] max-w-3xl font-normal leading-6'>
                            With Lativ Tracker, you’re able to measure physical data such as blood pressure, cholesterol levels, blood glucose levels, your menstrual cycle and so much more.
                        </p>

                        <div className="mt-6 wrapper button">
                            <button type='button' className='bg-[#EABE6C] text-[#FFEDD8] p-4 px-6 rounded-xl'>Lorem ipsum dolor sit amet.</button>
                        </div>
                    </div>


                    <div className="wrapper-images h-[350px] w-[450px]">
                        <img
                            src="https://images.hukumonline.com/frontend/lt6144da583bde6/lt6144dcd14ef06.jpg"
                            alt="produk"
                            className='object-cover w-full h-full bg-cover rounded-3xl'
                        />
                    </div>
                </div>
            </section>

            <section className='bg-[#FFEDD8] py-48'>
                <div className="container">
                    <div className="grid grid-cols-4 gap-10">
                        {
                            Array.from([1, 2, 3, 5, 6, 7, 8, 9]).map((_, index) => (
                                <div key={index} className="flex flex-col max-w-xs gap-4">
                                    <div className="max-w-xs wrapper-image">
                                        <img
                                            src="https://images.hukumonline.com/frontend/lt6144da583bde6/lt6144dcd14ef06.jpg"
                                            alt="produk"
                                            className='w-full h-full rounded-md'
                                        />
                                    </div>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum exercitationem praesentium consequuntur id explicabo quos! Soluta doloremque sed reiciendis.</small>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <footer className='container'>
                <div className="grid grid-cols-4 gap-10">
                    <div>
                        <h6>Lets get social</h6>
                    </div>
                    <div>
                        <h6>SINERGISAMAWA</h6>
                    </div>
                    <div>
                        <h6>INFORMASI LAYANAN</h6>
                    </div>
                    <div>
                        <h6>CONTACT CENTER</h6>
                    </div>
                </div>
            </footer>
        </div>
    )
}
