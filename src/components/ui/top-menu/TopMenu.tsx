import Link from "next/link"


export const TopMenu = () => {
  return (
    <nav className="flex justify-center items-center w-full bg-secondaryBgColorLight dark:bg-secondaryBgColorDark">
      {/* Logo */}
      <div className="my-3 hover:text-textHover">
        <Link href="/">
          <span className="antialiased font-bold text-lg">JR</span>
          <span> | Utilidades</span>
        </Link>
      </div>
    </nav>
  );
}
