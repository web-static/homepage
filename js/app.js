function init_elements() {
  // 加载项目列表
  fetch("/json/projectlist.json")
  .then(resp => resp.json())
  .then(obj=>{
    var s = '';
    obj.project_items.forEach(elem => s+=`<div class="col-lg-4 col-md-4 col-sm-6"><div class="product-wrap" ><div class="img-wrap"><img src="https://img-${elem.imgtype}-cdn.iisjy.cn/${elem.imghash}.${elem.imgtype}" alt="${elem.name}" /><div class="product-overlay"><a target="_blank" href="${elem.link}" class="icon-wrap"><i class="ion ion-android-arrow-forward"></i></a></div></div></div ></div >`);
    document.getElementById("proj_list").innerHTML = `<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-list"></i></div><div class="sec-title">Projects</div></div ></div >${s}<div class="col-12"><div class="see-more" ><a target="_blank" href="#" class="btn btn-primary main-btn bg-main">View More</a></div ></div >`;
  });
  // 加载近期博文
  fetch("/json/bloglist.json")
  .then(resp => resp.json())
  .then(obj=>{
    var s = '';
    obj.blog_pages.forEach(elem => s+=`<div class="col-lg-4 col-md-6 col-sm-6" ><div class="blog-post"><div class="post-img"><img class="img-fluid" src="https://img-${elem.imgtype}-cdn.iisjy.cn/${elem.imghash}.${elem.imgtype}" alt="${elem.title}"></div><div class="blog-details"><a target="_blank" href="${elem.link}"><h4 class="media-heading">${elem.title}</h4></a><p>${elem.summary}</p><a target="_blank" href="${elem.link}" class="blog-post-link">阅读全文 <i class="fa fa-angle-double-right"></i></a></div></div></div>`);
    document.getElementById("blog_list").innerHTML = `<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-list"></i></div><div class="sec-title">Recent Blog Post</div></div ></div >${s}<div class="col-12"><div class="see-more" ><a href="" class="btn btn-primary main-btn bg-main">View All Post</a></div ></div >`;
  });
  // 加载联系方式
  fetch("/json/contact.json")
  .then(resp => resp.json())
  .then(obj=>{
    var s  = '';
    obj.cont_items.forEach(elem => s+= `<div class="col-lg-6 col-sm-12"><div class="feature-wrap" ><div class="media"><div class="align-self-center mr-4"><div class="icon-wrap"><i class="ion ion-cube"></i></div></div><div class="media-body"><a target="_blank" href="${elem.link}">${elem.name}</a></div></div></div ></div >`);
    document.getElementById("cont_list").innerHTML = `<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-settings"></i></div><div class="sec-title">Social Media</div></div ></div >${s}`;
  });

  fetch("/utility/header.html")
  .then(resp => resp.text())
  .then(html => document.getElementById("header").innerHTML=html)

  fetch("https://static.iisjy.cn/html/utility/footer.html")
  .then(resp => resp.text())
  .then(html => document.getElementById("footer").innerHTML=html)
}