import NavItem from "../NavItem/NavItem";
import { data } from "../../utils/data";
const NavBar = () => {
  return (
    <ul>
      {data.map((section) => (
        <NavItem key={section.id} data={section} />
      ))}{" "}
    </ul>
  );
};

export default NavBar;
