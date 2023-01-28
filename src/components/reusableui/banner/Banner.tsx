import { BannerProps } from "../../../utils/type";

export default function Banner({ image, title }: BannerProps) {
  return (
    <div className="banner">
      <div className="background">
        <img src={image} alt="mountain" />
        <h2>{title}</h2>
      </div>
    </div>
  );
}
