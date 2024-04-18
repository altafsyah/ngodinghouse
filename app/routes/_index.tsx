/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import {
  aboutImages,
  partners,
  services,
  testimonials,
  works,
} from "~/data/home";
import clsx from "clsx";

export const meta: MetaFunction = () => {
  return [
    { title: "ngodinghouse || friendly and trusted software house" },
    {
      name: "description",
      content:
        "NgodingHouse: Your innovative software partner. We specialize in crafting bespoke digital solutions to elevate your business. Let's transform your ideas into powerful software. Contact us today!",
    },
    {
      name: "keywords",
      content:
        "software house, web development, mobile development, ui/ux design, software development, ngodinghouse, indonesia, price, website, android",
    },
    {
      name: "author",
      content: "ngodinghouse",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};

export default function Index() {
  return (
    <>
      <section
        id="hero"
        className="w-full min-h-[80vh] flex flex-col justify-center relative overflow-x-hidden"
      >
        <motion.div
          className="mx-auto text-center flex flex-col items-center"
          initial={{
            filter: "blur(30px)",
          }}
          animate={{
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
            },
          }}
        >
          <h1 className="max-w-4xl text-5xl bayon leading-[80px]">
            WE CRAFTING BIG IDEAS. WEBSITE. APPS.
            <br />
            FOR REAL PEOPLE. FROM REAL PEOPLE
          </h1>
          <p className="text-xl mt-3 max-w-xl leading-6">
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
        </motion.div>
        <motion.div
          className="w-[300px] h-[400px] rounded-2xl bg-gray-500 absolute overflow-hidden"
          initial={{
            scale: 0,
            filter: "blur(30px)",
            translateX: 100,
          }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
            rotate: 20,
            translateX: -100,
            transition: {
              duration: 0.7,
            },
          }}
        >
          <img
            // src="/images/hero_1.jfif"
            src="/images/cover.webp"
            alt="Hero 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="w-[300px] h-[400px] rounded-2xl bg-gray-500 absolute right-0 overflow-hidden"
          initial={{
            scale: 0,
            filter: "blur(30px)",
            translateX: -100,
          }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
            rotate: -20,
            translateX: 100,
            transition: {
              duration: 0.7,
            },
          }}
        >
          <img
            // src="/images/hero_2.jfif"
            src="/images/cover.webp"
            alt="Hero 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
      <section
        id="partner"
        className="w-full bg-black1 py-6 flex justify-center items-center gap-10"
      >
        {partners.map((partner) => (
          <motion.img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-10"
            initial={{ filter: "blur(30px)" }}
            whileInView={{ filter: "blur(0px" }}
            viewport={{ once: true }}
          />
        ))}
      </section>
      <section id="services" className="w-full py-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-title font-bold w-fit"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            viewport={{ once: true }}
          >
            What we do
          </motion.h1>
          <ul className="mt-9 grid grid-cols-3 gap-10">
            {services.map((service) => (
              <motion.li
                key={service.title}
                className="p-8 border border-[#D1D5DB] rounded-xl drop-shadow"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
              >
                <div className="w-16 aspect-square flex justify-center items-center rounded-full bg-black1">
                  <img
                    src={service.icon}
                    alt="ui"
                    className="w-6 aspect-square"
                  />
                </div>
                <h2 className="text-subtitle mt-5 font-bold">
                  {service.title}
                </h2>
                <p className="text-2xl mt-2 plus-jakarta-sans">
                  {service.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      {/* Start of About Section */}
      <section
        id="about"
        className="w-full bg-black1 py-12 text-center text-white"
      >
        <h1 className="text-title font-bold">About us</h1>
        <h5 className="text-2xl font-medium mt-5">
          Discover Our Story: Unveiling the Heartbeat Behind Arsa Studio
        </h5>
        <Link
          to="/about"
          className="text-xl mt-10 px-20 py-3 bg-[#2C3147] hover:bg-[#414969] transition-all duration-200 w-fit block mx-auto rounded-full group"
        >
          <span className="group-hover:scale-125 block transition-all duration-200">
            See more
          </span>
        </Link>
        <div className="mt-20 flex gap-14 justify-center">
          {aboutImages.map((image, index) => (
            <motion.div
              initial={{
                filter: "blur(30px)",
              }}
              whileInView={{
                filter: "blur(0px)",
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className={clsx(
                "w-[300px] h-[375px] rounded-xl overflow-hidden group",
                index === 0 || index % 2 === 0 ? "mt-14" : "mt-0"
              )}
              key={image.alt}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section
        id="selected_works"
        className="w-full py-24 max-w-7xl mx-auto overflow-hidden"
      >
        <div>
          <h1 className="text-title font-bold">Our Works</h1>
        </div>
        <p className="text-2xl font-medium mt-5 max-w-4xl">
          Dive into our portfolio, witness the fusion of creativity and
          craftsmanship in every project. Explore Our Works and be inspired to
          redefine possibilities.
        </p>
        <Link
          to="/works"
          className="text-xl mt-10 px-20 py-3 bg-[#2C3147] w-fit block rounded-full text-white"
        >
          See more
        </Link>
        <div className="mt-20 flex gap-6 justify-center">
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
      <section
        id="testimoni"
        className="w-full py-24 max-w-7xl mx-auto text-center"
      >
        <h1 className="text-title font-bold">Our Happy Clients</h1>
        <p className="text-2xl font-medium mt-5 max-w-6xl">
          Amplifying Success through Authentic Stories. Hear from Our Clients
          How Our Software Solutions Propel Their Businesses Forward!
        </p>
        <div className="mt-16 flex gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-w-[335px] w-full min-h-[270px] rounded-xl bg-white border border-[#D1D5DB] px-8 py-6 text-left"
            >
              <img src="/images/quote.svg" alt="quote" className="w-6 h-6" />
              <h4 className="text-lg mt-3">{testimonial.text}</h4>
              <div className="mt-4 flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div className="grow">
                  <h5 className="text-[15px] font-bold">{testimonial.name}</h5>
                  <p className="text-sm">{testimonial.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
