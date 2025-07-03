import logosLinks from "~/data.json";
import type { Route } from "./+types/home";

export async function loader() {
  const logos = logosLinks;
  return { logos };
}

export default function Carousel({ loaderData }: Route.ComponentProps) {
  const { logos } = loaderData;

  return (
    <div className=" w-full mt-12 relative flex overflow-x-hidden bg-scrollerColor">
      <div className="animate-marquee py-6 flex  whitespace-nowrap flex-shrink-0">
        {logos.map((logo, index) => (
          <img
            key={`A${index}`}
            src={logo.link}
            className="h-12 w-12 md:h-16 md:w-16   rounded-full bg-gray-200 mx-4"
            alt="Coin Logo"
          />
        ))}
      </div>
      <div className="animate-marquee top-0 py-6 flex whitespace-nowrap flex-shrink-0">
        {logos.map((logo, index) => (
          <img
            key={`B${index}`}
            src={logo.link}
            className="h-12 w-12 md:h-16 md:w-16   rounded-full bg-gray-200 mx-4"
            alt="Coin Logo"
          />
        ))}
      </div>
    </div>
  );
}
