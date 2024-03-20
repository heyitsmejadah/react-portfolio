import { Project } from "../componets/Project";

const projectPropsList = [
  {
    projectImg: "./",
    projectLink: "https://text-editor-4g9y.onrender.com",
    repoLink: "https://github.com/heyitsmejadah/text-editor",
    title: "Text Editor",
  },
  {
    projectLink: "https://33649ek.github.io/beat-buddy/",
    repoLink: "https://github.com/33649EK/beat-buddy",
    title: "Beat Buddy",
  },
  {
    projectLink: "https://heyitsmejadah.github.io/note-taker/",
    repoLink: "https://github.com/heyitsmejadah/note-taker",
    title: "Note Taker",
  },
  {
    projectLink: "https://heyitsmejadah.github.io/weather-dashboard/",
    repoLink: "https://github.com/heyitsmejadah/weather-dashboard",
    title: "Weather Dashboard",
  },
  {
    projectLink: "https://github.com/S10skeleton/Wags-to-Riches",
    repoLink: "https://github.com/S10skeleton/Wags-to-Riches",
    title: "Wags to Riches",
  },
  {
    projectLink: "https://github.com/heyitsmejadah/ecomm-backend/blob/main/README.md",
    repoLink: "https://github.com/heyitsmejadah/ecomm-backend/blob/main/README.md",
    title: "Ecommerce Site",
  },
];

export function Portfolio() {
  return (
    <div>
      <h1>Project Page</h1>
      <div>
        {projectPropsList.map((props) => (
          <Project key={props.title} projectLink={props.projectLink} repoLink={props.repoLink} title={props.title} />
        ))}
      </div>
    </div>
  );
}
