"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const isHomePage = usePathName === "/";

  const isTransparent = isHomePage && !sticky;

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex h-[72px] w-full items-center transition-all duration-300 ${
          !isTransparent
            ? "fixed z-[9999] bg-white/95 shadow-sm shadow-black/5 backdrop-blur-md dark:bg-gray-dark/95"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container h-full">
          <div className="relative -mx-4 flex h-full items-center justify-between">
            {/* Logo */}
            <div className="flex h-full items-center w-60 max-w-full px-4 xl:mr-12">
              <Link href="/" className="header-logo flex h-full w-full items-center">
                <div className="relative h-[30px] w-[140px]">
                  <Image
                    src="/images/logo/LOGO_ALCARIA_AZUL.png"
                    alt="ALCARIA logo"
                    width={140}
                    height={30}
                    className={`absolute inset-0 w-full transition-opacity duration-300 ${!isTransparent ? "opacity-100" : "pointer-events-none opacity-0"}`}
                  />
                  <Image
                    src="/images/logo/LOGO_ALCARIA_BLANCO.png"
                    alt="ALCARIA logo"
                    fill
                    sizes="140px"
                    className={`object-cover object-center transition-opacity duration-300 ${isTransparent ? "opacity-100" : "pointer-events-none opacity-0"}`}
                  />
                </div>
              </Link>
            </div>

            <div className="flex h-full w-full items-center justify-between px-4">
              <div className="lg:flex lg:h-full lg:items-center">
                {/* Mobile hamburger */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isTransparent ? "bg-[#01203F]" : "bg-white"} ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isTransparent ? "bg-[#01203F]" : "bg-white"} ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isTransparent ? "bg-[#01203F]" : "bg-white"} ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>

                {/* Nav links */}
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-xl dark:border-white/10 dark:bg-dark"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:items-center lg:space-x-8">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`font-syne flex py-2 text-sm font-semibold transition-colors duration-200 lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 ${
                              navbarOpen ? "text-[#01203F] dark:text-white" : ""
                            } ${
                              isTransparent
                                ? "lg:text-white/80 lg:hover:text-white"
                                : "lg:text-[#01203F] lg:hover:text-[#0344DC] dark:lg:text-white"
                            }`}
                            onClick={() => setNavbarOpen(false)}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`font-syne flex cursor-pointer items-center justify-between py-2 text-sm font-semibold lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 ${
                                navbarOpen ? "text-[#01203F] dark:text-white" : ""
                              } ${
                                isTransparent
                                  ? "lg:text-white/80 lg:hover:text-white"
                                  : "lg:text-[#01203F] lg:hover:text-[#0344DC] dark:lg:text-white"
                              }`}
                            >
                              {menuItem.title}
                              <span className="pl-2">
                                <svg width="20" height="20" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-xl bg-white shadow-menu transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-[#01203F] hover:bg-gray-50 hover:text-[#0344DC] dark:text-white dark:hover:bg-white/5"
                                  onClick={() => setNavbarOpen(false)}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex lg:items-center lg:gap-4">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href="/contact"
                    className={`font-syne inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isTransparent
                        ? "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                        : "bg-[#FF4F00] text-white shadow-md shadow-[#FF4F00]/20 hover:bg-[#FF4F00]/90"
                    }`}
                  >
                    Demo Gratis
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
