import { To } from "react-router-dom";
import { NavigateButton } from "./buttons/NavigateButton";
import { ExpandButton } from "./buttons/ExpandButton";
import React from "react";
type Params = {
  title: string;
  subTitle: string;
  image: string;
  To: To;
  expandedText: React.ReactNode
};

export default function ChapterCard(props: Params) {

  return (
    <div className="max-w-5xl p-5 mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex space-x-4">
        <div>
          <img
            className="w-[389px] h-[165px] flex-shrink-0"
            src={props.image}
          />
        </div>
        <div className="my-auto">
          <p className="text-2xl font-custom">{props.title}</p>
          <p className="font-normal text-[#666] max-w-xl font-custom">
            {props.subTitle}
          </p>
          <NavigateButton
            buttonStyle="secondary"
            To="/plastic/probleem"
            children="Ga naar onderwerp"
          />
          <ExpandButton 
            expandedText={props.expandedText} 
            buttonStyle="secondary"
            children="Belangrijkste termen"
            >
          </ExpandButton>
        </div>
      </div>
    </div>
  );
}
