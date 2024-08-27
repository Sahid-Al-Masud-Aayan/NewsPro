import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoPlayCircle, IoToggle } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GrCircleInformation } from "react-icons/gr";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { RiMenuAddFill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

import './App.css'

function App() {


  return (
    <>
    {/* top banner */}
    <div className="w-full h-[50px] bg-[#000D39] flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
        <h1 className='text-white text-[17px] px-[14px] py-[3px] font-worksans bg-white font-medium bg-opacity-[20%] rounded-[3px]'>
          Trending
          </h1>
        <h1 className='text-white text-[17px] font-worksans font-medium ml-[19px] '>
        Every success is helped by someone behind the people
          </h1>
        {/* weather */}
        <div className="ml-[227px] flex justify-center items-center">
          <img className='h-[30px] w-[30px]' src="./public/temp.svg" alt="Weather icon" />
          <h1 className='text-white text-[17px] font-worksans font-medium ml-[10px] mt-2 '>
          Dhaka 36°
          </h1>
        </div>
        {/* weather */}

        {/* date */}
        <div className="ml-[19px] flex justify-center items-center">
          <img className='h-[30px] w-[30px]' src="./public/date.svg" alt="calendar icon" />
          <h1 className='text-white text-[17px] font-worksans font-medium ml-[6px] mt-2 '>
          Monday - July 2, 2021
          </h1>
        </div>
        {/* date */}
        </div>
      </div>
    </div>
    {/* top banner */}

    {/* menubar */}
    <nav className='h-[150px] w-full bg-[#F1F4FF] flex justify-center items-center'>
      {/* logo */}
      <img src="./public/Logo.svg" alt="Website Logo" />
      {/* logo */}

      {/* Ad */}
      <div className="h-[80px] w-[560px] bg-[url('./public/ad1.png')] flex justify-center items-center bg-cover bg-center ml-[71px] rounded-[3px] mr-[21px]">
      <h1 className='flex justify-center items-center gap-[10px] text-[29px] font-semibold relative text-white font-worksans'>
        Furniro
        <div className="w-[1px] h-[36px] bg-white mr-[12px]"></div>
      </h1>
      <h1 className='flex justify-center items-center gap-[10px] text-[15px] mr-[128px] font-semibold relative text-white font-worksans'>
        The Best in <br /> Quality.
      </h1>
      <button className='w-[118px] h-[40px] bg-white bg-opacity-[50%] rounded-[3px] font-semibold text-white text-[15px] font-worksans hover:bg-opacity-[100%] hover:text-black duration-150'>
        Buy now
      </button>
      </div>
      {/* Ad */}

      {/* socials */}
      <div className="flex justify-center items-center gap-[13px]">
        <a href="#">
        <FaFacebookF className="text-[30px] text-[#000D39] hover:text-[#E12127] duration-150"/>
        </a>
        <a href="#">
        <FaTwitter className="text-[30px] text-[#000D39] hover:text-[#E12127] duration-150"/>
        </a>
        <a href="#">
        <FaLinkedinIn className="text-[30px] text-[#000D39] hover:text-[#E12127] duration-150"/>
        </a>
        <a href="#">
        <FaWhatsapp className="text-[30px] text-[#000D39] hover:text-[#E12127] duration-150"/>
        </a>
        <a href="#">
        <FaInstagram className="text-[30px] text-[#000D39] hover:text-[#E12127] duration-150"/>
        </a>
      </div>
      <img className="ml-[33px]" src="./public/User.svg" alt="User image" />
      {/* socials */}
    </nav>
    {/* menubar */}

    {/* menu links */}
    <div className="w-full h-[80px] bg-[#E5E9F6] flex justify-center items-center">
    <div className=" flex justify-center items-center gap-5">
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127]  duration-200 font-worksans" href="#">
        Home+
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Fashion
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Travel
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Technology
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Lifestyle
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Features
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Education
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Pages+
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Sports
      </a>
    </div>
    {/* buttons */}
    <div className="flex justify-center items-center gap-[20px] ml-[79px]">
    <button>
    <MdSearch className="text-[30px] text-[#000d39]"/>
    </button>
    <button>
    <FaBars className="text-[30px] text-[#000d39]"/>
    </button>
    <button>
    <IoToggle className="text-[30px] text-[#000d39] rotate-180"/>
    </button>
    </div>
    {/* buttons */}
    </div>
    {/* menu links */}

    {/* first banner */}
    <div className="container">
      <div className="flex justify-center items-center gap-[30px] mt-[70px] mb-[57px]">
        {/* first news */}
    <a href="#" className="cursor-pointer hover:shadow-xl duration-200 w-[570px] h-[460px] bg-[url('./public/bn1.jpg')] bg-cover bg-center rounded-[3px] p-[30px] group">
    <div className="flex justify-between items-center">
      <img src="./public/slid.svg" alt="Slider" />
      <p className="text-[15px] font-semibold font-worksans text-white py-[3px] px-[11px] bg-[#e12127] rounded-[3px]">
        Fashion
        </p>
    </div>
    <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[260px] mb-[23px] ">
      <IoMdTime className="text-[24px]"/>
      July 02, 2021
    </p>
    <p className="text-[25px] font-semibold font-worksans text-white group-hover:underline">
    Hedonism and Tailoring: The Women’s
    Spring 2021 Collections Had It All
    </p>
    </a>
        {/* first news */}

        <div className="flex flex-col justify-center items-center gap-[30px]">
        <div className=" flex justify-center items-center gap-[30px]">

        {/* second news */}
          <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn2.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[100px] font-semibold font-worksans text-white  bg-[#10D0FA] rounded-[3px]">
           Technology
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          The secret to moving this
          ancient sphinx
         </p>
          </a>
        {/* second news */}

        {/* third news */}
          <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn3.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#5200FF] rounded-[3px]">
           Travel
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          City of New York on a trip
          to Arctic Nunavut
         </p>
          </a>
        {/* third news */}
        </div>
        {/* fourth news */}
        <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[570px] bg-[url('./public/bn4.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#FF005C] rounded-[3px]">
           Lifestyle
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          Lifestyle brings big changes in people's lives.<br/>
          Are you ready?
         </p>
          </a>
        {/* fourth news */}
        </div>
      </div>
    </div>
    {/* first banner */}

    {/* todays top news */}
      {/* heading and slider */}
    <div className="flex justify-center items-center gap-[15px]">
      <p className="text-[25px] font-semibold font-worksans text-[#000D39] ">
        Todays Top News
        </p>
        <div className="w-[832px] h-[1px] bg-[#CFD4E4]"></div>
        <img src="./public/slid2.svg" alt="Slider" />
      </div>
      {/* heading and slider */}
      <div className="flex justify-center items-center gap-[30px] mt-[31px]">
        {/* first news */}
        <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn2.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[100px] font-semibold font-worksans text-white  bg-[#10D0FA] rounded-[3px]">
           Technology
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          The secret to moving this
          ancient sphinx
         </p>
          </a>
        {/* first news */}

        {/* second news */}
        <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn5.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white bg-[#0085FF] rounded-[3px]">
           Politics
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          Bestwood death prompts
          police investigation
         </p>
          </a>
        {/* second news */}

        {/* third news */}
        <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn6.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[100px] font-semibold font-worksans text-white bg-[#FA1010] rounded-[3px]">
           Education
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          Simple tips to keep in
          mind when buying a Book
         </p>
          </a>
        {/* third news */}
        {/* fourth news */}
        <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[215px] w-[270px] bg-[url('./public/bn3.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#5200FF] rounded-[3px]">
           Travel
         </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          City of New York on a trip
          to Arctic Nunavut
         </p>
          </a>
        {/* fourth news */}
    </div>
    {/* todays top news */}

    {/* most popular news */}
    <div className="w-full h-[870px] bg-[#F9FAFF] mt-[70px]">
      <div className="flex justify-center items-start gap-[30px]">


          {/* Heading and subheading */}
          
        <div className="flex flex-col justify-center items-start ">
      <p className="text-[25px] font-semibold font-worksans text-[#000D39] mb-[17px] mt-[57px]">
        Most Popular News
        </p>
        <p className="text-[21px] font-medium font-worksans text-[#000D39] ">
          Top Stories
        </p>
          {/* Heading and subheading */}

        <div className="flex flex-col justify-center items-start gap-[20px] mt-[10px]  ">
          {/*first news */}
          <a href="#" className="h-[130px] w-[370px] bg-white rounded-[3px] pt-[30px] pl-[20px] group hover:shadow-xl duration-200">
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-[#000D39] group-hover:underline">
          Wall collapses amid heavy rainfall in China 
         </p>
          </a>
          {/* first news */}

          {/*second news */}
          <a href="#" className="h-[130px] w-[370px] bg-white rounded-[3px] pt-[30px] pl-[20px] group hover:shadow-xl duration-200">
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-[#000D39] group-hover:underline">
          Lebanon's Hezbollah launches large scale attack on Israel
         </p>
          </a>
          {/* second news */}

          {/*third news */}
          <a href="#" className="h-[130px] w-[370px] bg-white rounded-[3px] pt-[30px] pl-[20px] group hover:shadow-xl duration-200">
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-[#000D39] group-hover:underline">
          Horror bus accident kills 34 in Pakistan
         </p>
          </a>
          {/* third news */}

          {/*fourth news */}
          <a href="#" className="h-[130px] w-[370px] bg-white rounded-[3px] pt-[30px] pl-[20px] group hover:shadow-xl duration-200">
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-[#000D39] group-hover:underline">
          Yellowstone National Park suffers messy hydrothermal explosion
         </p>
          </a>
          {/* fourth news */}
        </div>
        </div>
      <div className="flex flex-col justify-center items-center">
      {/* sub menu */}
      <nav className="flex justify-center items-center gap-14 w-[770px] h-[50px] bg-[#E5E9F6] rounded-[3px] mb-[35px] mt-[70px]">
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127]  duration-200 font-worksans" href="#">
        All
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Travel
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Lifestyle
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Fashion
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Technology
      </a>
      <a className="text-[17px] font-semibold text-[#000d39] hover:text-[#e12127] duration-200 font-worksans" href="#">
        Sports
      </a>
      </nav>
      {/* sub menu */}
      <div className="flex justify-center items-start gap-[30px]">
      <div className="flex flex-col justify-center items-start">
      {/* first news column */}
      <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[170px] w-[270px] bg-[url('./public/bn7.jpg')] bg-cover bg-center p-[20px] group rounded-[3px] mb-[23px]">
           <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white bg-[#0085FF] rounded-[3px]">
           Politics
         </div>
          </div>
          </a>
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <a href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] mt-[4px] hover:underline">
          France extends detention of <br />
          Pavel Durov
         </a>
      {/* first news column */}

      {/* second news column */}
      <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[170px] w-[270px] bg-[url('./public/bn8.jpg')] bg-cover bg-center p-[20px] group rounded-[3px] mb-[23px] mt-[33px]">
           <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white bg-[#E12127] rounded-[3px]">
           Fashion
         </div>
          </div>
          </a>
          <p className="flex justify-start items-center gap-[4px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <a href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] mt-[4px] hover:underline">
          The best vintage stores in <br />
          Dallas fort worth
         </a>
      {/* second news column */}
      </div>
      {/* third news */}
      <div className="flex flex-col gap-[30px]">
      <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[430px] w-[470px] bg-[url('./public/bn4.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
           <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white bg-[#FF005C] rounded-[3px]">
           Lifestyle
         </div>
          </div>
          </a>
          <div className="">
          <p className="flex justify-start items-center gap-[4px] text-[15px] font-medium font-worksans text-[#555555] mb-[16px] ">
            <IoMdTime className="text-[18px] text-[#E12127]"/>
            July 02, 2021
          </p>
          <a href="#" className="text-[25px] font-semibold font-worksans text-[#000D39] hover:underline">
          Lifestyle brings big changes in people's <br />
           lives. Are you ready?
         </a>
          </div>
      </div>


      {/* third news */}
      </div>
      </div>
      </div>
      <div className="flex justify-center items-center">
      {/* Ad */}
            <div className="h-[130px] w-[770px] bg-[url('./public/ad2.jpg')] flex justify-center items-center bg-cover bg-center rounded-[3px] mt-[70px] relative">
                <RxCross2 className="absolute top-[10px] right-[10px] text-white opacity-[50%] hover:opacity-[100%]"/>
                <GrCircleInformation className="absolute top-[10px] right-[36px] text-white opacity-[50%] hover:opacity-[100%]"/>
      <h1 className='flex justify-center items-center gap-[10px] text-[29px] relative text-white font-worksans'>
        Clodrobe
      </h1>
      <h1 className='flex justify-center items-center gap-[10px] text-[28px] ml-[47px] mr-[227px] font-semibold relative text-white font-worksans'>
      Get 35% Off <br />
      Limited Offer
      </h1>
      <button className='w-[118px] h-[40px] bg-[#E12127] hover:bg-red-900 rounded-[3px] font-semibold text-white text-[15px] font-worksans hover:text-black duration-150 '>
        Shop now
      </button>
      </div>
      {/* Ad */}
      </div>
    </div>
    {/* most popular news */}

    {/* fashion and lifestyle */}
    <div className="flex justify-center items-center gap-[30px]">
    <div className="flex flex-col justify-start items-center">
      {/* heading and slider */}
    <div className="flex justify-center items-center gap-[10px] mt-[121px] mb-[21px]">
      <h3 className="text-[25px] font-semibold font-worksans text-[#000D39] ">
        Fashion & Lifestyle
        </h3>
        <div className="w-[447px] h-[1px] bg-[#CFD4E4]"></div>
        <a href="#" className="text-[17px] font-medium font-worksans text-[#E12127] hover:underline">
          View all
          </a>
      </div>
      {/* heading and slider */}
      {/* first news */}
      <div className="flex justify-center items-center gap-[30px]">
      <a href="#" className="cursor-pointer hover:shadow-xl duration-200 w-[470px] h-[490px] bg-[url('./public/bn1.jpg')] bg-cover bg-center rounded-[3px] p-[30px] group">
    <div className="flex justify-end items-center">
      <p className="flex justify-center items-center text-[15px] font-semibold font-worksans text-white h-[30px] w-[80px] bg-[#e12127] rounded-[3px]">
        Fashion
        </p>
    </div>
    <p className="flex justify-start items-center gap-[7px] text-[17px] font-medium font-worksans text-white mt-[260px] mb-[21px] ">
      <IoMdTime className="text-[24px]"/>
      July 02, 2021
    </p>
    <p className="text-[21px] font-semibold font-worksans text-white group-hover:underline">
    Hedonism and Tailoring: The Women’s
    Spring 2021 Collections Had It All
    </p>
    </a>
      {/* first news */}

      {/* second news */}
    <div className="flex flex-col justify-center items-center gap-[30px]">
          <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[230px] w-[270px] bg-[url('./public/bn4.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#FF005C] rounded-[3px]">
           Lifestyle
         </div>
          </div>
           <p className="flex justify-start items-center gap-[6px] text-[13px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          Lifestyle brings big changes in people's lives.
         </p>
          </a>
      {/* second news */}
      {/* third news */}
          <a href='#' className="cursor-pointer hover:shadow-xl duration-200 h-[230px] w-[270px] bg-[url('./public/bn9.jpg')] bg-cover bg-center p-[20px] group rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#FF005C] rounded-[3px]">
           Lifestyle
         </div>
          </div>
           <p className="flex justify-start items-center gap-[6px] text-[13px] font-medium font-worksans text-white mt-[71px] mb-[4px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p className="text-[18px] font-semibold font-worksans text-white group-hover:underline">
          7 foods to increase good cholesterol levels
         </p>
          </a>
      {/* third news */}
    </div>
      </div>
    </div>
    <div className="w-[370px] h-[534px] border-[1px] border-[#E5E9F7] mt-[133px]">
      <div className="w-full h-[44px] border-b-[1px] border-b-[#E5E9F7] flex">

        <div className="h-full w-[185px] hover:bg-[#000D39] duration-150 flex justify-center items-center group">
          <a href="#" className="font-lato text-[] font-semibold group-hover:text-white text-[21px]">
            Recent Post
          </a>
        </div>
        <div className="h-full w-[185px] hover:bg-[#000D39] duration-150 flex justify-center items-center group">
          <a href="#" className="font-lato text-[#060027] font-semibold group-hover:text-white text-[21px]">
            Popular Post
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <a href="#" className="w-[350px] h-[110px] border-[1px] border-[#E5E5E5] mt-[10px] flex gap-[10px] justify-center items-center hover:bg-gray-100 duration-200">
        <div className="relative w-[173px] h-[90px] ml-[10px]">
      <img className="w-full h-full rounded-[3px] bg-cover bg-center" src="bn10.jpg" alt="Video" />
     <FaRegPlayCircle className="absolute inset-0 m-auto w-[40px] h-[40px] text-white" />
       </div>
          <div className="flex flex-col justify-center items-start">
          <p className="text-[13px] font-medium font-worksans text-[#E12127] hover:underline">
          Fashion
         </p>
          <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#060027]"/>
            July 02, 2021
          </p>
          <p className="text-[15px] font-medium font-worksans text-[#060027] group-hover:underline">
          David Beckham Models Hugo Boss in 2024
         </p>
          </div>
        </a>
        <a href="#" className="w-[350px] h-[110px] border-[1px] border-[#E5E5E5] flex gap-[10px] justify-center items-center hover:bg-gray-100 duration-200">
        <div className="relative w-[173px] h-[90px] ml-[10px]">
      <img className="w-full h-full rounded-[3px] bg-cover bg-center" src="bn11.jpg" alt="Video" />
     <FaRegPlayCircle className="absolute inset-0 m-auto w-[40px] h-[40px] text-white" />
       </div>
          <div className="flex flex-col justify-center items-start">
          <p className="text-[13px] font-medium font-worksans text-[#FF005C] hover:underline">
          Lifestyle
         </p>
          <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#060027]"/>
            July 02, 2021
          </p>
          <p className="text-[15px] font-medium font-worksans text-[#060027] group-hover:underline">
          Fruits causes weight loss or for weight gain
         </p>
          </div>
        </a>
        <a href="#" className="w-[350px] h-[110px] border-[1px] border-[#E5E5E5] flex gap-[10px] justify-center items-center hover:bg-gray-100 duration-200">
        <div className="relative w-[173px] h-[90px] ml-[10px]">
      <img className="w-full h-full rounded-[3px] bg-cover bg-center" src="bn12.jpg" alt="Video" />
     <FaRegPlayCircle className="absolute inset-0 m-auto w-[40px] h-[40px] text-white" />
       </div>
          <div className="flex flex-col justify-center items-start">
          <p className="text-[13px] font-medium font-worksans text-[#10CFFA] hover:underline">
          Technology
         </p>
          <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#060027]"/>
            July 02, 2021
          </p>
          <p className="text-[15px] font-medium font-worksans text-[#060027] group-hover:underline">
          Dogs at PL airport honoured for their service
         </p>
          </div>
        </a>
        <a href="#" className="w-[350px] h-[110px] border-[1px] border-[#E5E5E5] flex gap-[10px] justify-center items-center hover:bg-gray-100 duration-200">
        <div className="relative w-[173px] h-[90px] ml-[10px]">
      <img className="w-full h-full rounded-[3px] bg-cover bg-center" src="bn13.jpg" alt="Video" />
     <FaRegPlayCircle className="absolute inset-0 m-auto w-[40px] h-[40px] text-white" />
       </div>
          <div className="flex flex-col justify-center items-start">
          <p className="text-[13px] font-medium font-worksans text-[#5200FF] hover:underline">
          Travel
         </p>
          <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#555555] ">
            <IoMdTime className="text-[18px] text-[#060027]"/>
            July 02, 2021
          </p>
          <p className="text-[15px] font-medium font-worksans text-[#060027] group-hover:underline">
          Maldives looses Indian visitors as attacked on them 
         </p>
          </div>
        </a>
      </div>
    </div>
    </div>
    {/* fashion and lifestyle */}
    {/* trending news */}
    <div className="flex justify-center items-center gap-[10px] mt-[57px] mb-[21px]">
      <h3 className="text-[25px] font-semibold font-worksans text-[#000D39] ">
      Trending News
        </h3>
        <div className="w-[979px] h-[1px] bg-[#CFD4E4]"></div>
      </div>
      {/* news */}
      <div className="flex justify-center items-center gap-[30px]">
        <a href="#" className="w-[270px] h-[328px] bg-white shadow-xl group">
        <div className="  duration-200 h-[215px] w-full bg-[url('./public/bn2.jpg')] p-[20px] bg-cover bg-center rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[100px] font-semibold font-worksans text-white  bg-[#10D0FA] rounded-[3px]">
           Technology
         </div>
          </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[13px] font-medium font-worksans text-[#555] mt-[18px] mb-[4px] ml-[20px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] ml-[20px] group-hover:underline">
          The secret to moving this
          ancient sphinx
         </p>
        </a>
        <a href="#" className="w-[270px] h-[328px] bg-white shadow-xl group">
        <div className="  duration-200 h-[215px] w-full bg-[url('./public/bn13.jpg')] p-[20px] bg-cover bg-center rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#07B404] rounded-[3px]">
           Sports
         </div>
          </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[13px] font-medium font-worksans text-[#555] mt-[18px] mb-[4px] ml-[20px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] ml-[20px] group-hover:underline">
          Nancy multi Chinese
          business woman trying
         </p>
        </a>
        <a href="#" className="w-[270px] h-[328px] bg-white shadow-xl group">
        <div className="  duration-200 h-[215px] w-full bg-[url('./public/bn5.jpg')] p-[20px] bg-cover bg-center rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[100px] font-semibold font-worksans text-white  bg-[#818EFE] rounded-[3px]">
           Worlds
         </div>
          </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[13px] font-medium font-worksans text-[#555] mt-[18px] mb-[4px] ml-[20px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] ml-[20px] group-hover:underline">
          Bestwood death prompts
police investigation
         </p>
        </a>
        <a href="#" className="w-[270px] h-[328px] bg-white shadow-xl group">
        <div className="  duration-200 h-[215px] w-full bg-[url('./public/bn3.jpg')] p-[20px] bg-cover bg-center rounded-[3px]">
          <div className="flex justify-end items-center">
         <div className="flex justify-center items-center text-[15px] h-[30px] w-[80px] font-semibold font-worksans text-white  bg-[#5200FF] rounded-[3px]">
           Travel
         </div>
          </div>
          </div>
           <p className="flex justify-start items-center gap-[7px] text-[13px] font-medium font-worksans text-[#555] mt-[18px] mb-[4px] ml-[20px] ">
            <IoMdTime className="text-[18px]"/>
            July 02, 2021
          </p>
          <p href="#" className="text-[18px] font-semibold font-worksans text-[#000D39] ml-[20px] group-hover:underline">
          City of New York on a trip <br />to Arctic Nunavut
         </p>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img className="mt-[40px]" src="Slide.svg" alt="slider" />
      </div>
      {/* news */}
    {/* trending news */}
    {/* videos */}
    <div className="w-full h-[720px] bg-[#00061D] mt-[70px]">
    <div className="flex flex-col justify-center items-center">
      {/* heading and slider */}
    <div className="flex justify-center items-center gap-[10px] mt-[74px] mb-[19px]">
      <h3 className="text-[25px] font-semibold font-worksans text-[#fff] ">
        Videos
        </h3>
        <div className="w-[1073px] h-[1px] bg-[#CFD4E4]"></div>
      </div>

        {/* first news */}
       
      <div className="flex justify-center items-center gap-[30px]">
        <div className="flex flex-col justify-start items-start">
    <a href="#" className="cursor-pointer hover:shadow-xl flex justify-center items-center duration-200 w-[670px] h-[460px] bg-[url('./public/bn1.jpg')] bg-cover bg-center rounded-[3px] p-[30px] group">
    <IoPlayCircle className="text-[80px] text-white"/>
    </a>
    <div className="flex flex-col justify-start items-start ">
    <p className="text-[17px] font-semibold font-worksans text-white mt-[17px] group-hover:underline">
    Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All
    </p>
    <div className="flex justify-center items-center gap-[204px] mt-[10px]">
    <p className="flex justify-center items-center gap-[6px] text-[17px] font-medium font-worksans text-white ">
      <IoMdTime className="text-[24px]"/>
      July 02, 2021
    </p>
    <div className="flex justify-center items-center gap-[18px]">
    <div className="flex justify-center items-center gap-[5px]">
      <BiSolidLike className="text-[18px] text-white transition-transform duration-300 ease-in-out focus:outline-none  focus:text-blue-500 focus:ring-offset-2 cursor-pointer" tabIndex="0"/>
      <p className="font-medium font-worksans text-white text-[13px]">
      2.36M
      </p>
    </div>
    <div className="flex justify-center items-center gap-[5px]">
      <BiSolidLike className="text-[18px] rotate-180 text-white transition-transform duration-300 ease-in-out focus:outline-none  focus:text-blue-500 focus:ring-offset-2 cursor-pointer" tabIndex="0"/>
      <p className="font-medium font-worksans text-white text-[13px]">
      520k
      </p>
    </div>
    <div className="flex justify-center items-center gap-[5px]">
      <IoIosShareAlt className="text-[18px]  text-white cursor-pointer"/>
      <a href="#" className="font-medium font-worksans text-white text-[13px]">
      SHARE
      </a>
    </div>
    <div className="flex justify-center items-center gap-[5px]">
      <RiMenuAddFill className="text-[18px]  text-white cursor-pointer"/>
      <a href="#" className="font-medium font-worksans text-white text-[13px]">
      SAVE
      </a>
    </div>
    <div className="flex justify-center items-center gap-[5px]">
      <SlOptions className="text-[18px]  text-white cursor-pointer"/>
    </div>
    </div>
    </div>
    </div>
        </div>
        <div className="h-[539px] w-[470px] border-[1px] border-[#4c5060] flex flex-col gap-[10px] justify-center items-center py-[20px] ">
          <a href="#" className="w-[430px] h-[100px] hover:bg-[#191e33] flex justify-start items-center rounded-[3px] duration-200 gap-[10px]">
            <img className="w-[80px] h-[80px] ml-[10px]" src="bn2.jpg" alt="News Image" />
            <div className="flex flex-col justify-center items-start gap-[10px]">
          <p className="text-[17px] font-semibold font-worksans text-[#ffffff]">
          Secret of moving the ancient sphinx
         </p>
            <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#828282]">
            <IoMdTime className="text-[18px] text-[#ffffff]"/>
            July 02, 2021
          </p>
            </div>
          </a>
          <a href="#" className="w-[430px] h-[100px] hover:bg-[#191e33] flex justify-start items-center rounded-[3px] duration-200 gap-[10px]">
            <img className="w-[80px] h-[80px] ml-[10px]" src="bn9.jpg" alt="News Image" />
            <div className="flex flex-col justify-center items-start gap-[10px]">
          <p className="text-[17px] font-semibold font-worksans text-[#ffffff]">
          7 foods to increase cholesterol levels
         </p>
            <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#828282]">
            <IoMdTime className="text-[18px] text-[#ffffff]"/>
            July 02, 2021
          </p>
            </div>
          </a>
          <a href="#" className="w-[430px] h-[100px] hover:bg-[#191e33] flex justify-start items-center rounded-[3px] duration-200 gap-[10px]">
            <img className="w-[80px] h-[80px] ml-[10px]" src="bn6.jpg" alt="News Image" />
            <div className="flex flex-col justify-center items-start gap-[10px]">
          <p className="text-[17px] font-semibold font-worksans text-[#ffffff]">
          Simple tips for buying books
         </p>
            <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#828282]">
            <IoMdTime className="text-[18px] text-[#ffffff]"/>
            July 02, 2021
          </p>
            </div>
          </a>
          <a href="#" className="w-[430px] h-[100px] hover:bg-[#191e33] flex justify-start items-center rounded-[3px] duration-200 gap-[10px]">
            <img className="w-[80px] h-[80px] ml-[10px]" src="bn11.jpg" alt="News Image" />
            <div className="flex flex-col justify-center items-start gap-[10px]">
          <p className="text-[17px] font-semibold font-worksans text-[#ffffff]">
          Best fruits for weight gain or loss
         </p>
            <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#828282]">
            <IoMdTime className="text-[18px] text-[#ffffff]"/>
            July 02, 2021
          </p>
            </div>
          </a>
          <a href="#" className="w-[430px] h-[100px] hover:bg-[#191e33] flex justify-start items-center rounded-[3px] duration-200 gap-[10px]">
            <img className="w-[80px] h-[80px] ml-[10px]" src="bn3.jpg" alt="News Image" />
            <div className="flex flex-col justify-center items-start gap-[10px]">
          <p className="text-[17px] font-semibold font-worksans text-[#ffffff]">
          The coldest city of the world
         </p>
            <p className="flex justify-start items-start gap-[6px] text-[13px] font-medium font-worksans text-[#828282]">
            <IoMdTime className="text-[18px] text-[#ffffff]"/>
            July 02, 2021
          </p>
            </div>
          </a>
        </div>
      </div>

      </div>
    </div>
    {/* videos */}

    </>
  )
}

export default App
