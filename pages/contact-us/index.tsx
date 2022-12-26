import { adress} from "../../services/data/city";
import { useState } from "react";
const contactUs =()=>{
  const [cityItem] = useState(adress);

    return(
        <div>
        <img src="/assets/contact-us/contact1.jpg" alt="iran map"  className="w-screen"/>
        
        {/* ******************** */}
<div id="grid" className="container lg:flex justify-between items-start  lg:-mt-12">
    
<aside dir="rtl"  className="bg-white lg:w-[26%] w-full flex justify-center items-center p-5 flex-col shadow rounded-lg " >
            <h1 className="font-bold">تماس با ما</h1>
        <section  className="mt-8 text-center">
            <p>تلفن پشتیبانی: &nbsp;<a href="tel:+982141849000" className="hover:text-primary">۴۱۸۴۹۰۰۰ – ۰۲۱</a>
            &nbsp; و&nbsp;<a href="tel:+982191039000"  className="hover:text-primary">۹۱۰۳۹۰۰۰ – ۰۲۱</a>
        </p>
        <p>فکس: &nbsp; <span className="hover:text-primary" >۸۸ ۴۷ ۷۷ ۸۹ – ۰۲۱</span>
        </p>
        <p>پست الکترونیکی: &nbsp;<a href="mailto:info@snapp.cab" className="hover:text-primary" >info@snapp.cab</a>
        </p>
        </section>
        <section  className="mt-8 text-center">
            <h2 className="font-bold text-primary">دفتر امور کاربران راننده و مسافر</h2>
        <p>شماره تماس: &nbsp;<a href="tel:+982141849000" className="hover:text-primary" >۴۱۸۴۹۰۰۰ – ۰۲۱</a>
        &nbsp; و&nbsp;<a href="tel:+982191039000" className="hover:text-primary" 
        >۹۱۰۳۹۰۰۰ – ۰۲۱</a>
        </p>
        <p>خدمات مربوط به مسافران به صورت غیر حضوری عرضه می‌شود.</p>
        </section>
        <section  className="mt-8 text-center">
            <h2 className="font-bold text-primary">دفتر اسنپ‌باکس و اسنپ‌بایک در تهران</h2>
        <a href="https://goo.gl/maps/BT4At6c4dgD2" className="hover:text-primary">خیابان گاندی جنوبی، خیابان هفدهم ، پلاک ۲۷</a>
        <p>تلفن پشتیبانی:&nbsp;<a href="tel:+982196642" className="hover:text-primary">۹۶۶۴۲ – ۰۲۱</a>
        </p>
        </section>
        </aside>


        
<main dir="rtl"  className="bg-white lg:w-[70%] w-full flex justify-between  p-5 flex-col shadow rounded-lg">
<input  placeholder="جستجوی نام شهر" list="dl-cities" type="search" className="rounded-md py-2 px-2 bg-slate-200"></input>
<datalist id="dl-cities">
    
    {cityItem.map((item) => (
         <option value={item.name} key={item.id}>
        {item.name}
         </option>

         ))}
</datalist>

<div className="">
{cityItem.map((item) => (
<div  className="mt-12">
<h2 className="font-bold">{item.name}</h2>

<div className="lg:flex mt-3">
<p className="lg:pl-2">آدرس :</p>
<a href="" className="hover:text-primary">{item.address}</a>
</div>
<div className="lg:flex mt-3">
<p className="lg:pl-2">ساعات کاری:</p>
<p className="">{item.time}</p>
</div>
    </div>
    ))}


</div>

</main>
  

</div>


        {/* ******************************footer */}
        <div className="container" dir="rtl">
        <h2 className="text-primary mt-10 font-bold text-xl">دفتر توسعه کسب‌وکار پاسخگویی به سازمان‌ها و شرکت‌ها</h2>
        <p>اگر قصد دارید از اسنپ برای امور حمل‌ونقلی کسب‌وکار کوچک یا بزرگ خود استفاده کنید با دفتر توسعه کسب‌وکار ما تماس بگیرید، تا راهکارهای سازمانی خود را به شما معرفی کنیم. در این بخش، بسته به نیازهای سازمان خود می‌توانید یکی از دو راهکار پنل یا کد سازمانی را جهت سهولت حمل‌ونقل در کسب‌وکارتان انتخاب کنید.</p>
        <a href="" className="hover:text-primary text-graydark my-2">corporate@snapp.cab</a>
        <h2 className="text-primary mt-10 font-bold text-xl">دفتر روابط عمومی (پاسخگویی به امور رسانه‌ها)</h2>
        <a href="mailto:pr@snapp.cab" className="hover:text-primary text-graydark my-2">pr@snapp.cab</a>
        <h2 className="text-primary mt-10 font-bold text-xl">بخش نیکوکاری و مسئولیت اجتماعی</h2>
        <a href="mailto:csr.pr@snapp.cab" className="hover:text-primary text-graydark my-2">csr.pr@snapp.cab</a>


        <section className="flex justify-between items-center mt-12 mb-4 lg:flex-row flex-col ">
            <h3 className="font-extrabold text-2xl text-black2">زندگی خودتو با اسنپ ساده‌تر کن!</h3>

          <button className="rounded-lg mt-10 lg:mt-0 px-6 py-2 bg-primary text-white font-bold">ارسال لینک</button>
      </section>
        </div>
       
        </div>
    
    )

}

export default contactUs