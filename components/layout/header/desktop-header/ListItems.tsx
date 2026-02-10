import { Suspense } from "react";
import { ItemHeader } from "../ItemHeader";

interface ListItemsProps {
  navItems: HeaderNavLink[];
}

export default function ListItems({ navItems }: ListItemsProps) {
  return (
    <Suspense>
      <div className="flex h-full w-full gap-x-6 md:gap-x-10">
        {navItems
          .filter(({ trigger }) => trigger !== "Home")
          .map((item, index) => (
            <ItemHeader
              key={index}
              trigger={
                typeof item.trigger === "string" ? (
                  item.trigger
                ) : (
                  <item.trigger />
                )
              }
              link={typeof item.link === "string" ? item.link : ""}
              childrenItems={item.children}
            />
          ))}
      </div>
    </Suspense>
  );
}
