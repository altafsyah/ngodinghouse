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
      <body>
        <nav className="flex justify-between items-center bg-red-500 py-8 px-28">
          <Link to="/" className="text-3xl">
            ngodinghouse
          </Link>
          <ul className="flex items-center gap-5 text-xl">
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
          <button className="text-2xl">Contact</button>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
