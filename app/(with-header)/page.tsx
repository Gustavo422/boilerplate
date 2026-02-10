import { auth } from "@/utils/auth.server";
import { headers } from "next/dist/server/request/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center font-sans"></div>
  );
}
