import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Ongoing Orders",
    value: "3",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Recent Order",
    value: "143",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  }, 
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Cart",
    value: "4",
    footer: {
      color: "text-green-500",
      value: "₹14,000",
      label: "Subtotal",
    },
  },
];

export default statisticsCardsData;
