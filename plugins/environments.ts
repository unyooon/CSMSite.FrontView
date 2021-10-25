import { Context } from '@nuxt/types';
require('dotenv').config();

export interface EnvironmentsVariables {
  [key: string]: any;
  API_BASEURL: string;
}

export const environments: EnvironmentsVariables = {
  API_BASEURL: process.env.API_BASEURL!
};

export default (context: Context, inject: (name: string, value: any) => any) => {
  environments.API_BASEURL = context.$config.API_BASEURL;
  inject('environments', environments);
};