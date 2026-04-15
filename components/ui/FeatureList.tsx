interface FeatureListProps {
  items: string[];
  hasDivider?: boolean;
}

export default function FeatureList({ items, hasDivider }: FeatureListProps) {
  return (
    <ul className={`feature-list${hasDivider ? " feature-list-divider" : ""}`}>
      {items.map((item) => (
        <li key={item} className="feature-list-item body-regular">
          <span className="feature-bullet">▸</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
