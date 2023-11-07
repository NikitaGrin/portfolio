import Label from "./components/Label";

function Header() {
  return (
    <header className=" flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-center">
        <div className="bg-white p-2">
          <h1 className="text-4xl font-extrabold ">Никита Гринь</h1>
          <p className="text-xl tracking-[-0.025rem]">
            Frontend разработчик (React)
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row xl:gap-6">
        <h3 className="text-3xl font-semibold lg:text-xl">Навыки</h3>
        <div className="flex w-[14rem] flex-wrap items-start gap-3">
          <Label color="green">HTML</Label>
          <Label color="green">CSS</Label>
          <Label color="green">JavaScript</Label>
          <Label color="yellow">React</Label>
          <Label color="yellow">Tailwind</Label>
          <Label color="red">Redux</Label>
        </div>
      </div>
    </header>
  );
}

export default Header;
