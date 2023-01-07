import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  CheckIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, MeetYourFarmer } from "@/pages/dashboardConsumer";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routesConsumer = [
  {
    layout: "dashboardConsumer",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Orders",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "MeetYourFarmer Livepeer",
        path: "/livepeerPlayer",
        element: <MeetYourFarmer />,
      },
    ],
  },
  {
    title: "See you soon !",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routesConsumer;
