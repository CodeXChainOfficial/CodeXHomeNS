import React, { useState } from "react";
import { Img, List, Text } from "components";

type HOMEPAGEColumnSixProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "descriptionOne"
  | "button"
  | "willibeableto"
  | "willibeabletoOne"
  | "timezone"
  | "willibeabletoTwo"
  | "willibeabletoThree"
  | "willibeableto1"
  | "willibeabletoone1"
  | "willibeabletotwo1"
  | "willibeabletothree1"
  | "willibeabletoFour"
> &
  Partial<{
    descriptionOne: JSX.Element | string;
    button: string;
    willibeableto: string;
    willibeabletoOne: string;
    timezone: string;
    willibeabletoTwo: string;
    willibeabletoThree: string;
    willibeableto1: string;
    willibeabletoone1: string;
    willibeabletotwo1: string;
    willibeabletothree1: string;
    willibeabletoFour: string;
  }>;

const HOMEPAGEColumnSix: React.FC<HOMEPAGEColumnSixProps> = (props) => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const handleToggleAnswer = (question: string) => {
    setActiveQuestion((prevQuestion) => (prevQuestion === question ? null : question));
  };

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-between p-2.5 w-full">
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Img
                  className="h-[72px] w-[72px]"
                  src="images/img_faqlogo.svg"
                  alt="faqlogo"
                />
                <Text
                  className="leading-[24.00px] max-w-[530px] md:max-w-full text-base text-gray-600"
                  size="txtInterRegular16Gray600"
                >
                  {props?.descriptionOne}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg w-auto">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2 rounded-lg">
                  <Text
                    className="text-base text-center text-gray-100 w-auto"
                    size="txtInterRegular16Gray100"
                  >
                    {props?.button}
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900_03 flex flex-1 flex-col gap-10 items-start justify-start p-14 md:px-10 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                <div
                  className="flex flex-col items-start justify-start p-2.5 w-full cursor-pointer"
                  onClick={() => handleToggleAnswer("willibeableto")}
                >
                  <Text
                    className="text-base text-gray-300 w-auto"
                    size="txtInterRegular16Gray300"
                  >
                    {props?.willibeableto}
                  </Text>
                  {activeQuestion === "willibeableto" && (
                    <div>
                      <Text className="text-base text-gray-300 w-auto">
                        {"Test"}
                      </Text>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-900_03 flex flex-1 flex-col gap-10 items-start justify-start p-14 md:px-10 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                <div
                  className="flex flex-col items-start justify-start p-2.5 w-full cursor-pointer"
                  onClick={() => handleToggleAnswer("willibeabletoOne")}
                >
                  <Text
                    className="text-base text-gray-300 w-auto"
                    size="txtInterRegular16Gray300"
                  >
                    {props?.willibeabletoOne}
                  </Text>
                  {activeQuestion === "willibeabletoOne" && (
                    <div>
                      <Text className="text-base text-gray-300 w-auto">
                        {"Test"}
                      </Text>
                    </div>
                  )}
                </div>
              </div>
              {/* Add similar blocks for other questions */}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEColumnSix.defaultProps = {
  descriptionOne: (
    <>
      FAQs
      <br />
      <br />
      Improve workflows and get more done with native integrations.
    </>
  ),
  button: "Ask us anything",
  willibeableto: "What is CodeX’s No-Code Name Service?",
  willibeabletoOne: "What is CodeX’s No-Code Name Service?",
  timezone: "What is CodeX’s No-Code Name Service?",
  willibeabletoTwo: "What is CodeX’s No-Code Name Service?",
  willibeabletoThree: "What is CodeX’s No-Code Name Service?",
  willibeableto1: "What is CodeX’s No-Code Name Service?",
  willibeabletoone1: "What is CodeX’s No-Code Name Service?",
  willibeabletotwo1: "What is CodeX’s No-Code Name Service?",
  willibeabletothree1: "What is CodeX’s No-Code Name Service?",
  willibeabletoFour: "What is CodeX’s No-Code Name Service?",
};

export default HOMEPAGEColumnSix;
