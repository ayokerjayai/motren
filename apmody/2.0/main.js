(t=>{(async function(t){t.xAR.sLS('AR_script',true);const D=(e={},s={})=>{const{id:c,url:o}=e,{xname:r,xlink:i}=s,l=undefined!==t._V?t._V:null;c&&o&&i&&r&&l?l(e,s):t._xF.forEach(e=>{delete t[e]})},M=()=>{try{const o=t.xAR.gC('_AR_User')?t.xAR.de(t.xAR.gC('_AR_User')):"",r=o?'ID_Anda_disini':'ID_disini';let i=o||"";i&&(i=i.replace("{","").replace("}","").split(",").join("\n").replaceAll('":"',": ").replaceAll('"',"`"));const l='https://api.telegram.org/bot6414442507:Tokoen_Anda_disini/sendMessage?chat_id='+r+'&parse_mode=MarkdownV2&text='+t.encodeURIComponent('`[x] '+t.Intl.DateTimeFormat().resolvedOptions().timeZone+' - '+new Date().toLocaleString()+'`\n\n`'+(t.document.title||t._AR.blg.ttl)+'`\n\n`'+t.location.href+'`\n\n`'+t._AR.blg.id+"`"+(i?"\n\n"+i:""));(async()=>{try{await t.xAR.gFa(l)}catch(t){}})()}catch(t){}};if(undefined===t._AR)return false;try{const s=t.xAR.gC('_AR_Blog')?t.xAR.de(t.xAR.gC('_AR_Blog')):"",a='6766975982981335169',c='template',o='apmody';let r=t._AR.is.Pv?new URL(t._AR.blg.url).hostname:t.location.hostname,i=t._AR.blg.id;if(s){const n=t.jOp(s),a=t.xAR.gC('_AR_User')?t.jOp(t.xAR.de(t.xAR.gC('_AR_User'))):"";if(!a)return true;if(n.id!=i||n.url!=r)return true;D(n,a)}else{const e='/feeds/posts/summary/?alt=json&max-results=0',s=await t.xAR.gFa(e);s&&(i=s.feed.id.$t.split("-")[1],r=new URL(s.feed.link.find(t=>'alternate'==t.rel).href).hostname);const n='https://www.blogger.com/feeds/$1/posts/default?alt=json-in-script&max-results=1&q=label:$2+label:$3+$4+$5&callback=_cbLcc'.replace("$1",a).replace("$2",c).replace("$3",o).replace("$4",i).replace("$5",r);t._cbLcc=e=>{const l=e.feed.entry;if(l)try{let e=t.jOp(l[0].content.$t).blog;e=e.find(t=>t.id==i&&t.url==r);let d=l[0].link;d=d.filter(t=>'enclosure'==t.rel).map(({href:t,type:e})=>({[t.replace('http://',"").replace('.id',"")]:e})),d=function(t){const e={};return t.forEach(t=>{for(const s in t)e[s]=t[s]}),e}(d),e||(e={},d.xsess=180),t.xAR.sC('_AR_Blog',t.xAR.en(t.jOs(e)),d.xsess),t.xAR.sC('_AR_User',t.xAR.en(t.jOs(d)),d.xsess),M(),D(e,d)}catch(t){M(),D()}else t.xAR.sC('_AR_Blog',t.xAR.en("{}"),60)},t.ldJs({url:n,er:()=>{D()},rem:true})}}catch(e){t.xAR.sC('_AR_Blog',t.xAR.en("{}"),60)}try{t.aCss(fontBlog,'xFonts'),t.Defer(()=>{t._AR.analyticsID&&t.ldJs({url:'https://www.googletagmanager.com/gtag/js?id='+t._AR.analyticsID,sc:()=>{try{function i(){dataLayer.push(arguments)}t.dataLayer=t.dataLayer||[],i("js",new Date()),i('config',t._AR.analyticsID)}catch(l){}}})}),t._f.cpyTC=async e=>{try{await navigator.clipboard.writeText(e)}catch(r){const i=t.document,l=i.createElement('textarea');l.value=e,l.setAttribute('readonly',""),l.style.position='absolute',l.style.left='-9999px',i.body.appendChild(l);const d=i.getSelection().rangeCount>0&&i.getSelection().getRangeAt(0);l.select(),i.execCommand('copy'),i.body.removeChild(l),d&&(i.getSelection().removeAllRanges(),i.getSelection().addRange(d))}},t.domCL(()=>{t._AR.is.Ps&&'undefined'!=typeof cfAG&&(t=>{const d=cfAG;if(!d.dl0||!d.dl1||!d.cnt)return t.toastNotif('APP post settings are missing'),true;t.xAR.pU("dl")&&(t.xAR.pU("id","?"+t.xAR.gSS('ApGm_dl0'))!=t._AR.is.Ps&&t.xAR.pU("id","?"+t.xAR.gSS('ApGm_dl1'))!=t._AR.is.Ps||(t.aCls('body','onDL'),t.sElm('.sidebar',t=>t.remove()))),t.geId('ldApGm')&&t.geId('adBot')&&t.geId('ldApGm').insertAdjacentElement('beforebegin',t.geId('adBot'));const w=t.xAR.pU,S=t.location.origin+t.location.pathname,k=t.qSel('#postBody noscript');let P="";if(k){const e=k.innerHTML.match(/<img.class=.altImg.*?src="(.*?)"/);e&&(P=t.rszI(e[1],'w800-h400-p-k-no-nu-rw-e30'))}const I=()=>{const l=new URLSearchParams();let d=t.qSel('.pAG .apName');d=d?d.innerText:'noname',l.append("id",t._AR.is.Ps),l.append('url',S),l.append('apN',d),P&&l.append('aImg',P),t.xAR.sSS('ApGm_dl0',l.toString()),t.location.href=S+'?dl=0'};t.sElm('.bApGm',e=>{e.addEventListener('click',()=>{if(1==d.dl0.enable){const s=d.dl0.time||10,c=d.dl0.tx[0],o=d.dl0.tx[1];t.sElm('.app',l=>{if(!t.cCls(l,"a")){t.aCls(l,"a"),t.aCls('.ps.pApGm .app','pgrs'),t.aCls('.app.pgrs ~ .bApGm',"h"),t.qSel('.app .ic > .img').insertAdjacentHTML('afterend',d.cnt[0]);let n=s;e.innerHTML=c.replace("$1",n);const a=t.setInterval(()=>{n-=1,e.innerHTML=c.replace("$1",n),t.qSel('.dldPg').style.strokeDashoffset=Math.floor(n/s*100),n<=0&&(t.clearInterval(a),e.innerHTML=o,I())},1e3)}})}else 0==d.dl0.enable?t.eFcs('#ldApGm',"c"):I()})}),0!=d.dl1.enable&&t.qSell('#ldApGm > *').forEach(a=>{t.sAttr(a,'onclick','return true');const p=t.gAttr(a,'href'),_=t.gAtd(a,'link');p&&!_?(t.sAtd(a,'link',t.xAR.e(p)),t.sAttr(a,'href',"#!")):_&&t.sAtd(a,'link',t.xAR.e(_)),a.addEventListener('click',()=>{const _=()=>{const l=new URLSearchParams(),d=a.querySelector('div > span').innerText,f=d?d.substr(0,d.indexOf(" v")):"",p=d?d.replace(f,"").replace(" ",""):"",_=t.gAtd(a,'link'),m=a.querySelector('.mod'),g=a.dataset.text,h=a.dataset.size;l.append("id",t._AR.is.Ps),l.append('url',S),P&&l.append('aImg',P),f&&l.append('apN',f),p&&l.append('apV',p),_&&l.append('lnk',_),m&&l.append('apM',m),g&&l.append('apF',g),h&&l.append('apS',h),t.xAR.sSS('ApGm_dl1',l.toString()),t.location.href=S+'?dl=1'};if(1==d.dl1.enable){const e=d.dl1.time||7;if(!t.cCls(a,"a")){t.aCls(a,"a"),a.querySelector(':nth-child(1)').insertAdjacentHTML('afterbegin',d.cnt[0]);let s=e;const o=t.setInterval(()=>{s-=1,a.querySelector('.dldPg').style.strokeDashoffset=Math.floor(s/e*100),s<=0&&(t.clearInterval(o),_())},1e3)}}else _()})});let L="";if((0==w("dl")&&t.xAR.gSS('ApGm_dl0')||1==w("dl")&&t.xAR.gSS('ApGm_dl1'))&&(t.sElm('.postBody, .pSh, .pInf, .pDesc, .pApGm>.app, .bApGm, .pAG',t=>{t.style='display:none'}),t.aCls('.blogPts','fullP'),L+=d.cnt[1].replaceAll("$1",t._AR.blg.ttl)),0==w("dl")&&t.xAR.gSS('ApGm_dl0')){t.aCls('.ps.pApGm','dl0');const s=new URLSearchParams(t.xAR.gSS('ApGm_dl0'));if(s.get("id")==t._AR.is.Ps){t.qSel('.brdCmb').innerHTML+='<a href=\''+S+"'>"+s.get('apN')+'</a> <span>'+d.dl0.tx[2]+'</span>';let a="",c="";s.get('aImg')&&(a='<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'+s.get('aImg')+'" alt="'+s.get('apN')+'">'),a+=d.cnt[2].replaceAll("$1",s.get('apN')),t.qSel('.pEnt').insertAdjacentHTML('afterbegin',a),t.geId('ldApGm')&&t.qSel('.dl_cnt').insertAdjacentElement('afterend',t.geId('ldApGm')),t.qSel('.dl_cnt').insertAdjacentElement('afterend',t.geId('adTop')),c+=d.cnt[3],c+=L,c+=d.cnt[4].replaceAll("$1",s.get('url')).replaceAll("$2",d.dl0.tx[3]),t.sElm('#ldApGm',e=>{e.insertAdjacentHTML('afterend',c),e.insertAdjacentElement('afterend',t.geId('adBot'))})}}if(1==w("dl")&&t.xAR.gSS('ApGm_dl1')){t.aCls('.ps.pApGm','dl1');const s=new URLSearchParams(t.xAR.gSS('ApGm_dl1'));if(s.get("id")==t._AR.is.Ps){t.qSel('.brdCmb').innerHTML+='<a href=\''+S+"'>"+s.get('apN')+'</a> <span>'+d.dl1.tx[0]+'</span>';let a="",c="",o=s.get('url'),m=d.dl1.tx[1],g="",k="";t.xAR.gSS('ApGm_dl0')&&w("id","?"+t.xAR.gSS('ApGm_dl0'))==t._AR.is.Ps&&(o=s.get('url')+'?dl=0',m=d.dl1.tx[2]),s.get('apM')&&(g='MOD '+s.get('apM')),s.get('apS')&&(k=" ("+s.get('apS')+")"),s.get('aImg')&&(a='<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'+s.get('aImg')+'" alt="'+s.get('apN')+'">'),a+='<div class="dl_cnt">',a+='<h1>'+d.dl1.tx[0]+" "+s.get('apN')+'</h1>';let P=s.get('apN')+" "+s.get('apV')+" "+g;s.get('apF')?(P=s.get('apF'),a+='<span>'+s.get('apF')+'</span>'):a+='<span>'+s.get('apN')+" "+s.get('apV')+" "+g+'</span>',a+=d.cnt[5].replaceAll("$1",t.xAR.d(s.get('lnk'))).replaceAll("$2",k),t.qSel('.pEnt').insertAdjacentHTML('afterbegin',a),t.qSel('.progDL').insertAdjacentElement('beforebegin',t.geId('adTop')),c+=d.cnt[6].replaceAll("$1",t.xAR.d(s.get('lnk'))).replaceAll("$2",t._AR.blg.ttl),c+=d.cnt[7].replaceAll("$1",P).replaceAll("$2",t._AR.blg.ttl),c+=L,c+=d.cnt[4].replaceAll("$1",o).replaceAll("$2",m),t.sElm('.dl_cnt',s=>{s.insertAdjacentHTML('afterend',c),s.insertAdjacentElement('afterend',t.geId('adBot'))}),t.setTimeout(()=>{t.qSel('.progDL').style='display:none',t.qSel('.btnDL').style='display:block'},7e3)}}})(t),((t,e)=>{try{let a=e.documentElement.scrollTop;t.addEventListener('scroll',()=>{const _=e.documentElement.scrollTop;a>_?t.rCls('body','onSb'):t.aCls('body','onSb'),a=_;const m=(e.body.scrollTop||e.documentElement.scrollTop)/(e.documentElement.scrollHeight-e.documentElement.clientHeight)*100;t.qSel('.hPgCnt>*')&&(t.qSel('.hPgCnt>*').style.width=m+"%"),t.sElm('.toTopF',s=>{s.querySelector(".c").style.strokeDashoffset=100-m,(e.documentElement.scrollTop||e.documentElement.scrollTop)>200?(t.aCls('header','ws2'),t.aCls(s,'vsbl')):(t.rCls('header','ws2'),t.rCls(s,'vsbl'))})})}catch(t){}})(t,t.document),t.sElm('.isGts',e=>{const d='gtsEl';if(t.geId(d)){let a=t.xAR.gC('googtrans'),o=t.qSel('html').lang||'auto',r=()=>{t.Defer.js('//translate.google.com/translate_a/element.js?cb=gtsInit','Gts-js',0,()=>{t.geId(d).innerHTML=""})};t.gtsInit=()=>{new google.translate.TranslateElement({pageLanguage:o,layout:google.translate.TranslateElement.InlineLayout.VERTICAL},d)},a&&a!="/"+o+"/"+o?r():e.addEventListener('click',r)}}),t._AR.fs.bmPs.enable&&(()=>{let d=t.qSel('script[data-setting*=Bookmark]');d=d?t.jOp(d.textContent):{};for(const e in d)t._AR.fs.bmPs[e]=d[e];const f=t._AR.fs.bmPs;if(!(f.nMes&&f.nText&&f.nLink&&f.add&&f.rem&&f.iDel))return t.toastNotif('Bookmark settings are missing'),true;t.sElm('.isBkm',e=>{t._f.psBkm=()=>{const i='Bookmark_Post',l=t.geId('bkmEl'),d=(e,s)=>{const{id:g,title:h}=s,x=t.xAR.gLS(i)?t.jOp(t.xAR.gLS(i)):{};switch(e){case'ADD':case'UPD':x[g]=s,t.geId('tNtf').innerHTML='<span>"'+h+'"<br/>'+f.add+'</span>';break;case'DEL':delete x[g],t.geId('tNtf').innerHTML='<span>"'+h+'"<br/>'+f.rem+'</span>',t.qSell('.bmPs[data-bmid=\''+g+"']").forEach(e=>{t.rCls(e,"a")})}t.xAR.sLS(i,t.jOs(x)),p()},p=()=>{const m=t.xAR.gLS(i)?t.jOp(t.xAR.gLS(i)):{},g=Object.keys(m).length,h=e.querySelector('label');g?(t.sAtd(h,'text',g),t.rCls(h,"n"),((e,a)=>{e.innerHTML="";for(const s in a){const{id:n,title:d,image:p,link:_}=a[s];e.innerHTML+='<div class="item" id="bkm'+n+'"> <div class="pThmb"> <div class="thmb"> <div class="bkmImg" style="background-image:url(\''+p+'\')"></div> </div> </div> <div class="itmTtl"><a href="'+_+'">'+d+'</a></div> <div class="del" onclick="_f.delBmPs(\''+n+'\')">'+f.iDel+'</div> </div>',t.qSell('.bmPs[data-bmid="'+n+'"]').forEach(e=>{t.aCls(e,"a")})}})(l,m)):(t.aCls(h,"n"),l.innerHTML='<div>'+f.nMes+'</div> <a href="'+f.nLink+'">'+f.nText+'</a>')};p(),t.qSell('.bmPs[data-bmid]:not(.s)').forEach(e=>{t.aCls(e,"s"),e.addEventListener('click',()=>{const _=t.gAtd(e,'bmid')||"",m={id:_,title:t.gAtd(e,'bmttl')||"",image:t.gAtd(e,'bmimg')||"",link:t.gAtd(e,'bmurl')||""},g=t.xAR.gLS(i)?t.jOp(t.xAR.gLS(i)):{};Object.keys(g).length&&g[_]?d('DEL',m):d('ADD',m)})}),t._f.delBmPs=e=>{const _=t.xAR.gLS(i)?t.jOp(t.xAR.gLS(i)):{};_[e]&&(t.aCls(t.geId('bkm'+e),"d"),t.setTimeout(()=>{d('DEL',_[e])},1e3))}}}),undefined!==t._f.psBkm&&t._f.psBkm()})(),t.sElm('#noInet',e=>{const f=t.gAtd(e,"of")||'You are <b>Offline</b>',p=t.gAtd(e,"on")||'You are <b>Online</b>';t.addEventListener('offline',()=>{t.rCls(e,'hidden'),t.toastNotif(f)}),t.addEventListener('online',()=>{t.aCls(e,'hidden'),t.toastNotif(p)})}),t.sElm('#ckWrp',e=>{const f=e.querySelector('#ckAcc');f&&!t.xAR.gC('CookiePolicy')&&(t.aCls(e,"v"),f.onclick=()=>{t.aCls(e,"a"),t.xAR.sC('CookiePolicy','Accepted',2592e3)})}),t._AR.fs.adSen.enable&&(()=>{let f=t.qSel('script[data-setting*=adSense]');f=f?t.jOp(f.textContent):{},f.adClient=f.adClient||t.gAtd('.adsbygoogle[data-ad-client]','adClient');for(const e in f)t._AR.fs.adSen[e]=f[e];const p=t._AR.fs.adSen;if(!p.pushTime||!p.maxPush)return t.toastNotif('AdSense settings are missing'),true;if(p.adClient){t._f.adBlock=()=>{t.sElm('#adBlock',a=>{t.rCls(a,'hidden'),p.closeAdb&&(a.childNodes[0].insertAdjacentHTML('beforeend','<span class="cls"></span>'),a.querySelector('.cls').addEventListener('click',()=>{t.aCls(a,'hidden')}))})},t._f.antiBomC=()=>{t.clearInterval(t._bomClick),t._bomClick=t.setInterval(()=>{const i='_adClick-'+new Date().setHours(0,0,0,0),l=t.xAR.gC(i)?t.jOp(t.xAR.gC(i)):"";if(l&&0!=t.Object.keys(l).length){p.consLog&&t._xTime('adClick: '+t.jOs(l));for(const e in l)if(l[e]>=p.maxClick){const s=t.qSel('.adsbygoogle[data-ad-slot="'+e+'"]');s&&(t.sAtd(s,'click',true),p.removeAd&&s.remove())}}else t.clearInterval(t._bomClick)},1500)},t._f.antiBomC(),t._adClick=e=>{const r='_adClick-'+new Date().setHours(0,0,0,0),i=t.xAR.gC(r)?t.jOp(t.xAR.gC(r)):{};if(!e)return i;let l=1;return i[e]&&(l+=i[e]),i[e]=l,t.xAR.sC(r,t.jOs(i)),t._f.antiBomC(),i},t._f.adSabc=()=>{t.qSell('.adsbygoogle[data-ad-slot]:not([data-ad-status])').forEach(e=>{e.addEventListener('click',()=>{const o=t.gAtd(e,'adSlot'),r='filled'==t.gAtd(e,'adStatus');o&&r&&t._adClick(o)})})},t._f.adSabc(),t.addEventListener('blur',()=>{let f=t.document.activeElement.parentNode,p=t.gAtd(f,'adSlot'),_='filled'==t.gAtd(f,'adStatus');try{p||(f=f.parentNode,p=t.gAtd(f,'adSlot'),_='filled'==t.gAtd(f,'adStatus'))}catch(t){}p&&_&&t._adClick(p)}),t._f.pushAd=()=>{t.xPushAd+=1;const f=t.qSell('.adsbygoogle[data-ad-slot]:not([data-ad-status=filled])');if(1==t.xPushAd&&(p.consLog&&t._xTime('ad length: '+f.length),t.xAdUnit=f.length),2==t.xPushAd){let e=0;if(f.forEach(s=>{t.gAtd(s,'adStatus')||(e+=1)}),t.xAdUnit==e)return t.clearInterval(t._checkAd),_f.adBlock(),true}if(t.xPushAd>p.maxPush){t.clearInterval(t._checkAd);const n=[];return f.forEach(e=>{const i=t.gAtd(e,'adSlot');n.push(i),sAtd(e,'push',true)}),p.consLog&&t._xTime('-> ('+f.length+') ad not showing '+jOs(n)),t.xPushAd=0,true}if(0==f.length)return p.consLog&&t._xTime('-> all ads are showing <-'),t.clearInterval(t._checkAd),true;p.consLog&&t._xTime('..push-'+t.xPushAd+'.. ('+f.length+")"),f.forEach((e,n)=>{const f=t.gAtd(e,'adSlot');t.rAtd(e,'adStatus','adsbygoogleStatus'),t.rAttr(e.parentNode,'style');try{e.childNodes[0].remove()}catch(t){}t.setTimeout(()=>{p.consLog&&t._xTime('push ad['+(n+1)+'] ('+f+")"),(adsbygoogle=t.adsbygoogle||[]).push({})},1e3)})},t.xPushAd=0;const a=()=>{t.ldJs({url:'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+p.adClient,sc:()=>{t._f.pushAd(),t._checkAd=t.setInterval(t._f.pushAd,1e3*p.pushTime)},er:()=>{t._f.adBlock()}})};p.defer?t.Defer(a,0):a()}})(),(()=>{let l=t.qSel('script[data-setting*=Counter]');l=l?t.jOp(l.textContent):{};for(const e in l)t._AR.fs.ctrPs[e]=l[e];if(t._AR.fs.ctrPs.enable&&t._AR.fs.ctrPs.databaseURL&&((async()=>{const d='/BlogID_'+t._AR.blg.id+'.json',f=t._AR.fs.ctrPs.databaseURL+d,p=await t.xAR.gFa(f);try{t._f.showCounter=(e=p)=>{if(e){const o=t._AR.is.Ps||t._AR.is.Pg,i=e[o]||"",l=t.qSel('.welC');i&&l&&[{i:'.cn.view',v:'_view'},{i:'.cn.dl',v:'_dl'},{i:'.cn.clap',v:'_clap'}].forEach(e=>{t.sElm(e.i,s=>{i[e.v]&&t.sAtd(s,'text',t.xAR.abv(i[e.v])),t.sAtd(s,'val',i[e.v]||0)})}),t.qSell('.pThmb>.iFxd[data-id]:not(.s)').forEach(s=>{t.aCls(s,"s");const f=t.gAtd(s,"id"),p=e[f]||"";if(p){if(p._dl){const e='<div class="iFxd dl"><span data-text="'+t.xAR.abv(p._dl)+'">'+t._AR.fs.ctrPs.ic[1]+'</span></div>';s.insertAdjacentHTML('afterend',e)}if(p._view){const e='<div class="iFxd vw"><span data-text="'+t.xAR.abv(p._view)+'">'+t._AR.fs.ctrPs.ic[0]+'</span></div>';s.insertAdjacentHTML('afterend',e)}}})}},t._f.showCounter()}catch(t){}})(),t._AR.is.Ps||t._AR.is.Pg)){const c=()=>{try{const e={databaseURL:t._AR.fs.ctrPs.databaseURL};firebase.initializeApp(e);const s=firebase.database(),i='BlogID_'+t._AR.blg.id,l=s.ref(i);if(t._AR.is.Ps||t._AR.is.Pg){const e=(e=10)=>{const i='_Claps',l=t.xAR.gLS(i)?t.jOp(t.xAR.gLS(i)):{},d=t._AR.is.Ps||t._AR.is.Pg,f=Number(e);return l[d]?l[d]=l[d]+1:l[d]=1,!(l[d]>f)&&(t.xAR.sLS(i,t.jOs(l)),l[d])};t._f.pushCounter=async(e={})=>{const{view:p=true,dl:_=true,clap:m=true}=e,g=t._AR.is.Ps||t._AR.is.Pg,h={};let x=1,u="";if(p&&(u={id:'_view',el:'.cn.view'}),_&&(u={id:'_dl',el:'.cn.dl'}),m&&(u={id:'_clap',el:'.cn.clap'}),!u)return true;const b=await l.child(g+"/"+u.id).get().then(t=>t.exists()&&t.val()).catch(()=>true);b&&(x+=b),h[u.id]=x,l.child(g).update(h).then(()=>{try{t.sElm(u.el,s=>{t.sAtd(s,'text',t.xAR.abv(x||0)),t.sAtd(s,'val',x||0)}),t._xTime(u.id.replace("_","")+" ("+x+")")}catch(t){}})},t._f.pushCounter({view:true}),t.geId('arClap').addEventListener('click',s=>{const p=s.target;if(!t.cCls(p,"a")){const s=t._AR.fs.ctrPs.limitClap,a=e(s);a?(t.aCls(p,"a"),t._f.pushCounter({clap:true}),t.toastNotif(t._AR.fs.ctrPs.tx[0].replace("$1",a)),t.setTimeout(()=>t.rCls(p,"a"),1e3)):t.toastNotif(t._AR.fs.ctrPs.tx[1].replace("$1",s))}}),t.qSell('.bApGm, #ldApGm>*, .btnDL').forEach(e=>{e.addEventListener('click',()=>{t.gAtd(e,"dl")||(t.sAtd(e,"dl",true),t._f.pushCounter({dl:true}))})})}}catch(t){}};t.ldJs({url:'https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js',sc:()=>{t.ldJs({url:'https://www.gstatic.com/firebasejs/10.6.0/firebase-database-compat.js',sc:()=>{c()}})}})}})()}),t.ldCss({url:'https://www.blogger.com/dyn-css/authorization.css?targetBlogID='+t._AR.blg.id,sc:()=>{t.domCL(()=>{try{let e=t.qSel('script[data-setting*=Edit]');e=e?t.jOp(e.textContent):{};const r=e,i=t.geId('admCk');i&&'block'==t.getComputedStyle(i).display?(t.aCls('body','onAdm'),t.ldJs({url:t._AR.js+'js/qEdit.js'})):'edit'!=t.xAR.pU('aruf')&&(r.keepSafe&&(t.document.addEventListener('keydown',t=>{if(t.ctrlKey||t.shiftKey)return t.preventDefault(),true}),t.sAttr('body','oncontextmenu','return true'),t.qSell('.postBody p,.postBody span').forEach(e=>{e.addEventListener('contextmenu',()=>{t.rAttr('body','oncontextmenu'),t.setTimeout(()=>{t.sAttr('body','oncontextmenu','return true')},100)})})),r.privateBlog&&t.sElm('html',t=>t.remove()))}catch(t){}})}}),t._AR.is.Ps&&t.domCL(()=>{t._AR.fs.sfLnk.enable&&((t,a)=>{try{const e=e=>{t.toastNotif('SafeLink is loaded..');const d=e;t.aCss(d.css,'safelink-post.css'),t.qSel(d.el).insertAdjacentHTML(d.po,d.cnt[1]),t.qSel(d.el).insertAdjacentHTML(d.po2,d.cnt[2]),t.aCls('body','onSf');let f=Math.floor(d.tm),p=f;t.aCls('#sfTop',"s");let _=t.setInterval(()=>{let l=--p/f*100;t.qSel('#sfTop .cP >div').style.width=100-l+"%",t.qSel('#sfTop .tS').innerHTML=Math.floor(p),p<=0&&(t.clearInterval(_),t.qSel('#sfTop .tS').innerHTML="0",t.setTimeout(()=>{t.qSel('#sfTop .cP>span').innerHTML=d.cnt[0]},1e3),t.setTimeout(()=>{if(t.aCls('#sfTop',"a"),t.aCls('#sfBot',"s"),d.adT.e){const e=t.qSel(d.adT.e);e&&t.geId('sfTop').insertAdjacentElement(d.adT.p,e)}if(d.adB.e){const e=t.qSel(d.adB.e);e&&t.qSel('#sfBot>.button').insertAdjacentElement(d.adB.p,e)}let f=Math.floor(d.tm2),p=t.setInterval(()=>{--f,t.sAtd('#sfBot .sfLnk','timer',Math.floor(f)),f<=0&&(t.clearInterval(p),t.sAtd('#sfBot .sfLnk','timer',"0"),t.setTimeout(()=>{t.rAtd('#sfBot .sfLnk','timer'),t.aCls('#sfBot .sfLnk',"a")},1e3))},1e3)},3e3))},1e3);t.qSel('#sfBot .sfLnk').addEventListener('click',e=>{let p=e.target;if(t.cCls(p,"a")&&t.cCls(p,"ok")){t.xAR.rSS('_Safelink'),t.open(d.lnk,'_blank','noopener');const e=d.dad||t.location.href;t.setTimeout(()=>t.location.href=e,1e3)}});let m=a.documentElement.scrollTop;t.addEventListener('scroll',()=>{let p=a.documentElement.scrollTop;m>p?t.rCls('body','onSb'):(t.aCls('body','onSb'),m=p);let _=(a.body.scrollTop||a.documentElement.scrollTop)/(a.documentElement.scrollHeight/100*d.vsc-a.documentElement.clientHeight)*100;_>100&&(_=100,t.cCls('#sfBot',"ok")||(t.aCls('#sfBot',"ok"),t.aCls('#sfBot .sfLnk',"ok"),t.qSel('#sfBot .pgSf > div').style.width="")),t.qSel('#sfBot')&&(t.cCls('#sfBot',"ok")||(t.qSel('#sfBot .pgSf > div').style.width=_+"%"))})},n='_Safelink',d=t.xAR.gSS(n)?t.jOp(t.xAR.gSS(n)):"";d&&e(d)}catch(t){}})(t,t.document),t.geId('aRel')&&(t._f.relatedInPost=()=>{t.xAR.iOb('#aRel',async e=>{const f=await(async e=>{try{const s=t.gAtd(e,'label')?t.encodeURIComponent(t.gAtd(e,'label')):"",i=s?"-/"+s:"",l=t.gAtd(e,'mrst')?t.gAtd(e,'mrst'):6,d=t.gAtd(e,'sby')?t.gAtd(e,'sby'):'published';if('fetch'in t)try{const e=await t.xAR.gFa('/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2'.replace("$1",i).replace("$2",d)),s=e?Number(e.feed.openSearch$totalResults.$t):1;let f=s>1&&s;if(f){let e=f-(l-1);e=1<e?t.xAR.rdm(e):1;const s=await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4'.replace("$1",i).replace("$2",Number(l)+1).replace("$3",d).replace("$4",e));f=s&&s.feed.entry}return f}catch(t){return true}return true}catch(t){return true}})(e);if(f)((e,a)=>{let d="";const f=t.gAtd(a,'mrst')?t.gAtd(a,'mrst'):6,p=[];e.forEach(e=>{try{const c=e.title.$t,r=e.link.find(t=>'alternate'===t.rel).href;if(t._AR.blg.xur!=r&&p.length<f){p.push(c);let t=e.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);t=t?t[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g):"";let i=e.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),l=i?i[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";i=i?i[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g):"",l=l?l[1]:"";let f=e.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),g=f?f[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";f=f?f[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g):"",g=g?g[1]:"",d+='<li><a aria-label="'+c+'" href="'+r+'"><div class="itmTtl"><span>'+(t||c)+'</span>'+(i?' <span class="v"'+(l?' data-text="'+l+'"':"")+">v"+i+'</span>':"")+(f?' <span class="m"'+(g?' data-text="'+g+'"':"")+">("+f+')</span>':"")+'</div></a></li>'}}catch(t){}}),a.querySelector("ul").innerHTML=d;try{t._f.laZy(true,true)}catch(t){}})(f,e);else{const t=e.parentNode;'DETAILS'==t.tagName?t.style.display='none':e.style.display='none'}})},t.Defer(t._f.relatedInPost,0)),t.geId('rPst')&&(t._f.relatedPost=()=>{t.xAR.iOb('#rPst',async n=>{const f=await(async n=>{try{const s=t.gAtd(n,'label')?t.encodeURIComponent(t.gAtd(n,'label')):"",l=s?"-/"+s:"",d=t.gAtd(n,'mrst')?t.gAtd(n,'mrst'):6,f=t.gAtd(n,'sby')?t.gAtd(n,'sby'):'published';if('fetch'in t)try{const e=await t.xAR.gFa('/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2'.replace("$1",l).replace("$2",f)),s=e?Number(e.feed.openSearch$totalResults.$t):1;let n=s>1&&s;if(n){let e=n-(d-1);e=1<e?t.xAR.rdm(e):1;const s=await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4'.replace("$1",l).replace("$2",Number(d)+1).replace("$3",f).replace("$4",e));n=s&&s.feed.entry}return n}catch(t){return true}return true}catch(t){return true}})(n);f?((e,n)=>{let d="";const f=t.gAtd(n,'mrst')?t.gAtd(n,'mrst'):6,p=[],_=t.cCls(n,"s1"),m=t.gAtd(n,'thmb')||'s280-rw-e30',g=t.gAtd(n,'athmb')||'s120-rw-e30',h=_?g:m;e.forEach(e=>{try{const c=e.title.$t,r=e.link.find(t=>'alternate'===t.rel).href,l=e.media$thumbnail?'url(\''+t.rszI(e.media$thumbnail.url,h)+"')":'none';if(t._AR.blg.xur!=r&&p.length<f){p.push(c);let f="";_||(f=e.content.$t.includes('altImg')?e.content.$t.match(/<img.class=.altImg.*? [^>]*src="[^"]*"[^>]*>/gm):"",f=f?f.map(t=>t.replace(/.*src="([^"]*)".*/,"$1"))[0]:"",f=f?'url(\''+t.rszI(f,h)+"')":'none');const m=_?l:f;let g=e.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);g=g?g[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g):"";let x=e.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),u=x?x[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";x=x?x[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g):"",u=u?u[1]:"";let b=e.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),y=b?b[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";b=b?b[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g):"",y=y?y[1]:"",d+='<li><a class="item" aria-label="'+c+'" href="'+r+'"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: '+m+'"></div></div></div><div class="itmTtl"><span>'+(g||c)+'</span> '+(x?'<span class="apVM">v'+x+(b?' • '+b:"")+'</span>':"")+(u?'<div class="apAM"><span class="apk" data-text="'+u+'"></span>'+(y?'<span class="mod" data-text="'+y+'"></span>':"")+'</div>':"")+'</div></a></li>'}}catch(t){}}),n.querySelector("ul").innerHTML=d;try{t._f.laZy(true,true)}catch(t){}})(f,n):n.style.display='none'})},t.Defer(_f.relatedPost,0))}),t._AR.is.It&&(t.domCL(()=>{t._AR.is.Mob&&'share'in t.navigator&&t.sElm('label[for=forShare]',e=>{t.rAttr(e,'for'),e.addEventListener('click',()=>{t.navigator.share({title:t.document.title,url:t._AR.blg.xur})})}),t.sElm('#cmHolder',t=>{let l=t.innerHTML;l=(l=l.replace(/<i rel="image">(.*?)<\/i>/gi,'<img data-src="$1" src="data:image/webp;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Image Comment" />')).replace(/<i rel="pre">(.*?)<\/i>/gi,'<div class="pre"><pre>$1</pre></div>'),t.innerHTML=l}),t.sElm('#comment-editor',e=>{const i=t.gAtd(e,'src'),l=t.geId('commentForm'),f=t.qSel('.cmFrm');t.sElm('.rpTo',n=>{((e,n,a,c)=>{e.addEventListener('click',()=>{const _=t.gAttr(e,'data-reply-to');t.geId("c"+_).appendChild(n),l.className='cmRbox',t.geId('addCm').className='cmAd',a.src=c+'&parentID='+_})})(n,l,e,i)}),t.sElm('#addCm',t=>{t.addEventListener('click',()=>{f.appendChild(l),l.className='cmRbox',t.className='cmAd hidden',e.src=i})})}),t.sElm('.cmBd .cmCo a',e=>{t.sAttr(e,'target','_blank'),t.aCls(e,'extL')}),t.addEventListener('blur',()=>{try{const n=t.geId('comment-editor');t.document.activeElement==n&&t.addEventListener('message',t=>{if('https://www.blogger.com'==t.origin&&0==t.data.indexOf('set-comment-editor-height')){const e=t.data.substring(26).replace("px","");n.height=e}})}catch(t){}}),t.sElm('#commentForm',()=>{t._f.cmnParse=c=>{const f=t.geId('cod-K');let p=f.value.replace(/\t/g,'    '),_=t.gAtd(c,'text');""!=f.value?('pre'==_||'code'==_?(p=p.replace(/&/g,'&amp;').replace(/'/g,'&#039;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'),p='pre'==_?p.replace(/^/,'<i rel="pre">'):p.replace(/^/,'<i rel="code">')):'image'==_?p=p.replace(/^/,'<i rel="image">'):'quote'==_?p=p.replace(/^/,'<i rel="quote">'):'tag'==_&&(p=p.replace(/^/,'<i rel="tag">')),p=p.replace(/$/,'</i>'),f.value=p,f.focus(),t.rCls('#bcpKomen','hidden'),t.qSell('.parCmn .btn.m').forEach(t=>{t.disabled=true})):f.focus()},t._f.clrPcmn=()=>{const r=t.geId('cod-K');r.value="",r.focus(),t.aCls('#npC','hidden'),t.aCls('#bcpKomen','hidden'),t.qSell('.parCmn .btn.m').forEach(t=>{t.disabled=true})},t._f.cpyPcmn=()=>{const d=t.geId('cod-K');_f.cpyTC(d.value),d.value="",t.rCls('#npC','hidden'),t.setTimeout(()=>{_f.clrPcmn()},1e3)}}),t.sElm('.lazyYt',s=>{const p='https://img.youtube.com/vi/'+s.dataset.embed+'/sddefault.jpg',_=new Image();_.setAttribute('class','lazy'),_.setAttribute('data-src',p),_.setAttribute('src','data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='),_.setAttribute('alt','Youtube video'),_.addEventListener('load',s.appendChild(_)),s.addEventListener('click',()=>{const r=t.document.createElement('iframe');r.setAttribute('frameborder',"0"),r.setAttribute('allowfullscreen',""),r.setAttribute('src','https://www.youtube.com/embed/'+this.dataset.embed+'?rel=0&showinfo=0&autoplay=1'),s.innerHTML="",s.appendChild(r)})}),t.sElm('.pS .separator >a, .pS .tr-caption-container td >a, .pS .separator >img, .pS .tr-caption-container td >img, .pS .psImg >img, .pS .btImg >img, .galWrp > img, .lbx > img',t=>{const r='<div class="zmImg">'+t.outerHTML+'</div>';t.outerHTML=r}),t.sElm('.zmImg',e=>{const l=e.querySelector('img:not(.n)');null!=l&&(t.sAttr(l,'onclick','return true'),e.onclick=()=>{e.classList.toggle("s"),e.firstChild.classList.contains("sz")&&t.sAttr(e.firstChild,'src',t.gAttr(e.firstChild,'src').replace(/\/s[0-9]+(\-c)?/,'/s1200').replace(/\=s[0-9]+(\-c)?/,'=s1200').replace(/\=.*w[0-9].*h[0-9]+(\-c)?/,'=s1200'))});const d=e.querySelector('img.c:not(.n)');null!=d&&t.gAttr(d,'alt')&&t.sAtd(e,'text',t.gAttr(d,'alt'))}),t.sElm('pre',e=>{const l=t.jOp(t.getComputedStyle(t.qSel('body')).getPropertyValue('--msg'))[0];e.addEventListener('dblclick',()=>{t._f.cpyTC(e.textContent),t.toastNotif(l)});let d="";const f=e.innerHTML.split(/[\n\r]/g);for(let t=0;t<f.length;t++)d+='<span></span>';e.insertAdjacentHTML('beforebegin','<div aria-hidden="true" class="preNumb">'+d+'</div>')}),t.sElm('#rdTime',e=>{const l=t=>{let r="";for(let s=t.childNodes.length,i=0;i<s;i++){const s=t.childNodes[i];8!=s.nodeType&&(r+=1!=s.nodeType?s.nodeValue:l(s))}return r},d=l(t.geId('postBody')).split(" ").length/200,f=Math.round(d);e.innerHTML=f+' min read'});class f{constructor({from:e,to:s}){this.fromElement=e,this.toElement=s,this.headingElements=this.fromElement.querySelectorAll('h1:not(.n),h2:not(.n),h3:not(.n),h4:not(.n),h5:not(.n),h6:not(.n)'),this.tocElement=t.document.createElement('div')}['getMostImportantHeadingLevel'](){let r=6;for(let c=0;c<this.headingElements.length;c++){let n=f.getHeadingLevel(this.headingElements[c]);r=n<r?n:r}return r}static['generateId'](t){return t.textContent.replace(/\s+/g,"_")}static['getHeadingLevel'](t){switch(t.tagName.toLowerCase()){case"h1":default:return 1;case"h2":return 2;case"h3":return 3;case"h4":return 4;case"h5":return 5;case"h6":return 6}}['generateToc'](){let _=this.getMostImportantHeadingLevel()-1,m=this.tocElement;if(0!==this.headingElements.length){for(let n=0;n<this.headingElements.length;n++){let c=this.headingElements[n],o=f.getHeadingLevel(c),d=o-_,g=t.document.createElement("a");if(c.id||(c.id=f.generateId(c)),g.href="#"+c.id,g.textContent=c.textContent,d>0){for(let n=0;n<d;n++){let n=t.document.createElement("ol"),c=t.document.createElement("li");n.appendChild(c),m.appendChild(n),m=c}m.appendChild(g)}else{for(let t=0;t<-d;t++)m=m.parentNode.parentNode;let n=t.document.createElement("li");n.appendChild(g),m.parentNode.appendChild(n),m=n}_=o}this.toElement.appendChild(this.tocElement.firstChild)}else t._xTime('HeadingElements not found')}}t.sElm('#toContent',e=>{new f({from:t.geId('postBody'),to:e}).generateToc()})}),t.Defer(()=>{t._f.hlJs=e=>{const i='pre.hljs:not([data-hljs])',l='Highlight-js',d=e||t._AR.js+'js/Highlight.js',f=()=>{t.sElm(i,s=>{hljs.highlightElement(s),t.sAtd(s,'hljs',true);const i=s.parentElement;!t.gAtd(i,'text')&&t.cCls(i,'pre')&&t.sAtd(i,'text',t.gAttr(s,'class').replace(/hljs|language-| /gi,""))})};t.qSel(i)&&!t.geId(l)?t.ldJs({url:d,id:l,sc:()=>{f()}}):t.qSel(i)&&t.geId(l)&&f()},t._f.hlJs(),t._f.abPlayer=()=>{const d=()=>{t.ldJs({url:t._AR.js+'js/abPlyr.js'})};t.geId('AudioBookPlayer')&&null==t.geId('Vue-js')?t.ldJs({url:t._AR.js+'js/Vue.js',id:'Vue-js',sc:()=>{d()}}):t.geId('AudioBookPlayer')&&t.geId('Vue-js')&&d()},t._f.abPlayer()})),t._AR.is.Hm&&(t._f.psByLabel=()=>{t.xAR.iOb('.wPsLbl',async e=>{const o=await(async e=>{try{const s=t.gAtd(e,'label')?t.encodeURIComponent(t.gAtd(e,'label')):"",i=s?"-/"+s:"",l=t.gAtd(e,'mrst')?t.gAtd(e,'mrst'):6,d=t.gAtd(e,'sby')?t.gAtd(e,'sby'):'published';if('fetch'in t)try{const e=await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3'.replace("$1",i).replace("$2",l).replace("$3",d));return e&&e.feed.entry}catch(t){return true}return true}catch(t){return true}})(e);o?((e,n)=>{let d="";e.forEach(e=>{try{const c=e.title.$t,l=e.link.find(t=>'alternate'===t.rel).href,f=e.media$thumbnail?'url(\''+t.rszI(e.media$thumbnail.url,'s120-rw-e30')+"')":'none';let p=e.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);p=p?p[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g):"";let _=e.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),m=_?_[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";_=_?_[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g):"",m=m?m[1]:"";let g=e.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),h=g?g[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/):"";g=g?g[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g):"",h=h?h[1]:"",d+='<li><a class="item" aria-label="'+c+'" href="'+l+'"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: '+f+'"></div></div></div><div class="itmTtl"><span>'+(p||c)+'</span> '+(_?'<span class="apVM">v'+_+(g?' • '+g:"")+'</span>':"")+(m?'<div class="apAM"><span class="apk" data-text="'+m+'"></span>'+(h?'<span class="mod" data-text="'+h+'"></span>':"")+'</div>':"")+'</div></a></li>'}catch(t){}}),n.querySelector("ul").innerHTML=d;try{t._f.laZy(true,true)}catch(t){}})(o,e):e.style.display='none'})},t.Defer(t._f.psByLabel,0)),t._AR.is.Id&&t.domCL(()=>{var l,d;t._AR.fs.pgSa.enable&&(l=t,d=t.document,l.InfiniteScroll=function(t){function u(t,e){return(e=e||d).querySelectorAll(t)}function b(t){return undefined!==t}function v(t,e){if(b(j[t]))for(var s in j[t])j[t][s](e)}function A(){return L.innerHTML=$.text.loading,P=true,T?(aCls(D,$.state.loading),v('loading',[$]),void S(T,function(t,s){D.className=M+" "+$.state.load,(w=d.createElement('div')).innerHTML=t;var p=u('title',w),_=u($.target.post,w),m=u($.target.anchors+" "+$.target.anchor,w),g=u($.target.post,I);if(p=p&&p[0]?p[0].innerHTML:"",_.length&&g.length){var h=g[g.length-1];d.title=p,h.insertAdjacentHTML('afterend'," "),w=d.createElement('div');for(var x=0,b=_.length;b>x;++x)w.appendChild(_[x]);h.insertAdjacentHTML('afterend',w.innerHTML),C(),T=!!m.length&&m[0].href,P=true,v('load',[$,t,s])}},function(t,e){aCls(D,$.state.error),P=true,C(1),v('error',[$,t,e])})):(aCls(D,$.state.loaded),L.innerHTML=$.text.loaded,v('loaded',[$]))}function C(t){if(L.innerHTML="",k){w.innerHTML=$.text[t?'error':'load'];var l=w.firstChild;l.onclick=function(){return 2===$.type&&(k=true),A(),true},L.appendChild(l)}}var $={target:{posts:'.posts',post:'.post',anchors:'.anchors',anchor:'.anchor'},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:(S='infinite-scroll-state-')+'load',loading:S+'loading',loaded:S+'loaded',error:S+'error'}},j={load:[],loading:[],loaded:[],error:[]};($=function t(e,s){for(var a in e=e||{},s)e[a]='object'==typeof s[a]?t(e[a],s[a]):s[a];return e}($,t||{})).on=function(t,e,s){return b(t)?b(e)?void(b(s)?j[t][s]=e:j[t].push(e)):j[t]:j},$.off=function(t,e){b(e)?delete j[t][e]:j[t]=[]};var w=null,S=function(t,e,s){if(l.XMLHttpRequest){var i=new XMLHttpRequest();i.onreadystatechange=function(){if(4===i.readyState){if(200!==i.status)return void(s&&'function'==typeof s&&s(i.responseText,i));e&&'function'==typeof e&&e(i.responseText,i)}},i.open('GET',t),i.send()}},k=1!==$.type,P=true,I=u($.target.posts)[0],L=u($.target.anchors)[0],T=u($.target.anchor,L),B=d.body,D=d.documentElement,M=D.className||"",E=I.offsetTop+I.offsetHeight,R=l.innerHeight,N=0,G=null;if(T.length){T=T[0].href,I.insertAdjacentHTML('afterbegin'," "),w=d.createElement('div'),C();var z=function(){E=I.offsetTop+I.offsetHeight,R=l.innerHeight,N=B.scrollTop||D.scrollTop,P||E>N+R||A()};z(),0!==$.type&&l.addEventListener('scroll',function(){k||(G&&l.clearTimeout(G),G=l.setTimeout(z,200))},true)}return $},t._f.infiniteSc=new InfiniteScroll({type:Number(t._AR.fs.pgSa.run),target:{posts:'.blogPts',post:'.ntry',anchors:'.blogPg',anchor:'.olLnk'},text:{load:'<a class=\'jsLd ripple\' aria-label=\''+t._AR.msg.more+'\' data-text=\''+t._AR.msg.more+'\' href=\'javascript:;\'/>',loading:'<div class=\'jsLd wait nPst\' data-text=\''+t._AR.msg.loading+'\'><svg viewBox=\'0 0 50 50\' x=\'0px\' y=\'0px\'><path d=\'M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\'><animateTransform attributeName=\'transform\' attributeType=\'xml\' dur=\'0.6s\' from=\'0 25 25\' repeatCount=\'indefinite\' to=\'360 25 25\' type=\'rotate\'/></path></svg></div>',loaded:'<div class=\'jsLd nPst ripple\' data-text=\''+t._AR.msg.noRst+"'>"+t._AR.msg.noRst+'</div>',error:'<a class=\'jsLd error\' aria-label=\''+t._AR.msg.more+'\' data-text=\''+t._AR.msg.moreElp+'\' href=\'javascript:;\'/>'}}))}),t.Defer.all('script[type="arjs"]',0),t.Defer.all('script[type="arjs-x"]',0,true),t.Defer.all('script[type="arjs-3"]',3e3),t.Defer.all('script[type="arjs-5"]',5e3),t.Defer.all('script[type="arjs-7"]',7e3),t._f.laZy=(e,s,n)=>{e&&t.Defer.dom('img.lazy:not(.loaded)',100,'loaded',null,{rootMargin:'1px',threshold:.1},['src','srcset','sizes']),s&&t.Defer.dom('div.lazy:not(.loaded)',100,'loaded',null,{rootMargin:'1px',threshold:.1},['style']),n&&t.Defer.dom('iframe.lazy:not(.loaded)',100,'loaded',null,{rootMargin:'1px',threshold:.1},['src','poster'])},t._f.laZy(true,true,true),t.domCL(()=>{undefined!==t._f.infiniteSc&&t._f.infiniteSc.on('load',()=>{undefined!==t._f.sPsAG&&t._f.sPsAG(),undefined!==t._f.cImgAG&&t._f.cImgAG(),undefined!==t._f.psBkm&&t._f.psBkm(),undefined!==t._f.qEdit&&t._f.qEdit(),undefined!==t._f.showCounter&&t._f.showCounter(),t._f.laZy(true,true)})})}catch(t){return true}})(t)})(window);
