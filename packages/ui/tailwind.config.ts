import { nextui } from "@nextui-org/react";
import sharedConfig from "@repo/tailwind-config/tailwind.config";

const config = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      ],
      plugins: [nextui()],
    },
  ],
};

export default config;
