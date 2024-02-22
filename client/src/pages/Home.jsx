import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import car1 from '../slider/car1.jpg'
import car2 from '../slider/car2.jpeg'
import car3 from '../slider/car3.jpg'

const slide =[car1,car2,car3]
export default function Home() {
const [salesListing,setSalesListing]=useState([])
  SwiperCore.use([Navigation]);
  
  // console.log(salesListing);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listing/get?limit=4");
        const data = await res.json();
        setSalesListing(data)
       console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
  fetchListings()

  }, []);
  return (
    <div>
      {/* top */}

      {/* swiper */}
      <Swiper navigation>
        {slide &&
          slide.length > 0 &&
          slide.map((image,index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: `url(${image}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
               
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        {/* <h1 className="rounded-lg  text-lime-700 font-bold text-3xl lg:text-6xl">
          Where Luxury Meets Lifestyle <br />
          <span className="text-lime-500">Your</span> Dream Home Awaits ....
        </h1> */}

        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>
      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {salesListing && salesListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-lime-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {salesListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      
     
      </div>
    </div>
  );
}
