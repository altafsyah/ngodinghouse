import { works } from "~/data/home";

export default function Works() {
  return (
    <>
      <section id="header" className="w-full max-w-7xl mx-auto pt-32">
        <div className="flex">
          <h1 className="w-full text-title font-bold">Our Works</h1>
          <h2 className="text-2xl font-medium max-w-4xl">
            Dive into our portfolio, witness the fusion of creativity and
            craftsmanship in every project. Explore Our Works and be inspired to
            redefine possibilities.
          </h2>
        </div>
      </section>
      <section
        id="works"
        className="w-full max-w-7xl mx-auto mt-20 pb-20 font-medium"
      >
        <div className="flex items-center gap-5">
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            All
          </div>
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            Website
          </div>
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            Mobile
          </div>{" "}
          <div className="px-8 py-2 border border-black1 rounded-full w-fit">
            UI/UX Design
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-20">
          {works.map((work) => (
            <div
              key={(work.image, work.tag)}
              className="w-[570px] h-[450px] rounded-xl overflow-hidden relative"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black z-20 top-0 left-0 text-white flex flex-col justify-end p-10 ">
                <h3 className="text-4xl font-semibold leading-10 urbanist">
                  {work.title}
                </h3>
                <div className="mt-4 px-4 py-2 border border-white w-fit rounded-full bg-white/5 backdrop-blur">
                  <h5>{work.tag}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
