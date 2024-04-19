export default function Contact() {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-3 gap-32 py-24">
        <h1 className="text-title font-bold">Let's Talk</h1>
        <div className="col-span-2">
          <h3 className="text-2xl font-medium">
            But first, you need you to complete this form. Once you've done, we
            will contact you to discuss more.
          </h3>
          <form className="mt-10 grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Name"
              className="border border-black1 px-5 py-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black1 px-5 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-black1 px-5 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-black1 px-5 py-3 w-full"
            />
            <textarea
              placeholder="Message"
              className="border border-black1 px-5 py-3 w-full col-span-2"
            />
            <button className="text-2xl w-fit py-3 px-12 rounded-full bg-[#2C3147] text-white font-medium">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
