import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <RiIcons.RiHome6Line />,
    cName: "nav-text",
  },
  {
    title: "Trend",
    path: "/trend",
    icon: <RiIcons.RiCompass3Line />,
    cName: "nav-text",
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <RiIcons.RiHeart2Line />,
    cName: "nav-text",
  },
  {
    title: "Profil",
    path: "/profil",
    icon: <MdIcons.MdPersonOutline />,
    cName: "nav-text",
  },
];
