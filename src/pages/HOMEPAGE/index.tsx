import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import HOMEPAGECodezdatainfo from "components/HOMEPAGECodezdatainfo";
import HOMEPAGEColumnSix from "components/HOMEPAGEColumnSix";
import HOMEPAGEColumnTwo from "components/HOMEPAGEColumnTwo";
import HOMEPAGEColumnownyouridentityOne from "components/HOMEPAGEColumnownyouridentityOne";
import HOMEPAGEFooter from "components/HOMEPAGEFooter";
import HOMEPAGEInfos from "components/HOMEPAGEInfos";
import HOMEPAGENamesservices from "components/HOMEPAGENamesservices";

const filterbutton24HOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HOMEPAGEPage: React.FC = () => {
  return (
    <>
      <div className="font-inter h-[5048px] mx-auto relative w-full">
        <div className="absolute bg-black-900 flex flex-col h-max inset-[0] items-center justify-center m-auto pr-1.5 pt-1.5 w-full">
          <HOMEPAGEColumnownyouridentityOne className="bg-black-900_01 flex flex-col items-center justify-start max-w-[1248px] mt-[70px] md:px-5 rounded-[24px] w-full" />
          <div className="h-[838px] max-w-[1274px] mt-3.5 md:px-5 relative w-full">
            <HOMEPAGEColumnTwo className="bg-black-900_02 flex flex-col gap-2.5 h-[269px] md:h-auto items-center justify-start max-w-[1250px] mb-[-26px] mx-auto md:px-10 sm:px-5 px-[47px] py-[23px] rounded-[32px] shadow-bs w-full z-[1]" />
            <HOMEPAGENamesservices className="flex flex-col md:gap-10 gap-16 items-center justify-start mt-auto mx-auto w-auto" />
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1252px] mt-[53px] md:px-5 w-full">
            <HOMEPAGEInfos
              className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1247px] py-10 w-full"
              description={
                <Text className="leading-[24.00px] max-w-[325px] md:max-w-full text-base text-gray-300">
                  <span className="text-gray-300 font-inter text-left font-normal">
                    CodeX’s Names are a necessary resource to fully decentralize
                    your website.{" "}
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    Link the wallet name to your decentrally hosted website to
                    resist censorship.
                  </span>
                </Text>
              }
              description1={
                <Text className="leading-[24.00px] text-base text-gray-300">
                  <span className="text-gray-300 font-inter text-left font-normal">
                    <>
                      Available for individuals and corporations seeking to
                      &quot;franchise&quot; the service.{" "}
                    </>
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    <>
                      You can use, rebrand, and rename it with ease through a
                      simple form.
                      <br />
                    </>
                  </span>
                </Text>
              }
              description2={
                <Text className="leading-[24.00px] text-base text-gray-300">
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
              }
            />
            <HOMEPAGEColumnSix className="bg-gray-900_02 flex flex-col gap-2 items-center justify-center max-w-[1247px] mt-[52px] p-10 sm:px-5 rounded-[16px] w-full" />
            <HOMEPAGECodezdatainfo
              className="bg-gray-900_02 sm:h-[609px] md:h-[722px] h-[754px] mt-3.5 p-10 sm:px-5 relative rounded-[16px] w-[1247px] md:w-full"
              buildoncodexsnaOne={
                <Text className="text-base text-gray-300 w-full">
                  <span className="text-white-A700 font-inter text-left font-normal">
                    Build on CodeX’sNames,{" "}
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    with an Identity you own & chose.
                  </span>
                </Text>
              }
            />
            <HOMEPAGEColumnownyouridentityOne className="bg-black-900_01 flex flex-col items-center justify-start mt-[53px] rounded-[24px] w-full" />
            <HOMEPAGEFooter className="bg-gray-900_02 flex flex-col gap-2 items-center justify-center max-w-[1247px] mt-[632px] p-10 sm:px-5 rounded-[16px] w-full" />
          </div>
        </div>
        <header className="absolute bg-gradient4  flex inset-x-[0] items-center justify-between mx-auto p-4 md:px-5 top-[0] w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Button className="bg-black-900_01 cursor-pointer min-w-[90px] py-2.5 rounded-lg text-base text-center text-light_blue-A700">
                Domains
              </Button>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100 w-auto"
                  size="txtInterRegular16"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100 w-auto"
                  size="txtInterRegular16"
                >
                  About
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100 w-auto"
                  size="txtInterRegular16"
                >
                  FAQ
                </Text>
              </div>
            </div>
            <Button className="cursor-pointer h-11 min-w-[112px] py-3 rounded-[12px] text-base text-center text-light_blue-A700">
              Connect
            </Button>
          </div>
        </header>
      </div>
    </>
  );
};

export default HOMEPAGEPage;
