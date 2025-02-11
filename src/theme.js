import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.actionColor,
    },
    secondary: {
      main: colors.backgroundColor,
    },
    error: {
      main: colors.errorColor,
    },
    warning: {
      main: colors.warningColor,
    },
    info: {
      main: colors.infoColor,
    },
    success: {
      main: colors.successColor,
    },
    background: {
      default: colors.whiteColor,
      board: colors.backgroundColor,
    },
    text: {
      primary: colors.textColor,
      secondary: colors.secondaryTextColor,
      third: colors.thirdTextColor,
    },
    button: {
      hover: colors.hoverActionColor,
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: colors.textColor, // Change the hover border color to black
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.textColor, // Change the focused border color to black
            },
          },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: colors.textColor,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent", // Optional: Avoid background highlight
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.textColor, // Change hover border color for outlined Select
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.textColor, // Change focus border color for outlined Select
          },
        },
      },
    },
  },
});

export default theme;
