import { Project } from "../componets/Project";

const projectPropsList = [
  {
    projectLink: "https://github.com/heyitsmejadah/text-editor",
    title: "Text Editor",
  },
];

export function Portfolio() {
  return (
    <div>
      <h1>Project Page</h1>
      <div>
        {projectPropsList.map((props) => (
          <Project projectLink={props.projectLink} title={props.title} />
        ))}
      </div>
    </div>
  );
}
