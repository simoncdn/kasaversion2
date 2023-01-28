import { LodgingIndoProps } from "../../../utils/type";
import Rating from "./Rating";

export default function LodgingInfo({
  title,
  location,
  tags,
  host,
  rating,
}: LodgingIndoProps) {
  return (
    <div className="lodging-info-container">
      <div className="lodging-info-left">
        <h2>{title}</h2>
        <p>{location}</p>

        <div className="tags-container">
          <ul>
            {tags.map((element, index) => (
              <li key={index} className="tag">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lodging-info-right">
        <div className="lodging-info-right-host">
          <p>{host.name}</p>
          <img src={host.picture} alt="host img" />
        </div>
        <div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}
