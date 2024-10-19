import React from "react";

type HeaderFormAuthProps = {
  heading: string;
  description: string;
};

const HeaderFormAuth = ({ heading, description }: HeaderFormAuthProps) => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-gray-dark">{heading}</h1>
      <p className="text-sm font-medium mt-2 mb-5">{description}</p>
    </>
  );
};

export default HeaderFormAuth;
