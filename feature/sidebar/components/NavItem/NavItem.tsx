"use client";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import useOpenItem from "../../../../hooks/useOpenItem";
import { motion, AnimatePresence } from "motion/react";
type IconType = keyof typeof Icons;

type MenuItem = {
  id?: string;
  label?: string;
  name?: string;
  path?: string | null;
  icon?: string | null;
  order?: number;
  sectionId?: string;
  children?: MenuItem[];
};

type NavItemProps = VariantProps<typeof itemStyles> & {
  data: MenuItem;
};

const itemStyles = cva("text-gray-dark-300", {
  variants: {
    variant: {
      primary: "uppercase font-semibold tracking-wider text-xs",
      secondary: "",
    },
  },
});

const NavItem: React.FC<NavItemProps> = ({ data, variant = "primary" }) => {
  const { open, handleOpenItem } = useOpenItem();

  const { children, label, name, path, icon } = data;
  console.log(open);
  const IconComponent =
    icon && Icons[icon as IconType]
      ? (Icons[icon as IconType] as LucideIcon)
      : null;

  const renderChildren = () => {
    return (
      <AnimatePresence>
        {open && children ? (
          <motion.ul
            className="border-gray-300 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children.map((child) => (
              <NavItem
                key={child.id || child.label}
                variant="secondary"
                data={child}
              />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    );
  };

  return (
    <li className="list-none">
      <div className={`${itemStyles({ variant })} flex items-center gap-3 `}>
        {label ? (
          path ? (
            <Link href={path} className="flex items-center gap-2 py-2">
              {IconComponent && <IconComponent className="size-5" />}
              {label}
            </Link>
          ) : (
            <button
              onClick={handleOpenItem}
              className="flex items-center gap-2  py-2 w-full justify-between"
            >
              <div className="flex gap-2">
                {IconComponent && <IconComponent className="size-5" />}
                {label}
              </div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={open && children ? { rotate: 180 } : { rotate: 0 }}
                exit={{ rotate: 0 }}
              >
                <Icons.ChevronDown
                  size={12}
                  strokeWidth={3}
                  className="ml-auto"
                />
              </motion.div>
            </button>
          )
        ) : (
          <div className="py-2">{name || null}</div>
        )}
      </div>
      {renderChildren()}
    </li>
  );
};

export default NavItem;
