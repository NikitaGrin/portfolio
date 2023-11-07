import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 1,
    name: "Портфолио",
    stack: ["React", "Tailwind"],
    link: "https://google.com",
    image: "/project-1.png",
  },
];

function Projects() {
  return (
    <main>
      <h2 className="mb-5 text-5xl font-light tracking-tight">Проекты</h2>
      <div className="grid gap-x-5 gap-y-10 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
