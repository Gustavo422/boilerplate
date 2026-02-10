import {
  AlarmClockIcon,
  BellIcon,
  BitcoinIcon,
  CalendarIcon,
  CameraIcon,
  FileIcon,
  FileTextIcon,
  HeartIcon,
  LoaderIcon,
  MenuIcon,
  PinIcon,
  RotateCcwIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  UserIcon,
  YoutubeIcon,
} from "lucide-react";

/* Expanded / varied children groups */
export const navchildren = {
  Core: [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: LoaderIcon,
      text: "Overview & key metrics",
    },
    { title: "Reports", link: "/reports", icon: FileIcon }, // no text (optional omitted)
    {
      title: "Favorites",
      link: "/favorites",
      icon: StarIcon,
      text: "Saved items",
    },
    {
      title: "Quick Search",
      link: "/search",
      icon: SearchIcon,
      text: "Find anything fast",
    },
  ] as Child[],

  Account: [
    {
      title: "Profile",
      link: "/account/profile",
      icon: UserIcon,
      text: "Edit profile & photo",
    },
    {
      title: "Billing",
      link: "/account/billing",
      icon: BitcoinIcon,
      text: "Payment methods",
    },
    { title: "Notifications", link: "/account/notifications", icon: BellIcon }, // text omitted
    {
      title: "Time & Activity",
      link: "/account/activity",
      icon: AlarmClockIcon,
      text: "Recent activity",
    },
  ] as Child[],

  Media: [
    {
      title: "Library",
      link: "/media/library",
      icon: YoutubeIcon,
      text: "Videos & audio",
    },
    { title: "Upload", link: "/media/upload", icon: CameraIcon }, // no text
    {
      title: "Playlists",
      link: "/media/playlists",
      icon: FileTextIcon,
      text: "Manage collections",
    },
    {
      title: "Liked",
      link: "/media/liked",
      icon: HeartIcon,
      text: "Your likes",
    },
  ] as Child[],

  Tools: [
    {
      title: "Sync",
      link: "/tools/sync",
      icon: RotateCcwIcon,
      text: "Sync devices",
    },
    { title: "Pins", link: "/tools/pins", icon: PinIcon }, // text omitted
    {
      title: "Shortcuts",
      link: "/tools/shortcuts",
      icon: MenuIcon,
      text: "Keyboard & quick actions",
    },
    {
      title: "Search Console",
      link: "/tools/search-console",
      icon: SearchIcon,
      text: "Advanced search",
    },
  ] as Child[],

  Extras: [
    {
      title: "Settings",
      link: "/settings",
      icon: SettingsIcon,
      text: "Application settings",
    },
    {
      title: "Calendar",
      link: "/calendar",
      icon: CalendarIcon,
      text: "Events & reminders",
    },
    { title: "About", link: "/about", icon: FileTextIcon }, // no text
  ] as Child[],
};

/* headerNavLinks with variations in optional items:
   - different triggers (string or Icon)
   - some entries have link only
   - some have children only (no link)
   - some have both link and children
*/
const headerNavLinks: HeaderNavLink[] = [
  // trigger as icon, link present, no children
  { link: "/", trigger: "Home Icon" },

  // trigger as string, children only (no link)
  { trigger: "Explore", children: [...navchildren.Core, ...navchildren.Media] },

  // trigger as icon, both link and children
  { link: "/account", trigger: "User", children: navchildren.Account },

  // trigger as string, link + children
  { link: "/tools", trigger: "Tools", children: navchildren.Tools },

  // trigger as icon, children only (no link)
  { trigger: "Settings", children: navchildren.Extras },

  // link only (no children)
  { link: "/help", trigger: "Help" },

  // a combined "Quick" menu composed from two child groups (demonstrates reuse)
  {
    trigger: "Quick Access",
    children: [
      ...navchildren.Core.slice(0, 2),
      ...navchildren.Tools.slice(0, 2),
    ],
  },
];

export default headerNavLinks;
