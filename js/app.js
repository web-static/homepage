const getBlogTag = (t_title, t_summary, t_img, t_link)=>`<div class="col-lg-4 col-md-6 col-sm-6" ><div class="blog-post"><div class="post-img"><img class="img-fluid" src="${t_img}" alt="image"></div><div class="blog-details"><a target="_blank" href="${t_link}"><h4 class="media-heading">${t_title}</h4></a><p>${t_summary}</p><a target="_blank" href="${t_link}" class="blog-post-link">阅读全文 <i class="fa fa-angle-double-right"></i></a></div></div></div>`;
const getContactTag =(t_name, t_link)=>`<div class="col-lg-6 col-sm-12"><div class="feature-wrap" ><div class="media"><div class="align-self-center mr-4"><div class="icon-wrap"><i class="ion ion-cube"></i></div></div><div class="media-body"><a target="_blank" href="${t_link}">${t_name}</a></div></div></div ></div >`;
const getNavbarTag =(t_link, t_title)=>`<li class="nav-item"><a class="nav-link" href = "${t_link}" >${t_title}</a ></li >`;
const getProjectTag = (t_name, t_imgpath, t_link) => `<div class="col-lg-4 col-md-4 col-sm-6"><div class="product-wrap" ><div class="img-wrap"><img src="${t_imgpath}" alt="${t_name}" /><div class="product-overlay"><a target="_blank" href="${t_link}" class="icon-wrap"><i class="ion ion-android-arrow-forward"></i></a></div></div></div ></div >`;
  
function getNavbar() {
  var obj = null;
  obj = get_Ajax_json_obj("json/navbar.json");
  if (obj == null) return;

  var s = '';

  for (var i = 0; i < obj.nav_items.length; i++) {
      s += getNavbarTag(obj.nav_items[i].link, obj.nav_items[i].title);
  }
  document.getElementById("navi_list").innerHTML = s;
}
function getBlog() {
  var obj = null;
  obj = get_Ajax_json_obj("json/bloglist.json");
  if (obj == null) return;

  const l = '<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-list"></i></div><div class="sec-title">Recent Blog Post</div></div ></div > ';
  const r = '<div class="col-12"><div class="see-more" ><a href="" class="btn btn-primary main-btn bg-main">View All Post</a></div ></div >';
  var s = '';

  for (var i = 0; i < obj.blog_pages.length; i++) {
    let tpath = `https://img-${obj.blog_pages[i].imgtype}-cdn.iisjy.cn/${obj.blog_pages[i].imghash}.${obj.blog_pages[i].imgtype}`;
    s += getBlogTag(obj.blog_pages[i].title, obj.blog_pages[i].summary, tpath, obj.blog_pages[i].link);
    tpath = null;
  }
  document.getElementById("blog_list").innerHTML = l + s + r;
}
function getContact() {
  var obj = null;
  obj = get_Ajax_json_obj("json/contact.json");
  if (obj == null) return;

  const l = '<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-settings"></i></div><div class="sec-title">Social Media</div></div ></div > ';
  var s = '';

  for (var i = 0; i < obj.cont_items.length; i++) {
      s += getContactTag(obj.cont_items[i].name, obj.cont_items[i].link);
  }
  document.getElementById("cont_list").innerHTML = l + s;
}
function getProject() {
  var obj = null;
  obj = get_Ajax_json_obj("json/projectlist.json");
  if (obj == null) return;

  const l = '<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-list"></i></div><div class="sec-title">Projects</div></div ></div >';
  var s = '';
  const r = '<div class="col-12"><div class="see-more" ><a target="_blank" href="#" class="btn btn-primary main-btn bg-main">View More</a></div ></div >';
  for (var i = 0; i < obj.project_items.length; i++) {
      let tpath = `https://img-${obj.project_items[i].imgtype}-cdn.iisjy.cn/${obj.project_items[i].imghash}.${obj.project_items[i].imgtype}`;
      s += getProjectTag(obj.project_items[i].name, tpath, obj.project_items[i].link);
      tpath = null;
  }
  document.getElementById("proj_list").innerHTML = l + s + r;
}
function getProject2(){
  fetch("/json/projectlist.json")
  .then(resp => resp.json())
  .then(obj=>{
    var s = '<div class="col-12"><div class="section-header" ><div class="sec-icon"><i class="ion ion-android-list"></i></div><div class="sec-title">Projects</div></div ></div >';
    const r = '<div class="col-12"><div class="see-more" ><a target="_blank" href="#" class="btn btn-primary main-btn bg-main">View More</a></div ></div >';
    obj.project_items.forEach(elem => s+=`<div class="col-lg-4 col-md-4 col-sm-6"><div class="product-wrap" ><div class="img-wrap"><img src="https://img-${elem.imgtype}-cdn.iisjy.cn/${elem.imghash}.${elem.imgtype}" alt="${elem.name}" /><div class="product-overlay"><a target="_blank" href="${elem.link}" class="icon-wrap"><i class="ion ion-android-arrow-forward"></i></a></div></div></div ></div >`);
    document.getElementById("proj_list").innerHTML = (s + r);
  })
}
function init_elements() {
  getProject2();
  getBlog();
  getContact();
}
function get_Ajax_json_obj(url) {
  var xmlhttp = null;
  var text = null;
  var obj = null;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send(null);
  text = xmlhttp.responseText;
  obj = JSON.parse(text);
  return obj;
}
