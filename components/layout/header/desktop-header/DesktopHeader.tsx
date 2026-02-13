import Logo from "@/components/common/Logo";
import ToggleTheme from "@/components/layout/theme/ToggleTheme";
import { ItemHeader } from "../ItemHeader";
import ListItems from "./ListItems";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AlarmClockIcon, UserIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import HeaderProfile from "../profile/HeaderProfile";

type DesktopHeaderProps = {
  homeLink: string;
  headerNavLinks: HeaderNavLink[];
  className?: string;
};

export default function DesktopHeader({
  homeLink,
  headerNavLinks,
  className,
}: DesktopHeaderProps) {
  //const session = useSession();
  return (
    <NavigationMenu className={twMerge("flex max-w-full", className)}>
      <NavigationMenuList className="flex w-screen items-center justify-between px-2">
        <>
          <NavigationMenuItem className="flex items-center justify-center gap-x-4">
            <NavigationMenuLink asChild>
              <Logo homeLink={homeLink} />
            </NavigationMenuLink>
            <ListItems navItems={headerNavLinks} />
          </NavigationMenuItem>

          <NavigationMenuItem></NavigationMenuItem>

          <NavigationMenuItem className="flex gap-x-4">
            <ItemHeader
              trigger={<HeaderProfile />}
              childrenItems={[
                {
                  title: "My Title 2",
                  link: "/my-link-2",
                  icon: UserIcon,
                  text: "My text 2",
                },
                {
                  title: "My Title 2.1",
                  link: "/my-link-2-1",
                  icon: AlarmClockIcon,
                  text: "My text 2.1",
                },
              ]}
            />
            <ToggleTheme />
          </NavigationMenuItem>
        </>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
