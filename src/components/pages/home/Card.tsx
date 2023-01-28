import { Cardprops } from "../../../utils/type";

export default function Card({ id, cover, title }: Cardprops) {
  return (
    <a
      href={`logements/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }}
    >
      <div className="card-linearGradient"></div>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </a>
  );
}
