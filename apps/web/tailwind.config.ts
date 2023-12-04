import { nextui } from "@nextui-org/react";
import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
        "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: "class",
      plugins: [nextui()],
    },
  ],
};

export default config;
