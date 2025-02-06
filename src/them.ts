import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const theme = extendTheme({
  config,
  colors: {
    yellow: {
      50: "#FFFAEB",
      500: "#FFB723",
      600: "#F48224",
      700: "#C25A0E",
      800: "#8F3A0C",
      900: "#5D270A",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        // bgImage: "linear-gradient(-90deg,rgb(42, 48, 61) 0%,rgb(52, 49, 24) 100%)",
        backgroundImage:
          "url('https://cbc-openedx-profile-pictures-bucket.s3.us-east-1.amazonaws.com/Them/1000_F_543505614_AUsBjdsCAAWli1iS6pjmdRTxM7tEGOan.jpg')",
        // bgGradient: "linear( -90deg,transparent,yellow.400)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",

        //    backgroundAttachment: "fixed",

        // overflow: "hidden",
      },
    },
  },
});

export default theme;
