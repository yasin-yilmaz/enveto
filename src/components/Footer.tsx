import Link from "next/link";

const routes = [
  {
    name: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 py-4 text-xs text-white/25 sm:px-9">
      <small className="text-xs">
        &copy; 2024 Yasin Yılmaz. All Rights Reserved
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
