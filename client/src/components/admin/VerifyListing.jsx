import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["User", "Car", "Adress", "Verified"];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export default function TransactionsTable() {
  const [listings, setListings] = useState([]);

  const getUsersHandler = async () => {
    try {
      const result = await fetch("/api/admin/listing");
      const data = await result.json();
      setListings(data.data);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const verifyHandler = async (id, verify) => {
    verify = !verify;
    console.log(verify);
    try {
      const result = await fetch(`/api/admin/verifyListing/${id}/${verify}`);
      const res = await result.json();
      console.log(res);
      getUsersHandler();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsersHandler();
  }, []);

  return (
    <Card className="h-screen w-full bg-slate-200 ">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-amber-400 pl-10"
      >
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography color="gray" className="mt-1 font-normal ">
              These are details about the {location.pathname.split("/")[2]}
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
          
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <table className="w-full   min-w-max table-auto text-left mt-2 ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listings.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item._id} >
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={item?.userRef?.avatar}
                        alt={item?.userRef?.userName}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.userRef?.userName}
                      </Typography>
                    </div>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {" "}
                      <Avatar
                        src={item?.imageUrls[0]}
                        alt={item?.userRef?.userName}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      {item?.company} {item?.model}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item?.address}{" "}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      onClick={() => {
                        verifyHandler(item._id, item.verified);
                        // console.log('clicked')
                      }}
                    >
                      {item.verified ? (
                        <button className="bg-green-600 h-10 w-20 rounded-xl shadow-lg text-cyan-50">
                          verified
                        </button>
                      ) : (
                        <button className="bg-red-600 h-10 w-20 rounded-xl shadow-lg text-cyan-50">
                          not verified
                        </button>
                      )}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
