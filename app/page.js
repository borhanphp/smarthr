"use client";
import Head from "next/head";
import PackageCard from "@/components/PackageCard";
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [activeTab, setActiveTab] = useState("Employee");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const manus = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Blogs" },
    { name: "About Us" },
    { name: "Contact Us" },
  ];

  return (
    <div className="min-h-screen px-0 sm:px-6 bg-white lg:px-0 overflow-x-hidden">
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        {/* Hero Section */}
        <section className="text-center px-6 relative max-w-7xl mx-auto">
          <div className="pt-10 pb-16">
            {/* Navbar */}
            <nav className="flex w-full h-[100px] justify-between items-center p-6 max-w-7xl mx-auto bg-[#121d35] rounded-lg">
              <div className="text-2xl font-bold text-blue-400">
                <img
                  src="/mainlogo.png"
                  className="w-[180px] h-[100px] md:w-[220px] md:h-[140px]"
                  alt="Logo"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 items-center">
                {manus?.map((item) => (
                  <a
                    key={item?.name}
                    href={`#${item?.name?.toLowerCase().replace(/\s+/g, "")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(item?.name)
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white text-lg font-medium hover:text-blue-400"
                  >
                    {item?.name}
                  </a>
                ))}
                {/* Desktop "Get Started" Button */}
                <button className="bg-[#139FDD] w-[220px] h-[48px] text-[18px] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-lg">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#121d35] p-6 rounded-lg z-50 flex flex-col gap-4">
                {manus?.map(
                  (item) => (
                    <a
                      key={item?.name}
                      href={`#${item?.name?.toLowerCase().replace(/\s+/g, "")}`}
                      className="block text-white text-lg font-medium py-2 hover:text-blue-400"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item?.name)
                          .scrollIntoView({ behavior: "smooth" });
                          setIsMenuOpen(false);
                      }}
                    >
                      {item?.name}
                    </a>
                  )
                )}
                {/* Mobile "Get Started" Button */}
                <button className="bg-[#139FDD] w-full h-[48px] text-[18px] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-lg">
                  Get Started
                </button>
              </div>
            )}
          </div>

          <h1 className="text-[32px] md:text-[56px] font-bold leading-tight text-white text-center">
            Smart HR Management – <br />
            <span className="">Simplify, Automate, Succeed!</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300 text-center">
            Effortless employee management with advanced automation, seamless
            payroll processing, and real-time performance tracking – all in one
            powerful platform to streamline your HR operations!
          </p>
          <button className="mt-6 w-full md:w-[220px] text-[#2757BE] h-[56px] bg-white text-[18px] px-6 py-3 rounded-md font-bold hover:bg-gray-200">
            Signup Now
          </button>
        </section>

        {/* Image Section */}
        <div className="mt-16 flex flex-wrap justify-center relative gap-6 px-4">
          <img
            src="/image5.png"
            alt="Dashboard Screenshot"
            className="w-full max-w-[800px] h-auto"
          />
          <img
            src="/Chart2.png"
            alt="Analytics"
            className="absolute hidden md:block right-10 md:right-60 top-[-30px] w-40 md:w-60 shadow-lg rounded-lg"
          />
          <img
            src="/user.png"
            alt="User Rating"
            className="absolute hidden md:block w-[150px] md:w-[204px] h-[100px] md:h-[126px] top-[-100px] left-[50px] md:left-[200px] shadow-lg rounded-lg"
          />
          <img
            src="/statistics.png"
            alt="Data Chart"
            className="absolute hidden md:block right-5 md:right-20 top-[20px] w-[80px] md:w-100 h-[100px] md:h-124 shadow-lg rounded-lg"
          />
        </div>
      </div>

      {/* hr design */}
      <section>
        <div className="bg-white text-black py-12 px-6 md:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto text-[24px] font-[700] text-[#132f6d]">
              Over 50,000 teams in more than 140 countries trust us
            </div>
            <div className="grid md:grid-cols-5 grid-cols-4 gap-5 mt-5 place-content-center">
              <div className="col-span-2 md:col-span-1">
                <img src="/waverio.png" className="w-[80%] h-auto" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <img src="/square.png" className="w-[80%] h-auto " />
              </div>
              <div className="col-span-2 md:col-span-1">
                <img src="/martino.png" className="w-[80%] h-auto " />
              </div>
              <div className="col-span-2 md:col-span-1">
                <img src="/virogan.png" className="w-[80%] h-auto " />
              </div>
              <div className="col-span-2 md:col-span-1">
                <img src="/vertex.png" className="w-[80%] h-auto " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border"></div>

      {/* about us section */}
      <section id="About Us">
        <div className="bg-white px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="col-span-1 order-2 md:order-1">
              <img src="/Group2404.png" className="w-full h-auto" />
            </div>
            <div className="col-span-1 py-12 order-1 md:order-2">
              <div className="flex justify-center md:justify-start">
                <button className="rounded-full bg-[#eaeff9] text-center w-[240px] h-[48px] font-[500] mb-4">
                  <span className="text-[18px] font-[500] text-[#2757BE]">
                    About Us
                  </span>
                </button>
              </div>
              <div className="flex justify-center">
                <div className="font-[600] text-[40px] text-black mb-4">
                  Effortless{" "}
                  <span className="text-[#2757BE]">HR Management </span> for a
                  Smarter Workforce
                </div>
              </div>
              <div className="text-[18px] text-black font-[400] mb-4 leading-relaxed">
                Simplify your HR processes with our all-in-one solution. From
                employee onboarding to payroll, performance tracking, and
                compliance management our platform helps you streamline
                operations, reduce manual work, and enhance productivity. Stay
                organized, save time, and focus on what matters most your people
              </div>
              <div className="flex justify-center md:justify-start">
                <button className="rounded-sm bg-[#139fdd] text-center w-[240px] h-[48px] font-[500]">
                  <span className="text-[18px] font-[500] text-white">
                    Discover More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}

      <section id="Features" className="">
        <div className="bg-white py-12 px-6 md:px-0">
          <div className="font-[600] text-black text-[40px] mb-4 max-w-xl mx-auto text-center">
            Powerful Features for Seamless{" "}
            <span className="text-[#2757BE]">HR Management</span>
          </div>
          <div className="text-center text-black">
            From hiring to payroll, streamline every HR process with our smart
            and intuitive tools.
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
            <div className="col-span-1 py-12">
              <div className="flex items-center gap-10 mb-6">
                <div
                  className={`font-[500] text-black text-[24] cursor-pointer border-b-2 ${
                    activeTab === "Employee"
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("Employee")}
                >
                  Employee
                </div>
                <div
                  className={`font-[500] text-black text-[24] cursor-pointer border-b-2 ${
                    activeTab === "Attendance"
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("Attendance")}
                >
                  Attendance
                </div>
                <div
                  className={`font-[500] text-black text-[24] cursor-pointer border-b-2 ${
                    activeTab === "Leaves"
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("Leaves")}
                >
                  Leaves
                </div>
                <div
                  className={`font-[500] text-black text-[24] cursor-pointer border-b-2 ${
                    activeTab === "Schedules"
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("Schedules")}
                >
                  Schedules
                </div>
              </div>

              <div className="text-[18px] font-[400] mb-4 leading-relaxed">
                {activeTab === "Employee" && (
                  <>
                    <div className="font-[500] text-black text-[40px] mb-4 leading-tight">
                      Smart{" "}
                      <span className="text-[#2757BE]">
                        Employee Management{" "}
                      </span>{" "}
                      for a Streamlined Workforce
                    </div>
                    <p className="text-black">
                      Effortlessly manage your team with our powerful employee
                      management system. Keep all employee records organized,
                      track roles and responsibilities, and simplify HR
                      operations in one centralized platform. From onboarding
                      new hires to managing performance and payroll, our
                      solution ensures a seamless experience for both HR teams
                      and employees. Reduce paperwork, enhance productivity, and
                      focus on growing your business with an efficient
                      workforce.
                    </p>
                  </>
                )}
                {activeTab === "Attendance" && (
                  <>
                    <div className="font-[500] text-black text-[40px] mb-4 leading-tight">
                      Smart{" "}
                      <span className="text-[#2757BE]">Attendence System </span>
                    </div>
                    <p className="text-black">
                      Donec ac erat orci. Ut eget suscipit nisl, et blandit
                      nisl. Fusce quis eros sed mauris lobortis iaculis. Morbi
                      tellus magna, mattis vel quam non, sagittis pellentesque
                      turpis. Sed malesuada, augue id dictum lobortis, nisi
                      dolor finibus neque, non commodo quam leo ac magna.
                      Curabitur et lacinia ex. Fusce ultricies tincidunt
                      bibendum. Vestibulum tempor consequat lacus. Sed et
                      pharetra massa. Nam nec fermentum massa. Sed luctus vitae
                      enim ut ullamcorper. Sed eu nunc faucibus, maximus ex
                      quis, eleifend orci. Ut a mattis nisl, in efficitur
                      lectus. Nam bibendum ultricies ipsum non laoreet. Integer
                      fermentum dolor leo, et condimentum elit luctus id.
                    </p>
                  </>
                )}
                {activeTab === "Leaves" && (
                  <>
                    <div className="font-[500] text-black text-[40px] mb-4 leading-tight">
                      Smart{" "}
                      <span className="text-[#2757BE]">Leave Calculation </span>
                    </div>
                    <p className="text-black">
                      Phasellus egestas felis ac magna consequat, eu scelerisque
                      libero sagittis. Proin ornare, nisi varius pellentesque
                      condimentum, elit metus pretium ligula, non vestibulum
                      felis risus vitae nibh. Proin in velit rutrum, pretium
                      justo ac, volutpat orci. Morbi vehicula ipsum fermentum,
                      auctor nisi eu, volutpat dolor. Phasellus id arcu ut lorem
                      convallis vestibulum id vel enim. Morbi ullamcorper
                      molestie lectus. Suspendisse porta magna nec tellus
                      luctus, vel mollis enim pellentesque. Nunc gravida et arcu
                      at posuere. Integer quis mi iaculis, gravida sem a,
                      placerat nibh. Sed in congue tellus.
                    </p>
                  </>
                )}
                {activeTab === "Schedules" && (
                  <>
                    <div className="font-[500] text-black text-[40px] mb-4 leading-tight">
                      Smart{" "}
                      <span className="text-[#2757BE]">Schedules System </span>
                    </div>
                    <p className="text-black">
                      Vivamus mattis dui ipsum, a vestibulum risus ullamcorper
                      a. Integer sagittis auctor lacus ut scelerisque. Sed
                      fringilla eros in faucibus pulvinar. Proin ut molestie
                      velit. Nulla vehicula congue neque non viverra. Aliquam
                      interdum libero ut odio vehicula aliquet. Etiam efficitur
                      ante vel dolor bibendum tempus. Nulla mattis blandit
                      porttitor. Phasellus suscipit, lacus et aliquam posuere,
                      nisi augue commodo lectus, at interdum urna ante a ligula.
                      Mauris iaculis maximus consequat.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="col-span-1">
              {activeTab === "Employee" && (
                <>
                  <img src="/Card.png" className="w-full h-auto" />
                </>
              )}
              {activeTab === "Attendance" && (
                <>
                  <img
                    src="/attendence.png"
                    className="w-full h-auto mt-20 justify-center"
                  />
                </>
              )}
              {activeTab === "Leaves" && (
                <>
                  <img src="/leave.png" className="w-full h-auto" />
                </>
              )}
              {activeTab === "Schedules" && (
                <>
                  <img src="/schedule.jpeg" className="w-full h-auto" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* package section */}
      <section className="bg-white pb-10" id="Pricing">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white py-6">
            <div className="container mx-auto px-4">
              <div className="font-[600] text-black text-[32px] md:text-[40px] mb-4 leading-tight max-w-xl mx-auto text-center">
                Our HR Management Packages
              </div>
              <div className="text-center text-black">
                Flexible HR Solutions Tailored to Your Business Needs
              </div>

              {/* <div className="mt-4 flex item-center justify-center space-x-0 md:space-x-6"> */}
              <div className="flex items-center justify-center mt-5">
                <button
                  className={`rounded-none border w-[130px] h-[44px] text-[16px] font-[600] ${
                    isMonthly
                      ? "bg-[#2757BE] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={`rounded-none border w-[130px] h-[44px] text-[16px] font-[600] ${
                    !isMonthly
                      ? "bg-[#2757BE] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setIsMonthly(false)}
                >
                  Yearly
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="container mx-auto px-10 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} isMonthly={isMonthly} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* contract section */}
      <section
        id="Contact Us"
        className="bg-blue-600 text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start"
        style={{
          backgroundImage: "url('/BG.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* Left Side */}
        <div className="lg:w-1/2 w-full space-y-6">
          <div className="max-w-lg space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
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
            <div className="space-y-4">
              <p className="text-gray-200">
                "We are always ready to help you with any mortgage issue. We
                provide the only loan you need at low interest rates. You can
                safely make a mortgage agreement with us."
              </p>
              <div className="flex items-center space-x-4">
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
        <div className="bg-white w-full max-w-lg text-black p-8 rounded-lg shadow-lg mt-12 lg:mt-0">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Contact With Us
          </h3>
          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Name*</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 h-12 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Number*</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 h-12 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Email*</label>
                <input
                  type="email"
                  className="w-full p-2 mt-2 h-12 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 h-12 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <label className="text-sm">Your Message</label>
              <textarea
                className="w-full p-2 mt-2 h-28 border border-gray-300 rounded"
                required
              ></textarea>
              <button className="w-full h-14 text-lg font-semibold mt-6 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000f2f] text-white py-20 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div>
              <img src="/mainlogo.png" className="w-30 h-20" alt="Main Logo" />
            </div>
            <p className="mt-4 text-gray-400">
              There are many variations of passages of Lorem the Ipsum available
              it majority.
            </p>
            <div className="mt-4 flex border border-gray-400 rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 w-full bg-white text-black focus:outline-none"
              />
              <button className="bg-[#2757be] px-6 font-semibold w-[120px] text-sm h-[40px] text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Incident Responder</li>
              <li>Secure Managed IT</li>
              <li>Check website URL</li>
              <li>Locker Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Payment Plans</li>
              <li>Make Saving More</li>
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
