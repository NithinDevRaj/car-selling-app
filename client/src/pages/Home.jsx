import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import car1 from "../slider/car1.jpg";
import car2 from "../slider/car2.jpeg";
import car3 from "../slider/car4.jpg";
import car4 from "../slider/car3.jpeg";
import Header from "../components/Header";

const slide = [car1, car2, car3];
export default function Home() {
  const [salesListing, setSalesListing] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listing/get?limit=4");
        const data = await res.json();
        setSalesListing(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListings();
  }, []);
  return (
    <>
      <Header />
      <div>
        {/* top */}

        {/* swiper */}
        <Swiper navigation>
          {slide &&
            slide.length > 0 &&
            slide.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: `url(${image})  no-repeat center top `,
                    backgroundSize: "cover",
                    height: "700px",
                  }}
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
          <section className="flex relative mt-20 ">
            <div className=" flex flex-col gap-6 ml-8 justify-center">
              <div className="text-5xl font-bold">
                Your Ultimate Destination for Buying and Selling Cars
              </div>
              <div className="text-2xl">
                CarHub is a comprehensive online platform dedicated to
                facilitating the buying and selling of cars, offering an
                unparalleled experience for both sellers and buyers alike. With
                a user-friendly interface and robust features, CarTrove empowers
                users to effortlessly browse, list, and transact vehicles of all
                makes and models.
              </div>
              <div className="flex gap-8 ">
                <Link to="/sign-in">
                  <button className="bg-green-500 text-white p-3 rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="flex w-screen h-80  items-center gap-10 bg-lime-100">
          <div className="ml-36">
            <img src={car4} alt="" className=" rounded-lg" />
          </div>
          <div className="flex flex-col w-1/2">
            <h1 className="text-2xl font-bold">Why Choose CarHub:</h1>
            <p className="text-lg">
              CarHub stands out as the ultimate destination for car enthusiasts
              and shoppers, offering unparalleled convenience, security, and
              reliability throughout the car buying and selling journey. Whether
              you're looking to upgrade your ride, sell your current vehicle, or
              simply explore the latest automotive offerings, CarTrove is your
              trusted partner every step of the way.
            </p>
          </div>
        </div>
        {/* listing results for offer, sale and rent */}

        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          {salesListing && salesListing.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-lime-600">
                  Recent posts
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more
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
    </>
  );
}
