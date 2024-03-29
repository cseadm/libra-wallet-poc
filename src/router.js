import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Send from './views/Send'
import Receive from './views/Receive'
import Transactions from './views/Transactions'
import ScanQR from './views/ScanQR'
import Stats from './views/Stats'
import PaymentSuccess from './views/PaymentSuccess'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wallet',
      component: Home
    },
    {
      path: '/send',
      name: 'Send',
      component: Send
    },
    {
      path: '/receive',
      name: 'Receive',
      component: Receive
    },
    {
      path: '/scanQR',
      name: 'ScanQR',
      component: ScanQR
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/paymentSuccess',
      name: 'PaymentSuccess',
      component: PaymentSuccess
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      beforeEnter () { location.href = 'https://medium.com/kulapofficial/the-first-libra-wallet-poc-building-your-own-wallet-and-apis-3cb578c0bd52' }
    }
  ]
})
