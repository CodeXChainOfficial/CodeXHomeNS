import React from "react";
import { Button, Img, Text } from "components";

type HOMEPAGEColumnownyouridentityOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ownyouridentityOne" | "buildbuytrade" | "searchforyour" | "search"
> &
  Partial<{
    ownyouridentityOne: string;
    buildbuytrade: string;
    searchforyour: string;
    search: string;
  }>;

const HOMEPAGEColumnownyouridentityOne: React.FC<
  HOMEPAGEColumnownyouridentityOneProps
> = (props) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className={props.className}>
        <div className="h-[577px] relative rounded-[24px] w-full">
          <Img
            className="absolute h-[577px] inset-[0] justify-center m-auto object-cover rounded-[24px] w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute flex flex-col gap-12 inset-x-[0] items-start justify-center max-w-[1248px] mx-auto px-10 sm:px-5 top-[21%] w-full">
            <div className="flex flex-col gap-[-8px] items-start justify-start w-auto">
              <Text
                className="text-base text-gray-300 w-auto"
                size="txtInterRegular16Gray300"
              >
                {props?.ownyouridentityOne}
              </Text>
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtInterRegular16Bluegray700"
              >
                {props?.buildbuytrade}
              </Text>
            </div>
            <div className="bg-gray-900 flex md:flex-col flex-row gap-2 items-center justify-center max-w-[650px] pl-3 pr-1 py-1 rounded-[12px] w-full">
              <div className="flex flex-1 flex-col h-full items-center justify-start px-3 py-2 w-full">
                <input
                  type="text"
                  className="text-base text-gray-600 w-auto bg-transparent border-none focus:ring-0 outline-none"
                  placeholder={props?.searchforyour}
                  value={searchText}
                  onChange={handleSearchChange}
                  maxLength={64}
                />
              </div>
              <Button className="bg-light_blue-A700 cursor-pointer font-inter min-w-[109px] py-3.5 rounded-lg text-base text-center text-gray-900_01">
                {props?.search}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEColumnownyouridentityOne.defaultProps = {
  ownyouridentityOne: "Own your identity on CodeX.",
  buildbuytrade: "Build, Buy, trade, and manage your name.",
  searchforyour: "Search for your name.cdx",
  search: "Search",
};

export default HOMEPAGEColumnownyouridentityOne;
