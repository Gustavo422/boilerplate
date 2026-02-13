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
        <MenuIcon className="hover:text-header hover:cursor-pointer" />
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
            <Button variant="outline" className="w-[50%] hover:cursor-pointer">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SheetDescription>
        </SheetHeader>

        <Command className="flex h-full w-full flex-1 flex-col bg-background px-4">
          <div className="mb-3 w-full rounded-md border border-accent-foreground/35 dark:border-accent">
            <CommandInput className="" placeholder="Search..." />
          </div>

          <CommandList className="min-h-svh w-full">
            <CommandEmpty>No results found...</CommandEmpty>
            <CommandGroup className="flex h-fit w-full flex-col">
              <Accordion
                type="single"
                collapsible
                className="h-full w-full gap-0! border-0! bg-background p-0!"
              >
                <Items headerNavLinks={headerNavLinks} />
              </Accordion>
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
            className="hover:bg-transparent! focus:bg-transparent!"
          >
            {typeof item.trigger === "string" && item.children ? (
              <AccordionItem
                value={item.trigger}
                className="h-full w-full border-0!"
              >
                <AccordionTrigger className="h-11! py-3!">
                  <Link href={item.link || "#"}>{item.trigger}</Link>
                </AccordionTrigger>

                <AccordionContent className="ml-5 flex flex-col gap-y-4 border-0!">
                  {item.children?.map((child) => (
                    <Link
                      className="flex w-fit gap-x-2 text-accent-foreground"
                      href={child.link}
                      key={child.title}
                    >
                      {child.icon && <child.icon />}
                      <p className="hover:text-header">{child.title}</p>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                href={item.link || "#"}
                className="h-full w-full py-3 font-medium hover:underline"
              >
                {typeof item.trigger === "string" ? item.trigger : ""}
              </Link>
            )}
          </CommandItem>
        ))}
    </>
  );
}
