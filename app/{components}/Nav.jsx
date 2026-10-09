import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4 border-b border-border-subtle">
      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon text-default-text" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon text-default-text" />
        </Link>
      </div>

      {/* Email & CSS Theme Toggle */}
      <div className="flex items-center space-x-6">
        {/* Pure CSS Light/Dark Toggle Switch */}
        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold uppercase tracking-wider text-muted-text select-none">
          <span className="text-sm">🌙</span>
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-accent"></div>
          <span className="text-sm">☀️</span>
        </label>

        <p className="text-default-text text-sm font-medium">someone@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;