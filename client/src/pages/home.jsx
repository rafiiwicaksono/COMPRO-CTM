import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-blue-900 text-white">
        {/* Top Section */}
        <div className="bg-blue-800 py-2"></div>

        {/* Navigation */}
        <nav className="bg-blue-700 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to={"/"}>
                <img
                  src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/ygf9jan2wht2z2jj3wdm.jpg"
                  alt="Company Logo"
                  className="mr-4 h-20"
                />
              </Link>
            </div>
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link className="hover:underline" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#aboutUs" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Central Content Section */}
        <div className="bg-white">
          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-20">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to Citra Translog Mandiri
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                We provide innovative solutions for your business.
              </p>
              <a
                href="#aboutUs"
                className="mt-4 inline-block bg-white text-blue-700 rounded-full py-2 px-6 hover:bg-blue-200 transition"
              >
                See More About Us
              </a>
            </div>
          </header>

          {/* About Us Section */}
          <section className="py-16">
            <div className="container mx-auto">
              <h2
                id="aboutUs"
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-red-600"
              >
                About Us
              </h2>
              <p className="text-gray-700 text-center leading-relaxed font-bold text-base md:text-lg lg:text-xl">
                Founded in 2021, CV. Citra Translog Mandiri is a freight
                forwarding company operating in the logistics sector, providing
                goods delivery services, warehousing for consumer goods, custom
                services, consulting services, and training. The company has
                strong management and good human resources, especially in the
                implementation of marine imports.
              </p>
              <p className="text-gray-700 text-center leading-relaxed font-bold text-base md:text-lg lg:text-xl">
                Our commitment is to prioritize the principles of
                professionalism, integrity, and loyalty to clients in every
                service provided. We aim to ensure customer satisfaction with
                the services we provide.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="container mx-auto">
              <h2
                id="services"
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center text-red-600"
              >
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/gctuoahkerfs1vn73iah.jpg"
                    alt="Service 1"
                    className="mb-4 w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Transportation Management
                  </h3>
                  <p className="text-gray-600">
                    Freight Forwarding services for sea imports.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/uetowlpkkr4om4075hsk.jpg"
                    alt="Service 2"
                    className="mb-4 w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Maritime Document Processing
                  </h3>
                  <p className="text-gray-600">
                    Customs services for maritime documents.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/a3wvwswoms9exxf3alvi.jpg"
                    alt="Service 3"
                    className="mb-4 w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Sea Import Permit Processing
                  </h3>
                  <p className="text-gray-600">
                    Processing services for sea import permits (heavy equipment,
                    machinery, etc.).
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/rxckcru39jilrmylx4zi.jpg"
                    alt="Service 4"
                    className="mb-4 w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Import Training and Customs Documents
                  </h3>
                  <p className="text-gray-600">
                    Training services for import procedures and customs document
                    processing.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="https://res.cloudinary.com/djfaa49ia/image/upload/v1709389984/CTM/xqvdp7rcpdliq7jjrtwq.jpg"
                    alt="Service 5"
                    className="mb-4 w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Legal Processing of PI (Import Approval)
                  </h3>
                  <p className="text-gray-600">
                    Legal processing services for Import Approval (PI).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-700 text-white py-4 text-center">
            <div className="container mx-auto text-center">
              <h4
                id="contact"
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-red-600"
              >
                Citra Translog Mandiri
              </h4>
              <p className="text-white flex items-center justify-center flex-col">
                <span>Tamansari Persada Blok C14 NO.2, Bogor 16166</span>
                <div className="flex items-center mt-2">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  <span className="ml-1">: (62-21) 812-8467-4136</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="ml-1">: anto.tursiyono@gmail.com</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    className="h-5 w-5 text-slate-100"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3.6" y1="9" x2="20.4" y2="9" />
                    <line x1="3.6" y1="15" x2="20.4" y2="15" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                  <a
                    href="http://www.citratranslog.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline ml-1"
                  >
                    https://citratranslog.web.app
                  </a>
                </div>
              </p>
              <br />
              <p className="text-gray-300 text-sm mt-4">
                ©2024 Citra Translog Mandiri all right reserved.
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="bg-blue-800 py-2"></div>
      </div>
    </>
  );
}
