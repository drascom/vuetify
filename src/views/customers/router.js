
import Layout from '@/views/layout/TheLayout.vue';

const customerRouter = [
  {
    path: '/customers',
    component: Layout,
    redirect: '/customers',
    name: 'Customers',
    meta: {
      title: 'route.customers',
      icon: 'mdi-view-module',
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/customers/List.vue'),
        name: 'CustomerList',
        meta: { title: 'route.customerPage.list' },
      },
      {
        path: 'detail',
        component: () => import('@/views/customers/Detail'),
        name: 'CustomerDetail',
        meta: { title: 'route.customerPage.detail' },
      },
    ],
  },
]
export default customerRouter;
