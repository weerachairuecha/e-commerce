import { createTheme } from "@mui/material/styles";
import Components from "./components";
import Palette from './palette'

const theme = createTheme({
  palette: Palette,
  components: Components,
});

export default theme;
