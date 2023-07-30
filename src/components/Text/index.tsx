import React from "react";

type ValidComponent = React.ComponentType<any> | keyof JSX.IntrinsicElements;

const sizeClasses = {
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterRegular16LightblueA700: "font-inter font-normal",
  txtInterRegular16Gray100: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterRegular16Gray300: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular16LightblueA700a2: "font-inter font-normal",};

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: ValidComponent | string; // Add 'string' to accept HTML tags as well
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text} ;


