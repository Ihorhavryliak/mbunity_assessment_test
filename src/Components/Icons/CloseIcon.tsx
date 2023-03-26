type ArrowIconType = {
  color?: string;
  w?: string;
  h?: string;
};

export const CloseIcon = (props: ArrowIconType) => {
  const { color = '#000', w = '16', h = '16' } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
 
<path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"  fill={color} />

    </svg>
  );
};
