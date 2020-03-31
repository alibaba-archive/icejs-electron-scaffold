import Layout from '@/layouts';
import Home from '@/pages/Home';
import Settings from '@/pages/Settings';

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/Settings',
        exact: true,
        component: Settings,
      }
    ]
  }
];
