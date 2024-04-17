import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "ngodinghouse" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <section id="hero" className="w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-5xl">
            WE CRAFTING BIG IDEAS. WEBSITE. APPS.
            <br />
            FOR REAL PEOPLE. FROM REAL PEOPLE
          </h1>
          <p className="text-xl mt-3">
            Innovative solutions tailored for your success. Unlock your
            potential with our software expertise!
          </p>
          <ul className="flex items-center gap-5 mt-12">
            <li className="w-24 aspect-square rounded-full bg-black1 text-white flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">200+</h4>
              <h5 className="text-base font-light">Clients</h5>
            </li>
            <li className="w-24 aspect-square rounded-full bg-black1 text-white flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">5</h4>
              <h5 className="text-base font-light">Yrs on the market</h5>
            </li>
            <li className="w-24 aspect-square rounded-full bg-black1 text-white flex flex-col items-center justify-center">
              <h4 className="text-2xl font-bold">20</h4>
              <h5 className="text-base font-light">Awards</h5>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
