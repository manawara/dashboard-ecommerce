import logo from "@/public/logo.svg";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="flex gap-2">
      <Image
        src={logo}
        width={140}
        alt="logo dashboard"
        className={className}
      />
    </div>
  );
};

export default Logo;
