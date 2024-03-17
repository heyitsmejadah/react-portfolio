export function Project (props) {
    return (
        <div>
            <img src={`https://placehold.co/600x400?text=${props.title}`}></img>
            <a target="_blank" href={props.projectLink}>{props.title}</a>
        </div>
    )
}