import SignIn from "@/components/common/SignIn/SignIn";

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-fit w-fit flex-col items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
