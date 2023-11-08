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
  return (
    <a href={link}>
      <div className="cursor-pointer rounded-md shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-lg">
        <img className="w-full rounded-t-md" src={image} alt={name} />
        <div className="space-y-3 p-3">
          <h3 className="text-xl">{name}</h3>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="space-x-2">
              {stack.map((item: string) => (
                <Label color="random">{item}</Label>
              ))}
            </div>
            <div className="space-x-3">
              <Label color="green">Сайт</Label>
              <a href={repo}>
                <Label color="dark">Репозиторий</Label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
