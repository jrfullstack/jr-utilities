
import Link from 'next/link';

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className="text-6xl">Error 404</h1>
        <p className="font-semibold text-xl">
          Lo siento pero esta pagina no existe.
        </p>
        <Link href="/" className="font-normal hover:underline transition-all">
          <p className="flex justify-center items-center gap-2">
            Click aqui para regresar
          </p>
        </Link>
      </div>
    </div>
  );
}
