import { auth } from "@/utils/auth.server";
import { headers } from "next/dist/server/request/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden overflow-y-hidden font-sans">
      <div className="flex h-full w-[90%] flex-col rounded-md border bg-accent p-10">
        <h1 className="0 text-center text-4xl font-extrabold">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
        {Array.from({ length: 60 }).map((_, i) => (
          <p key={i} className="mt-4">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester.
          </p>
        ))}
      </div>
    </div>
  );
}
