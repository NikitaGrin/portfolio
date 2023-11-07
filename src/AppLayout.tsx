import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-300 to-yellow-200 shadow-sm md:px-12 md:py-12">
      <div className="h-screen max-w-[70rem] items-center  bg-white px-4 py-8 shadow-2xl sm:px-16 sm:py-12 md:rounded-xl lg:h-auto lg:px-24">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
