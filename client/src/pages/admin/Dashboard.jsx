import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tab,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Table from "../../components/admin/Table";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import VerifyListing from "../../components/admin/VerifyListing";
const list = [
  {
    title: "user",
    icon: <PresentationChartBarIcon className="h-10 w-5" />,
    component: <Table />,
    link: "/admin/user",
  },
  {
    title: "listing",
    icon: <ShoppingBagIcon className="h-10 w-5" />,
    component: <VerifyListing />,
    link: "/admin/listing",
  },
];
export default function DefaultSidebar() {
  const Navigate = useNavigate();
  const Location = useLocation();
  console.log(Location);
  return (
    <div className="flex">
      <Card className="h-[calc(100vh)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-slate-300">
        <div className="mb-2 p-4">
          <Typography
            variant="h5"
            color="blue-gray "
            className="bg-amber-600 rounded-lg h-10 pl-10 pt-2"
          >
            CarHub
          </Typography>
        </div>
        <List>
          {list.map((item, index) => (
            <Link key={index} to={item.link}>
              <ListItem
                className={
                  Location.pathname === item.link ? "bg-slate-400" : "bg-slate"
                }
              >
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                {item?.title}
              </ListItem>
              
            </Link>
          ))}

          <ListItem
            onClick={(e) => {
              e.preventDefault();
              Navigate("/sign-in");
            }}
            className="bg-amber-300 rounded-lg h-10 pl-10 pt-2"
          >
            <ListItemPrefix>
              <PowerIcon className="h-10 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      <Outlet />
    </div>
  );
}
