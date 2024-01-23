aCss('/*Audio Book Player*/#playerWrp #rpef-ls,#playerWrp #rpef-inf{position:absolute;top:2%;right:4%;height:4em;width:4em;background:var(--bodyC);border-radius:50%;transition:all 0.3s ease-in-out;z-index:6;transition-delay:0.2s;transform:scale(0)}#playerWrp #rpef-ls.active,#playerWrp #rpef-inf.active{transform:scale(30)}#playerWrp #rpef-inf{left:4%}#playerWrp svg:not(.line){fill:var(--bodyC)}#playerWrp.fxd{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:999;min-width:375px}#playerWrp{border-radius:15px;height:30rem;position:relative;box-shadow:1px 1px 10px 2px rgba(0,0,0,.2);overflow:hidden;margin:0 auto;max-width:400px;background:var(--contentB);direction:ltr}#playerWrp[data-show-list="true"] #rpef-ls{transition-delay:0s}#playerWrp[data-show-list="true"] .plyls-cont{pointer-events:initial}#playerWrp[data-show-list="true"] .plyls-cont .ls-cont{opacity:1;transition-delay:0.35s}#playerWrp[data-show-info="true"] #rpef-inf{transition-delay:0s}#playerWrp[data-show-info="true"] .inf-cont{pointer-events:initial}#playerWrp[data-show-info="true"] .inf-cont .inf-wrp{opacity:1;transition-delay:0.35s}#playerWrp .toolbar .list-icon,#playerWrp .toolbar .info-icon{font-size:16px;display:flex;justify-content:flex-end;position:absolute;top:10px;right:10px;color:var(--bodyB);z-index:8;opacity:.8;cursor:pointer;padding:10px;background:var(--transB);border-radius:50%}#playerWrp .toolbar div:hover{opacity:1}#playerWrp .toolbar div:hover svg{fill:var(--linkC)}#playerWrp .toolbar svg,#playerWrp .toolbar svg{width:18px;height:18px}#playerWrp .toolbar #close{position:absolute;top:-30px;left:50%;z-index:8;transform:translate(-50%,-100%);transition:all 0.3s;opacity:.7;background:var(--bodyB);padding:5px;display:flex;border-radius:50%}#playerWrp .toolbar #close.show{transform:translate(-50%,0);top:15px}#playerWrp .toolbar #close i{display:flex;height:30px;width:30px;flex-direction:column;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;transition:background-color 0.3s}#playerWrp .toolbar .info-icon{left:10px;right:unset}#playerWrp .inf-cont{height:inherit;width:inherit;border-radius:inherit;position:absolute;display:flex;flex-direction:column;color:var(--bodyB);align-items:center;padding:55px 20px 20px;pointer-events:none;z-index:6;left:0;top:0}#playerWrp .inf-cont .inf-wrp{opacity:0;overflow:auto;transition:all 0.2s;padding-right:1.5em;line-height:1.7em}#playerWrp .inf-cont .inf-wrp::-webkit-scrollbar{width:4px;height:4px}#playerWrp .inf-cont .inf-wrp::-webkit-scrollbar-thumb{background:var(--linkC);border-radius:.3rem}#playerWrp .inf-cont .inf-wrp::-webkit-scrollbar-track{background:transparent}#playerWrp .inf-cont .inf-wrp{scrollbar-face-color:var(--linkC);scrollbar-track-color:transparent;scrollbar-width:thin;scrollbar-color:var(--linkC) var(--bodyB)}#playerWrp .inf-cont .inf-wrp p{margin:0;margin-bottom:1.4em}#playerWrp .plyls-cont{height:inherit;width:100%;position:absolute;display:flex;flex-direction:column;color:var(--bodyB);align-items:center;padding:55px 20px 20px;pointer-events:none;z-index:6;left:0;top:0}#playerWrp .plyls-cont .ls-cont{font-size:1rem;overflow:auto;width:100%;padding-right:.5em;transition-delay:0;opacity:0;transition:all 0.2s}#playerWrp .plyls-cont .ls-cont::-webkit-scrollbar{width:4px;height:4px}#playerWrp .plyls-cont .ls-cont::-webkit-scrollbar-thumb{background:var(--linkC);border-radius:.3rem}#playerWrp .plyls-cont .ls-cont::-webkit-scrollbar-track{background:transparent}#playerWrp .plyls-cont .ls-cont{scrollbar-width:thin;scrollbar-color:var(--linkC) var(--bodyB)}#playerWrp .plyls-cont .ls-cont .list-item{display:flex;flex-direction:column;cursor:pointer;transition:background ease .5s;padding:6px 12px;border-radius:5px;position:relative;border:1px solid var(--bodyCa)}#playerWrp .plyls-cont .ls-cont .list-item:hover{background:var(--bodyCa);color:var(--white);border-color:transparent}#playerWrp .plyls-cont .ls-cont .list-item.active{background:var(--linkC);color:var(--white);border-color:transparent}#playerWrp .plyls-cont .ls-cont .list-item:not(:last-child){margin-bottom:10px}@keyframes loadLs{0%{background-position:0 0}100%{background-position:4em 0}}#playerWrp .plyls-cont .ls-cont .list-item.active .loading{position:absolute;top:0;left:0;height:100%;width:100%;background-image:repeating-linear-gradient(-70deg,rgba(255,255,255,.3) 0% 30%,rgba(243,156,18,0) 30% 68%,rgba(255,255,255,.3) 68% 100%);background-size:4em 4em;z-index:0;animation:loadLs 3s linear infinite;pointer-events:none}#playerWrp .plyls-cont .ls-cont .list-item>div{z-index:1}#playerWrp .plyls-cont .ls-cont .list-item>.ttl::before{content:"# ";opacity:.7}#playerWrp .plyls-cont .ls-cont .list-item .meta{display:flex;justify-content:space-between;font-size:80%;opacity:.8;line-height:22px}#playerWrp .plyr-cont{height:inherit;width:inherit;border-radius:inherit;display:flex;flex-direction:column;color:var(--bodyC);align-items:center;font-size:1.5rem;padding:20px}#playerWrp .plyr-cont .ttl{font-size:16px;font-weight:700;white-space:nowrap;text-transform:capitalize;margin:0}#playerWrp .ttl::after{display:none}#playerWrp .plyr-cont .author{font-size:12px;text-align:center;text-transform:capitalize}#playerWrp .plyr-cont .cover-wrp{position:relative;height:8em;width:8em;margin:15px 0}#playerWrp .plyr-cont .cover-wrp .prev-next{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;z-index:5;display:flex;justify-content:space-around;align-items:center}#playerWrp .plyr-cont .cover-wrp .prev-next:hover{background-color:rgba(255,255,255,.1)}#playerWrp .plyr-cont .cover-wrp .prev-next div.disabled{opacity:.5;cursor:default}#playerWrp .plyr-cont .cover-wrp .prev-next div{border-radius:50%;background-color:var(--transB);display:flex;justify-content:center;align-items:center;padding:15px;cursor:pointer;transition:all 0.2s;font-size:1.5em;position:relative}#playerWrp .plyr-cont .cover-wrp .prev-next .next{right:-100px}#playerWrp .plyr-cont .cover-wrp .prev-next .prev{left:-100px}#playerWrp .plyr-cont .cover-wrp .prev-next div:hover:not(.disabled) svg{fill:var(--linkC)}#playerWrp .plyr-cont .cover-wrp #spectrum{height:calc(100% + 20px);width:calc(100% + 20px);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#playerWrp .plyr-cont .cover-wrp #spectrum polygon{stroke:var(--linkC);stroke-width:.1em;fill:transparent}#playerWrp .plyr-cont .cover-wrp .cover{overflow:hidden;height:100%;width:100%;border-radius:50%;flex-shrink:0}#playerWrp .plyr-cont .cover-wrp .cover img{max-width:100%;filter:sepia(.5) saturate(2);transition:all 0.2s}#playerWrp .plyr-cont .chapter{font-size:16px;margin:7px 0 0}#playerWrp .plyr-cont .audio-bar-wrap{display:flex;flex-direction:column;width:100%;margin:5px 0 0}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont{position:relative;padding:.3rem 0}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont:hover .handle{transform:translate(-50%,-50%) scale(1)}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont .bar{width:100%;height:7px;background-color:var(--contentL);border-radius:15px;position:relative;overflow:hidden}@keyframes loading{0%{background-position:0 0}100%{background-position:.6em 0}}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont .bar .loading{position:absolute;top:0;left:0;height:100%;width:100%;background-image:repeating-linear-gradient(-55deg,rgba(255,255,255,.3) 0% 30%,rgba(243,156,18,0) 30% 68%,rgba(255,255,255,.3) 68% 100%);background-size:.6em .4em;z-index:5;animation:loading 1s linear infinite}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont .bar .played{position:absolute;z-index:3;background-color:var(--linkC);height:100%;left:0}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont .bar .buffered{background-color:var(--linkC);display:inline-block;height:100%;position:absolute;z-index:2;opacity:.5}#playerWrp .plyr-cont .audio-bar-wrap .audio-bar-cont .handle{height:.6em;width:.6em;border-radius:50%;cursor:pointer;background-color:var(--bodyC);position:absolute;transform:translate(-50%,-50%) scale(0);top:50%;z-index:4;transition:transform 0.3s}#playerWrp .plyr-cont .audio-bar-wrap .time-cont{display:flex;justify-content:space-between;font-size:12px}#playerWrp .plyr-cont .options{display:flex;font-size:13px;justify-content:center;align-items:center;position:relative;top:-16px}#playerWrp .plyr-cont .options .repeat svg{width:14px;height:14px}#playerWrp .plyr-cont .options div{cursor:pointer;transition:all 0.2s;border-radius:50%;height:32px;width:32px;display:flex;justify-content:center;align-items:center;background:var(--transB);margin:0 10px}#playerWrp .plyr-cont .options div.repeat i{font-size:1.5em}#playerWrp .plyr-cont .options div.inactive{opacity:.3;cursor:default}#playerWrp .plyr-cont .options div.active svg{fill:var(--linkC)}#playerWrp .plyr-cont .options div:hover:not(.active){color:var(--linkC)}#playerWrp .plyr-cont .options div:hover:not(.active) svg:not(.line){fill:var(--linkC)}#playerWrp .plyr-cont .options div:hover.active svg:not(.line){fill:var(--bodyC)}#playerWrp .plyr-cont .controls{display:flex;font-size:13px;justify-content:space-between;width:100%;align-items:center}#playerWrp .plyr-cont .controls .play-pause{height:45px;width:45px;border-radius:50%}#playerWrp .plyr-cont .controls div{cursor:pointer;transition:all 0.2s;border-radius:10px;display:flex;justify-content:center;align-items:center;background-color:var(--transB);font-weight:700;font-size:12px;padding:0 10px}#playerWrp .plyr-cont .controls div.inactive{opacity:.5;cursor:default}#playerWrp .plyr-cont .controls div:hover:not(.inactive){color:var(--linkC)}#playerWrp .plyr-cont .controls div:hover:not(.inactive) svg:not(.line){fill:var(--linkC)}#playerWrp #err-box{background-color:var(--bodyC);padding:7px 15px;position:absolute;bottom:10%;width:calc(100% - 40px);left:50%;border-radius:30px;transition:all 0.3s;transform:translate(-50%,50%) scale(0);pointer-events:none;color:var(--bodyB);text-align:center}#playerWrp #err-box.show{transform:translate(-50%,50%) scale(1)}'),geId("AudioBookPlayer").innerHTML="<div id='playerWrp' :data-show-list=\"(show_list) ? 'true' : 'false'\" :data-show-info=\"(show_info) ? 'true' : 'false'\"><div id='rpef-ls' :class=\"{active: show_list == true}\"></div><div class='toolbar'><div id='rpef-inf' :class=\"{active: show_info == true}\"></div><div id='close' :class=\"{show: show_list == true || show_info == true}\" @click='show_list = false; show_info = false'><svg viewBox=\"0 0 320 512\"><path d=\"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z\"/></svg></div><div class='list-icon' @click='show_list = !show_list' v-if='show_list == false && show_info == false'><svg viewBox=\"0 0 512 512\"><path d=\"M31.97 255.1h224.1C273.7 255.1 288 241.7 288 224s-14.32-32.02-31.97-32.02H31.97C14.32 191.1 0 206.3 0 223.1S14.32 255.1 31.97 255.1zM31.97 127.1h224.1C273.7 127.1 288 113.6 288 95.99c0-17.65-14.32-32.01-31.97-32.01H31.97C14.32 63.98 0 78.31 0 95.97S14.32 127.1 31.97 127.1zM128 319.1H31.97C14.32 319.1 0 334.3 0 351.1s14.32 32.02 31.97 32.02H128C145.7 383.1 160 369.7 160 352S145.7 319.1 128 319.1zM471 1.323l-96.63 28.5C361.1 33.95 352 46.33 352 60.33v299.7c-15.5-5.251-31.62-8.001-48-8.001c-61.88 0-112 35.88-112 80.01S242.1 512 304 512s112-35.88 112-80.01V148.1l73-21.38C502.6 122.7 512 110.2 512 95.96V31.96c0-10.13-4.75-19.64-12.88-25.64C491.1 .323 480.6-1.552 471 1.323z\"/></svg></div><div class='info-icon' @click='show_info = !show_info' v-if='show_list == false && show_info == false'><svg viewBox=\"0 0 512 512\"><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z\"/></svg></div></div><div class='inf-cont'><div class='inf-wrp' v-html='arBookPlayer.list_audio[audio_index].desc'></div></div><div class='plyls-cont'><div class='ls-cont'><div class='list-item' v-for='(c, i) in arBookPlayer.list_audio' @click='audio_index = i' :class=\"{active: audio_index == i}\"><div class='loading' v-if='is_loading == true'></div><div class=\"ttl\">{{c.name}}</div><div class='meta'><span class=''>{{c.artist}}</span><span class=''>{{c.duration}}</span></div></div></div></div><div class='plyr-cont'><div class=\"ttl-container\"><div class=\"ttl\">{{arBookPlayer.title}}</div><div class=\"author\">{{arBookPlayer.list_audio[audio_index].artist}}</div></div><div class=\"cover-wrp\"><div class='prev-next'><div class='prev' :class=\"{disabled: audio_index <= 0}\" @click='playPrev'><svg viewBox=\"0 0 512 512\"><path d=\"M459.5 71.41l-171.5 142.9v83.45l171.5 142.9C480.1 457.7 512 443.3 512 415.1V96.03C512 68.66 480.1 54.28 459.5 71.41zM203.5 71.41L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c20.63 17.12 52.51 2.749 52.51-24.62v-319.9C255.1 68.66 224.1 54.28 203.5 71.41z\"/></svg></div><div class='next' :class=\"{disabled: audio_index >= arBookPlayer.list_audio.length - 1}\" @click='playNext'><svg viewBox=\"0 0 512 512\"><path d=\"M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z\"/></svg></div></div><spectrum :pins='normlizeAudioPins' v-on:avarage=\"updateAvarage($event)\"></spectrum><div class='cover' :style='coverArtTransition'><img :src=\"arBookPlayer.list_audio[audio_index].cover\"/></div></div><div class=\"chapter\">{{arBookPlayer.list_audio[audio_index].name}}</div><div class=\"audio-bar-wrap\"><div class=\"audio-bar-cont\" @mousedown='barClick'><div class=\"bar\" ref='bar'><span class='loading' v-if='is_loading == true'></span><span class='played' :style=\"{width:handlePosition}\"></span><span class='buffered' v-for='b in buffered' :style=\"{left: b.left, width: b.width}\"></span></div><div class=\"handle\" id='handle' :style=\"{left: handlePosition}\"></div></div><div class=\"time-cont\"><div class=\"current\">{{currentTime}}</div><div class=\"end\">{{endTime}}</div></div></div><div class='options'><div class='speed' @click=\"toggleSpeed\"> {{speed}}x </div><div class='repeat' @click=\"repeat = !repeat\" :class=\"{active: repeat == true}\"><svg viewBox=\"0 0 512 512\"><path d=\"M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z\"/></svg></div><div class=\"auto-playlist\" @click=\"list_play = !list_play\" :class=\"{active: list_play == true}\"><svg viewBox=\"0 0 24 24\"><path d=\"M14.016 14.016l4.969 3-4.969 3v-6zM3.984 14.016h8.016v1.969h-8.016v-1.969zM3.984 6h12v2.016h-12v-2.016zM3.984 9.984h12v2.016h-12v-2.016z\"></path></svg></div></div><div class='controls'><div class=\"dec-minute\" @click=\"moveAudio('decrease', '60')\" :class='{inactive: current_time < 60}'>-1m</div><div class=\"dec-seconds\" @click=\"moveAudio('decrease', '30')\" :class='{inactive: current_time < 30}'>-30s</div><div class=\"play-pause\" @click='playAudio()'><svg v-if='is_playing == false' viewBox=\"0 0 512 512\"><path d=\"M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z\"/></svg><svg v-if='is_playing == true' viewBox=\"0 0 320 512\"><path d=\"M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z\"/></svg></div><div class=\"inc-seconds\" @click=\"moveAudio('increase', '30')\" :class='{inactive: leftTime < 30}'>+30s</div><div class=\"inc-minute\" @click=\"moveAudio('increase', '60')\" :class='{inactive: leftTime < 60}'>+1m</div></div></div><div id='err-box' :class=\"{show: is_error == true}\">{{this.error_msg}}</div></div>",geId("AudioBookPlayer").insertAdjacentHTML("afterend",'<template id="spectrum-tmp"><svg id="spectrum"><polygon x="0" y="0" :points="points"></polygon></svg></template>'),arBookPlayer.pos_fixed&&aCls("#playerWrp","fxd"),Vue.component("spectrum",{template:"#spectrum-tmp",props:["pins"],data:function(){return{radius:50,adjust:0,avarage:0,cover_art:null}},mounted:function(){const i=this.$el.getBoundingClientRect().width,t=100*i/130;this.adjust=(i-t)/2,this.radius=t/2},methods:{valueToPoint:function(i,t){let r=360*t/this.total-90;return r=r*Math.PI/180,`${Math.cos(r)*(this.radius+i)+this.radius+this.adjust},${Math.sin(r)*(this.radius+i)+this.radius+this.adjust}`}},computed:{points:function(){let i=0;const t=this.pins.map(((t,r)=>(i+=t,this.valueToPoint(t,r)))).join(" ");return this.$emit("avarage",i/this.total),t},total:function(){return this.pins.length}}}),new Vue({el:"#AudioBookPlayer",data:{handle_clicked:!1,handle_position:0,bar:null,is_playing:!1,is_loading:!0,is_error:!1,error_timeout:null,error_msg:"",audio_obj:null,audio_index:0,duration:0,current_time:0,audio_pins:[],analyser:null,data_array:[],buffered:[],speed:1,repeat:!1,repeat_count:arBookPlayer.repeat_count,list_play:!1,show_list:!1,arBookPlayer:arBookPlayer,show_info:!1,cover_art_avarage:0},mounted:function(){this.bar=this.$refs.bar.getBoundingClientRect(),this.$refs.handle,document.addEventListener("mousedown",this.mouseDown),document.addEventListener("mouseup",(i=>this.handle_click=!1)),document.addEventListener("mousemove",this.moveHandler),window.addEventListener("resize",this.resizeHandler),this.audio_obj=new Audio(this.arBookPlayer.list_audio[this.audio_index].source),this.audio_obj.crossOrigin="anonymous",this.audio_obj.src=this.arBookPlayer.list_audio[this.audio_index].source,this.audio_obj.load(),this.audio_obj.addEventListener("loadeddata",(()=>{this.duration=this.audio_obj.duration})),this.audio_obj.addEventListener("ended",this.onEnded),this.audio_obj.addEventListener("progress",this.onProgress),this.audio_obj.addEventListener("loadedmetadata",this.onProgress),this.audio_obj.addEventListener("playing",(i=>this.is_playing=!0)),this.audio_obj.addEventListener("pause",(i=>this.is_playing=!1)),this.audio_obj.addEventListener("canplay",(i=>this.is_loading=!1)),this.audio_obj.addEventListener("seeking",(i=>this.is_loading=!0)),this.audio_obj.onerror=this.onError},methods:{onError:function(){let i=this.audio_obj.error.code+": "+this.audio_obj.error.message;console.error("ERROR",i),this.is_error=!0,this.error_msg=i,this.is_playing=!1,this.is_loading=!1,clearTimeout(this.error_timeout),this.error_timeout=setTimeout((()=>{this.is_error=!1,this.error_msg=""}),3500)},onEnded:function(i){if(this.audio_obj.currentTime=0,this.repeat&&this.repeat_count>0)return this.audio_obj.play(),void(this.repeat_count=this.repeat_count-1);if(1==this.repeat_count&&(this.repeat_count=0),this.list_play){const i=this.audio_index+1;i<this.arBookPlayer.list_audio.length&&(this.audio_index=i)}else this.is_playing=!1,this.repeat=!1},onProgress:function(i){const t=100/this.duration,r=[];for(var e=0;e<this.audio_obj.buffered.length;e++){const i=this.audio_obj.buffered.start(e),o=this.audio_obj.buffered.end(e),a={};a.left=t*i+"%",a.width=t*(o-i)+"%",r.push(a)}this.buffered=r},updateAvarage:function(i){this.cover_art_avarage=i},timeUpdated:function(){this.current_time=this.audio_obj.currentTime,this.analyser.getByteTimeDomainData(this.data_array),this.audio_pins=Array.from(this.data_array),requestAnimationFrame(this.timeUpdated)},playNext:function(){const i=this.audio_index+1;i>=this.arBookPlayer.list_audio.length||(this.audio_index=i)},playPrev:function(){const i=this.audio_index-1;i<0||(this.audio_index=i)},initAnalyser:function(){const i=new AudioContext;this.analyser=i.createAnalyser();const t=i.createMediaElementSource(this.audio_obj);this.analyser.minDecibels=-90,this.analyser.maxDecibels=-10,this.analyser.smoothingTimeConstant=.75,this.analyser.fftSize=128,t.connect(this.analyser),this.analyser.connect(i.destination);const r=this.analyser.frequencyBinCount;this.data_array=new Uint8Array(r)},playAudio:function(){this.is_playing?this.audio_obj.pause():this.audio_obj.play(),null==this.analyser&&(this.initAnalyser(),requestAnimationFrame(this.timeUpdated))},toggleSpeed:function(){const i=["0.5","0.7","1","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2"];let t=i.indexOf(this.speed.toString())+1;t>i.length-1&&(t=0),this.speed=parseFloat(i[t]),this.audio_obj.playbackRate=this.speed},barClick:function(i){const t=(i.clientX-this.bar.x)*this.duration/this.bar.width;this.audio_obj.currentTime=t,this.handle_click=!0},mouseDown:function(i){"handle"==i.target.id&&(this.handle_click=!0)},resizeHandler:function(){this.bar=this.$refs.bar.getBoundingClientRect()},formatSeconds:function(i){var t=Math.floor(i/3600),r=Math.floor((i-3600*t)/60),e=Math.floor(i-3600*t-60*r);return r<10&&(r="0"+r),e<10&&(e="0"+e),r+":"+e},moveHandler:function(i){let t=this.bar.width,r=this.bar.x;if(this.bar.right,this.handle_click){let e=i.clientX-r;e<0&&(e=0),e>t&&(e=t),this.current_time=e*this.duration/t,this.audio_obj.currentTime=this.current_time}},moveAudio:function(i,t){let r=this.current_time;switch(t=parseInt(t),i){case"increase":r+=t;break;case"decrease":r-=t}(r>this.duration||r<0)&&(r=this.current_time),this.audio_obj.currentTime=r},updateAudio:function(i){}},computed:{endTime:function(){return this.formatSeconds(this.duration)},currentTime:function(){return this.formatSeconds(this.current_time)},handlePosition:function(){return 100*this.current_time/this.duration+"%"},leftTime:function(){return this.duration-this.current_time},maxAudioPin:function(){return this.audio_pins.slice().sort(((i,t)=>t-i)).slice(0,1)},normlizeAudioPins:function(){return this.audio_pins.map((i=>20*i/this.maxAudioPin))},info:function(){return`<p>${this.arBookPlayer.info.join("</p><p>")}</p>`},coverArtTransition:function(){let i=100*this.cover_art_avarage/20/100;return i<.98&&(i=.98),{transform:`scale(${i})`}},currentLink:function(){this.audio_obj.src=this.arBookPlayer.list_audio[this.audio_index].source}},watch:{audio_index:function(i,t){this.audio_obj.src=this.arBookPlayer.list_audio[i].source,this.audio_obj.play(),this.is_loading=!0}}});