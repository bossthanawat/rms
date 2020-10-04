import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@/styles/overrides.sass'

Vue.use(Vuetify);

const theme = {
  primary: '#00ACC1',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#01579B',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
