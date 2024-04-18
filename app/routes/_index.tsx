/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

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
        className="w-full min-h-[80vh] flex flex-col justify-center relative overflow-x-hidden">
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
          }}>
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
          className="w-[300px] h-[400px] rounded-2xl bg-gray-500 absolute"
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
          }}></motion.div>
        <motion.div
          className="w-[300px] h-[400px] rounded-2xl bg-gray-500 absolute right-0"
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
          }}></motion.div>
      </section>
      <section
        id="partner"
        className="w-full bg-black1 py-6 flex justify-center items-center gap-10">
        <motion.img
          src="/images/klarna_dummy.webp"
          alt="klarna"
          className="h-10"
          initial={{ filter: "blur(30px)" }}
          whileInView={{ filter: "blur(0px" }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/google_dummy.webp"
          alt="google"
          className="h-10"
          initial={{ filter: "blur(30px)" }}
          whileInView={{ filter: "blur(0px" }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/airbnb_dummy.webp"
          alt="airbnb"
          className="h-10"
          initial={{ filter: "blur(30px)" }}
          whileInView={{ filter: "blur(0px" }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/duolingo_dummy.webp"
          alt="duolingo"
          className="h-10"
          initial={{ filter: "blur(30px)" }}
          whileInView={{ filter: "blur(0px" }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/bumble_dummy.webp"
          alt="bumble"
          className="h-10"
          initial={{ filter: "blur(30px)" }}
          whileInView={{ filter: "blur(0px" }}
          viewport={{ once: true }}
        />
      </section>
      <section id="services" className="w-full py-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-title font-bold w-fit"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            viewport={{ once: true }}>
            What we do
          </motion.h1>
          <ul className="mt-9 grid grid-cols-3 gap-10">
            <motion.li
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
              }}>
              <div className="w-16 aspect-square flex justify-center items-center rounded-full bg-black1">
                <img
                  src="/images/ui_icon.svg"
                  alt="ui"
                  className="w-6 aspect-square"
                />
              </div>
              <h2 className="text-subtitle mt-5 font-bold">UI/UX Design</h2>
              <p className="text-2xl mt-2 plus-jakarta-sans">
                Elevate user experiences with Arsa Studio's cutting-edge UI/UX
                solutions.
              </p>
            </motion.li>
            <motion.li
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
                  delay: 0.4,
                  duration: 0.5,
                },
              }}>
              <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
                <img
                  src="/images/mobile_icon.svg"
                  alt="ui"
                  className="w-6 aspect-square"
                />
              </div>
              <h2 className="text-subtitle mt-5 font-bold">
                Mobile Development
              </h2>
              <p className="text-2xl mt-2 plus-jakarta-sans">
                Revolutionize your digital presence with Arsa Studio's
                innovative apps. Experience excellence in every tap!
              </p>
            </motion.li>
            <motion.li
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
                  delay: 0.6,
                  duration: 0.5,
                },
              }}>
              <div className="w-16 aspect-square rounded-full bg-black1 flex justify-center items-center">
                <img
                  src="/images/web_icon.svg"
                  alt="ui"
                  className="w-6 aspect-square"
                />
              </div>
              <h2 className="text-subtitle mt-5 font-bold">Web Development</h2>
              <p className="text-2xl mt-2 plus-jakarta-sans">
                Elevate your digital presence with Arsa Studio's bespoke
                websites. Transform your online identity today!
              </p>
            </motion.li>
          </ul>
        </div>
      </section>
      <section
        id="about"
        className="w-full bg-black1 py-12 text-center text-white">
        <h1 className="text-title font-bold">About us</h1>
        <h5 className="text-2xl font-medium mt-5">
          Discover Our Story: Unveiling the Heartbeat Behind Arsa Studio
        </h5>
        <Link
          to="/about"
          className="text-xl mt-10 px-20 py-3 bg-[#2C3147] w-fit block mx-auto rounded-full">
          See more
        </Link>
      </section>
      <section id="selected_works" className="w-full py-24 max-w-7xl mx-auto">
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
          className="text-xl mt-10 px-20 py-3 bg-[#2C3147] w-fit block rounded-full text-white">
          See more
        </Link>
      </section>
      <section
        id="testimoni"
        className="w-full py-24 max-w-7xl mx-auto text-center">
        <h1 className="text-title font-bold">Our Happy Clients</h1>
        <p className="text-2xl font-medium mt-5 max-w-6xl">
          Amplifying Success through Authentic Stories. Hear from Our Clients
          How Our Software Solutions Propel Their Businesses Forward!
        </p>
      </section>
    </>
  );
}
