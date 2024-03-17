export function Project(props) {
    return (
      <div>
        <img src={`https://placehold.co/600x400?text=${props.title}`} alt={props.title} />
        <div>
          <a target="_blank" href={props.projectLink}>{props.title} (Deployed)</a>
          <br />
          <a target="_blank" href={props.repoLink}>GitHub Repository</a>
        </div>
      </div>
    );
  }
  