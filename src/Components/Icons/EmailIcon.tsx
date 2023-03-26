type ArrowIconType = {
  color?: string;
  w?: string;
  h?: string;
};

export const EmailIcon = (props: ArrowIconType) => {
  const { color = '#000', w = '16', h = '16' } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

    <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"    fill={color}/>
    </svg>
  );
};
