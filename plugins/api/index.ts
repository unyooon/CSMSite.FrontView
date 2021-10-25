import { Context } from '@nuxt/types';

import { repositoryFactory } from '~/repository/index';

export default ({ $axios, app }: Context, inject: (name: string, value: any) => void) => {
  inject('api', repositoryFactory($axios, ''));
};