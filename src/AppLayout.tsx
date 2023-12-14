import { Outlet } from "react-router-dom";
import Label from "./components/Label";

function AppLayout() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-red-300 to-yellow-200 shadow-sm dark:from-pink-900 dark:to-blue-900 md:px-12 md:py-12">
      <div className="absolute bottom-2 right-2 hidden lg:block ">
        <Label color="random">V 1.1</Label>
      </div>
      <div className="min-h-[90vh] w-full max-w-[70rem] items-center bg-white px-4 py-8 shadow-2xl dark:bg-neutral-900 dark:text-white sm:px-16 sm:py-12 md:rounded-xl lg:h-auto lg:px-24">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
