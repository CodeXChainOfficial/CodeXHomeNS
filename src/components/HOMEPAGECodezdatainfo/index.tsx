import React from "react";

import { Button, Img, List, Text } from "components";

type HOMEPAGECodezdatainfoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "withdevelopers"
  | "buildoncodexsnaOne"
  | "descriptionTwo"
  | "learnMore"
  | "totaltransactioOne"
  | "p412245098"
  | "todaycounter"
  | "totalaccounts"
  | "p2019570"
  | "p209886activetodone"
  | "tokens"
  | "p1808"
  | "applications"
  | "p4709"
> &
  Partial<{
    withdevelopers: string;
    buildoncodexsnaOne: JSX.Element | string;
    descriptionTwo: string;
    learnMore: string;
    totaltransactioOne: string;
    p412245098: string;
    todaycounter: string;
    totalaccounts: string;
    p2019570: string;
    p209886activetodone: string;
    tokens: string;
    p1808: string;
    applications: string;
    p4709: string;
  }>;

const HOMEPAGECodezdatainfo: React.FC<HOMEPAGECodezdatainfoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex inset-[0] justify-center m-auto w-[94%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-center ml-[undefinedpx] my-auto w-auto z-[1]">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                {props?.withdevelopers}
              </Text>
              {props?.buildoncodexsnaOne}
              <div className="bg-black-900 flex flex-col gap-8 items-start justify-center p-6 sm:px-5 rounded-[16px] w-[346px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="leading-[24.00px] max-w-[298px] md:max-w-full text-base text-gray-600"
                    size="txtInterRegular16Gray600"
                  >
                    {props?.descriptionTwo}
                  </Text>
                </div>
                <Button className="border border-gray-800 border-solid cursor-pointer font-inter h-10 min-w-[138px] py-2.5 rounded-md text-base text-center text-gray-500">
                  {props?.learnMore}
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-end justify-start max-w-[806px] w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 w-[63%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900 flex flex-col gap-1 items-start justify-start p-6 sm:px-5 rounded-[16px] w-[250px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterRegular16Gray500"
                    >
                      {props?.totaltransactioOne}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-base text-light_blue-A700 w-auto"
                      size="txtInterRegular16LightblueA700"
                    >
                      {props?.p412245098}
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-light_blue-A700_a2 w-auto"
                        size="txtInterRegular16LightblueA700a2"
                      >
                        {props?.todaycounter}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col gap-1 items-start justify-start pl-5 sm:pr-5 pr-6 py-6 rounded-[16px] w-[235px]">
                  <div className="flex flex-col items-start justify-start w-[164px]">
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtInterRegular16Gray500"
                    >
                      {props?.totalaccounts}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-light_blue-A700 w-auto"
                      size="txtInterRegular16LightblueA700"
                    >
                      {props?.p2019570}
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-light_blue-A700_a2 w-auto"
                        size="txtInterRegular16LightblueA700a2"
                      >
                        {props?.p209886activetodone}
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-4 items-start justify-start pl-5 w-[289px]">
                <div className="bg-gray-900 flex flex-row gap-1 items-start justify-between p-4 rounded-[16px] w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtInterRegular16Gray500"
                  >
                    {props?.tokens}
                  </Text>
                  <Text
                    className="text-base text-gray-300 w-auto"
                    size="txtInterRegular16Gray300"
                  >
                    {props?.p1808}
                  </Text>
                </div>
                <div className="bg-gray-900 flex flex-row gap-1 items-start justify-between p-4 rounded-[16px] w-full">
                  <Text
                    className="leading-[24.00px] max-w-[82px] md:max-w-full text-base text-gray-500"
                    size="txtInterRegular16Gray500"
                  >
                    {props?.applications}
                  </Text>
                  <Text
                    className="text-base text-gray-300 w-auto"
                    size="txtInterRegular16Gray300"
                  >
                    {props?.p4709}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:h-[444px] h-[446px] ml-[-85px] w-[446px] sm:w-full z-[1] flex justify-center items-center">
      <Img
        className="absolute top-0 right-0 h-[65px] mt-[10px] mr-[10px] object-cover w-[65px]"
        src="images/img_frame18292.png"
        alt="frame18292"
      />
      <div className="absolute top-0 right-0 flex flex-col items-center justify-center mt-[10px] mr-[10px] outline-[0.5px] outline-dashed outline-light_blue-A700 p-[81px] md:px-10 sm:px-5 rounded-[50%] w-64">
        <div className="h-[94px] light_blue_A700_66_green_400_00_border outline outline-[6px] rounded-[50%] w-[94px]"></div>
      </div>
      <Img
        className="absolute top-0 right-0 h-[80px] mt-[10px] mr-[10px] w-[319px]"
        src="images/img_ellipse19.svg"
        alt="ellipseNineteen"
      />
      <Img
        className="absolute top-0 right-0 h-[96px] mt-[10px] mr-[10px] w-96"
        src="images/img_ellipse20.svg"
        alt="ellipseTwenty"
      />
      <Img
        className="absolute top-0 right-0 h-[444px] mt-[10px] mr-[10px] w-[444px]"
        src="images/img_ellipse21.svg"
        alt="ellipseTwentyOne"
      />
    </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGECodezdatainfo.defaultProps = {
  withdevelopers: "With Developers in Mind",
  buildoncodexsnaOne: (
    <Text
      className="text-base text-gray-300 w-full"
      size="txtInterRegular16Gray300"
    >
      <span className="text-white-A700 font-inter text-left font-normal">
        Build on CodeX’sNames,{" "}
      </span>
      <span className="text-gray-600 font-inter text-left font-normal">
        with an Identity you own & chose.
      </span>
    </Text>
  ),
  descriptionTwo:
    "CodeX Names seamlessly integrate with powerful technologies, including AI & ML, catering to both individual users and corporations. Our no-code name service is designed for all builders, enabling easy deployment, purchasing, trading, and management of names.",
  learnMore: "Learn More",
  totaltransactioOne: "Total Transactions",
  p412245098: "412,245,098",
  todaycounter: "108,075 today",
  totalaccounts: "Total Accounts",
  p2019570: "2,019,570",
  p209886activetodone: "209,886 active today",
  tokens: "Tokens",
  p1808: "1,808",
  applications: "Applications",
  p4709: "4,709",
};

export default HOMEPAGECodezdatainfo;
