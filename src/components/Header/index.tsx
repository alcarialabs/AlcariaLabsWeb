"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
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

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const isHomePage = usePathName === "/"; // Determinar si es la página principal

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          !isHomePage || sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  isHomePage && sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/LOGO_ALCARIA_AZUL.png"
                  alt="ALCARIA logo"
                  width={140}
                  height={30}
                  className={`w-full ${!isHomePage || sticky ? "block" : "hidden"}`}
                />
                <Image
                  src="/images/logo/LOGO_ALCARIA_BLANCO.png"
                  alt="ALCARIA logo"
                  width={140}
                  height={30}
                  className={`w-full ${isHomePage && !sticky ? "block" : "hidden"}`}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isHomePage || sticky ? "bg-black" : "bg-white"} ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isHomePage || sticky ? "bg-black" : "bg-white"} ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${!isHomePage || sticky ? "bg-black" : "bg-white"} ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 shadow-lg dark:border-body-color/20 dark:bg-dark"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              navbarOpen ? 'text-dark dark:text-white' : ''
                            } ${
                              isHomePage
                                ? (sticky ? 'lg:text-dark lg:dark:text-white lg:hover:text-primary' : 'lg:text-white lg:hover:text-white lg:dark:text-white lg:group-hover:opacity-70')
                                : 'lg:text-dark lg:dark:text-white lg:hover:text-primary'
                            }`}
                            onClick={() => setNavbarOpen(false)}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-base group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                navbarOpen ? 'text-dark dark:text-white' : ''
                              } ${
                                isHomePage
                                  ? (sticky ? 'lg:text-dark lg:dark:text-white' : 'lg:text-white/70 lg:group-hover:text-white lg:dark:text-white')
                                  : 'lg:text-dark lg:dark:text-white'
                              }`}
                            >
                              {menuItem.title}
                              <span
                                className={`pl-3 ${
                                  navbarOpen ? 'text-dark dark:text-white' : ''
                                } ${
                                  isHomePage
                                    ? (sticky ? 'lg:text-dark lg:dark:text-white' : 'lg:text-white/70 lg:dark:text-white')
                                    : 'lg:text-dark lg:dark:text-white'
                                }`}
                              >
                                <svg width="25" height="24" viewBox="0 0 25 24">
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
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white dark:hover:text-primary lg:px-3"
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
