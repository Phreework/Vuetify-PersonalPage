import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        iconfont:'md',
        themes: {
            light: {
                primary: '#006064',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70'
            }
        }
    }
});
