type ArrowIconType = {
  color?: string;
  w?: string;
  h?: string;
};

export const ArrowIcon = (props: ArrowIconType) => {
  const { color = '#000', w = '18', h = '19' } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.46967 6.61906C5.76256 6.91195 6.23744 6.91195 6.53033 6.61906L11.3033 1.84609C11.5962 1.5532 11.5962 1.07832 11.3033 0.78543C11.0104 0.492537 10.5355 0.492537 10.2426 0.78543L6 5.02807L1.75736 0.78543C1.46447 0.492537 0.989592 0.492537 0.696699 0.78543C0.403806 1.07832 0.403806 1.5532 0.696699 1.84609L5.46967 6.61906ZM5.25 4.52386V6.08873H6.75V4.52386H5.25Z"
        fill={color}
      />
    </svg>
  );
};
