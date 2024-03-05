
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({title, subtitle, className}:Props) => {

  return (
    <div className={` ${className}`}>
      <div className="my-6">
        <div className="dark:bg-seccionBgColorDark bg-seccionBgColorLight rounded-lg px-5 pb-2">
          <h1
            className={`text-2xl md:text-4xl lg:text-6xl antialiased my-5  font-extrabold bg-gradient-to-tl from-sky-400 to-blue-700 inline-block text-transparent bg-clip-text`}>
            {title}
          </h1>

          {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
        </div>
      </div>
    </div>
  );
}
