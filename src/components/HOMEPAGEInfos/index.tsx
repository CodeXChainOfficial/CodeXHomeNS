import React from "react";
import { Img, List, Text } from "components";

type HOMEPAGEInfosProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "decentralizeyouOne"
  | "description"
  | "b2bb2cfocused"
  | "description1"
  | "easytransactionOne"
  | "description2"
> &
  Partial<{
    decentralizeyouOne: string;
    description: JSX.Element | string;
    b2bb2cfocused: string;
    description1: JSX.Element | string;
    easytransactionOne: string;
    description2: JSX.Element | string;
  }>;

const HOMEPAGEInfos: React.FC<HOMEPAGEInfosProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="flex gap-4">
        <div className="bg-gray-900_02 flex flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Img
              className="h-[180px] w-[180px]"
              src="images/img_bank.svg"
              alt="bank"
            />
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtInterRegular16WhiteA700"
            >
              {props?.decentralizeyouOne}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              {props?.description}
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Img
              className="h-[180px] w-[180px]"
              src="images/img_bankcards.svg"
              alt="bankcards"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                {props?.b2bb2cfocused}
              </Text>
              {props?.description1}
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Img
              className="h-[180px] w-[180px]"
              src="images/img_coindollar.svg"
              alt="coindollar"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                {props?.easytransactionOne}
              </Text>
              {props?.description2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HOMEPAGEInfos.defaultProps = {
  decentralizeyouOne: "Decentralize Your Website",
  description: (
    <Text
      className="leading-[24.00px] max-w-[325px] md:max-w-full text-base text-gray-300"
      size="txtInterRegular16Gray300"
    >
      <span className="text-gray-300 font-inter text-left font-normal">
        CodeX’s Names are a necessary resource to fully decentralize your
        website.{" "}
      </span>
      <span className="text-gray-600 font-inter text-left font-normal">
        Link the wallet name to your decentrally hosted website to resist
        censorship.
      </span>
    </Text>
  ),
  b2bb2cfocused: "B2b & B2C Focused",
  description1: (
    <Text
      className="leading-[24.00px] max-w-[325px] md:max-w-full text-base text-gray-300"
      size="txtInterRegular16Gray300"
    >
      <span className="text-gray-300 font-inter text-left font-normal">
        <>
          Available for individuals and corporations seeking to
          &quot;franchise&quot; the service.{" "}
        </>
      </span>
      <span className="text-gray-600 font-inter text-left font-normal">
        <>
          You can use, rebrand, and rename it with ease through a simple form.
          <br />
        </>
      </span>
    </Text>
  ),
  easytransactionOne: "Easy Transactions",
  description2: (
    <Text
      className="leading-[24.00px] max-w-[325px] md:max-w-full text-base text-gray-300"
      size="txtInterRegular16Gray300"
    >
      <span className="text-gray-300 font-inter text-left font-normal">
        Select and claim an Identity that works for you{" "}
      </span>
      <span className="text-gray-600 font-inter text-left font-normal">
        <>
          and your brands. All characters & emoji supported.
          <br />
        </>
      </span>
    </Text>
  ),
};

export default HOMEPAGEInfos;
