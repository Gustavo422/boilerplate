import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  homeLink?: string;
  width?: number;
  height?: number;
}

export default function Logo({ homeLink, width, height }: LogoProps) {
  const logo = siteMetadata.siteLogo;
  const image = (
    <div className="min-h-6 min-w-28">
      <Image
        src={logo}
        width={width || 120}
        height={height || 25}
        alt="Header Logo"
        quality={100}
        className="select-none"
        draggable="false"
      />
    </div>
  );

  return homeLink ? <Link href={homeLink}>{image}</Link> : image;
}
