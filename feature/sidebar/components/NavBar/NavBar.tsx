import NavItem from "../NavItem/NavItem";
import { data } from "../../utils/data";
const NavBar = () => {
  return data.map((section) => <NavItem key={section.id} data={section} />);
};

export default NavBar;
