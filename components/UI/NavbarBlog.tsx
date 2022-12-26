import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const menu = [
  {
    name: "اخبار",
    to: "/about-us",
  },
  {
    name: "مسئولیت اجتماعی",
    to: "/about-us",
  },
  {
    name: "تاکسی و پیک",
    to: "/about-us",
  },
  {
    name: "ایستگاه سلامت",
    to: "/contact",
  },
  {
    name: "ایستگاه غذا",
    to: "/blog",
  },
  {
    name: "ایستگاه سفر",
    to: "/recipes",
  },
  {
    name: "ایستگاه اسباب کشی",
    to: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div className="   font-inter" dir="rtl">
      <div className="flex py-10 pr-20 mx-6 ">
        
      <Link href="/">
        <img src="/icons/logo-1.png" alt="وبلاگ اسنپ" width="458" height="152" className="w-24 ml-5"/>
        </Link>
          <ul className="flex " >
            {menu.map(({ name, to }, index) => (
              <Link key={index} href={to}>
                <a
                  className={`${
                    pathname === to ? "scale-125 " : ""
                  } menu-item flex lg:ml-[60px] lg:py-[0px]  ml-[0px] text-menuItem  py-[20px]  hover:text-primary transition-all`}
                  onClick={() => setOpen(false)}
                >
                  {name}
                </a>
              </Link>
            ))}
          </ul>
  
        </div>
      
      </div>
 
  );
};

export default Navbar;
