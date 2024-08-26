import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoToggle } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GrCircleInformation } from "react-icons/gr";

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
        <FaFacebookF className="text-[30px] text-[#E12127]"/>
        </a>
        <a href="#">
        <FaTwitter className="text-[30px] text-[#000D39]"/>
        </a>
        <a href="#">
        <FaLinkedinIn className="text-[30px] text-[#000D39]"/>
        </a>
        <a href="#">
        <FaWhatsapp className="text-[30px] text-[#000D39]"/>
        </a>
        <a href="#">
        <FaInstagram className="text-[30px] text-[#000D39]"/>
        </a>
      </div>
      <img className="ml-[33px]" src="./public/User.svg" alt="User image" />
      {/* socials */}
    </nav>
    {/* menubar */}

    {/* menu links */}
    <div className="w-full h-[80px] bg-[#E5E9F6] flex justify-center items-center">
    <div className=" flex justify-center items-center gap-5">
      <a className="text-[17px] font-semibold text-[#e12127] hover:text-[#000d39] duration-200 font-worksans" href="#">
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
    <div className="flex justify-center items-center gap-[15px]">
      {/* heading and slider */}
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
      <a className="text-[17px] font-semibold text-[#e12127] hover:text-[#000d39] duration-200 font-worksans" href="#">
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
    

    </>
  )
}

export default App
