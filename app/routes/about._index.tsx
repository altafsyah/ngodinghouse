export default function About() {
  return (
    <>
      <section id="hero" className="w-full max-w-7xl mx-auto pt-32">
        <div className="flex">
          <h1 className="w-full text-title font-bold">About Us</h1>
          <h2 className="text-2xl font-medium max-w-4xl">
            We're passionate about crafting digital experiences that inspire.
            With expertise in web and app development, we turn ideas into
            reality, empowering businesses to thrive in the digital age.
          </h2>
        </div>
        <div className="w-full h-[500px] bg-gray-300 rounded-xl mt-20"></div>
      </section>
      <section className="w-full max-w-7xl grid grid-cols-2 mt-20 mx-auto gap-24">
        <div>
          <h1 className="text-title font-bold">Our Value</h1>
          <h5 className="mt-8 text-2xl font-medium">
            We uphold integrity, innovation, and excellence in every project.
            With a commitment to quality and client satisfaction, we deliver
            transformative software solutions that drive success.
          </h5>
        </div>
        <div className="text-white">
          <div className="bg-black1 px-10 py-8 rounded-xl">
            <h3 className="text-subtitle font-bold">Integrity</h3>
            <h4 className="text-description mt-2">
              Integrity is fundamental. It ensures trust, transparency, and
              reliability in all our endeavors, fostering strong client
              relationships.
            </h4>
          </div>
          <div className="bg-black1 px-10 py-8 rounded-xl mt-6">
            <h3 className="text-subtitle font-bold">Innovation</h3>
            <h4 className="text-description mt-2">
              Innovation drives our pursuit of cutting-edge solutions, ensuring
              continuous growth and relevance in the digital landscape.
            </h4>
          </div>
          <div className="bg-black1 px-10 py-8 rounded-xl mt-6">
            <h3 className="text-subtitle font-bold">Excellence</h3>
            <h4 className="text-description mt-2">
              Excellence defines our commitment to delivering superior quality
              and exceeding client expectations.
            </h4>
          </div>
        </div>
      </section>
      <section id="process" className="w-full max-w-7xl mx-auto mt-20 pb-24">
        <h1 className="text-title font-bold">Our Process</h1>
        <h5 className="mt-2 text-2xl font-medium">
          We process integrates creativity, collaboration, and precision to
          ensure seamless development and delivery of innovative software
          solutions.
        </h5>
        <div className="grid grid-cols-3 gap-10 mt-20">
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
          <div className="bg-white drop-shadow border border-[#D1D5DB] rounded-xl px-8 pt-7 pb-20">
            <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
              <h5 className="text-white text-3xl font-medium">1</h5>
            </div>
            <h4 className="mt-5 text-subtitle font-bold">Introduction</h4>
            <p className="text-description mt-2 plus-jakarta-sans">
              Understand client's needs and objectives thoroughly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
