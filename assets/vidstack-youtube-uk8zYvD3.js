import{ad as k,z as f,av as r,aw as v,e as p,ai as b,k as $,ax as E,ao as u,ay as T}from"./vidstack-sKeoTFgw-_Ta1ian_.js";import{E as G,t as m}from"./vidstack-cgu9mlil-lrWhH4rR.js";import"./app-19JvA6l1.js";const o={Qj:-1,Ue:0,Ve:1,Mg:2,Ng:3,Og:5},h=class h extends G{constructor(){super(...arguments),this.$$PROVIDER_TYPE="YOUTUBE",this.scope=k(),this.N=f(""),this.mc=-1,this.nc=-1,this.Fa=0,this.Ga=new r(0,0),this.V=null,this.E=null,this.G=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.V}get type(){return"youtube"}get videoId(){return this.N()}preconnect(){const t=[this.eb(),"https://www.google.com","https://i.ytimg.com","https://googleads.g.doubleclick.net","https://static.doubleclick.net"];for(const s of t)v(s,"preconnect")}setup(t){this.b=t,super.setup(t),p(this.kd.bind(this)),p(this.ld.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;if(b(t))return this.E||(this.E=m(()=>{if(this.E=null,t())return"Timed out."}),this.q("playVideo")),this.E.promise}async pause(){const{paused:t}=this.b.$state;if(!b(t))return this.G||(this.G=m(()=>{this.G=null,t()}),this.q("pauseVideo")),this.G.promise}setMuted(t){t?this.q("mute"):this.q("unMute")}setCurrentTime(t){this.q("seekTo",t)}setVolume(t){this.q("setVolume",t*100)}setPlaybackRate(t){this.q("setPlaybackRate",t)}async loadSource(t){var e;if(!$(t.src)){this.V=null,this.N.set("");return}const s=(e=t.src.match(h.jd))==null?void 0:e[1];this.N.set(s??""),this.V=t}eb(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}kd(){this.H();const t=this.N();if(!t){this.cb.set("");return}this.cb.set(`${this.eb()}/embed/${t}`)}ld(){const t=this.N(),s=h.We;if(!t)return;if(s.has(t)){const a=s.get(t);this.c("poster-change",a);return}const e=new AbortController;return this.Pg(t,e),()=>{e.abort()}}async Pg(t,s){try{const e=["maxresdefault","sddefault","hqdefault"];for(const a of e)for(const c of[!0,!1]){const i=this.Qg(t,a,c);if((await fetch(i,{mode:"no-cors",signal:s.signal})).status<400){h.We.set(t,i),this.c("poster-change",i);return}}}catch{}this.c("poster-change","")}Qg(t,s,e){return`https://i.ytimg.com/${e?"vi_webp":"vi"}/${t}/${s}.${e?"webp":"jpg"}`}Te(){const{keyDisabled:t}=this.b.$props,{$iosControls:s}=this.b,{controls:e,muted:a,playsinline:c}=this.b.$state,i=e()||s();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:i?1:void 0,color:this.color,controls:i?1:0,disablekb:!i||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:i?1:3,mute:a()?1:0,playsinline:c()?1:0}}q(t,s){this.gd({event:"command",func:t,args:s?[s]:void 0})}lc(){window.setTimeout(()=>this.gd({event:"listening"}),100)}md(t){this.b.delegate.jc(void 0,t)}Aa(t){var s;(s=this.G)==null||s.resolve(),this.G=null,this.c("pause",void 0,t)}Eb(t,s){const{duration:e,currentTime:a}=this.b.$state,c=this.mc===o.Ue?e():t,i={currentTime:c,played:this.Fa>=c?this.Ga:this.Ga=new r(0,this.Fa=t)};this.c("time-update",i,s),Math.abs(c-a())>1&&this.c("seeking",c,s)}ic(t,s,e){const a={buffered:new r(0,t),seekable:s};this.c("progress",a,e);const{seeking:c,currentTime:i}=this.b.$state;c()&&t>i()&&this.bb(e)}bb(t){const{paused:s,currentTime:e}=this.b.$state;window.clearTimeout(this.nc),this.nc=window.setTimeout(()=>{this.c("seeked",e(),t),this.nc=-1},s()?100:0)}Db(t){const{seeking:s}=this.b.$state;s()&&this.bb(t),this.c("end",void 0,t)}Rg(t,s){var i;const{paused:e}=this.b.$state,a=t===o.Ve,c=t===o.Ng;switch(c&&this.c("waiting",void 0,s),e()&&(c||a)&&((i=this.E)==null||i.resolve(),this.E=null,this.c("play",void 0,s)),t){case o.Og:this.md(s);break;case o.Ve:this.c("playing",void 0,s);break;case o.Mg:this.Aa(s);break;case o.Ue:this.Db(s);break}this.mc=t}hd({info:t},s){var i;if(!t)return;const{title:e,duration:a,playbackRate:c}=this.b.$state;if(E(t.videoData)&&t.videoData.title!==e()&&this.c("title-change",t.videoData.title,s),u(t.duration)&&t.duration!==a()){if(u(t.videoLoadedFraction)){const n=((i=t.progressState)==null?void 0:i.loaded)??t.videoLoadedFraction*t.duration,l=new r(0,t.duration);this.ic(n,l,s)}this.c("duration-change",t.duration,s)}if(u(t.playbackRate)&&t.playbackRate!==c()&&this.c("rate-change",t.playbackRate,s),t.progressState){const{current:n,seekableStart:l,seekableEnd:y,loaded:w,duration:d}=t.progressState;this.Eb(n,s),this.ic(w,new r(l,y),s),d!==a()&&this.c("duration-change",d,s)}if(u(t.volume)&&T(t.muted)){const n={muted:t.muted,volume:t.volume/100};this.c("volume-change",n,s)}u(t.playerState)&&t.playerState!==this.mc&&this.Rg(t.playerState,s)}H(){this.mc=-1,this.nc=-1,this.Fa=0,this.Ga=new r(0,0),this.E=null,this.G=null}};h.jd=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,h.We=new Map;let g=h;export{g as YouTubeProvider};
