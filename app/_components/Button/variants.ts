import { cva } from "class-variance-authority";

export const button = cva("px-4 py-2 flex justify-center items-center gap-2", {
  variants: {
    color: {
      orange:
        "bg-primary hover:bg-orange-600 border-primary hover:border-primary-hover",
      gray: "bg-secondary hover:bg-secondary-hover border-secondary hover:border-secondary",
      green:
        "bg-green hover:bg-green-hover bg-border-green hover:bg-border-green",
      blue: "bg-blue hover:bg-blue-hover border-blue",
      yellow: "bg-yellow hover:bg-yellow-hover border-yellow",
      red: "bg-red hover:bg-red-hover border-red",
      black: "bg-gray-dark border-gray-dark",
      purple: "bg-purple hover:bg-orange-600 border-purple",
      pink: "bg-pink hover:bg-pink-hover border-pink",
      grayLight: "bg-light hover:bg-orange-600",
    },
    outline: {
      true: "bg-white hover:!text-white",
    },
    soft: {
      orange:
        "!bg-primary-soft border-primary-soft !text-primary hover:!text-white hover:!bg-primary",
      gray: "!bg-secondary-soft !border-secondary-soft !text-secondary hover:!text-white hover:!bg-secondary",
      green:
        "!bg-green-soft !border-green-soft !text-green hover:!text-white hover:!bg-green hover:!border-green",
      blue: "!bg-blue-soft !border-blue-soft !text-blue hover:!text-white hover:!bg-blue hover:!border-blue",
      yellow:
        "!bg-yellow-soft border-yellow-soft !text-yellow hover:!text-white hover:!bg-yellow hover:!border-yellow",
    },
    fontSize: {
      small: "text-[14px]",
      normal: "text-base",
      large: "text-lg",
      xl: "text-xl",
    },
    rounded: {
      full: "rounded-full",
      xl: "rounded-xl",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
    },
    size: {
      xl: "min-w-[160px]",
      lg: "min-w-[140px]",
      md: "min-w-[120px]",
      sm: "min-w-[100px]",
      xs: "min-w-[80px]",
      full: "w-full",
    },
  },

  compoundVariants: [
    {
      color: [
        "orange",
        "gray",
        "green",
        "blue",
        "yellow",
        "red",
        "black",
        "purple",
        "pink",
        "grayLight",
      ],

      class: "text-white transition-all duration-300 border border-solid",
    },
    {
      color: "orange",
      outline: true,
      class: "!text-primary hover:text-white hover:!bg-primary",
    },
    {
      color: "gray",
      outline: true,
      class: "!text-gray hover:text-white hover:!bg-gray",
    },
    {
      color: "green",
      outline: true,
      class: "!text-green hover:text-white hover:!bg-green",
    },
    {
      color: "blue",
      outline: true,
      class: "!text-blue hover:text-white hover:!bg-blue",
    },
    {
      color: "yellow",
      outline: true,
      class: "!text-yellow hover:text-white hover:!bg-yellow",
    },
    {
      color: "red",
      outline: true,
      class: "!text-red hover:text-white hover:!bg-red",
    },
    {
      color: "black",
      outline: true,
      class: "!text-black hover:text-white hover:!bg-black",
    },
    {
      color: "purple",
      outline: true,
      class: "!text-purple hover:text-white hover:!bg-purple",
    },
    {
      color: "pink",
      outline: true,
      class: "!text-pink hover:text-white hover:!bg-pink",
    },
    {
      color: "grayLight",
      outline: true,
      class: "!text-gray hover:text-white hover:!bg-pink",
    },
    {
      soft: "orange",
      outline: false,
    },
    {
      soft: "green",
      outline: false,
    },
    {
      soft: "gray",
      outline: false,
    },
    {
      soft: "blue",
      outline: false,
    },
    {
      soft: "yellow",
      outline: false,
    },
  ],

  defaultVariants: {
    color: "orange",
    rounded: "lg",
  },
});
