import React from "react";

import { Img, Text } from "components";

type HOMEPAGEFooterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "globalfooter"
  | "globalfooterOne"
  | "globalfooterTwo"
  | "globalfooterThree"
  | "globalfooterFour"
> &
  Partial<{
    globalfooter: string;
    globalfooterOne: string;
    globalfooterTwo: string;
    globalfooterThree: string;
    globalfooterFour: string;
  }>;

const HOMEPAGEFooter: React.FC<HOMEPAGEFooterProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-12 items-center justify-between w-full">
            <div className="md:flex-1 gap-12 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-blue_gray-100 text-center w-full"
                size="txtInterRegular16"
              >
                {props?.globalfooter}
              </Text>
              <Text
                className="text-base text-blue_gray-100 text-center w-full"
                size="txtInterRegular16"
              >
                {props?.globalfooterOne}
              </Text>
              <Text
                className="text-base text-blue_gray-100 text-center w-full"
                size="txtInterRegular16"
              >
                {props?.globalfooterTwo}
              </Text>
              <Text
                className="text-base text-blue_gray-100 text-center w-full"
                size="txtInterRegular16"
              >
                {props?.globalfooterThree}
              </Text>
              <Text
                className="text-base text-blue_gray-100 text-center w-full"
                size="txtInterRegular16"
              >
                {props?.globalfooterFour}
              </Text>
            </div>
            <Img
              className="h-7 w-[148px]"
              src="images/img_footerlogos.svg"
              alt="footerlogos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEFooter.defaultProps = {
  globalfooter: "Global footer",
  globalfooterOne: "Global footer",
  globalfooterTwo: "Global footer",
  globalfooterThree: "Global footer",
  globalfooterFour: "Global footer",
};

export default HOMEPAGEFooter;
