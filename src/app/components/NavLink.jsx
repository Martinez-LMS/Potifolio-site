import Link from "next/link";
import useActiveSection from "../hooks/useActiveSection";

const NavLink = ({ href, title }) => {
  const activeSection = useActiveSection();
  const isActive = href === `#${activeSection}`;

  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
        isActive
          ? "text-primary-500 bg-primary-50 border-2 border-primary-500"
          : "text-light-600 hover:text-primary-500 hover:bg-primary-50 border-2 border-transparent"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
