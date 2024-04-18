/* eslint-disable react/no-unescaped-entities */
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bayon&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="urbanist">
        <nav className="flex justify-between items-center bg-white py-8 px-28 drop-shadow">
          <Link to="/" className="text-3xl font-bold">
            ngodinghouse
          </Link>
          <ul className="flex items-center gap-5 text-xl font-medium">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Works</Link>
            </li>
            <li>
              <Link to="/about">Client</Link>
            </li>
          </ul>
          <button className="text-2xl w-fit py-3 px-12 rounded-full bg-[#2C3147] text-white font-medium">
            Contact
          </button>
        </nav>
        <main className="w-full min-h-[40vh]">{children}</main>
        <footer className="w-full pt-12 px-28 bg-black1 text-white relative overflow-hidden">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold w-full max-w-3xl leading-[57px]">
              Empowering Innovation, Building Tomorrow: Your Trusted Software
              House.
            </h1>
            <div className="w-full flex flex-col items-end">
              <h3 className="text-4xl font-bold">Ready To Talk?</h3>
              <p className="mt-4 text-2xl">
                We've got a good feeling about this
              </p>
              <button className="text-2xl w-fit py-3 px-12 rounded-full bg-[#2C3147] text-white font-medium mt-5">
                Start a Project
              </button>
            </div>
          </div>
          <h1 className="absolute -bottom-4 text-[200px] left-1/2 -translate-x-1/2 font-bold">
            ngoding<span className="text-[#2C3147asdasd]">house</span>
          </h1>
          <div className="mt-56 bg-black1 border-t border-t-white pt-7 pb-12 flex justify-between items-center relative z-20">
            <div className="flex gap-10 text-base">
              <Link to="/" className="">
                Privacy Policy
              </Link>
              <Link to="/" className="">
                Terms & Condition
              </Link>
            </div>
            <h5>© 2024 ngodinghouse, All Rights Reserved.</h5>
            <div className="flex gap-4 items-center">
              <img src="/images/instagram.svg" alt="facebook" className="h-6" />
              <img src="/images/linkedin.svg" alt="linkedin" className="h-6" />
              <img src="/images/mail.svg" alt="linkedin" className="h-6" />
              <img src="/images/github.svg" alt="linkedin" className="h-6" />
              <img src="/images/dribble.svg" alt="linkedin" className="h-6" />
              <img src="/images/x.svg" alt="twitter" className="h-6" />
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
