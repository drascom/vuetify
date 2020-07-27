
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
        component: () => import('@/views/customers/List'),
        name: 'CustomerList',
        meta: { title: 'route.customerPage.list' },
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/customers/Detail'),
        name: 'CustomerDetail',
        meta: { title: 'route.customerPage.detail' },
      },
      {
        path: 'detail/visit/:id',
        component: () => import('@/views/customers/VisitAdmin'),
        name: 'VisitDetail',
        props:true,
        meta: { title: 'route.customerPage.visitdetail' },
      },
      {
        path: 'gallery/:id',
        component: () => import('@/views/customers/Gallery'),
        name: 'Gallery',
        meta: { title: 'route.customerPage.gallery' },
      },
    ],
  },
]
export default customerRouter;
