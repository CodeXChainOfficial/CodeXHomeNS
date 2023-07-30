import React from "react";

import { Button, Img, List, Text } from "components";

type HOMEPAGENamesservicesProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "codexsnamesprodOne"
  | "language"
  | "buildNow"
  | "codexnameservicOne"
  | "viewLive"
  | "tronnameserviceOne"
  | "comingSoon"
  | "fantomnameserviOne"
  | "comingsoon1"
  | "avalanchenameseOne"
  | "comingSoonOne"
> &
  Partial<{
    codexsnamesprodOne: string;
    language: string;
    buildNow: string;
    codexnameservicOne: string;
    viewLive: string;
    tronnameserviceOne: string;
    comingSoon: string;
    fantomnameserviOne: string;
    comingsoon1: string;
    avalanchenameseOne: string;
    comingSoonOne: string;
  }>;

const HOMEPAGENamesservices: React.FC<HOMEPAGENamesservicesProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1161px] w-full">
          <Text
            className="text-base text-white-A700 w-auto"
            size="txtInterRegular16WhiteA700"
          >
            {props?.codexsnamesprodOne}
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-center w-auto md:w-full">
          <List
            className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-col h-[238px] md:h-auto items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Img
                  className="h-[42px] md:h-auto object-cover w-[171px] sm:w-full"
                  src="images/img_whatsappimage.png"
                  alt="whatsappimage"
                />
                <div className="flex flex-col items-start justify-start w-[342px]">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.language}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button className="bg-light_blue-A700 cursor-pointer font-inter min-w-[109px] py-2.5 rounded-[20px] text-base text-black-900 text-center">
                    {props?.buildNow}
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex flex-col h-[238px] md:h-auto items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Img
                  className="h-[37px] md:h-auto object-cover w-[171px] sm:w-full"
                  src="images/img_whatsappimage_37x171.png"
                  alt="whatsappimage"
                />
                <div className="flex flex-col items-start justify-start w-[342px]">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.codexnameservicOne}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button className="bg-light_blue-A700 cursor-pointer font-inter min-w-[105px] py-2.5 rounded-[20px] text-base text-black-900 text-center">
                    {props?.viewLive}
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient1  flex flex-col h-[238px] md:h-auto items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Img
                  className="h-[41px] md:h-auto object-cover w-[188px] sm:w-full"
                  src="images/img_whatsappimage_41x188.png"
                  alt="whatsappimage"
                />
                <div className="flex flex-col items-start justify-start w-[342px]">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.tronnameserviceOne}
                  </Text>
                </div>
                <Button className="border border-light_blue-600 border-solid cursor-pointer font-inter py-2.5 rounded-[20px] text-base text-center text-light_blue-600 w-[149px]">
                  {props?.comingSoon}
                </Button>
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-auto md:w-full">
            <div className="bg-gradient2  flex flex-col items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-row gap-[11px] items-center justify-center w-auto">
                  <Img
                    className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                    src="images/img_image133.png"
                    alt="image133"
                  />
                  <Img
                    className="h-3.5 w-[98px]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[342px]">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.fantomnameserviOne}
                  </Text>
                </div>
                <Button className="border border-light_blue-600 border-solid cursor-pointer font-inter py-2.5 rounded-[20px] text-base text-center text-light_blue-600 w-[149px]">
                  {props?.comingsoon1}
                </Button>
              </div>
            </div>
            <div className="bg-gradient3  flex flex-col items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Img
                    className="h-[23px] md:h-auto object-cover w-[23px]"
                    src="images/img_image134.png"
                    alt="image134"
                  />
                  <Img
                    className="h-[22px] md:h-auto object-cover w-[93px]"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[342px]">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterRegular16WhiteA700"
                  >
                    {props?.avalanchenameseOne}
                  </Text>
                </div>
                <Button className="border border-light_blue-600 border-solid cursor-pointer font-inter py-2.5 rounded-[20px] text-base text-center text-light_blue-600 w-[149px]">
                  {props?.comingSoonOne}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGENamesservices.defaultProps = {
  codexsnamesprodOne: "CodeX’s Names Products",
  language: "Create Your  Name Service",
  buildNow: "Build Now",
  codexnameservicOne: "CodeX Name Service",
  viewLive: "View Live",
  tronnameserviceOne: "Tron Name Service",
  comingSoon: "Coming Soon",
  fantomnameserviOne: "Fantom Name Service",
  comingsoon1: "Coming Soon",
  avalanchenameseOne: "Avalanche Name Service",
  comingSoonOne: "Coming Soon",
};

export default HOMEPAGENamesservices;
