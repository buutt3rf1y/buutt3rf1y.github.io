<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://img.dkdun.cn/v1/2024/12/83e0272660805f52.png");
         document.title = '(｡･ω･｡)泥嚎';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://img.dkdun.cn/v1/2024/12/83e0272660805f52.png");
         document.title = 'o(╥﹏╥)o别走qwq';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 10000);
     }
 });