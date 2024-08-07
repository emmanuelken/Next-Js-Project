

export default function ProjectCard({ title, description, image }) {
    return (
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} width={200} height={200} />
        <p>{description}</p>
      </div>
    );
  }
  