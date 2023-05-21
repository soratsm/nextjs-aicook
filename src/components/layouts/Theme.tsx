import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

type Props = {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = (props) => {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688',
        contrastText: '#795548',
      },
      background: {
        default: '#fafaf5',
      },
      text: { primary: '#1c1a10' },
    },
    typography: {
      fontFamily: ['Roboto', '"Noto Sans JP"', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
