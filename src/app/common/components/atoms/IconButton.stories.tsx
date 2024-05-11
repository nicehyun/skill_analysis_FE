import { Meta, StoryObj } from "@storybook/react";
import IconButton, { IIconButtonProps } from "./IconButton";
import { BsFillAlarmFill } from "react-icons/bs";

export default {
  title: "Common/Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    iconSize: {
      control: { type: "select", options: ["small", "normal", "large"] },
      description: "small : 20 x 20, normal : 24 x 24, large : 26 x 26",
    },
    className: {
      control: "text",
    },
    icon: {
      description: "렌더링할 react-icons입니다.",
      table: {
        type: { summary: "ReactElement" },
        defaultValue: { summary: "None" },
      },
      control: false,
    },
  },
} as Meta<IIconButtonProps>;

export const Small: StoryObj<IIconButtonProps> = {
  args: {
    id: "icon-small",
    icon: <BsFillAlarmFill />,
    iconSize: "small",
    className: "",
  },
};

export const Normal: StoryObj<IIconButtonProps> = {
  args: {
    id: "icon-normal",
    icon: <BsFillAlarmFill />,
    iconSize: "normal",
    className: "",
  },
};

export const Large: StoryObj<IIconButtonProps> = {
  args: {
    id: "icon-large",
    icon: <BsFillAlarmFill />,
    iconSize: "large",
    className: "",
  },
};
