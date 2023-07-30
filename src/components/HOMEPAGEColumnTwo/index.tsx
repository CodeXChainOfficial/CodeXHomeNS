import React from "react";

import { Img, Line, List, SelectBox, Text } from "components";

type HOMEPAGEColumnTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "nameservices"
  | "registration"
  | "sales"
  | "volume"
  | "uniqueholders"
  | "language"
  | "registrationdat"
  | "salesdatavalue"
  | "volumedatavalue"
  | "uniqueholdersva"
  | "trx"
  | "registrationdat1"
  | "salesdatavalue1"
  | "volumedatavalue1"
  | "uniqueholderrs"
> &
  Partial<{
    nameservices: string;
    registration: string;
    sales: string;
    volume: string;
    uniqueholders: string;
    language: string;
    registrationdat: string;
    salesdatavalue: string;
    volumedatavalue: string;
    uniqueholdersva: string;
    trx: string;
    registrationdat1: string;
    salesdatavalue1: string;
    volumedatavalue1: string;
    uniqueholderrs: string;
  }>;

const filterbutton24HOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HOMEPAGEColumnTwo: React.FC<HOMEPAGEColumnTwoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="sm:h-[1203px] md:h-[246px] h-[251px] pl-[7px] relative w-full">
            <div className="absolute flex flex-col gap-[39px] h-max inset-[0] items-start justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-center w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 gap-[130px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      {props?.nameservices}
                    </Text>
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      {props?.registration}
                    </Text>
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      {props?.sales}
                    </Text>
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      {props?.volume}
                    </Text>
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterRegular16WhiteA700"
                    >
                      {props?.uniqueholders}
                    </Text>

                    <SelectBox
  className=" font-inter h-12 pl-3.5 pr-[17px] py-3 right-0 top-0 sm:w-full rounded-[11px] text-base text-center text-white-A700 w-[9%] white_A700_38_white_A700_00_border"
  placeholderClassName="text-white-A700"
  indicator={
    <Img
      className="h-6 w-6 absolute"
      src="images/img_arrowdown.svg"
      alt="arrow_down"
    />
  }
  isMulti={false}
  name="filterbutton24h"
  options={filterbutton24HOptionsList}
  isSearchable={false}
  placeholder="24h"
/>
                  </div>
                  <Line className="bg-gray-700 h-px w-full" />
                  
                </div>
              </div>
              <List
                className="flex flex-col gap-10 items-start md:ml-[0] ml-[3px] w-auto"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[158px] items-start justify-start max-w-[887px] w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-start w-[191px]">
                    <div className="flex flex-row gap-4 items-center justify-start w-[133px]">
                      <Img
                        className="h-[34px] md:h-auto object-cover w-[33px]"
                        src="images/img_codex11.png"
                        alt="codexEleven"
                      />
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterRegular16WhiteA700"
                      >
                        {props?.language}
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.registrationdat}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.salesdatavalue}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.volumedatavalue}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.uniqueholdersva}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1193px] w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-start w-[194px]">
                    <div className="flex flex-row gap-[27px] items-center justify-between w-auto">
                      <Img
                        className="h-[41px] md:h-auto object-cover w-[41px]"
                        src="images/img_image398.png"
                        alt="image398"
                      />
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterRegular16WhiteA700"
                      >
                        {props?.trx}
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </div>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.registrationdat1}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.salesdatavalue1}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.volumedatavalue1}
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.uniqueholderrs}
                  </Text>
                  <Line className="bg-black-900 h-px rotate-[18deg] w-[15%]" />
                </div>

              </List>

              
            </div>
  


          </div>
          
        </div>
        
      </div>
    </>
  );
};

HOMEPAGEColumnTwo.defaultProps = {
  nameservices: "Name Services",
  registration: "Registration",
  sales: "Sales",
  volume: "Volume",
  uniqueholders: "Unique Holders",
  language: ".CDX               ",
  registrationdat: "0",
  salesdatavalue: "0",
  volumedatavalue: "0",
  uniqueholdersva: "0",
  trx: ".TRX",
  registrationdat1: "0",
  salesdatavalue1: "0",
  volumedatavalue1: "0",
  uniqueholderrs: "0",
};

export default HOMEPAGEColumnTwo;
