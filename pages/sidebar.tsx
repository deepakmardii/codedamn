import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Socials ", link: "/socials" },
    { id: 3, label: "Portfolio ", link: "/portfolio" },
    { id: 4, label: "Resume ", link: "/" },
  ];

  const activeMenu = menuItems.find((menu) => menu.link === router.pathname);

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap text-zinc-400 font-medium",
      {
        ["bg-light-lighter"]: activeMenu && activeMenu.id === menu.id,
      }
    );
  };
  const getNavItemTextClasses = (menu: any) => {
    return classNames(
      "flex fill-current py-4 px-3 font-semibold items-center w-full h-full",
      {
        ["text-black fill-current"]: activeMenu && activeMenu.id === menu.id,
      }
    );
  };

  return (
    <div className="bg-white border-gray-300 px-8">
      <div className="p-4 bg-zinc-50 rounded-2xl px-20 ">
        {/* <h2 className="text-lg font-semibold mb-4">Sidebar</h2> */}
        {menuItems.map((menu) => (
          <span key={menu.id} className={getNavItemClasses(menu)}>
            <Link legacyBehavior href={menu.link}>
              <a className={getNavItemTextClasses(menu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  className="text-zinc-400"
                >
                  <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 30.093981 7 35.411744 10.197766 38.412109 15 L 24 15 C 19.987984 15 16.692717 17.702242 15.539062 21.34375 L 10.847656 13.21875 C 13.962354 9.4206228 18.691211 7 24 7 z M 8.9921875 16.005859 L 16.205078 28.5 L 16.335938 28.423828 C 17.898184 31.105522 20.686869 33 24 33 C 24.694552 33 25.310667 32.75208 25.960938 32.601562 L 21.251953 40.759766 C 13.160942 39.447886 7 32.468398 7 24 C 7 21.106831 7.7237264 18.3878 8.9921875 16.005859 z M 24 18 C 27.331479 18 30 20.668523 30 24 C 30 27.331477 27.331479 30 24 30 C 20.668521 30 18 27.331477 18 24 C 18 20.668523 20.668521 18 24 18 z M 30.599609 18 L 39.894531 18 C 40.597492 19.867024 41 21.88356 41 24 C 41 33.205373 33.722572 40.65535 24.595703 40.970703 L 31.794922 28.5 L 31.664062 28.423828 C 32.437219 27.096655 33 25.639666 33 24 C 33 21.678403 32.05456 19.600076 30.599609 18 z"></path>
                </svg>
                <div>{menu.label}</div>
              </a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
