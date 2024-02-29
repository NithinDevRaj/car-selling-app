import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tab,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, PowerIcon } from "@heroicons/react/24/solid";
import Table from "../../components/admin/Table";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
const list = [{
  title: "user",
  icon: <PresentationChartBarIcon className="h-10 w-5" />,
  component: <Table />,
  link: '/admin/user'
}]
export default function DefaultSidebar() {
  return (
    <div className="flex">
      <Card className="h-[calc(100vh)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            CarHub
          </Typography>
        </div>
        <List>
          {list.map((item, index) => <Link key={index} to={item.link}>
            <ListItem >
              <ListItemPrefix>
                {item.icon}
              </ListItemPrefix>
              {item?.title}
            </ListItem>
          </Link>)}



          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-10 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div>
     
        <Outlet />
      </div>
    </div>
  );
}
