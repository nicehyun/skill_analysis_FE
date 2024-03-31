import { ReactElement, cloneElement } from "react";

export interface IIconProps {
  icon: ReactElement;
  className?: string;
}

const Icon = ({ icon, className }: IIconProps) => {
  const cloneIcon = cloneElement(icon, {
    className: "w-full h-full",
  });

  return (
    <span className={`${className} flexCenter h-[24px] w-[24px] p-[2px]`}>
      {cloneIcon}
    </span>
  );
};

export default Icon;
