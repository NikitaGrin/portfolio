import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: 3,
    name: "Welbex",
    stack: ["BEM"],
    link: "https://nikitagrin.github.io/welbex/",
    image: "/project-3.png",
    repo: "https://github.com/NikitaGrin/welbex",
  },
  {
    id: 2,
    name: "Fast React Pizza",
    stack: ["React", "Tailwind", "Redux"],
    link: "https://pizza-ng.vercel.app/",
    image: "/project-2.png",
    repo: "https://github.com/NikitaGrin/pizza",
  },
  {
    id: 1,
    name: "Портфолио",
    stack: ["React", "Tailwind"],
    link: "#",
    image: "/project-1.png",
    repo: "https://github.com/NikitaGrin/portfolio",
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
