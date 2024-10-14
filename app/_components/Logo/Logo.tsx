import logo from "@/assets/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2">
      <Image src={logo} height={24} alt="logo dashboard" />
      <span className="text-xl font-semibold font-hanken">CommerceCore</span>
    </div>
  );
};

export default Logo;
