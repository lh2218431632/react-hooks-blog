import Home from '../views/Home/Home.jsx'
import Frame from '../views/Frame/Frame.jsx'
import DevlopmentRecord from '../views/DevlopmentRecord/DevlopmentRecord.jsx';
import Extend from '../views/Extend/Extend.jsx';
import LargeFontEnd from '../views/LargeFontEnd/LargeFontEnd.jsx';
const otherRouter = [
//   {
//     path: '/404',
//     title: '未找到页面',
//     element: <NotFound />
//   },
//   {
//     from: '*',
//     to: '/404'
//   }
];

const pageRouter = [
  {
    path: '/',
    title: '博客首页',
    element: <Home />,
    children: [{
        path:'frame',
        title:'框架',
        element:<Frame/>
    },{
      path:'developmentRecoed',
      title:'开发记录',
      element:<DevlopmentRecord/>
    },{
      path:'largeFontend',
      title:'大前端',
      element:<LargeFontEnd/>
    },
    {
      path:'extend',
      title:'扩展',
      element:<Extend/>
    }

    ]
  },
];
export { otherRouter, pageRouter };
