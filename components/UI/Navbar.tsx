import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export const menu = [
  {
    name: " فرصت‌های شغلی ",
    to: "/jobs/",
  },
  {
    name: " بلاگ ",
    to: "/blog",
  },
  {
    name: " باشگاه رانندگان ",
    to: "/drivers-club",
  },
  {
    name: " ثبت نام راننده اسنپ ",
    to: "/driver-regisation",
  },
  {
    name: " پنل سازمانی ",
    to: "/organization-panel",
  },
  {
    name: " درباره ما ",
    to: "/about-us",
  },
  {
    name: " تماس با ما ",
    to: "/contact-us",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <header className="fixed left-0 top-0 right-0 bg-white   font-inter" dir="rtl">
      <div className="lg:flex py-4 pr-20 mx-3 items-center">
        
      <Link href="/">
        <img src="/icons/logo-1.png" alt="وبلاگ اسنپ" width="90" height="32" className="w-[90px] h-[32px] ml-5 float-left"/>
        </Link>
          <ul className="lg:flex hidden" >
            {menu.map(({ name, to }, index) => (
              <Link key={index} href={to}>
                <a
                  className=" flex lg:mr-6   text-menuItem  py-4  hover:text-primary transition-all"rounded-t-md
                  onClick={() => setOpen(false)}
                >
                  {name}
                </a>
              </Link>
            ))}
          </ul>
  
        </div>
      
      </header>
 
  );
};

export default Navbar;
