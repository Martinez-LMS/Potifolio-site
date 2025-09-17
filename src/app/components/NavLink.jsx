import Link from "next/link";
import { motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const NavLink = ({ href, title }) => {
  const activeSection = useActiveSection();
  const isActive = href === `#${activeSection}`;
  
  // Debug para verificar se está funcionando
  console.log('Active section:', activeSection, 'Current href:', href, 'Is active:', isActive);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`relative rounded-full border-2 px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 overflow-hidden ${
          isActive
            ? "text-light-900 border-primary-500 bg-primary-500/10 shadow-glow"
            : "text-light-600 border-light-300 hover:border-primary-500/50 hover:text-primary-600 hover:bg-primary-50"
        }`}
      >
        <span className="relative z-10">{title}</span>
        
        {/* Background color for selected state */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-primary-500 opacity-20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-primary-500 opacity-0 rounded-full"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default NavLink;
