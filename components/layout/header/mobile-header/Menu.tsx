import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function Menu({ headerNavLinks }: { headerNavLinks: HeaderNavLink[] }) {
  return (
    <Sheet>
      <SheetTrigger className="">
        <MenuIcon className="hover:cursor-pointer hover:text-header" />
      </SheetTrigger>
      <SheetContent className="flex h-screen w-full flex-col border-accent">
        <SheetHeader className="gap-y-5">
          <SheetTitle className="flex items-center justify-start gap-x-3">
            <MenuIcon /> <p className="text-xl">Menu</p>
          </SheetTitle>
          <SheetDescription className="flex items-center justify-center gap-x-3">
            <Button variant="default" className="w-[50%] hover:cursor-pointer">
              Login
            </Button>
            <Button
              variant="secondary"
              className="w-[50%] hover:cursor-pointer"
            >
              Sign Up
            </Button>
          </SheetDescription>
        </SheetHeader>

        <Command className="flex h-full w-full flex-1 flex-col bg-background px-4">
          <div className="w-full rounded-md border border-gray-400 dark:border-accent">
            <CommandInput className="" placeholder="Search..." />
          </div>

          <CommandList className="min-h-svh w-full">
            <CommandEmpty>No results found...</CommandEmpty>
            <CommandGroup className="flex h-fit w-full flex-col">
              <Items headerNavLinks={headerNavLinks} />
            </CommandGroup>
          </CommandList>
        </Command>
      </SheetContent>
    </Sheet>
  );
}

interface ItemsProps {
  headerNavLinks: HeaderNavLink[];
}

function Items({ headerNavLinks }: ItemsProps) {
  return (
    <>
      {headerNavLinks
        .filter((item) => item.trigger !== "Home")
        .map((item, index) => (
          <CommandItem
            key={index}
            className="m-0! flex flex-col items-start justify-start p-0! hover:bg-background!"
          >
            {typeof item.trigger === "string" && item.children ? (
              <Accordion
                type="single"
                collapsible
                className="h-full w-full border-0! bg-background"
              >
                <AccordionItem value={item.trigger} className="border-0!">
                  <AccordionTrigger>
                    <Link href={item.link || "#"}>{item.trigger}</Link>
                  </AccordionTrigger>

                  <AccordionContent className="ml-5 flex flex-col gap-y-4 border-0!">
                    {item.children?.map((child) => (
                      <Link
                        className="flex w-fit gap-x-2"
                        href={child.link}
                        key={child.title}
                      >
                        {child.icon && <child.icon />}
                        <p className="text-gray-400 hover:text-header">
                          {child.title}
                        </p>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                href={item.link || "#"}
                className="font-medium hover:underline"
              >
                {typeof item.trigger === "string" ? item.trigger : ""}
              </Link>
            )}
          </CommandItem>
        ))}
    </>
  );
}
