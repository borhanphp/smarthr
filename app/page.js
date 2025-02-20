"use client";
import Head from "next/head";
import PackageCard from "@/components/PackageCard";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true);
  const packages = [
    {
      name: "LITE",
      description: "Light HRM Solutions for Growing Businesses.",
      price: "500",
      icon: "🚀",
      features: [
        "Employees (Upto 50)",
        "Attendance Management",
        "Schedule Management",
        "Leave Management",
        "Payroll (Basic)",
        "Mobile App",
      ],
    },
    {
      name: "STANDARD",
      description: "Standard HRM Solutions with Payroll",
      price: "1000",
      icon: "⚡️",
      features: [
        "Employees (Upto 50)",
        "Attendance Management",
        "Schedule Management",
        "Leave Management",
        "Payroll (Basic)",
        "Mobile App",
      ],
      mostPopular: true,
    },
    {
      name: "ENTERPRISE",
      description: "Elevate Your Business with Our Enterprise Plan",
      price: "1500",
      icon: "👓",
      features: [
        "Advanced HR Analytics",
        "Custom Workflow Automation",
        "Integration with Third-Party Tools",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F1F] min-h-screen">
     

    <div className="" style={{
      backgroundImage: "url('/bg1.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }}>
        {/* Hero Section */}
      <section className="text-center px-6 relative">
      <div className="pt-10 pb-16 ">
           {/* Navbar */}
      <nav className="flex w-[1200px] h-[100px] justify-between items-center p-6 max-w-7xl mx-auto bg-[#121d35] rounded-lg">
        <div className="text-2xl font-bold text-blue-400">
          <img src="/mainlogo.png" className="w-[220px] h-[140px]"/>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#features"
            className="text-white text-lg font-medium hover:text-blue-400"
            onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-white text-lg font-medium hover:text-blue-400"
            onClick={(e) => { e.preventDefault(); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Pricing
          </a>
          <a
            href="#blogs"
            className="text-white text-lg font-medium hover:text-blue-400"
            onClick={(e) => { e.preventDefault(); document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Blogs
          </a>
          <a
            href="#aboutus"
            className="text-white text-lg font-medium hover:text-blue-400"
            onClick={(e) => { e.preventDefault(); document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' }); }}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-white text-lg font-medium hover:text-blue-400"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Contact Us
          </a>
        </div>
        <button className="bg-[#139FDD] w-[220px] h-[48px] text-[18px] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-lg">
          Get Stated
        </button>
      </nav>
      </div>




        <h1 className="text-[56px] md:text-5xl font-bold leading-tight text-white">
          Smart HR Management – <br />{" "}
          <span className="">Simplify, Automate, Succeed!</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Effortless employee management with advanced automation, seamless
          payroll processing, and real-time performance tracking – all in one
          powerful platform to streamline your HR operations!
        </p>
        <button className="mt-6 w-[220px] text-[#2757BE] h-[56px] bg-white text-[18px] px-6 py-3 rounded-md font-bold hover:bg-gray-200">
          Signup Now
        </button>
        {/* Floating UI Elements */}
       
      </section>

      {/* Image Section */}
      <div className="mt-16 flex justify-center relative">
        <img
          src="/image5.png"
          alt="Dashboard Screenshot"
          className="h-auto w-full max-w-[800px]"
        />
        <img
          src="/Chart2.png"
          alt="Analytics"
          className="absolute right-60 top-[-30px] w-60 shadow-lg rounded-lg"
        />
         <img
          src="/user.png"
          alt="User Rating"
          className="absolute w-[204px] h-[126px] top-[-120px] left-[200px]  shadow-lg rounded-lg"
        />
        <img
          src="/statistics.png"
          alt="Data Chart"
          className="absolute right-20 top-[20px] w-100 h-124 shadow-lg rounded-lg"
        />
      </div>
    </div>

      {/* hr design */}
      <section>
        <div className="bg-white text-black py-12 ">
          <div className="max-w-6xl mx-auto">
          <div className="text-center text-[24px] font-[700] text-[#132f6d]">
            Over 50,000 teams in more than 140 countries
            <br />
            trust us
          </div>
          <div className="flex items-center gap-16 justify-center mt-5">
            <div>
              <img src="/waverio.png" className="w-[80%] h-auto" />
            </div>
            <div>
              <img src="/square.png" className="w-[80%] h-auto " />
            </div>
            <div>
              <img src="/martino.png" className="w-[80%] h-auto " />
            </div>
            <div>
              <img src="/virogan.png" className="w-[80%] h-auto " />
            </div>
            <div>
              <img src="/vertex.png" className="w-[80%] h-auto " />
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className="border"></div>

      {/* about us section */}
      <section id="aboutus">
        <div className="bg-white ">
          <div className="grid grid-cols-2 max-w-6xl mx-auto">
            <div className="col-span-1">
              <img src="/Group2404.png" className="w-full h-auto" />
            </div>
            <div className="col-span-1 py-12">
              <button className="rounded-full bg-[#eaeff9] text-center w-[240px] h-[48px] font-[500] mb-4">
                <span className="text-[18px] font-[500] text-[#2757BE]">
                  About Us
                </span>
              </button>
              <div className="font-[600] text-[40px] mb-4 leading-tight">
                Effortless <span className="text-[#2757BE]">HR Management</span>{" "}
                for a Smarter Workforce
              </div>
              <div className="text-[18px] font-[400] mb-4 leading-relaxed">
                Simplify your HR processes with our all-in-one solution. From
                employee onboarding to payroll, performance tracking, and
                compliance management our platform helps you streamline
                operations, reduce manual work, and enhance productivity. Stay
                organized, save time, and focus on what matters most your people
              </div>
              <button className="rounded-sm bg-[#139fdd] text-center w-[240px] h-[48px] font-[500]">
                <span className="text-[18px] font-[500] text-white">
                  Discover More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}

      <section id="features" className="">
        <div className="bg-white py-12">
          <div className="font-[600] text-[40px] mb-4 leading-tight max-w-xl mx-auto text-center">
            Powerful Features for Seamless{" "}
            <span className="text-[#2757BE]">HR Management</span>
          </div>
          <div className="text-center">
            From hiring to payroll, streamline every HR process with our smart
            and intuitive tools.
          </div>
          <div className="grid grid-cols-2 max-w-6xl mx-auto">
            <div className="col-span-1 py-12">
              <div className="flex items-center gap-10 mb-6">
                <div className="font-[500] text-[24] cursor-pointer border-b-2 border-blue-500 text-blue-500">
                  Employee
                </div>
                <div className="font-[500] text-[24] cursor-pointer hover:border-b-2 hover:border-blue-500">
                  Attendance
                </div>
                <div className="font-[500] text-[24] cursor-pointer hover:border-b-2 hover:border-blue-500">
                  Leaves
                </div>
                <div className="font-[500] text-[24] cursor-pointer hover:border-b-2 hover:border-blue-500">
                  Schedules
                </div>
              </div>
              <div className="font-[500] text-[40px] mb-4 leading-tight">
                Smart{" "}
                <span className="text-[#2757BE]">Employee Management </span> for
                a Streamlined Workforce
              </div>
              <div className="text-[18px] font-[400] mb-4 leading-relaxed">
                Effortlessly manage your team with our powerful employee
                management system. Keep all employee records organized, track
                roles and responsibilities, and simplify HR operations in one
                centralized platform. From onboarding new hires to managing
                performance and payroll, our solution ensures a seamless
                experience for both HR teams and employees. Reduce paperwork,
                enhance productivity, and focus on growing your business with an
                efficient workforce.
              </div>
            </div>
            <div className="col-span-1">
              <img src="/Card.png" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* package section */}
      <section className="bg-white pb-10" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white py-6">
            <div className="container mx-auto px-4">
              <div className="font-[600] text-[40px] mb-4 leading-tight max-w-xl mx-auto text-center">
                Our HR Management Packages
              </div>
              <div className="text-center">
                {" "}
                Flexible HR Solutions Tailored to Your Business Needs
              </div>

              <div className="mt-4 flex justify-center space-x-4 bg-[#FFFFFF] ">
                <div className="border mt-5">
                <button
                  className={`rounded-none w-[130px] h-[44] text-[16px] font-[600] ${
                    isMonthly
                      ? "bg-[#2757BE] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={`rounded-none w-[130px] h-[44] text-[16px] font-[600] ${
                    !isMonthly
                      ? "bg-[#2757BE] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setIsMonthly(false)}
                >
                  Yearly
                </button>
                </div>
              </div>


            </div>
          </div>

          <div className="container mx-auto px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* contract section */}
      <section 
      id="contact" 
      className="bg-blue-600 text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
      >

         {/* Left Side */}
         <div className="lg:w-1/2 space-y-6">
          <div className=" w-[550px] h-[600px] space-y-10">
          <h2 className="text-[52px] font-[600]">
            Feel free to contact us to learn more.
          </h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-800 p-3 rounded-full">
                <FaPhone className="text-white text-lg" />
              </div>
              <div>
                <p className="font-semibold">Contact Us</p>
                <p className="text-gray-200">+088 (246) 642-27-10</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-800 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <p className="font-semibold">9675 Grant Ave.</p>
                <p className="text-gray-200">Chicago Heights, IL 60411</p>
              </div>
            </div>
          </div>
          <div className="w-[398] h-[192]">
          <p className="text-gray-200 mt-4">
            "We are always ready to help you with any mortgage issue. We provide
            the only loan you need at low interest rates. You can safely make a
            mortgage agreement with us."
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <img
              src="/Ellipse.jpg"
              alt="Jenny Wilson"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Jenny Wilson</p>
              <p className="text-gray-200 text-sm">Director @Company</p>
            </div>
          </div>
          </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white w-[636px] h-[599px] text-black p-8 rounded-lg shadow-lg lg:w-1/2 mt-12 lg:mt-0">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Contact With Us
          </h3>
          <form className="space-y-6 mt-6">
           <div className="flex items-center gap-11 justify-center">
           <div className="">
              <label className="text-[14px]">Name*</label><br/>
              <input
                type="text"
                placeholder=""
                className="w-[275px] p-2 mt-2 h-[50px] border border-gray-300 rounded-none"
                required
              />
            </div>
            <div className="">
              <label className="text-[14px]">Number*</label><br/>
              <input
                type="text"
                placeholder=""
                className="w-[275px] p-2 mt-2 h-[50px] border border-gray-300 rounded-none"
                required
              />
            </div>
           </div>
           <div className="flex items-center gap-11 justify-center">
           <div className="">
              <label className="text-[14px]">Email*</label><br/>
              <input
                type="text"
                placeholder=""
                className="w-[275px] p-2 mt-2 h-[50px] border border-gray-300 rounded-none"
                required
              />
            </div>
            <div className="">
              <label className="text-[14px]">Subject</label><br/>
              <input
                type="text"
                placeholder=""
                className="w-[275px] p-2 mt-2 h-[50px] border border-gray-300 rounded-none"
                required
              />
            </div>
           </div>
           <div className="ml-2 text-center">
              <label className="text-[14px]">Your Message</label><br/>
              <textarea
              placeholder="Your Message"
              className="w-[600px] p-2 border border-gray-300 rounded-lg h-28"
              required
            ></textarea>
            <button className="w-[600px] h-[60px] text-center justify-center text-[16px] font-[600] mt-10 bg-[#2757be] text-white py-3 rounded-md hover:bg-blue-700">
              Send Message
            </button>
            </div>
            
            
          </form>
        </div>
  
      </section>


      {/* Footer */}
      <footer className="bg-[#000f2f] text-white py-20 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="mt-[-36px]">
            <div className="">
              <img src="/mainlogo.png" className="w-[120] h-[75px]"/>
            </div>
            <p className="mt-4 text-gray-400">
              There are many variations of passages of Lorem the Ipsum available
              it majority.
            </p>
            <div className="mt-4 flex border border-gray-400 rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder=""
                className="px-4 py-2 w-full bg-white text-white focus:outline-none"
              />
              <button className="bg-[#2757be] px-6 font-[600] w-[120px] text-[14px] h-[40px] text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Incident Responder</li>
              <li>Secure Managed IT</li>
              <li>Check website Url</li>
              <li>Locker Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Payment Plans</li>
              <li>Make saving More</li>
              <li>Tax Calculator</li>
              <li>Talk To Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              455 West Orchard Street Kings Mountain, NC 280867
            </p>
            <p className="text-gray-400 mt-2">📞 +088 (246) 642-27-10</p>
            <p className="text-gray-400 mt-2">📧 example@gmail.com</p>
          </div>
        </div>
        <hr className="mt-8 border-gray-600" />
        <p className="text-center text-gray-500 text-sm mt-10">
          © 2022 Sharko All Rights Reserved. Designed by Finestdevs
        </p>
      </footer>
    </div>
  );
}
