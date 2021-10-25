import { accessorType } from '~/store';
import { EnvironmentsVariables } from '~/plugins/environments';
import { repository } from '~/repository';

declare module 'vue/types/vue' {
  interface Vue {
    $environments: EnvironmentsVariables;
    $accessor: typeof accessorType;
    $api: repository;
    $copyText: (message: string, el: Element) => void;
  }
}

declare module '@nuxt/types' {
  interface Vue {
    $environments: EnvironmentsVariables;
    $accessor: typeof accessorType;
    $api: repository;
    $copyText: (message: string, el: Element) => void;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $environments: EnvironmentsVariables;
    $accessor: typeof accessorType;
    $api: repository;
    $copyText: (message: string, el: Element) => void;
  }
}