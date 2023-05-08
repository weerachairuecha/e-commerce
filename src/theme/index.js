import { createTheme } from "@mui/material/styles";
import Components from "./components";
import Palette from './palette'

const theme = createTheme({
  palette: Palette,
  components: Components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }
});

export default theme;
