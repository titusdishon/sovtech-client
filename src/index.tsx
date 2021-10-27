import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CustomApolloProvider from "./apollo/Apollo";
import { ThemeProvider} from "@mui/material";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <CustomApolloProvider />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
