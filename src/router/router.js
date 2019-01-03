import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const myMusic = r => require.ensure([], () => r(require('../pages/myMusic/myMusic')), 'myMusic')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/myMusic',
      component: myMusic
    },
  ]
}]
