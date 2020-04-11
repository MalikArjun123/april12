export const environment = {
  production: true,
  firebase: {
  //   apiKey: "AIzaSyAiA7pykt9x9l6KQ246Q3s3sXLx2Uamn6E",
  //   authDomain: "loginsample-36a9f.firebaseapp.com",
  //   databaseURL: "https://loginsample-36a9f.firebaseio.com",
  //   projectId: "loginsample-36a9f",
  //   storageBucket: "loginsample-36a9f.appspot.com",
  //   messagingSenderId: "1059478205299",
  //   appId: "1:1059478205299:web:b0cf40d13ea20225f98b06",
  //   measurementId: "G-DZD9M4GXV2"
  apiKey: "AIzaSyA6b2EGu1lIUSVUU0a4sj-mWhLbaTxxKdI",
    authDomain: "traper-746e6.firebaseapp.com",
    databaseURL: "https://traper-746e6.firebaseio.com",
    projectId: "traper-746e6",
    storageBucket: "traper-746e6.appspot.com",
    messagingSenderId: "1003183421991",
    appId: "1:1003183421991:web:540adf94e99211b328ec02",
    measurementId: "G-HL4XVLK2WZ"
  },
  APP_SLIDES: [
    { title: 'Welcome to TRADE11', imageUrl: 'assets/img/ica-slidebox-img-1.png', slideDesc: 'A platform where people will invest in traders expecting profit based on their performance', slideBg: '#1e90ff' },
    { title: 'How It Works??', imageUrl: 'assets/img/ica-slidebox-img-2.png', slideDesc: 'Choose Day-Choose Trader-Invest', slideBg: '#f28131' },
    { title: 'DAY TRADING', imageUrl: 'assets/img/ica-slidebox-img-3.png', slideDesc: 'DAY TRADING is where hedge funds trade stocks in market using money from investors.', slideBg: '#9f5afd' },
    // { title: 'READY to TRADE', imageUrl: 'assets/img/ica-slidebox-img-4.png', slideDesc: '', slideBg: '#2ecc71' }
  ],
  SIDEMENU_LAYOUTS: [
    {
      title: 'Home',
      icon: 'home',
      url: 'tab1',
      active: true
    },
    {
      title: 'My Wallet',
      icon: 'wallet'
    },
    {
      title: 'History',
      icon: 'time'
    },
    {
      title: 'Notif',
      icon: 'notifications'
    },
    {
      title: 'Invite',
      icon: 'gift'
    },
    {
      title: 'Settings',
      icon: 'settings'
    },
    // {
    //   title: 'Logout',
    //   icon: 'log-out'
    // },
  ],
  STARTUP_SIDEMENU: [
    {
      title: 'What is Trade11??', url: null, icon: 'logo-wordpress',
      children: [
        { title: 'Blogs', url: '/blogs', icon: 'list' },
        { title: 'Single Blog', url: '/blogpage', icon: 'document', disabled: true },
      ]
    },
    {
      title: 'How to Invest??', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Whom to Invest??', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'How to withdraw my money???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Will i make money???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Can i transfer my money to another trader???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'How much does the company charge per lot???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'what is the probability that i can make money???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'How to contact customer care???', url: null, icon: 'apps',
      children: [
        { title: 'Tinder', url: '/tinder-cards', icon: 'heart', color: 'red' },
        { title: 'Netflix', url: '/netflix', icon: 'film' }
      ]
    },
    {
      title: 'Addons', url: null, icon: 'cog',
      children: [
        { title: 'Globalization', url: '/translate', icon: 'school' },
        { title: 'List reordering', url: '/reorder', icon: 'menu' },
        { title: 'Pull to refresh', url: '/refresh', icon: 'refresh' },
        { title: 'Infinite Scroll', url: '/infinite', icon: 'infinite' },
        { title: 'Custom Fonts', url: '/customfonts', icon: 'school' },
        { title: 'Content Loader', url: '/content-loader', icon: 'refresh-circle' },
        { title: 'Content Loader 2', url: '/content-loader2', icon: 'logo-ionic' },
        { title: 'Date Time Pickers', url: '/datetimepickers', icon: 'calendar' },
        { title: 'Settings', url: '/settings', icon: 'cog' }
      ]
    },

  ],
};
