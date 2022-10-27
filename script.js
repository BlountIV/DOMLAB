var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  const topMenuEl = document.querySelector('#top-menu');

for(let i = 0; i < menuLinks.length; i++) {
    let a = document.createElement('a');
    a.attributes.href = menuLinks[i].href; 
    a.innerText = menuLinks[i].text; 
    topMenuEl.appendChild(a)
} // was struggling on how to do this, wording for task 3.1 was strangely worded for me to understand

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.className = 'flex-ctr';

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.className = 'flex-around';

let subMenuEl = document.querySelector('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.className = 'flex-around';

subMenuEl.style.position = 'absolute'; 

subMenuEl.style.top = '0'; 

const topMenuLinks = document.querySelector('a');

let showingSubMenu = 'false'; 