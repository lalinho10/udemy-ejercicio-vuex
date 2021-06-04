import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#9CD9D9',
            secondary: '#590B0B',
            accent: '#6C8C8C',
          },
        },
      },
});
