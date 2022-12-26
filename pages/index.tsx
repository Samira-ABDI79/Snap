
import { services  , snapPropertice ,navganData} from "../services/data/services";
import { useState } from "react";

function HomePage() {
  const [servicesItem] = useState(services);
  const [snapProperticeItem] = useState(snapPropertice);
  const [navganItem] = useState(navganData);



  return (
    <>
<div className="flex lg:flex-row flex-col  mt-20">
<img src="/assets/home1.jpg" alt="سوپراپلیکیشن" className="lg:inline-block hidden"/>
<img src="/assets/home0.jpg" alt="سوپراپلیکیشن" className="inline-block lg:hidden"/>

    <div className="bg-primary2 text-white lg:p-0 lg:py-16 lg:pr-24 lg:pl-10 p-8 flex flex-col justify-between" dir="rtl">
      <h1 className="text-5xl hero-text font-bold lg:my-0 my-10">تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!</h1>
      <p className="text-xl lg:my-0 my-10">از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.</p>
      <div className="lg:flex hidden  lg:flex-row flex-col">
      <input type="text" className="bg-primary2 border-b outline-none " placeholder="09xxxxx6789" />
        <button className="bg-white mx-10 font-bold text-primary lg:my-0 my-10 px-5 py-3 rounded-lg">ارسال لینک</button>
    
      </div>
      <a href="" className="lg:block hidden border  px-5 py-3 rounded-lg  font-bold w-64">ورود به وب اپلیکیشن اسنپ</a>
      <a href="" className="lg:hidden flex justify-center items-center bg-white text-black3 text-xl font-bold border  px-5 py-4 rounded-lg  w-full">دانلود اپلیکیشن اسنپ</a>
    
    </div>
</div>

<div className="container">
<div className="flex flex-wrap  justify-between lg:flex-row flex-col">
<img src="/icons/iApps.png" alt="وبلاگ اسنپ" className="lg:w-1/6 w-full py-10"/>
<img src="/icons/sibapp-badge-white.png" alt="وبلاگ اسنپ" className="lg:w-1/6 w-full py-10"/>
<img src="/icons/snapp-pwa.png" alt="وبلاگ اسنپ" className="lg:w-1/6 w-full py-10"/>
<img src="/icons/bazaar.png" alt="وبلاگ اسنپ" className="lg:w-1/6 w-full py-10"/>
<img src="/icons/direct-download-badge.png" alt="وبلاگ اسنپ" className="lg:w-1/6 w-full py-10"/>
</div>
</div>

<div className=" bg-lightBlue w-screen py-8" dir="rtl">
  <p className="text-center font-bold text-menuItem text-4xl">یک اپلیکیشن، برای تمام نیاز‌ها</p>
<div className="flex flex-wrap lg:flex-row-reverse  flex-col-reverse justify-center px-2">
{servicesItem.map((item) => (
          <div className="flex items-center bg-white mt-10 px-4 py-5 rounded-xl lg:w-3/12 w-full mx-1 ">
             <img src={item?.image} alt={item?.text} className="w-[80px] "/>

            <div className="flex flex-col mr-2">
              <p className="font-bold">{item?.title}</p>
              <p className="text-gray">{item?.text}</p>
              </div>
            </div>

            ))}
</div>
</div>


<img src="/assets/home2.jpg" alt="سوپر اپ اسنپ؛ پاسخی به تمام نیازها"  className="w-screen my-12"/>
<div className="container " dir="rtl"> 
  
<h1 className="font-bold text-xl text-black3 my-10">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h1>
<p className="my4">اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>

</div>




<div className=" container py-8" >
<div className="flex flex-wrap lg:flex-row flex-col  justify-between ">
{snapProperticeItem.map((item) => (
          <div className="flex flex-col bg-white mt-10  py-5 rounded-lg lg:w-[29%]  w-full ">
         <div className="py-2 px-8 rounded-xl bg-lightBlue">
         <img src={item?.image} alt={item?.text} className="w-full "/>
         </div>

            <div className="flex flex-col "dir="rtl">
              <p className="font-bold my-7">{item?.title}</p>
              <p className="text-gray">{item?.text}</p>
              </div>
            </div>

            ))}
</div>
</div>
{/* ******************************** */}


<div className=" bg-lightBlue w-screen py-8 " dir="rtl">
 <div className="flex flex-col justify-center items-center">
 <p className=" font-bold text-menuItem text-4xl">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</p>
  <p className="  my-12 font-bold text-menuItem text-xl">بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
  <button className="  bg-primary mx-10 font-bold text-white lg:my-0 my-10 px-7 py-3 rounded-lg">ثبت‌نام رانندگان</button>

 </div>
<div className="container">
<img src="/assets/home3.jpg" alt="سوپر اپ اسنپ؛ پاسخی به تمام نیازها"  className="w-full my-12 rounded-xl"/>

<div className="flex flex-wrap lg:flex-row-reverse flex-col-reverse justify-between px-2 container">
{navganItem.map((item) => (
          <div className="flex items-center lg:flex-row flex-col bg-white mt-10 px-4 py-5 rounded-lg lg:w-[48.5%] w-full  ">
             <img src={item?.image} alt={item?.text} className="w-[130px] "/>

            <div className="flex flex-col mr-2">
              <p className="font-bold">{item?.title}</p>
              <p className="text-gray">{item?.text}</p>
              </div>
            </div>

            ))}
</div>
</div>
</div>
    </>
  );      
}
export default HomePage;
