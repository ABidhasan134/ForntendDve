import { FaHome,FaUserFriends,FaWpforms } from "react-icons/fa";
import { IoPersonSharp,IoSettingsSharp,IoBarChart } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { TiThList } from "react-icons/ti";
import { MdOutlinePostAdd,MdDateRange,MdBackup  } from "react-icons/md";
import { RiApps2Line } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";
export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: <FaHome/>,
        },
        {
          id: 2,
          title: "Profile",
          url: "/profile",
          icon: <IoPersonSharp/>,
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/user",
          icon: <FaUserFriends/>,
        },
        {
          id: 2,
          title: "Products",
          url: "/product",
          icon: <SlBasket/>,
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: <TiThList/>,
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: <MdOutlinePostAdd/>,
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: <RiApps2Line/>,
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: <SlNote/>,
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: <FaWpforms/>,
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: <MdDateRange/>,
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: <IoSettingsSharp/>,
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: <MdBackup/>,
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: <IoBarChart/>,
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: <BiLogOut/>,
        },
      ],
    },
  ];

//data copied
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: <FaHome/>,
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };

  export const BarChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };

  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };

  