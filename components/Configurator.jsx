import Image from "next/image";
import { exteriorSwatch, interiorSwatch, wheelSwatch } from "@/lib/swatch";

function Configurator({ onChange, exterior, interior, wheel }) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Fisker Ocean</h1>
      <p>
        Configure your very own, with the option to choose from 6 exterior, 2
        interior and 3 wheel options.
      </p>

      {/* Exterior Color */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Exterior Color</h3>

        <div className="flex flex-wrap gap-2">
          {exteriorSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.name === exterior && "ring"} rounded-full ring-blue-300 ring-offset-2 duration-100 hover:scale-105`}
              onClick={() => onChange("exterior", swatch.name)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-11"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Interior</h3>

        <div className="flex gap-2">
          {interiorSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.name === interior && "ring"} rounded-full ring-blue-300 ring-offset-2 duration-100 hover:scale-105`}
              onClick={() => onChange("interior", swatch.name)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-14"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Wheel Options</h3>

        <div className="flex gap-2">
          {wheelSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.name === wheel && "ring"} ring-blue-300 ring-offset-2 duration-100 hover:scale-105`}
              onClick={() => onChange("wheel", swatch.name)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-14"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Configurator;