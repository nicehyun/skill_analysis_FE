"use client";

import { IColorProps } from "@/app/features/common/types";
import AnalysisResultLayout from "./AnalysisChartLayout";
import CustomPieChart from "@/app/features/common/components/organisms/CustomPieChart";

interface ISkillFrequencyChartProps extends IColorProps {}

const data = [
  { name: "Skill 1", value: 400 },
  { name: "Skill 2", value: 300 },
  { name: "Skill 3", value: 300 },
  { name: "Skill 4", value: 200 },
  { name: "Skill 5", value: 200 },
  { name: "Skill 6", value: 200 },
  { name: "Skill 7", value: 200 },
  { name: "Skill 8", value: 200 },
  { name: "Skill 9", value: 200 },
  { name: "Skill 10", value: 200 },
  { name: "Skill 11", value: 200 },
  { name: "Skill 12", value: 200 },
  { name: "Skill 13", value: 200 },
  { name: "Skill 14", value: 200 },
  { name: "Skill 15", value: 200 },
];

const SkillFrequencyChart = ({
  color = "primary",
}: ISkillFrequencyChartProps) => {
  return (
    <>
      <AnalysisResultLayout
        title="채용 공고의 기술별 빈도를 나타낸 결과에요!"
        className="h-[350px]"
      >
        <CustomPieChart chartData={data} id="frequency" color={color} />
      </AnalysisResultLayout>
    </>
  );
};

export default SkillFrequencyChart;