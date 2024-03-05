import { TbPasswordUser } from "react-icons/tb";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex justify-center mt-6">
      <Link
        href="/password"
      >
        <div className="bg-secondaryBgColorLight dark:bg-secondaryBgColorDark flex flex-col items-center p-6 rounded-md hover:text-textHover">
          <TbPasswordUser className="text-8xl opacity-85" />
          <h1 className="text-xl">Generador de Password</h1>          
        </div>
      </Link>
    </div>
  );
}
