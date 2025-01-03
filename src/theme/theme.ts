import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html body": {
      // Default text color (Charcoal)
      color: "#232323",
      fontFamily: "sans-serif",
    },
  },
  theme: {
    breakpoints: {
      base: "0px",
      lg: "1280px",
    },
    tokens: {
      colors: {
        sand: {
          50: {
            value: "#FBFAF8",
          },
        },
      },
    },
    // TODO: add better reuse pattern for font styles
    textStyles: defineTextStyles({
      sm: {
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "14px",
        },
      },
      md: {
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
        },
      },
      lg: {
        description: "Heading content",
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
      xl: {
        description: "Heading content (large)",
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "24px",
        },
      },
      "3xl": {
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "44px",
          lineHeight: "48px",
        },
      },
    }),
  },
});

export const system = createSystem(defaultConfig, config);
