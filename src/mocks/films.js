const Films = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://r15---sn-n8v7znsr.googlevideo.com/videoplayback?expire=1573047809&ei=oXnCXd6SN9jNyQWb7aPwDg&ip=213.208.170.40&id=o-AOZmhn_5kUXkApaAFNlPWheS--tPhYtiNPh2wxA8zues&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=10809216&ratebypass=yes&dur=198.507&lmt=1540716043261806&fvip=15&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgDZXc6e5kvPYRkNSc5jyyeMwLq1GcUEqKc9sskK3zauoCIQDvWg_gtPJ_FIU265nmisMwGETIFi5suhXykKILR3J8LA%3D%3D&redirect_counter=1&cm2rm=sn-o5035oxu-n8vl7e&req_id=1f1e0b3224fca3ee&cms_redirect=yes&mm=29&mn=sn-n8v7znsr&ms=rdu&mt=1573026039&mv=m&mvi=14&pl=24&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgGALJbOaZWCjU7WcbIFlwq69mH6geJ2zca3H4DXk06dgCIAjlOwPdiGWJ1EXuxgiSX7KKR51Us_u8bfzfJzxs04Nn`
  },
  {
    id: 2,
    name: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: `https://r11---sn-n8v7znsz.googlevideo.com/videoplayback?expire=1573048100&ei=xHrCXcLJJcz3yQX60YPQCQ&ip=213.208.170.40&id=o-AJzxwj2gatqxGvxG-yagV9t4gfzM_tpqJr_Ru4XvgQRx&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=10502734&ratebypass=yes&dur=171.688&lmt=1538848905000799&fvip=11&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAL20iFk2VR0pvxD9vzZ6bcLmLT7eaA7WNawu4uAL0IdWAiEA7RzWt_VLU7eybTeXTbn3ge4f4GDzE-X-EzhK6xbsr3U%3D&redirect_counter=1&cm2rm=sn-o5035oxu-n8vl7l&req_id=54cc91116210a3ee&cms_redirect=yes&mm=29&mn=sn-n8v7znsz&ms=rdu&mt=1573026039&mv=m&mvi=10&pl=24&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgOOhaNkn0VdyaddnZk0fxczDSlGw2vK4WUWNQJoZYRGkCIQCEF_26YpZfhDrs-VbmByHB_gEVHe68tpcqznWTc0DxHA==`
  },
  {
    id: 3,
    name: `Macbeth`,
    img: `img/macbeth.jpg`,
    src: `https://r15---sn-n8v7kn7l.googlevideo.com/videoplayback?expire=1573048167&ei=B3vCXcenOMuiyQX-j6TwCA&ip=213.208.170.40&id=o-AGGZX6FIgBJtwjpVn1WrLYuc9dZnR6Dk8wE6BbKzpqEs&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=4489463&ratebypass=yes&dur=100.194&lmt=1445325487687340&fvip=15&fexp=23842630&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAPveqnqQhW7LqHQbu_ZKmX5jt_xHCKzwFxHmqgHoXSqlAiBVgIp0Q6Oa5h_GjemDQTZ55dbYVQKAd68AOWvxW8cFXQ%3D%3D&redirect_counter=1&cm2rm=sn-o5035oxu-n8vl7l&req_id=135ffef38853a3ee&cms_redirect=yes&mm=29&mn=sn-n8v7kn7l&ms=rdu&mt=1573026039&mv=m&mvi=14&pl=24&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgZEQ-s8ywIr7UuFlrHo7EcAscI5xOW4kYnegFVIHhT2UCIQCVjzhZbcVaGLsFOvviKpFxGll2gWgcXpQJ7nyz35FrUg==`
  },
  {
    id: 4,
    name: `Aviator`,
    img: `img/aviator.jpg`,
    src: `https://r15---sn-n8v7kn7l.googlevideo.com/videoplayback?expire=1573048167&ei=B3vCXcenOMuiyQX-j6TwCA&ip=213.208.170.40&id=o-AGGZX6FIgBJtwjpVn1WrLYuc9dZnR6Dk8wE6BbKzpqEs&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=4489463&ratebypass=yes&dur=100.194&lmt=1445325487687340&fvip=15&fexp=23842630&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAPveqnqQhW7LqHQbu_ZKmX5jt_xHCKzwFxHmqgHoXSqlAiBVgIp0Q6Oa5h_GjemDQTZ55dbYVQKAd68AOWvxW8cFXQ%3D%3D&redirect_counter=1&cm2rm=sn-o5035oxu-n8vl7l&req_id=135ffef38853a3ee&cms_redirect=yes&mm=29&mn=sn-n8v7kn7l&ms=rdu&mt=1573026039&mv=m&mvi=14&pl=24&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgZEQ-s8ywIr7UuFlrHo7EcAscI5xOW4kYnegFVIHhT2UCIQCVjzhZbcVaGLsFOvviKpFxGll2gWgcXpQJ7nyz35FrUg==`
  },
  {
    id: 5,
    name: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    id: 6,
    name: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    id: 7,
    name: `Revenant`,
    img: `img/revenant.jpg`
  },
  {
    id: 8,
    name: `Johnny English`,
    img: `img/johnny-english.jpg`
  },
  {
    id: 9,
    name: `Shutter Island`,
    img: `img/shutter-island.jpg`
  },
  {
    id: 10,
    name: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`
  },
  {
    id: 11,
    name: `No Country for Old Men`,
    img: `img/no-country-for-old-men.jpg`
  },
  {
    id: 12,
    name: `Snatch`,
    img: `img/snatch.jpg`
  },
  {
    id: 13,
    name: `Moonrise Kingdom`,
    img: `img/moonrise-kingdom.jpg`
  },
  {
    id: 14,
    name: `Seven Years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`
  },
  {
    id: 15,
    name: `Midnight Special`,
    img: `img/midnight-special.jpg`
  },
  {
    id: 16,
    name: `War of the Worlds`,
    img: `img/war-of-the-worlds.jpg`
  },
  {
    id: 17,
    name: `Dardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`
  },
  {
    id: 18,
    name: `Orlando`,
    img: `img/orlando.jpg`
  },
  {
    id: 19,
    name: `Mindhunter`,
    img: `img/mindhunter.jpg`
  },
  {
    id: 20,
    name: `Midnight Special`,
    img: `img/midnight-special.jpg`
  }
];

export default Films;
