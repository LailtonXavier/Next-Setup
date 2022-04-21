import { theme } from './theme';

type Theme = typeof theme;

// extender o modulo do styled-components, isso para tipar
// o DefaultTheme vai fazer um meger do stilo q temos, para o msm
// -- qnd integramos duas interfaces com o msm nome, elas fazem mergem, integracao
declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
