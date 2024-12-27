import Image from "next/image";
import { imageMap, interiorMap } from "@/lib/imageMap";

function Preview({ exterior, wheel, interior }) {
  return (
    <>
      {/* Exterior Image */}

      <Image
        src={imageMap[exterior].wheels[wheel]}
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
      />

      {/* Exterior Description */}
      <section className="my-4 pl-2">
        <h3 className="text-2xl font-bold">
          {exterior}: {imageMap[exterior].finish} w/ {wheel}
        </h3>
        <p>{imageMap[exterior].description}</p>
      </section>
      {/* Interior Image */}

      <Image
        src={interiorMap[interior]}
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
      />

      <section className="mt-4 pl-2">
        <h3 className="text-xl font-bold">Interior {interior}</h3>
      </section>
    </>
  );
}

export default Preview;