import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, loadEnv, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  const envDefine: Record<string, string> = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const plugins = [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  if (command === "build") {
    const preset =
      process.env.NITRO_PRESET ??
      (process.env.VERCEL ? "vercel" : "cloudflare-module");
    const isVercel = preset === "vercel";

    plugins.splice(
      plugins.length - 1,
      0,
      nitro({
        preset,
        // Cloudflare-only paths. Vercel needs the default `.vercel/output`
        // layout with `functions/__server.func` — custom output breaks routing.
        ...(isVercel
          ? {}
          : {
              output: {
                dir: "dist",
                serverDir: "dist/server",
                publicDir: "dist/client",
              },
              cloudflare: { nodeCompat: true, deployConfig: true },
            }),
      }),
    );
  }

  const config = {
    define: envDefine,
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
  };

  return mergeConfig(config, {
    server: {
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 1000,
          pollInterval: 100,
        },
      },
    },
  });
});
