interface ReprositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: ReprositoryItemProps) {
  return ( 
    <li>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Clica para ver mais
          </a>
        </li>

   );
}

