"use client";

import DualRangeSlider from "./DualRangeSlider";
import Button from "@/app/common/components/atoms/Button";
import { Range } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import { useState } from "react";
import ToolTip from "@/app/common/components/molecules/ToolTip";
import ExperienceRangeControllerGuideContent from "./ExperienceRangeControllerGuideContent";

interface IExperienceRangeContollerProps {
  onClickExperienceRangeApply: ({ min, max }: Range) => void;
  isDisabled: boolean;
}

const ExperienceRangeContoller = ({
  onClickExperienceRangeApply,
  isDisabled,
}: IExperienceRangeContollerProps) => {
  const [experienceMax, setExperienceMax] = useState(0);
  const [experienceMin, setExperienceMin] = useState(30);

  return (
    <>
      <h3 className="text-small text-gray1">경력 범위 조절 슬라이더</h3>

      <div className="flex h-[60px] items-center">
        <DualRangeSlider
          min={0}
          max={30}
          currentMin={experienceMin}
          currentMax={experienceMax}
          onChange={({ max, min }: Range) => {
            setExperienceMax(max);
            setExperienceMin(min);
          }}
        />
        <span className="ml-6 mr-2">
          <Button
            id="update-experience-range"
            content="적용"
            color="gray"
            disabled={isDisabled}
            onClick={() =>
              onClickExperienceRangeApply({
                max: experienceMax,
                min: experienceMin,
              })
            }
          />
        </span>
        <ToolTip
          title={`경력 범위 가이드`}
          guideContent={<ExperienceRangeControllerGuideContent />}
          ariaLabel={`경력 범위 툴팁`}
        />
      </div>
    </>
  );
};

export default ExperienceRangeContoller;
