import { SVGAttributes } from "react";

type SvgProps = SVGAttributes<SVGElement> & {
  size?: number;
};

type PathProps = SVGAttributes<SVGPathElement> & {
  color?: string;
};

export type IconProps = SvgProps & {
  color?: string;
};

const SvgIcon = ({
  children,
  size = 20,
  viewBox = "0 0 20 20",
  ...rest
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    {...rest}
  >
    {children}
  </svg>
);

const Path = ({ fill, ...rest }: PathProps) => (
  <path {...rest} fill={fill || "currentColor"} />
);

export const IconChevronLeft = ({ color, ...rest }: IconProps) => (
  <SvgIcon {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.79269 9.29289C8.40216 9.68342 8.40216 10.3166 8.79269 10.7071L13.6917 15.6061C14.0822 15.9966 14.0822 16.6298 13.6917 17.0203L13.419 17.2929C13.0285 17.6834 12.3954 17.6834 12.0048 17.2929L6.23008 11.5181C5.39163 10.6797 5.39163 9.32031 6.23007 8.48186L12.0048 2.70711C12.3954 2.31658 13.0285 2.31658 13.419 2.70711L13.6917 2.97972C14.0822 3.37024 14.0822 4.00341 13.6917 4.39393L8.79269 9.29289Z"
      fill={color}
    />
  </SvgIcon>
);
