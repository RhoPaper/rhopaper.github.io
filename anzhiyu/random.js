var posts=["2024/10/01/Tebi-io免费s3对象储存（可托管静态网站）/","2024/10/20/makemepulse/","2024/09/28/从午夜搞到中午，终于是把博客搭起来了！/","2024/10/13/免费网站托管服务推荐/","2024/09/28/hello-world/","2024/09/28/本博客框架还在更新/","2024/09/28/测试文章，不必理会/","2024/09/28/关于随手做的无聊视频火了这件事/","2024/10/04/全网免费图床推荐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"凪Ze","link":"https://wyz.rhopaper.top/","avatar":"https://wyz.rhopaper.top/images/avatar.jpg","descr":"凪Zeの个人主页","color":"vip","tag":"牢底"},{"name":"天启","link":"https://www.tianqi.eu.org/","avatar":"https://s1.imagehub.cc/images/2024/10/04/ed22d1a1ee9d2b04dfd9d598a7b0cefb.png","descr":"天启·一个默默无闻的服务器","color":"vip","tag":"服务器"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://s1.imagehub.cc/images/2024/10/07/21db61706780f5b2e6f6aec511fbdae0.jpg","descr":"虹墨空间站","siteshot":"https://s1.imagehub.cc/images/2024/10/07/ae864cf21444dc2b4e684ba6881f8caf.webp"},{"name":"佳凌雾杨","link":"https://project.chukogals.top/","avatar":"https://s1.imagehub.cc/images/2024/10/13/3fc546b54240c514da97ae903c42b767.jpg","descr":"中古美少女博客","siteshot":"https://s1.imagehub.cc/images/2024/10/07/018b49e4a8b7cd681bdd7125bc7e8451.webp"},{"name":"Haoyu的博客","link":"https://g-haoyu.top/","avatar":"https://s1.imagehub.cc/images/2024/10/13/3068fa1fdef22c8c4a1765b74cb14493.png","descr":"恭喜，你发现了宝藏","siteshot":"https://s1.imagehub.cc/images/2024/10/13/c509b354ff2986a844bd089381c8a4cc.webp"},{"name":"喵喵 の 小窝","link":"https://blog.meow.ink/","avatar":"https://s1.imagehub.cc/images/2024/10/13/30286920a1770f7121e0b9346dd1b5e5.jpg","descr":"フランドール·スカーレット 赛高！","siteshot":"https://s1.imagehub.cc/images/2024/10/13/6699ef674684213a9a11c39a410b5a71.webp"},{"name":"泠泫凝的异次元空间","link":"https://lxnchan.cn","avatar":"https://lxnchan.cn/assets/logo-v2.webp","descr":"#Linux #有趣的技术 #前端 #运维 #网络","siteshot":"https://s1.imagehub.cc/images/2024/10/13/cbd64eb6341e055ecaf4b72b20809ea7.webp"},{"name":"晚夜的个人博客","link":"https://www.iczrx.cn","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1463656527&spec=640","descr":"做好量变的准备，促进事物的质变。","siteshot":"https://s1.imagehub.cc/images/2024/10/20/18a5585fc5b831922b645890041db092.jpeg"},{"name":"Hexo","link":"https://hexo.io","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };