import SVG from "react-inlinesvg";
import * as icons from "../../assets/icons";
export type IconName = keyof typeof icons;

type IconType = {
  w?: number;
  h?: number;
  title?: string;
  type: IconName;
  color?: string;
  opacity?: string;
};

const Icon = (props: IconType) => {
  const {
    w = 16,
    h = 16,
    title = "React",
    type,
    color = "#000",
    opacity = "1",
  } = props;
  return (
    <SVG
      color={color}
      title={title}
      src={icons[type]}
      cacheRequests={true}
      width={w}
      height={h}
      opacity={opacity}
    />
  );
};

export default Icon;
