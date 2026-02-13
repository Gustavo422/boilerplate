import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { clsx } from "clsx";
import Link from "next/link";

interface ItemHeaderProps {
  childrenItems?: Child[];
  trigger: React.ReactNode;
  link?: string;
}

export function ItemHeader({ childrenItems, trigger, link }: ItemHeaderProps) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger
        asChild
        className={clsx("hover:cursor-pointer", {
          "hover:text-my-brand-color hover:underline": link,
        })}
      >
        <button type="button">
          {link ? (
            <div className="flex items-center justify-center gap-x-1">
              <Link href={link}> {trigger}</Link>
            </div>
          ) : (
            <p className="text-[15px] sm:text-base">{trigger}</p>
          )}
        </button>
      </HoverCardTrigger>
      {childrenItems && (
        <HoverCardContent
          sideOffset={16}
          className="flex min-w-3xs rounded-t-none border-t-0 border-accent"
        >
          {childrenItems && (
            <ul className="flex w-full flex-col gap-y-4">
              {childrenItems.map((child, index) => (
                <li key={index} className="">
                  <Link
                    className="hover:text-header flex items-start gap-x-3 rounded-sm p-2.5 hover:bg-accent/85"
                    href={child.link}
                  >
                    <span className="flex flex-col">
                      <div className="mb-1.5 flex gap-x-2">
                        {child.icon && <child.icon size={18} />}
                        <p className="text-sm font-medium">{child.title}</p>
                      </div>
                      <p className="line-clamp-2 text-[12px] text-gray-400">
                        {child.text}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </HoverCardContent>
      )}
    </HoverCard>
  );
}
