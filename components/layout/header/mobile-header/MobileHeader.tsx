import Logo from "@/components/common/Logo";
import HeaderProfile from "@/components/layout/header/profile/HeaderProfile";
import ToggleTheme from "@/components/layout/theme/ToggleTheme";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { MenuIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ItemHeader } from "../ItemHeader";
import { Menu } from "./Menu";
type MobileHeaderProps = {
  homeLink: string;
  headerNavLinks: HeaderNavLink[];
  className?: string;
};

export default function MobileHeader({
  homeLink,
  headerNavLinks,
  className,
}: MobileHeaderProps) {
  //const session = useSession();
  return (
    <NavigationMenu className={twMerge("flex max-w-full", className)}>
      <NavigationMenuList className="flex w-screen items-center justify-between px-2">
        <NavigationMenuItem>
          <Logo homeLink={homeLink} />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex gap-x-3">
          <ToggleTheme />
          <ItemHeader
            trigger={<HeaderProfile />}
            childrenItems={[
              {
                title: "My Title 2",
                link: "/my-link-2",
                icon: MenuIcon,
                text: "My text 2",
              },
            ]}
          />
          <Menu headerNavLinks={headerNavLinks} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
