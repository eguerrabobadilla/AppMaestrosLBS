"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4663],{4663:(ie,g,l)=>{l.r(g),l.d(g,{TiempoDeUsoDeDocentesModule:()=>oe});var r=l(603),d=l(6895),u=l(5892),p=l(5698),e=l(4650),x=l(529);let b=(()=>{class o{constructor(t){this.http=t,this.BaseUrlBackendLocal="https://192.168.58.240:5001",this.BaseUrlBackend="https://www.alfalbs.app/ApiOmega",this.ws="api/ReportesPerseus"}getCampus(){return this.http.get(`${this.BaseUrlBackend}/${this.ws}/getCampus`)}getDocentesByName(t,n){return this.http.get(`${this.BaseUrlBackend}/${this.ws}/getDocentesByName/${t}/${n}`)}getTotalDocentesByCampus(t){return this.http.get(`${this.BaseUrlBackend}/${this.ws}/getTotalDocentesByCampus/${t}`)}getLibrosDocente(t){return this.http.get(`${this.BaseUrlBackend}/${this.ws}/getLibrosDocente/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(x.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),m=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["skeleton-resumen-loading"]],decls:3,vars:2,consts:[[1,"container-resumen"],[1,"horas",3,"animated"],[1,"sesiones",3,"animated"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"ion-skeleton-text",1)(2,"ion-skeleton-text",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0))},dependencies:[r.CK],styles:[".container-resumen[_ngcontent-%COMP%]{position:absolute;bottom:21px;left:26px;display:flex;justify-content:space-between;align-items:center;width:212px;height:70px;margin-left:26;margin-right:27px}.horas[_ngcontent-%COMP%]{width:97px;height:70px;border-radius:15px;margin-right:18px}.sesiones[_ngcontent-%COMP%]{width:97px;height:70px;border-radius:15px}"]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["skeleton-grafica-loading"]],decls:10,vars:6,consts:[[1,"grafica"],[1,"space-between"],[2,"display","flex","margin-left","43px"],[1,"linea-uno",3,"animated"],[1,"linea-dos","margin-right-skeleton",2,"margin-top","50px",3,"animated"],[1,"card-skeleton",3,"animated"],[1,"linea-dos","margin-right-skeleton",2,"margin-top","25px",3,"animated"],[1,"grafica-skeleton","margin-right-skeleton",3,"animated"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"ion-skeleton-text",3)(4,"ion-skeleton-text",3),e.qZA(),e._UZ(5,"ion-skeleton-text",4),e.qZA(),e.TgZ(6,"div",1),e._UZ(7,"ion-skeleton-text",5)(8,"ion-skeleton-text",6),e.qZA(),e._UZ(9,"ion-skeleton-text",7),e.qZA()),2&t&&(e.xp6(3),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0),e.xp6(2),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0))},dependencies:[r.CK],styles:[".grafica[_ngcontent-%COMP%]{background:var(--ion-lbs-gris);width:100%;height:546px;border-radius:15px;margin-top:149px;margin-right:32px}.space-between[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.linea-uno[_ngcontent-%COMP%]{width:115px;height:24px;border-radius:12px;margin-bottom:22px;margin-right:13px;margin-top:50px}.linea-dos[_ngcontent-%COMP%]{width:162px;height:24px;border-radius:12px}.card-skeleton[_ngcontent-%COMP%]{width:100%;height:92px;border-radius:14px;margin-left:43px;margin-bottom:18px;margin-right:29px}.margin-right-skeleton[_ngcontent-%COMP%]{margin-right:35px}.grafica-skeleton[_ngcontent-%COMP%]{width:92%;height:306px;border-radius:14px;margin-left:43px}ion-skeleton-text[_ngcontent-%COMP%]{--background: #c4c4c4;--background-rgb: 196, 196, 196}"]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["skeleton-loading"]],decls:10,vars:2,consts:[[1,"row"],[1,"vertical-small"],[1,"informacion"],[1,"circulo-imagen",3,"animated"],[1,"selecciona-libro",3,"animated"],[1,"resumen"],[1,"vertical-large"],[2,"width","32px"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"ion-skeleton-text",3)(4,"ion-skeleton-text",4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"skeleton-resumen-loading"),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"skeleton-grafica-loading"),e.qZA(),e._UZ(9,"div",7),e.qZA()),2&t&&(e.xp6(3),e.Q6J("animated",!0),e.xp6(1),e.Q6J("animated",!0))},dependencies:[r.CK,m,f],styles:[".row[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;flex-direction:row;margin-left:0;width:100%;min-width:1055px;height:100%;z-index:3}.vertical-small[_ngcontent-%COMP%]{width:320px;height:100%;margin:0;padding:0}.vertical-large[_ngcontent-%COMP%]{flex:1;width:100%;height:100%;margin:0;padding:0}.informacion[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:265px;height:472px;border-radius:15px;margin-top:74px;margin-left:22px;margin-right:32px;display:flex;justify-content:center}.resumen[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:265px;height:135px;border-radius:15px;margin-left:22px;margin-right:32px;margin-top:14px}.circulo-imagen[_ngcontent-%COMP%]{width:132px;height:132px;border-radius:50%;margin-top:25px;margin-bottom:6px}.selecciona-libro[_ngcontent-%COMP%]{position:absolute;left:16px;bottom:25px;width:233px;height:165px;border-radius:14px}"],changeDetection:0}),o})();function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",11),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.libroSeleccionado(s.Id))}),e.TgZ(1,"div",12)(2,"span",13),e._uU(3),e.TgZ(4,"span",14),e._uU(5),e.qZA()()()()}if(2&o){const t=i.$implicit;e.xp6(3),e.AsE(" ",t.Nombre," ",t.Grados," - "),e.xp6(2),e.Oqu(t.Escolaridad)}}let D=(()=>{class o{constructor(){this.libroSeleccionadoEvent=new e.vpe}libroSeleccionado(t){this.libroSeleccionadoEvent.emit(t)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["docente-info"]],inputs:{DocenteData:"DocenteData",LibrosDocenteData:"LibrosDocenteData"},outputs:{libroSeleccionadoEvent:"libroSeleccionadoEvent"},decls:16,vars:5,consts:[[2,"text-align","center","margin-top","25px","margin-bottom","6px"],["src","./assets/icon/avatar.svg","alt","img",1,"circulo-imagen"],["src","./assets/icon/checkmark-circle.svg","alt","checkmark-circle",1,"checkmark"],[1,"docente-info"],[2,"text-align","center"],[1,"campus-texto"],[1,"campus-nombre"],[1,"selecciona-libro",2,"background","var(--ion-lbs-negro-gris)"],[1,"text-selecciona-libro"],[1,"container-libros"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"libros"],[1,"nombre-libro"],[1,"escolaridad-libro"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"div",0),e._UZ(2,"img",1)(3,"img",2),e.qZA(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"span",5),e._uU(8," Campus: "),e.qZA(),e.TgZ(9,"span",6),e._uU(10),e.qZA()(),e.TgZ(11,"div",7)(12,"div",8),e._uU(13,"Selecciona el libro."),e.qZA(),e.TgZ(14,"div",9),e.YNc(15,w,6,3,"div",10),e.qZA()()()),2&t&&(e.xp6(5),e.lnq(" ",n.DocenteData.UsuarioNombre," ",n.DocenteData.UsuarioApellidoPaterno," ",n.DocenteData.UsuarioApellidoMaterno," "),e.xp6(5),e.hij(" ",n.DocenteData.CampusNombre," "),e.xp6(5),e.Q6J("ngForOf",n.LibrosDocenteData))},dependencies:[d.sg],styles:[".circulo-imagen[_ngcontent-%COMP%]{width:132px;height:132px;border-radius:50%;margin-top:5px}.docente-info[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:18px;font-family:Volte-Regular;font-weight:700;word-wrap:break-word;margin-left:21px;margin-right:25.78px}.campus-texto[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word}.campus-nombre[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:700;word-wrap:break-word}.selecciona-libro[_ngcontent-%COMP%]{position:absolute;left:16px;bottom:25px;width:233px;height:165px;border-radius:14px}.text-selecciona-libro[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:13px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word;margin-top:11px;margin-bottom:11px}.libros[_ngcontent-%COMP%]{width:205px;height:auto;background:var(--ion-lbs-lila);border-radius:12px;margin-left:14px;margin-bottom:6px;display:flex;text-align:center;justify-content:center;align-items:center;cursor:pointer}.container-libros[_ngcontent-%COMP%]{overflow-y:auto;height:120px}.nombre-libro[_ngcontent-%COMP%]{padding:8px;color:#fff;font-size:10px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word}.escolaridad-libro[_ngcontent-%COMP%]{color:#fff;font-size:10px;font-family:Volte-Regular;font-weight:700;word-wrap:break-word}.container-perfil[_ngcontent-%COMP%]{text-align:center;position:relative;width:143px;height:142px;border:1px solid}.checkmark[_ngcontent-%COMP%]{width:24px;height:24px;position:absolute;top:129px;right:80px}"]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["vista-principal"]],decls:14,vars:0,consts:[[1,"column"],[1,"horizontal-small"],[2,"position","absolute","right","36px","top","84px"],["src","./assets/icon/logo_lbs_blanco_nuevo.svg","alt","logo-lbs"],["src","./assets/images/header-card-tiempo-de-uso-de-docentes.png","alt","header-card",2,"width","100%","height","100%"],[1,"horizontal-large"],["src","./assets/icon/search.svg","alt","search"],[2,"text-align","center"],[1,"realice-una"],[1,"busqueda"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div"),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"div",7)(9,"span",8),e._uU(10,"Realice una"),e._UZ(11,"br"),e.qZA(),e.TgZ(12,"span",9),e._uU(13,"b\xfasqueda."),e.qZA()()()())},styles:[".column[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:100%;min-width:1055px;height:728px;z-index:1;border-radius:15px;padding:0}.horizontal-small[_ngcontent-%COMP%]{flex:30%;max-width:100%;max-height:30%}.horizontal-large[_ngcontent-%COMP%]{flex:70%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--ion-lbs-negro-gris);border-bottom-left-radius:15px;border-bottom-right-radius:15px}.realice-una[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:400;line-height:24.84px;word-wrap:break-word}.busqueda[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:700;line-height:24.84px;word-wrap:break-word}"]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["resumen-espera"]],decls:8,vars:0,consts:[[1,"container-resumen"],["src","./assets/icon/time-outline.svg","alt","time-outline.svg"],[1,"esperando-texto"],[1,"resultado-texto"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"span",2),e._uU(4," Esperando"),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"span",3),e._uU(7," resultados. "),e.qZA()())},styles:[".container-resumen[_ngcontent-%COMP%]{position:absolute;bottom:21px;left:26px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;width:212px;height:70px;margin-left:26;margin-right:27px;margin-bottom:16px}.esperando-texto[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:400;line-height:15.52px;word-wrap:break-word}.resultado-texto[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:700;line-height:15.52px;word-wrap:break-word}"]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["grafica-espera"]],decls:8,vars:0,consts:[[1,"grafica"],["src","./assets/icon/book-outline.svg","alt","book-outline"],[1,"seleccione"],[1,"un-libro"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"span",2),e._uU(4," Seleccione"),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"span",3),e._uU(7," un libro. "),e.qZA()())},styles:[".grafica[_ngcontent-%COMP%]{background:var(--ion-lbs-gris);width:100%;height:546px;border-radius:15px;margin-top:149px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.seleccione[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:400;line-height:24.84px;word-wrap:break-word}.un-libro[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:700;line-height:24.84px;word-wrap:break-word}"]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["resumen-resultado"]],decls:15,vars:0,consts:[[1,"container"],[1,"titulo"],[1,"container-resultado"],[1,"box","box-horas"],[1,"horas-numero"],[1,"horas-texto"],[1,"vertical-line"],[1,"box","box-sesiones"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Resumen"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6," 107 "),e.qZA(),e.TgZ(7,"div",5),e._uU(8," Horas de Uso "),e.qZA()(),e._UZ(9,"div",6),e.TgZ(10,"div",7)(11,"div",4),e._uU(12," 85 "),e.qZA(),e.TgZ(13,"div",5),e._uU(14," Sesiones "),e.qZA()()()())},styles:[".container[_ngcontent-%COMP%]{text-align:center;position:absolute;top:13px;display:flex;flex-direction:column;justify-content:center;align-items:center}.titulo[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-family:Volte-Regular;font-weight:700;word-wrap:break-word;margin-bottom:7px}.container-resultado[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.box[_ngcontent-%COMP%]{position:relative;width:97px;height:70px;background:var(--ion-lbs-lila);border-radius:15px;display:flex;flex-direction:column;justify-content:center;align-items:center}.box-horas[_ngcontent-%COMP%]{margin-right:10px}.box-sesiones[_ngcontent-%COMP%]{margin-left:10px}.horas-numero[_ngcontent-%COMP%]{color:#fff;font-size:40px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word;margin-bottom:0}.horas-texto[_ngcontent-%COMP%]{color:#fff;font-size:12px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word;position:absolute;bottom:0;margin:0}.vertical-line[_ngcontent-%COMP%]{width:.5px;height:70px;background-color:#c4c4c4}"]}),o})();function Z(o,i){1&o&&e._UZ(0,"ion-spinner",18)}function y(o,i){1&o&&e._UZ(0,"img",19)}function M(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-datetime",20),e.NdJ("ionBlur",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.desde=!1)})("ionChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.onDesdeChange(a))}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("value",t.desdeValue)}}function k(o,i){1&o&&e._UZ(0,"img",19)}function U(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-datetime",20),e.NdJ("ionBlur",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.hasta=!1)})("ionChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.onHastaChange(a))}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("value",t.hastaValue)}}let O=(()=>{class o{constructor(){this.RutaPortada="https://www.alfalbs.app/ApiOmega/covers/",this.tiempoReal=(new Date).getTime(),this.desde=!1,this.hasta=!1,this.desdeValue="",this.hastaValue="",this.desdeLabel="",this.hastaLabel="",this.isLoading=!0;const t=new Date,n=new Date(t);n.setDate(t.getDate()+1),this.desdeValue=t.toISOString(),this.hastaValue=n.toISOString()}onImageLoad(){this.isLoading=!1}ngOnInit(){const t=document.getElementById("TiempoDeUsoDeDocentes");new Chart(t,{type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10"],datasets:[{label:"Horas de Uso",data:[.1,.2,.6,.8,.4,.9,.1,.6,.2,1],borderColor:"white",borderWidth:2,pointBackgroundColor:"#704CEB",pointBorderColor:"#704CEB",pointRadius:5,fill:!0,backgroundColor:"rgba(255, 255, 255, 0.15)"}]},options:{responsive:!0,scales:{x:{display:!0,border:{color:"white"},grid:{display:!1},ticks:{display:!0,color:"white",font:{size:15,family:"Volte-Regular",weight:500}},text:{font:{weight:"bold",size:15,family:"Volte-Regular"},align:"end",color:"white"}},y:{position:"left",color:"white",beginAtZero:!0,text:{content:"Horas de Uso",font:{weight:"bold",size:15,family:"Volte-Regular"},align:"center",color:"white"},border:{color:"white"},ticks:{display:!0,color:"white",font:{size:15,family:"Volte-Regular",weight:500}},grid:{display:!1}}},plugins:{legend:{display:!1},tooltip:{enabled:!0}}}})}convertirFormato(t){const n=new Date(t),a=n.getDate(),s=n.getMonth()+1,c=n.getFullYear();return`${a.toString().padStart(2,"0")}/${s.toString().padStart(2,"0")}/${c}`}openDatetime(t){"desde"===t?!1===this.desde?(this.desde=!0,this.hasta=!1):(this.desde=!1,this.hasta=!1):"hasta"===t&&(this.hasta=!1===this.hasta)}closeDatetime(t){"desde"===t?this.desde=!1:"hasta"===t&&(this.hasta=!1)}onDesdeChange(t){this.desdeValue=t.detail.value,console.log(t.detail.value),this.desdeLabel=this.convertirFormato(t.detail.value)}onHastaChange(t){this.hastaValue=t.detail.value,console.log(t.detail.value),this.hastaLabel=this.convertirFormato(t.detail.value)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["grafica-resultado"]],inputs:{LibroDocenteData:"LibroDocenteData"},decls:30,vars:9,consts:[[1,"container"],[1,"header"],[2,"display","flex"],[1,"card-titulo"],[1,"tiempo-texto"],[1,"libro-nombre"],[1,"card-portada-libro"],["style","--color: white;",4,"ngIf"],["alt","libro-portada",1,"portada",3,"src","load"],[1,"periodo-texto"],[1,"datetime",3,"click"],["class","dataTime-icon","src","./assets/icon/dateTime-icon.svg","alt","dataTime-icon",4,"ngIf"],["presentation","date",3,"value","ionBlur","ionChange",4,"ngIf"],[2,"display","flex","flex-direction","row","width","100%","height","100%"],[1,"horas-de-uso"],[2,"position","absolute","display","flex","flex-direction","column","width","100%","height","100%"],["id","TiempoDeUsoDeDocentes",2,"min-height","350px","max-height","350px","max-width","1200px","margin-left","64px","margin-right","75px"],[1,"dias",2,"height","49px"],[2,"--color","white"],["src","./assets/icon/dateTime-icon.svg","alt","dataTime-icon",1,"dataTime-icon"],["presentation","date",3,"value","ionBlur","ionChange"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),e._uU(6," Tiempo de uso de: "),e.qZA(),e.TgZ(7,"span",5),e._uU(8),e.qZA()()(),e.TgZ(9,"div",6),e.YNc(10,Z,1,0,"ion-spinner",7),e.TgZ(11,"img",8),e.NdJ("load",function(){return n.onImageLoad()}),e.qZA()()(),e.TgZ(12,"div")(13,"div",9),e._uU(14,"Periodo."),e.qZA(),e.TgZ(15,"div",10),e.NdJ("click",function(){return n.openDatetime("desde")}),e._uU(16),e.YNc(17,y,1,0,"img",11),e.qZA(),e.YNc(18,M,1,1,"ion-datetime",12),e.TgZ(19,"div",10),e.NdJ("click",function(){return n.openDatetime("hasta")}),e._uU(20),e.YNc(21,k,1,0,"img",11),e.qZA(),e.YNc(22,U,1,1,"ion-datetime",12),e.qZA()(),e.TgZ(23,"div",13)(24,"div",14),e._uU(25," Horas de Uso "),e.qZA(),e.TgZ(26,"div",15),e._UZ(27,"canvas",16),e.TgZ(28,"div",17),e._uU(29," D\xedas "),e.qZA()()()()),2&t&&(e.xp6(8),e.hij(" ",n.LibroDocenteData.Nombre," "),e.xp6(2),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("src",n.RutaPortada+n.LibroDocenteData.RutaThumbnails+"?t="+n.tiempoReal,e.LSH),e.xp6(5),e.hij(" ",""===n.desdeLabel?"Desde":n.desdeLabel," "),e.xp6(1),e.Q6J("ngIf",n.desde),e.xp6(1),e.Q6J("ngIf",n.desde),e.xp6(2),e.hij(" ",""===n.hastaLabel?"Hasta":n.hastaLabel," "),e.xp6(1),e.Q6J("ngIf",n.hasta),e.xp6(1),e.Q6J("ngIf",n.hasta))},dependencies:[d.O5,r.x4,r.PQ,r.QI],styles:[".container[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:100%;min-width:586px;height:546px;max-height:546px;border-radius:15px;margin-top:149px;display:flex;flex-direction:column}.card-titulo[_ngcontent-%COMP%]{min-width:311px;max-width:311px;height:92px;background:var(--ion-lbs-negro-gris);box-shadow:8px 8px 15px rgba(0,0,0,.15);border-radius:14px;overflow-x:auto;overflow-y:hidden}.card-titulo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:14px 28px 15px 19px}.card-titulo[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:3px}.tiempo-texto[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-family:Volte-Regular;font-weight:500;line-height:30px}.libro-nombre[_ngcontent-%COMP%]{color:#fff;font-size:22px;font-family:Volte-Regular;font-weight:700;line-height:28.44px;margin-right:28px;white-space:nowrap;text-overflow:ellipsis;max-width:100%}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:30%;margin-top:29px;margin-left:41px;margin-right:35px}.card-portada-libro[_ngcontent-%COMP%]{width:72px;height:92px;background:#373636;box-shadow:8px 8px 15px rgba(0,0,0,.15);border-radius:14px;margin-left:17px;display:flex;flex-direction:row;justify-content:center;align-items:center}.portada[_ngcontent-%COMP%]{width:50px;height:75px;margin:8px 11px 9px}.datetime[_ngcontent-%COMP%]{width:162px;height:24px;background:var(--ion-lbs-lila);border-radius:11.93px;border:1px var(--ion-lbs-lila) solid;color:#fff;padding-left:12px;margin-bottom:15px;margin-left:65px;display:flex;justify-content:space-between;cursor:pointer;transition:background-color .3s ease}.datetime[_ngcontent-%COMP%]:active{background-color:var(--ion-lbs-lila-oscuro);transform:scale(.95)}.datetime[_ngcontent-%COMP%]:focus{background-color:var(--ion-lbs-lila-oscuro)}ion-datetime[_ngcontent-%COMP%]{position:absolute;--background: white;--ion-color-base: var(--ion-lbs-lila) !important;z-index:20;border-radius:7px;box-shadow:4px 4px 4px rgba(0,0,0,.25)}.dataTime-icon[_ngcontent-%COMP%]{width:18px;padding-right:9px}.periodo-texto[_ngcontent-%COMP%]{margin-left:78px;margin-bottom:3px;color:#fff;font-size:11px;font-family:Volte-Regular;font-weight:600;word-wrap:break-word}.container-grafica[_ngcontent-%COMP%]{width:100%}.grafica[_ngcontent-%COMP%]{bottom:49px;border:1px solid red}.horas-de-uso[_ngcontent-%COMP%]{position:absolute;transform:rotate(-90deg);color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word;left:-40px;top:300px;margin-left:37px}.dias[_ngcontent-%COMP%]{margin-top:11px;margin-bottom:20px;text-align:center;color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:500}#c3-chart[_ngcontent-%COMP%]   .c3-texts[_ngcontent-%COMP%], #c3-chart[_ngcontent-%COMP%]   .c3-text[_ngcontent-%COMP%]{color:#fff!important;background-color:#fff}#c3-chart[_ngcontent-%COMP%]   .c3-xgrid-lines[_ngcontent-%COMP%], #c3-chart[_ngcontent-%COMP%]   .c3-ygrid-lines[_ngcontent-%COMP%]{border-color:#fff!important;color:#fff!important}#c3-chart[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]{color:#fff!important}"]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["resumen-error"]],decls:8,vars:0,consts:[[1,"container-resumen"],["src","./assets/icon/close-circle-outline.svg","alt","time-outline.svg",2,"width","43px","height","42px","margin-bottom","11px"],[1,"esperando-texto"],[1,"resultado-texto"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"span",2),e._uU(4," No es encontraron"),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"span",3),e._uU(7," datos. "),e.qZA()())},styles:[".container-resumen[_ngcontent-%COMP%]{position:absolute;bottom:21px;left:26px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;width:212px;height:70px;margin-left:26;margin-right:27px;margin-bottom:16px}.esperando-texto[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:400;line-height:15.52px;word-wrap:break-word}.resultado-texto[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-family:Volte-Regular;font-weight:700;line-height:15.52px;word-wrap:break-word}"]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["grafica-error"]],decls:8,vars:0,consts:[[1,"grafica"],["src","./assets/icon/close-circle-outline.svg","alt","time-outline.svg",2,"width","66px","height","66px","margin-bottom","12px"],[1,"seleccione"],[1,"un-libro"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"span",2),e._uU(4," Seleccione"),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"span",3),e._uU(7," un libro. "),e.qZA()())},styles:[".grafica[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:100%;min-width:586px;height:546px;border-radius:15px;margin-top:149px;margin-right:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.seleccione[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:400;line-height:24.84px;word-wrap:break-word}.un-libro[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-family:Volte-Regular;font-weight:700;line-height:24.84px;word-wrap:break-word}"]}),o})();function S(o,i){if(1&o&&(e.TgZ(0,"ion-select-option",11),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.Q6J("value",t.Id),e.xp6(1),e.Oqu(t.Nombre)}}function I(o,i){1&o&&e._UZ(0,"ion-spinner")}function A(o,i){1&o&&(e.TgZ(0,"h3",15),e._uU(1,"Cargando..."),e.qZA())}function N(o,i){1&o&&(e.TgZ(0,"h2",15),e._uU(1,"\xa1No Hay Relaciones!"),e.qZA())}function L(o,i){if(1&o&&(e.TgZ(0,"ion-item")(1,"div",16)(2,"ion-label"),e._uU(3),e.qZA()()()),2&o){const t=e.oxw(2);e.xp6(3),e.hij("",t.TotalDocentesByCampus," Resultados")}}function E(o,i){if(1&o&&(e.TgZ(0,"ion-card",12)(1,"ion-card-content")(2,"div",13),e.YNc(3,I,1,0,"ion-spinner",10),e.YNc(4,A,2,0,"h3",14),e.YNc(5,N,2,0,"h2",14),e.qZA(),e.YNc(6,L,4,1,"ion-item",10),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",t.isLoadingBusqueda),e.xp6(1),e.Q6J("ngIf",t.isLoadingBusqueda),e.xp6(1),e.Q6J("ngIf",t.BusquedaNoHayRelaciones),e.xp6(1),e.Q6J("ngIf",t.TotalCampusSeleccionado)}}function z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item",25),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.selectDocente(s))}),e.TgZ(1,"ion-label")(2,"span",26),e._uU(3),e.qZA(),e.TgZ(4,"span",27),e._uU(5),e._UZ(6,"br"),e.qZA()()()}if(2&o){const t=i.$implicit;e.xp6(3),e.hij(" ",t.UsuarioNombreCompleto," - "),e.xp6(2),e.AsE(" ",t.UsuarioEscolaridad," - ",t.CampusNombre,"")}}function B(o,i){if(1&o&&(e.TgZ(0,"ion-card",17)(1,"ion-card-content")(2,"div")(3,"div",18)(4,"ion-list",19),e.YNc(5,z,7,3,"ion-item",20),e.qZA()(),e.TgZ(6,"ion-item",21)(7,"div",22),e._UZ(8,"hr",23),e.TgZ(9,"ion-label",24),e._uU(10),e.qZA()()()()()()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",t.BusquedaResults),e.xp6(5),e.hij("",t.TotalDocentesByCampus," Resultados")}}function V(o,i){1&o&&e._UZ(0,"skeleton-resumen-loading")}function J(o,i){1&o&&e._UZ(0,"resumen-espera")}function j(o,i){1&o&&e._UZ(0,"resumen-resultado")}function Q(o,i){1&o&&e._UZ(0,"resumen-error")}function G(o,i){1&o&&(e.TgZ(0,"div",37),e._UZ(1,"img",38),e.TgZ(2,"div",39),e._uU(3,"Exportar informaci\xf3n"),e.qZA()())}function F(o,i){1&o&&e._UZ(0,"skeleton-grafica-loading")}function Y(o,i){1&o&&e._UZ(0,"grafica-espera")}function H(o,i){if(1&o&&e._UZ(0,"grafica-resultado",40),2&o){const t=e.oxw(2);e.Q6J("LibroDocenteData",t.LibroDocenteData)}}function $(o,i){1&o&&e._UZ(0,"grafica-error")}function X(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"docente-info",31),e.NdJ("libroSeleccionadoEvent",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.manejarLibroSeleccionado(a))}),e.qZA()(),e.TgZ(4,"div",32),e.YNc(5,V,1,0,"skeleton-resumen-loading",10),e.YNc(6,J,1,0,"resumen-espera",10),e.YNc(7,j,1,0,"resumen-resultado",10),e.YNc(8,Q,1,0,"resumen-error",10),e.qZA()(),e.TgZ(9,"div",33),e.YNc(10,G,4,0,"div",34),e.YNc(11,F,1,0,"skeleton-grafica-loading",10),e.YNc(12,Y,1,0,"grafica-espera",10),e.YNc(13,H,1,1,"grafica-resultado",35),e.YNc(14,$,1,0,"grafica-error",10),e.qZA(),e._UZ(15,"div",36),e.qZA()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("DocenteData",t.docenteSeleccionadoData)("LibrosDocenteData",t.LibrosDocenteData),e.xp6(2),e.Q6J("ngIf",t.cargandoSkeleton),e.xp6(1),e.Q6J("ngIf",!t.libroSeleccionado),e.xp6(1),e.Q6J("ngIf",t.libroSeleccionado&&!t.cargandoSkeleton&&!t.errorlibros),e.xp6(1),e.Q6J("ngIf",t.libroSeleccionado&&!t.cargandoSkeleton&&t.errorlibros),e.xp6(2),e.Q6J("ngIf",t.libroSeleccionado&&!t.cargandoSkeleton&&!t.errorlibros),e.xp6(1),e.Q6J("ngIf",t.cargandoSkeleton),e.xp6(1),e.Q6J("ngIf",!t.libroSeleccionado),e.xp6(1),e.Q6J("ngIf",t.libroSeleccionado&&!t.cargandoSkeleton&&!t.errorlibros),e.xp6(1),e.Q6J("ngIf",t.libroSeleccionado&&!t.cargandoSkeleton&&t.errorlibros)}}function K(o,i){1&o&&e._UZ(0,"skeleton-loading")}const W=[{path:"",component:(()=>{class o{constructor(t){this.tiempodeusoService=t,this.librosDescargadosSelect={cssClass:"librosDescargados-select",animated:!0,mode:"ios",dismissOnSelect:!1,side:"bottom",alignment:"start",arrow:!1,size:"cover"},this.InfoDocente=[{Id:1,Docente:"Daniel Omar Cuellar \xc1lvarez",Campus:"Mazatl\xe1n",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:4,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:5,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:2,Docente:"Daniel S\xe1nchez L\xf3pez",Campus:"Culiac\xe1n",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:3,Docente:"Daniel Paredes Maga\xf1a",Campus:"Durango",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:4,Docente:"Daniel Eduardo Guerra Bobadilla",Campus:"Zacatecas",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:5,Docente:"Daniel Rodr\xedguez S\xe1nchez",Campus:"Durango",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:6,Docente:"Daniel Bravo Guti\xe9rrez",Campus:"Mazatl\xe1n",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]},{Id:7,Docente:"Daniel L\xf3pez L\xf3pez",Campus:"Mazatl\xe1n",libros:[{Id:1,Nombre:"Geography",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:2,Nombre:"Matematicas",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"},{Id:3,Nombre:"Spanish",Escolaridad:"Primaria",RutaThumbnails:"default-libro.jpg"}]}],this.InformacionDocente=[],this.busquedaVisible=!1,this.cargandoInfoDocente=!1,this.DocenteSeleccionado=!1,this.libroSeleccionado=!1,this.cargandoSkeleton=!1,this.errorlibros=!1,this.ionSelectValues=[],this.BusquedaResults=[],this.docenteSeleccionadoData={},this.LibrosDocenteData=[],this.LibroDocenteData={},this.isLoadingBusqueda=!1,this.BusquedaNoHayRelaciones=!1,this.TotalDocentesByCampus=0,this.TotalCampusSeleccionado=!1,this.idDocenteSelect=0,this.clearSearchx=!1}ngOnInit(){this.tiempodeusoService.getCampus().pipe((0,p.q)(1)).subscribe(t=>{this.ionSelectValues=t})}handleChange(t){this.busquedaVisible=!1,this.idDocenteSelect=t.detail.value}handleInput(t){const n=t.target.value.toLowerCase();0===n.length&&(this.isLoadingBusqueda=!1,this.busquedaVisible=!1),""!==n&&this.tiempodeusoService.getDocentesByName(this.idDocenteSelect,n).pipe((0,p.q)(1)).subscribe(a=>{this.TotalDocentesByCampus=a.length,this.TotalCampusSeleccionado=!1,0===a.length?(this.BusquedaResults=[],this.BusquedaNoHayRelaciones=!0):(this.BusquedaNoHayRelaciones=!1,this.BusquedaResults=a),this.isLoadingBusqueda=!1,this.busquedaVisible=!0})}handleInputSearch(){!1===this.clearSearchx&&(this.isLoadingBusqueda=!0,this.BusquedaNoHayRelaciones=!1,this.TotalCampusSeleccionado=!1)}clearSearch(){this.clearSearchx=!0,this.isLoadingBusqueda=!1,this.busquedaVisible=!1}selectDocente(t){const{UsuarioId:n,CampusNombre:a,UsuarioNombre:s,UsuarioApellidoMaterno:c,UsuarioApellidoPaterno:h}=t;this.busquedaVisible=!1,this.cargandoInfoDocente=!0,this.DocenteSeleccionado=!0,this.libroSeleccionado=!1,this.docenteSeleccionadoData={UsuarioNombre:s,UsuarioApellidoMaterno:c,UsuarioApellidoPaterno:h,CampusNombre:a},this.tiempodeusoService.getLibrosDocente(n).pipe((0,p.q)(1)).subscribe(ne=>{this.LibrosDocenteData=ne,this.cargandoInfoDocente=!1})}manejarLibroSeleccionado(t){this.libroSeleccionado=!0,this.cargandoSkeleton=!0;const n=this.LibrosDocenteData.find(a=>a.Id===t);n?(this.LibroDocenteData=n,this.errorlibros=!1,this.cargandoSkeleton=!1):(this.errorlibros=!0,this.cargandoSkeleton=!1)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:13,vars:7,consts:[[1,"container-principal"],[1,"row-select"],["interface","popover","placeholder","Campus",1,"input-select",3,"interfaceOptions","ionChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Buscar Docente",3,"debounce","ionChange","ionInput","ionClear"],["class","card-busqueda","mode","ios",4,"ngIf"],["class","card-busqueda","type","button","mode","ios",4,"ngIf"],[2,"position","relative"],["class","row",4,"ngIf"],[4,"ngIf"],[3,"value"],["mode","ios",1,"card-busqueda"],[1,"card-loading-busqueda"],["style","margin-left: 4px;",4,"ngIf"],[2,"margin-left","4px"],[2,"position","absolute","right","0px","bottom","0px"],["type","button","mode","ios",1,"card-busqueda"],[1,"card-lista-busqueda"],["mode","ios"],[3,"click",4,"ngFor","ngForOf"],["lines","none"],[1,"resultado-posicion"],[1,"linea-resultado"],[1,"label-resultado"],[3,"click"],[1,"docente"],[1,"nivel-entidad"],[1,"row"],[1,"vertical-small"],[1,"informacion"],[3,"DocenteData","LibrosDocenteData","libroSeleccionadoEvent"],[1,"resumen"],[1,"vertical-large"],["class","container-exportar",4,"ngIf"],[3,"LibroDocenteData",4,"ngIf"],[2,"width","32px"],[1,"container-exportar"],["src","./assets/icon/PDF_file_icon.svg","alt","file-icon",2,"width","23px","height","33px"],[1,"exportar-texto"],[3,"LibroDocenteData"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ion-select",2),e.NdJ("ionChange",function(s){return n.handleChange(s)}),e.TgZ(3,"ion-select-option",3),e._uU(4,"Todos"),e.qZA(),e.YNc(5,S,2,2,"ion-select-option",4),e.qZA(),e.TgZ(6,"ion-searchbar",5),e.NdJ("ionChange",function(s){return n.handleInput(s)})("ionInput",function(){return n.handleInputSearch()})("ionClear",function(){return n.clearSearch()}),e.qZA(),e.YNc(7,E,7,4,"ion-card",6),e.YNc(8,B,11,2,"ion-card",7),e.qZA(),e.TgZ(9,"div",8),e._UZ(10,"vista-principal"),e.YNc(11,X,16,11,"div",9),e.YNc(12,K,1,0,"skeleton-loading",10),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("interfaceOptions",n.librosDescargadosSelect),e.xp6(3),e.Q6J("ngForOf",n.ionSelectValues),e.xp6(1),e.Q6J("debounce",1e3),e.xp6(1),e.Q6J("ngIf",n.isLoadingBusqueda||n.BusquedaNoHayRelaciones||n.TotalCampusSeleccionado),e.xp6(1),e.Q6J("ngIf",n.busquedaVisible&&!n.isLoadingBusqueda&&!n.BusquedaNoHayRelaciones&&!n.TotalCampusSeleccionado),e.xp6(3),e.Q6J("ngIf",!n.cargandoInfoDocente&&n.DocenteSeleccionado),e.xp6(1),e.Q6J("ngIf",n.cargandoInfoDocente))},dependencies:[d.sg,d.O5,r.PM,r.FN,r.Ie,r.Q$,r.q_,r.VI,r.t9,r.n0,r.PQ,r.QI,r.j9,_,D,C,v,T,P,O,m,f,R,q],styles:[".container-principal[_ngcontent-%COMP%]{position:relative;margin-top:30px;height:100%;padding-right:40px;margin-bottom:35px}.card-lista-busqueda[_ngcontent-%COMP%]{overflow-y:auto;height:auto;padding-right:20px;max-height:306px}.resultado-posicion[_ngcontent-%COMP%]{position:absolute;right:0px;bottom:0px;display:flex;flex-direction:column}.linea-resultado[_ngcontent-%COMP%]{width:140px;border:.3px #373636 solid;background:#373636;margin-bottom:9px;margin-right:26px}.label-resultado[_ngcontent-%COMP%]{text-align:end;margin-right:26px}.label-input-select[_ngcontent-%COMP%]{color:#606060;font-size:13px;font-family:Volte-bold;font-weight:700;word-wrap:break-word;margin-top:35px;margin-bottom:3px;margin-left:18px}.input-select[_ngcontent-%COMP%]{width:217px;min-width:217px;height:32px;margin-right:44px;padding-left:12px;background:var(--ion-lbs-negro-gris);border-radius:16px;color:#fff;font-size:13px;font-family:Volte-Regular;font-weight:400;word-wrap:break-word;box-shadow:8px 8px 15px rgba(0,0,0,.15);--placeholder-opacity: 1}.option-select[_ngcontent-%COMP%]{background-color:#606060;border-top-left-radius:13px;border-top-right-radius:13px}ion-searchbar[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-family:Volte-Regular;font-weight:400;word-wrap:break-word;margin-top:-14px;min-width:816px;--border-radius: 16px;--background: var(--ion-lbs-negro-gris);--icon-color: var(--ion-color-lbs-lila);--box-shadow: 0px 1px 3px rgba(0, 0, 0, .2)}.card-busqueda[_ngcontent-%COMP%]{position:absolute;z-index:9;width:100%;min-width:716px;max-width:calc(100% - 400px);background:#f5f5f5;margin-left:310px;margin-top:40px;border-top-right-radius:0;border-top-left-radius:0}.card-busqueda[_ngcontent-%COMP%]   ion-list.list-ios[_ngcontent-%COMP%]{background:#f5f5f5;--ion-item-background: #f5f5f5}.card-busqueda[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: #f5f5f5}.card-loading-busqueda[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.row-select[_ngcontent-%COMP%]{width:100%;margin-bottom:26px;margin-top:10px;display:flex}.container[_ngcontent-%COMP%]{position:relative;margin-left:0;width:100%;height:728px;border-radius:15px;background:var(--ion-lbs-negro-gris);padding:0;overflow-x:hidden}.row[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;flex-direction:row;width:100%;min-width:1055px;height:100%;z-index:3;padding:0;margin:0}.vertical-small[_ngcontent-%COMP%]{width:320px;height:100%;margin:0;padding:0}.vertical-large[_ngcontent-%COMP%]{flex:1;width:100%;height:100%;margin:0;padding:0}.informacion[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:265px;height:472px;border-radius:15px;margin-top:74px;margin-left:22px;margin-right:32px;display:flex;justify-content:center}.horas[_ngcontent-%COMP%]{width:97px;height:70px;border-radius:15px;margin-right:18px}.sesiones[_ngcontent-%COMP%]{width:97px;height:70px;border-radius:15px}.docente[_ngcontent-%COMP%]{color:var(--ion-lbs-negro-gris);font-size:13px;font-family:Volte-Regular;font-weight:400;word-wrap:break-word}.nivel-entidad[_ngcontent-%COMP%]{color:var(--ion-lbs-lila);font-size:13px;font-family:Volte-Regular;font-weight:400;word-wrap:break-word}.resumen[_ngcontent-%COMP%]{position:relative;background:var(--ion-lbs-gris);width:265px;height:135px;border-radius:15px;margin-left:22px;margin-top:14px;margin-right:32px}.exportar-texto[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-family:Volte-Regular;font-weight:500;word-wrap:break-word;text-decoration:underline;margin-left:6px}.container-exportar[_ngcontent-%COMP%]{display:flex;align-items:center;position:absolute;top:96px}.icono-cerrar-busqueda[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;z-index:2;cursor:pointer;width:34px}"]}),o})()}];let ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(W),u.Bz]}),o})();var te=l(433);let oe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,r.Pc,te.u5,ee]}),o})()}}]);