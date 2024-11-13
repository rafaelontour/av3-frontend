import { IconChairDirector, IconDashboard, IconHome, IconUsersGroup } from "@tabler/icons-react";

const links = [
  {
    label: "Home",
    href: "/",
    icon: 
      <IconHome size={32} />
  },
  {
    label: "Auditórios",
    href: "/auditorios",
    icon: 
      <IconChairDirector size={32} />
  },
  {
    label: "Usuários",
    href: "#",
    icon: 
      <IconUsersGroup size={32} />

  },
  {
    label: "Dashboard",
    href: "#",
    icon: 
      <IconDashboard size={32} />
  },
];

export default links;