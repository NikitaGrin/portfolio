import Label from "./components/Label";

function ProjectItem({
  project: { image, name, stack, repo, link },
}: {
  project: {
    image: string;
    name: string;
    stack: string[];
    repo: string;
    link: string;
  };
}) {
  // fix of <a> cannot appear as a descendant of <a>.
  return (
    <div className="relative cursor-pointer rounded-md pb-10 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-lg dark:bg-stone-800 dark:shadow-stone-800 dark:hover:shadow-stone-700 ">
      <a href={link} className="absolute z-0 h-[100%] w-[100%]"></a>
      <img className=" w-full rounded-t-md" src={image} alt={name} />
      <div className="space-y-3 p-3">
        <h3 className="text-xl">{name}</h3>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="space-x-2">
            {stack.map((item: string) => (
              <Label key={item} color="random">
                {item}
              </Label>
            ))}
          </div>
          <div className="absolute bottom-3 right-3 z-10 space-x-3">
            <a href={link}>
              <Label color="green">Сайт</Label>
            </a>
            <a href={repo}>
              <Label color="dark">Репозиторий</Label>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
