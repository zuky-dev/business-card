import { VueCookieNext } from 'vue-cookie-next';

const cookie = () => {
    const data = {
        expire: Infinity
    };

    VueCookieNext.config(data);
    return VueCookieNext;
};

export default cookie;