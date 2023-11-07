import Label from "./components/Label";

function ProjectItem({
  project: { image, name, stack },
}: {
  project: { image: string; name: string; stack: string[] };
}) {
  return (
    <div className="cursor-pointer rounded-md shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-lg">
      <img className="rounded-t-md" src={image} alt={name} />
      <div className="space-y-3 p-3">
        <h3 className="text-xl">{name}</h3>
        <div className="space-x-2">
          {stack.map((item: string) => (
            <Label color="random">{item}</Label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
