import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { Context } from '@nuxt/types';

// eslint-disable-next-line import/no-mutable-exports
export let axios: NuxtAxiosInstance;

export default ({ $axios, app }: Context) => {
  $axios.defaults.baseURL = '';

  $axios.onRequest(() => { });

  $axios.onResponse(() => { });

  $axios.onError(() => { });

  axios = $axios;
};