import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M21 6h-5V4.3A2.4 2.4 0 0 0 13.5 2h-3A2.4 2.4 0 0 0 8 4.3V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 4.3c0-.1.2-.3.5-.3h3c.3 0 .5.2.5.3V6h-4V4.3ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12v11Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
