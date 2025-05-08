import { vitePlugin as remix, cloudflareDevProxyVitePlugin as remixCloudflareDevProxy } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), remixCloudflareDevProxy()],
});
