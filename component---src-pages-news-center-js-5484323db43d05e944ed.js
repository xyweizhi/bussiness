"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[660],{3660:function(A,e,a){a.r(e),a.d(e,{getServerData:function(){return Q}});for(var t=a(5861),s=(a(1588),a(167)),n=a(7326),i=a(4578),o=(a(5106),a(1051)),d=a(7757),c=a.n(d),r=a(7294),g=a(6125),f=a(6633),w=a.n(f),l=a(9613),p=a(3751),B=a(5529),u=o.Z.Meta,h=[],C=0;C<23;C++)h.push({href:"https://ant.design",title:"ant design part "+C,avatar:"https://joeschmoe.io/api/v1/random",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var E="undefined"!=typeof window,b=function(A){function e(e){var a;return(a=A.call(this,e)||this).state={newsData:[],totalSize:12},a.onItemClick=a.onItemClick.bind((0,n.Z)(a)),a}(0,i.Z)(e,A);var t=e.prototype;return t.componentDidMount=function(){var A=this,e=1;E&&window.location.href.split("?page=").length>1&&(e=parseInt(window.location.href.split("?page=")[1])),w().get("https://www.fastmock.site/mock/3a60302423a5db4ee8b58db290fdcafc/test/all_new_react?page="+e+"&page_size=6").then((function(e){console.log(e.data.data.userInfo),A.setState({newsData:e.data.data.userInfo})})).catch((function(A){console.log(A)})),this.onPageChange=this.onPageChange.bind(this),this.onItemClick=this.onItemClick.bind(this)},t.componentWillUnmount=function(){},t.onPageChange=function(A,e){console.log("this onPageChange = "+A);var a=this;w().get("https://www.fastmock.site/mock/3a60302423a5db4ee8b58db290fdcafc/test/all_new_react?page="+A+"&page_size="+e).then((function(e){console.log(e.data.data.userInfo),a.setState({newsData:e.data.data.userInfo});var t=window.location.href.split("?")[0]+"?page="+A;window.history.pushState({},0,t)})).catch((function(A){console.log(A)}))},t.onItemClick=function(A){console.log("onItemClick:"+A.title)},t.render=function(){var A=this.state,e=A.newsData,t=(A.totalSize,this),n=1;return E&&window.location.href.split("?page=").length>1&&(n=parseInt(window.location.href.split("?page=")[1])),(0,B.tZ)(l.Z,null,(0,B.tZ)(p.Z,{title:"新闻中心"}),(0,B.tZ)("div",null,(0,B.tZ)(g.S,{className:"d-md-block d-none",loading:"lazy",placeholder:"blurred",src:"../assets/images/newscenter.jpg",quality:95,formats:["AUTO","WEBP","AVIF"],alt:"新闻中心",title:"新闻中心",__imageData:a(8383)}),(0,B.tZ)(g.S,{className:"d-md-none d-block",loading:"lazy",placeholder:"blurred",src:"../assets/images/ydd-newscenter.jpg",quality:95,formats:["AUTO","WEBP","AVIF"],alt:"新闻中心",title:"新闻中心",__imageData:a(6185)})),(0,B.tZ)("div",{className:"news container"},(0,B.tZ)(s.ZP,{grid:{gutter:10,xs:1,sm:3,md:3,lg:3,xl:3,xxl:3},itemLayout:"vertical",size:"large",split:!1,pagination:{onChange:function(A,e){console.log(A),t.onPageChange(A,e)},pageSize:6,total:100,hideOnSinglePage:!0,pageSizeOptions:[6],showSizeChanger:!1,defaultCurrent:n},dataSource:e,header:(0,B.tZ)("div",{className:"news__newsTitle"},"新闻中心"),renderItem:function(A,e){return(0,B.tZ)(s.ZP.Item,{key:A.title,className:"news__listItem"},(0,B.tZ)(o.Z,{onClick:function(){console.log("onClick:"+A.id),window.location.href="/bussiness/detail?id="+A.id%10},hoverable:!0,cover:(0,B.tZ)("img",{className:"news__listItemImage",alt:"example",src:A.avatar})},(0,B.tZ)(u,{title:A.showTitle,description:A.description})))}})))},e}(r.Component);function Q(){return I.apply(this,arguments)}function I(){return(I=(0,t.Z)(c().mark((function A(){var e;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch("https://dog.ceo/api/breeds/image/random");case 3:if((e=A.sent).ok){A.next=6;break}throw new Error("Response failed");case 6:return A.next=8,e.json();case 8:return A.t0=A.sent,A.abrupt("return",{props:A.t0});case 12:return A.prev=12,A.t1=A.catch(0),A.abrupt("return",{headers:{status:500},props:{}});case 15:case"end":return A.stop()}}),A,null,[[0,12]])})))).apply(this,arguments)}e.default=b},8383:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAFABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAUHCP/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/9oADAMBAAIQAxAAAAHXkUKGU+KuZ//EABkQAAIDAQAAAAAAAAAAAAAAAAIEAQMFBv/aAAgBAQABBQJeoinpGLEspffsWH//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIDIf/aAAgBAwEBPwHXgzayapP/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMABCH/2gAIAQIBAT8B5/XUacZtMEjf/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIAAxETEiExQUL/2gAIAQEABj8CD52AHkdx3pMdVrBrw0HoZSrbu7cz/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAMUEhwf/aAAgBAQABPyEP7Ipep2kgjoPYI+XDY60FXU//2gAMAwEAAgADAAAAEHAv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhUf/aAAgBAwEBPxDZOQecFv/EABoRAQABBQAAAAAAAAAAAAAAAAEAESExQVH/2gAIAQIBAT8QAxipLkhB3yf/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhMUFxsf/aAAgBAQABPxCWq0I9mfWU7SB2E27TBTkpc9Khw2TmSw//2Q=="},"images":{"fallback":{"src":"/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/861e5/newscenter.jpg","srcSet":"/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/23ed5/newscenter.jpg 480w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/4d306/newscenter.jpg 960w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/861e5/newscenter.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/4d251/newscenter.avif 480w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/e1be5/newscenter.avif 960w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/28aeb/newscenter.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/6904d/newscenter.webp 480w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/e9da6/newscenter.webp 960w,\\n/bussiness/static/51203dfa6a6a2d91d59897e6a4e715fa/28312/newscenter.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":500}')},6185:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUI/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAeslndC6GReKX//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEFEyQx/9oACAEBAAEFAtgpWOZs29MTBASqvP/EABYRAQEBAAAAAAAAAAAAAAAAAAADEf/aAAgBAwEBPwGjH//EABYRAAMAAAAAAAAAAAAAAAAAAAMQIf/aAAgBAgEBPwEcX//EACEQAAECBQUBAAAAAAAAAAAAAAIBEQADEBMyITFRYZHB/9oACAEBAAY/ArpuycC8W5EksmcpRJ80jEPVoqKOW/dP/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUZHw/9oACAEBAAE/IRzsNy8MsxvqDau7HqXhS4+sThCvJpgAA4J//9oADAMBAAIAAwAAABBLz//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxALjH//xAAYEQADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAgEBPxB1pUvD/8QAGxABAAIDAQEAAAAAAAAAAAAAAREhADFBUWH/2gAIAQEAAT8QN1kJu6FG2PDBDqKQsIkCXqKxI05KhfesaSGNazfEK+Av2gwU4AA+Z//Z"},"images":{"fallback":{"src":"/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/e6580/ydd-newscenter.jpg","srcSet":"/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/1219d/ydd-newscenter.jpg 197w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/c00a4/ydd-newscenter.jpg 393w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/e6580/ydd-newscenter.jpg 786w","sizes":"(min-width: 786px) 786px, 100vw"},"sources":[{"srcSet":"/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/e7185/ydd-newscenter.avif 197w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/4024c/ydd-newscenter.avif 393w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/90701/ydd-newscenter.avif 786w","type":"image/avif","sizes":"(min-width: 786px) 786px, 100vw"},{"srcSet":"/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/d9a0a/ydd-newscenter.webp 197w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/c4397/ydd-newscenter.webp 393w,\\n/bussiness/static/89df02fe34fd943abd3a3d3e2e67e85f/0dd82/ydd-newscenter.webp 786w","type":"image/webp","sizes":"(min-width: 786px) 786px, 100vw"}]},"width":786,"height":500}')}}]);
//# sourceMappingURL=component---src-pages-news-center-js-5484323db43d05e944ed.js.map