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
      xl: "1920px",
    },
    tokens: {
      colors: {
        sand: {
          50: {
            value: "#FBFAF8",
          },
          200: {
            value: "#F4EFE9",
          },
        },
        charcoal: {
          base: {
            value: "#232323",
          },
          300: {
            value: "#969696",
          },
          400: {
            value: "#6D6D6D",
          },
        },
        sky: {
          base: {
            value: "#84A7FA",
          },
          600: {
            value: "#7998E3",
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
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
      xl: {
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "24px",
        },
      },
      "2xl": {
        value: {
          fontFamily: "sans-serif",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "22px",
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
