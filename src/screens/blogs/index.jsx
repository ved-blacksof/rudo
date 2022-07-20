import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import blogsCarouselOne from '../../assets/blogs/blogs-carousel-one.png'
import { Link } from 'react-router-dom';
import './index.css'

const Blogs = () => {

    const BlogCard = () => {
        return (
            <div className='bg-white p-4 rounded'>
                <div className='bg-[#E9F2ED] rounded xl:pt-20 pt-10 ' >
                    <img className='w-7/12 mx-auto' src={blogsCarouselOne} />
                </div>
                <div className='flex flex-col sm:mt-8 mt-5'>
                    <h5 className=" text-darkGreen bg-[#4abe9a] hover:bg-opacity-0 bg-opacity-20 rounded-full border-2 w-[8rem] grid place-content-center font-epilogue text-[12px] pt-1  ">
                        Featured Stories
                    </h5>
                    <h3 className='lg:text-2xl text-2xl font-vanio text-red leading-[24px] mt-3 mb-2 sm:pr-[20%]'>ETF smallcases by Windmill Capital</h3>
                    <h4 className='lg:text-[12px] text:[12px] font-epilogue text-black leading-[15px]'>Reading Time: 13 minutes</h4>
                    <h5 className='lg:text-xl text:xl text-gray py-2 leading-[20px]'>A comprehensive insight into the world of ETF based smallcases offered by Windmill Capital. Click on the link to take a deep dive!</h5>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-gradient'>
            <div className='sm:py-36 py-24 sm:px-3 sm:w-10/12 w-full mx-auto  max-w-screen-xl '>
                <h1 className='sm:text-5xl text-3xl font-semibold px-3 text-center'>Featured Blogs</h1>

                <Splide
                    options={{
                        type: "loop",
                        rewind: true,
                        pagination: true,
                        arrows: true,
                        autoplay: true,
                    }}
                    className="sm:my-14 my-5 w-full "
                >
                    <SplideSlide className='sm:px-0 px-3'>
                        <div className="sm:h-full h-fit w-12/12 px-4 py-4 mx-auto rounded-xl border-2 border-[#FFDEBAE5] bg-[#fff] flex sm:flex-row flex-col">
                            <div className='relative sm:w-6/12 bg-[#00ABBA] rounded' >
                                <img className='lg:w-6/12 sm:w-8/12 sm:absolute static bottom-0 sm:right-[10%]' src={blogsCarouselOne} />
                            </div>

                            <div className='sm:w-6/12 flex flex-col sm:p-10 py-5'>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    to="/wellness-test"
                                    className=" text-darkGreen bg-[#4abe9a] hover:bg-opacity-0 bg-opacity-20 rounded-full  border-2 w-[10rem] grid place-content-center font-epilogue text-sm pt-2 pb-1 "
                                >
                                    Featured Stories
                                </Link>
                                <h3 className='lg:text-3xl text-2xl font-vanio text-red leading-tight sm:mt-5 mt-3 sm:mb-3'>ETF smallcases by Windmill Capital</h3>
                                <h4 className='lg:text-2xl text:xl text-black mb-3'>Reading Time: 13 minutes</h4>
                                <h5 className='lg:text-2xl text:xl text-gray'>A comprehensive insight into the world of ETF based smallcases offered by Windmill Capital. Click on the link to take a deep dive!</h5>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='sm:px-0 px-3'>
                        <div className="sm:h-full h-fit w-12/12 px-4 py-4 mx-auto rounded-xl border-2 border-[#FFDEBAE5] bg-[#fff] flex sm:flex-row flex-col">
                            <div className='relative sm:w-6/12 bg-[#00ABBA] rounded' >
                                <img className='lg:w-6/12 sm:w-8/12 sm:absolute static bottom-0 sm:right-[10%]' src={blogsCarouselOne} />
                            </div>

                            <div className='sm:w-6/12 flex flex-col sm:p-10 py-5'>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    to="/wellness-test"
                                    className=" text-darkGreen bg-[#4abe9a] hover:bg-opacity-0 bg-opacity-20 rounded-full  border-2 w-[10rem] grid place-content-center font-epilogue text-sm pt-2 pb-1 "
                                >
                                    Featured Stories
                                </Link>
                                <h3 className='lg:text-3xl text-2xl font-vanio text-red leading-tight sm:mt-5 mt-3 sm:mb-3'>ETF smallcases by Windmill Capital</h3>
                                <h4 className='lg:text-2xl text:xl text-black mb-3'>Reading Time: 13 minutes</h4>
                                <h5 className='lg:text-2xl text:xl text-gray'>A comprehensive insight into the world of ETF based smallcases offered by Windmill Capital. Click on the link to take a deep dive!</h5>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='sm:px-0 px-3'>
                        <div className="sm:h-full h-fit w-12/12 px-4 py-4 mx-auto rounded-xl border-2 border-[#FFDEBAE5] bg-[#fff] flex sm:flex-row flex-col">
                            <div className='relative sm:w-6/12 bg-[#00ABBA] rounded' >
                                <img className='lg:w-6/12 sm:w-8/12 sm:absolute static bottom-0 sm:right-[10%]' src={blogsCarouselOne} />
                            </div>

                            <div className='sm:w-6/12 flex flex-col sm:p-10 py-5'>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    to="/wellness-test"
                                    className=" text-darkGreen bg-[#4abe9a] hover:bg-opacity-0 bg-opacity-20 rounded-full  border-2 w-[10rem] grid place-content-center font-epilogue text-sm pt-2 pb-1 "
                                >
                                    Featured Stories
                                </Link>
                                <h3 className='lg:text-3xl text-2xl font-vanio text-red leading-tight sm:mt-5 mt-3 sm:mb-3'>ETF smallcases by Windmill Capital</h3>
                                <h4 className='lg:text-2xl text:xl text-black mb-3'>Reading Time: 13 minutes</h4>
                                <h5 className='lg:text-2xl text:xl text-gray'>A comprehensive insight into the world of ETF based smallcases offered by Windmill Capital. Click on the link to take a deep dive!</h5>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='sm:px-0 px-3'>
                        <div className="sm:h-full h-fit w-12/12 px-4 py-4 mx-auto rounded-xl border-2 border-[#FFDEBAE5] bg-[#fff] flex sm:flex-row flex-col">
                            <div className='relative sm:w-6/12 bg-[#00ABBA] rounded' >
                                <img className='lg:w-6/12 sm:w-8/12 sm:absolute static bottom-0 sm:right-[10%]' src={blogsCarouselOne} />
                            </div>

                            <div className='sm:w-6/12 flex flex-col sm:p-10 py-5'>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    to="/wellness-test"
                                    className=" text-darkGreen bg-[#4abe9a] hover:bg-opacity-0 bg-opacity-20 rounded-full  border-2 w-[10rem] grid place-content-center font-epilogue text-sm pt-2 pb-1 "
                                >
                                    Featured Stories
                                </Link>
                                <h3 className='lg:text-3xl text-2xl font-vanio text-red leading-tight sm:mt-5 mt-3 sm:mb-3'>ETF smallcases by Windmill Capital</h3>
                                <h4 className='lg:text-2xl text:xl text-black mb-3'>Reading Time: 13 minutes</h4>
                                <h5 className='lg:text-2xl text:xl text-gray'>A comprehensive insight into the world of ETF based smallcases offered by Windmill Capital. Click on the link to take a deep dive!</h5>
                            </div>
                        </div>
                    </SplideSlide>


                </Splide>


                <div className='sm:mt-32  px-3'>
                    <h1 className='sm:text-5xl text-3xl font-semibold px-3 text-center '>Articles</h1>

                    <div className='sm:my-14 my-5 w-full grid xl:grid-cols-3 sm:grid-cols-2  gap-8 '>
                        <BlogCard className="col-span-3" />
                        <BlogCard className="col-span-3" />
                        <BlogCard className="col-span-3" />
                        <BlogCard className="col-span-3" />
                        <BlogCard className="col-span-3" />
                        <BlogCard className="col-span-3" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Blogs