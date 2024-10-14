"use client";
<<<<<<< HEAD
import { LazyLoadImage } from "react-lazy-load-image-component";
// import DiscountCard from "../../components/common/DiscountCard";
import DiscountCard from '../../../components/common/DiscountCard'
import { useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import Snowfall from "react-snowfall";
import { GiButterfly } from "react-icons/gi";
import { Card, CardHeader, } from "@/components/ui/card";

const Special = () => {
  const books = [
    {
      "bookId": 1,
      "bookName": "Super Sahaba Stories",
      "author": "Learning Roots",
      "image": "https://i.postimg.cc/nhhxWjKg/image.png",
      "review": "Each story inspires faith, kindness, humility, and courage, providing valuable life lessons. We don't show pictures of the Sahaba, but the Learning Roots characters 'enter the world' of the Sahaba, allowing us to illustrate the stories with children immersed in the scenes from stories. This book masterfully blends entertainment and education, teaching faith, courage, and character through the heroic tales of the Sahaba. 'Super Sahaba Stories' nurtures deep appreciation for Islamic heritage and history, helping children build a strong sense of identity. Meticulously crafted with special cover effects ensure this will be a book to cherish for years to come.",
      "totalPages": 192,
      "rating": 4.5,
      "category": "Children",
      "tags": [
        "History",
        "Moral"
      ],
      "publisher": "Learnign Roots",
      "view": "Home",
      "yearOfPublishing": 2024,
      "discount": 50
    },
    {
      "bookId": 2,
      "bookName": "Al Quran Al Kareem",
      "author": "Translator: Karya Bestari",
      "image": "https://i.postimg.cc/hPb6rJg7/image.png",
      "review": "If you are looking for a Quran with Arabic-English word-for-word translation, in Rasm Uthmani Script, with color coded tajweed, all-in-one volume, at an excellent price, then look no further. Every word in this beautiful Quran was translated so that readers can understand every single word or phrase. It needs to be remembered that not all literal translation represents the exact meaning of the word since the Quran uses varied Arabic language style and sometimes metaphor. To understand the full meaning of the word or the verse , Muhammad Muhsin Khan's The Holy Quran translation which was approved the University of Madinah, was included on the side. However, to comprehend more of the meaning of the Quran, reading the commentary of the Quran from trusted scholars would be necessary. Approved by the Department of Islamic Development of Malaysia (JAKIM) and Malaysian Ministry of Home Affairs (KDN). Beautiful hardcover design. Pictures do not do justice. Well laid-out, easy and extremely beneficial, this mushaf is a must have for everyone or every home. Makes an excellent gift",
      "totalPages": 633,
      "rating": 4.2,
      "category": "Holy Quran",
      "tags": [
        "Quran",
        "Scientific"
      ],
      "publisher": "Karya Bestari",
      "view": "Home",
      "yearOfPublishing": 2024,
      "discount": 50
    },
    {
      "bookId": 3,
      "bookName": "Sahaba Cards",
      "author": "Learning Roots",
      "image": "https://i.postimg.cc/1RcdKhRC/image.png",
      "review": "By now, you probably know that the Sahaba were legends, the likes of which this Ummah has never seen since their time. You know that they are so important for you and your kids to know about and take inspiration from. But there were so many Sahaba and keeping up with each of their stories is a maze at best. That's where the Sahaba Cards come in. Sahaba Cards is a treasure chest of golden glimpses into the lives of the men and women around the Prophet Muhammad (S).",
      "totalPages": 432,
      "rating": 4.4,
      "category": "Children",
      "tags": [
        "History",
        "Story"
      ],
      "publisher": "Learning Roots",
      "view": "Home",
      "yearOfPublishing": 2021,
      "discount": 50
    },
    {
      "bookId": 4,
      "bookName": "Heart-to-Heart with My Sisters ",
      "author": "Na'ima B. Robert",
      "image": "https://i.postimg.cc/KvXs2vpv/image.png",
      "review": "The book Heart-to-Heart with My Sister' is a discussion of the complexities of the contemporary time; the challenges Muslim women face in their daily lives. The author gives concise accounts of her experiences in marriage and medics, using the experiences of women she had come across, and general issues bothering people from afar. She communicated the idea in a deep and resonating manner to remind her sister of her duties and obligations as a slave of Allāh, and her role, status and duties as a wife. The author relates lessons to be learnt from true life events and solutions on vast topics ranging from seeking a spouse, the dignity of the woman, keeping the marriage bond, living apart, divorce, coping with infertility, coping with stress and anxiety, seeking halāl means of livelihood and socialising with other Muslim sisters physically and virtually. This book contains the records of some of her services to humanity while seeking the Face of her Lord. She employed simple diction to drive home her points as she talks to her Sisters as though they are conversing one-on-one. This book should be kept as a reminder, as reminder benefits the Believers. May Allāh bless the author and accept this great work as an act of worship.",
      "totalPages": 254,
      "rating": 4.3,
      "category": "Lifestyle",
      "tags": [
        "Lifestyle",
        "Women"
      ],
      "publisher": "Darussalam Publications",
      "view": "Home",
      "yearOfPublishing": 2023,
      "discount": 25
    },
    {
      "bookId": 5,
      "bookName": "Golden Stories of Muslim Women",
      "author": "Abdul Malik Mujahid",
      "image": "https://i.postimg.cc/ZqcWxc0v/ps-1-3-26-99070-1581548746.png",
      "review": "All aspects of woman’s personality that reflect her intelligence, courage, piety, abstinence and chivalry are mentioned in this book. Their study inculcates a new spirit and motivation for betterment among all women and girls. It would also help men fully understand how women also possess qualities like bravery, intelligence and patience.",
      "totalPages": 190,
      "rating": 4.1,
      "category": "Lifestyle",
      "tags": [
        "Lifestyle",
        "Women"
      ],
      "view": "Home",
      "publisher": "Darussalam Publications",
      "yearOfPublishing": 2015,
      "discount": 25
    },
    {
      "bookId": 6,
      "bookName": "Golden Stories of Accepted Prayers",
      "author": "Abdul Malik Mujahid",
      "image": "https://i.postimg.cc/RhqJFHS6/ps-1-6-36-53142-1581542425.png",
      "review": "Golden Stories of Accepted Prayers is a book that has been written for guidance on how to pray and the benefits of prayers. Golden Stories of Accepted Prayers has been written by Abdul Malik Mujahid and is a very informative book. The book Golden Stories of Accepted Prayers tells us about the advantages and importance of prayers.",
      "totalPages": 368,
      "rating": 4.0,
      "category": "History",
      "tags": [
        "History",
        "Prayers"
      ],
      "publisher": "Darussalam Publications",
      "view": "Home",
      "yearOfPublishing": 2019,
      "discount": 25
    },
    {
      "bookId": 7,
      "bookName": "The Story of Yusuf",
      "author": "Sheikh Dr. Sajid Umar",
      "image": "https://i.postimg.cc/C5qYmGwV/image.png",
      "review": "The story of Yusuf AS is the timeless tale of patience, resilience, and eventual success in the face of adversity. Sheikh Dr. Sajid Umar expertly brings this narrative to life, extracting valuable lessons and insights that are as relevant today as they were in ancient times. Through his captivating storytelling and profound analysis, readers are encouraged to reflect on their own challenges and find inspiration in the example of Yusuf AS. This book is a must-read for anyone seeking guidance and motivation on their journey of faith.",
      "totalPages": 348,
      "rating": 4.2,
      "category": "History",
      "tags": [
        "History",
        "Story"
      ],
      "publisher": "Quillspire",
      "view": "Home",
      "yearOfPublishing": 2018,
      "discount": 10
    },
    {
      "bookId": 8,
      "bookName": "The 8 Gates of Jannah",
      "author": "Shaykh Dr. Ali Ahmed",
      "image": "https://i.postimg.cc/GthGDpRY/image.png",
      "review": "The 8 Gates of Jannah is a fascinating exploration of the afterlife, offering readers a glimpse into the wondrous paradise that awaits the righteous. Shaykh Dr. Ali Ahmed draws on Islamic sources to provide a comprehensive overview of the eight gates of Jannah, illuminating their significance and the virtues associated with each one. Through his insightful commentary and engaging style, readers are invited to contemplate the eternal rewards that await those who strive for excellence in this world. This book is a valuable resource for anyone seeking a deeper understanding of Islamic teachings on the hereafter and the path to spiritual fulfillment.",
      "totalPages": 229,
      "rating": 4.4,
      "category": "Mystery",
      "tags": [
        "Mystery",
        "Spirituality"
      ],
      "publisher": "Quillspire",
      "view": "Home",
      "yearOfPublishing": 2018,
      "discount": 10
    },
    {
      "bookId": 9,
      "bookName": "My First Quran (Story Book)",
      "author": "Saniyasnain Khan",
      "image": "https://i.postimg.cc/V6QBb637/image.png",
      "review": "My First Quran Storybook is the perfect way to introduce your child to the Quran. Designed for young children, this book shares the timeless stories from the Quran in a simple and engaging format. Each story is beautifully illustrated and includes easy-to-understand language, making it accessible for even the youngest readers. From the story of Adam and Eve to the tale of Prophet Muhammad (peace be upon him), this book covers all the major events and characters in Islamic history. Whether read alone or shared with a parent, My First Quran Storybook is sure to captivate young hearts and minds, providing a solid foundation for future learning and growth.",
      "totalPages": 319,
      "rating": 4.3,
      "category": "Children",
      "tags": [
        "Children",
        "Story"
      ],
      "publisher": "Goodword",
      "view": "Home",
      "yearOfPublishing": 2017,
      "discount": 10
    }
  ]
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("modal_ramadan").showModal();
    }, 2000);
  }, []);

  return (
    <div className="">

      {/* <Snowfall /> */}


      <div className="relative">

        <div
          className="lg:h-[400px] md:h-[300px] h-[300px] w-full relative rounded-xl bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/hjzcgJcs/araix-rand-Xe46k-NRh-Xs-A-unsplash.jpg')`,
          }}
        >
          <div className=" bg-[#586DF2] z-10 lg:h-[400px] md:h-[300px] h-[300px] w-full bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
            <p className=" text-lg text-white font-bold shadow-lg uppercase">Limited time offer</p>
            <h3 className=" text-6xl  font-extrabold  uppercase mt-2 text-black mb-9">mega <span className="text-white">sale</span> </h3>
            <Button
              size="lg"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%]">
          <Card className="overflow-hidden   transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-center gap-4 ">
              <div className=" text-xl md:text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-red-500"> 50% OFFER</div>
            </CardHeader>
          </Card>
        </div>
      </div>


      <div className="mt-20 flex items-center gap-3">
        <Image
          height="40"
          width="40"
          className="h-[40px]"
          alt="banner"
          src="https://i.postimg.cc/cCXh7Gbd/image.png"
        />{" "}
        <div className="font-bold text-2xl">Most Discount(50%)</div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-3">
        {books
          .filter((book) => book.discount == 50)
          .map((book) => (
            <DiscountCard key={book.bookId} book={book} />
          ))}
      </div>

      <div className="mt-14 flex items-center gap-3 ">
        <Image
          height="40"
          width="40"
          alt="image"
          className="h-[40px]"
          src="https://i.postimg.cc/cCXh7Gbd/image.png"
        />{" "}
        <div className="font-bold text-2xl">Discount Up to 25%</div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-3">
        {books
          .filter((book) => book.discount < 50)
          .map((book) => (
            <DiscountCard key={book.bookId} book={book} />
          ))}
      </div>

      {/* Modal */}
      <dialog id="modal_ramadan" className="modal rounded-xl">
        <div className="modal-box ramadan_modal_box p-5 text-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2">
              ✕
            </button>
          </form>
          <div className="font-bold flex items-center gap-2 ">
            <GiButterfly /> Butterfly Offer
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                height="300"
                width="300"
                alt="image"
                className="h-[300px]"
                src="https://cdn11.bigcommerce.com/s-qrk4pkvixl/images/stencil/640w/products/13161/21188/Untitled_design_-_2024-02-17T122448.533__08364.1708173057.png?c=1"
              />
              <div className="absolute top-7 left-6">
                <Image
                  height="70"
                  width="70"
                  alt="image"
                  className="h-[70px]"
                  src="https://i.postimg.cc/2SjWdvXv/image.png"
                />
              </div>
            </div>

            <div className="font-spartan text-2xl font-bold text-center text-white">
              Make your marriage life Beautiful!
            </div>

            <Button className="mt-10">Get Now</Button>
          </div>
        </div>
      </dialog>
=======
import Banner from "@/components/home/Banner";
import Image from "next/image";
import Snowfall from "react-snowfall";
const Special = () => {


  return (
    <div>
       <div className="w-full flex justify-center custom-glass-2 rounded-xl overflow-hidden">
       <Image className="object-cover" src='/store-banner.png' height={400} width={1000} alt="banner"/>
       </div>
       <Snowfall style={{zIndex: '99999'}} />
     
>>>>>>> c11bc9fc29e582fb75e256a5917ac18afb23976d
    </div>
  );
};

export default Special;






