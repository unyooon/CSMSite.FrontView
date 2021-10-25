import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { axios } from '~/plugins/api/axios';

export interface repository {

}

export const repositoryFactory = ($axios: NuxtAxiosInstance = axios, baseUrl: string = ''): repository => {
  return {

  };
};