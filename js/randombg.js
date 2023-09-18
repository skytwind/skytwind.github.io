//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://pic-bed-2rw.pages.dev/img/Kiana.png)",
    "url(https://pic-bed-2rw.pages.dev/img/Yuru_Camp.png)",
    "url(https://pic-bed-2rw.pages.dev/img/Asteriod%20in%20love_1.webp)",
    "url(https://pic-bed-2rw.pages.dev/img/Asteriod%20in%20love_2.webp)",
    "url(https://pic-bed-2rw.pages.dev/img/Asteriod%20in%20love_3.webp)",
    "url(https://pic-bed-2rw.pages.dev/img/plastic_memories.png)",
    "url(https://pic-bed-2rw.pages.dev/img/Yuru_Camp%202.png)",
    "url(https://pic-bed-2rw.pages.dev/img/Erio.jpg)",
    "url(https://pic-bed-2rw.pages.dev/img/Shiroko.png)",
    "url(https://pic-bed-2rw.pages.dev/img/hosino.png)",
    "url(https://pic-bed-2rw.pages.dev/img/Arisu.jpg)"
    // "url(https://pic-bed-2rw.pages.dev/img/flamescion.png)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(/img/bg1.JPG)",
    "url(/img/bg2.jpg)",
    "url(/img/bg3.jpg)",
    "url(/img/bg4.jpg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];