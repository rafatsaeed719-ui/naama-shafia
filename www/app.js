{
const SVG={
edu:'<path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5"/>',
health:'<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/><path d="M12 9v5M9.5 11.5h5"/>',
needs:'<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
church:'<path d="M12 2v4M10 4h4"/><path d="M6 21V11l6-4 6 4v10"/><path d="M10 21v-4a2 2 0 014 0v4"/>',
social:'<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2.5 20c.5-3 3-5 5.5-5s5 2 5.5 5M10.5 20c.5-3 3-5 5.5-5s5 2 5.5 5"/>',
home:'<path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z"/>',
money:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
bell:'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 20a2 2 0 004 0"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
gift:'<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12M12 9c-2-4-6-4-6-1.5S10 9 12 9zm0 0c2-4 6-4 6-1.5S14 9 12 9z"/>',
cross:'<path d="M12 3v18M6 9h12"/>',
img:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 18l6-5 4 3 3-2 5 4"/>',
flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>'};
SVG.check='<path d="M4 12l5 5L20 6"/>';SVG.walk='<circle cx="13" cy="4" r="2"/><path d="M10 21l2-6 3 3v3M9 12l2-4 4 2 2 3M11 8l-3 3-2 1"/>';SVG.inbox='<path d="M3 13l3-8h12l3 8v6H3z"/><path d="M3 13h5l1 3h6l1-3h5"/>';SVG.pin='<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>';SVG.team='<circle cx="9" cy="8" r="3.5"/><path d="M2 20c.6-3.5 3.5-6 7-6s6.4 2.5 7 6"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14c2 .8 3.5 3 4 6"/>';
const CFG=window.NAAMA_CONFIG||{};
const FB_ON=!!(CFG.firebase&&CFG.firebase.apiKey&&window.firebase);
const ADMIN_PH=CFG.adminPhones||[];
const LOGO='logo.jpg';
const COL={blue:['#7cc3f2','#1f5fae','#123f78'],red:['#ff9d9d','#d64545','#952b2b'],orange:['#ffc07a','#e0702b','#a24b15'],purple:['#c2a6f7','#6b45c4','#47288f'],teal:['#7fe6e2','#169494','#0d6464'],green:['#86e0ad','#1f8a55','#125e39'],gold:['#ffe07a','#d6a019','#94690c']};
const DEFC={edu:'blue',health:'red',needs:'orange',church:'purple',social:'teal'};
const ICONS=[['edu','تعليم'],['health','صحة'],['needs','احتياجات'],['church','كنيسة'],['social','اجتماعية'],['star','نجمة'],['gift','هدية'],['cross','صليب'],['flag','نشاط']];
const COLS=[['blue','أزرق'],['red','أحمر'],['orange','برتقالي'],['purple','بنفسجي'],['teal','تركواز'],['green','أخضر'],['gold','ذهبي']];
const VIS={team:'كل فريق القطاع',mgr:'أنا والمدير بس',me:'أنا بس'};
const ROLE={admin:'المدير العام',lead:'مسؤول القطاع',servant:'خادم'};
const ic=(k,s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SVG[k]||SVG.social}</svg>`;
const ic3=(k,c,sz)=>{const p=COL[c||DEFC[k]||'blue']||COL.blue;return`<span class="ico${sz?' '+sz:''}" style="--c1:${p[0]};--c2:${p[1]};--c3:${p[2]}">${ic(k,sz==='lg'?32:sz==='sm'?20:26)}</span>`};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const fmt=n=>Number(n||0).toLocaleString('ar-EG')+' ج';
const pad=n=>String(n).padStart(2,'0');
const loc=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today=()=>loc(new Date());
const rel=(days,h=18)=>{const d=new Date();d.setDate(d.getDate()+days);return`${loc(d)}T${pad(h)}:00`};
const MONTHS=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const dt=s=>{if(!s)return'';const d=new Date(s);if(isNaN(d))return'';return`${d.getDate()} ${MONTHS[d.getMonth()]}`+(String(s).includes('T')?` · ${d.toLocaleTimeString('ar-EG',{hour:'numeric',minute:'2-digit'})}`:'')};
const normPh=p=>String(p||'').replace(/[^\d]/g,'').replace(/^20(?=1)/,'0').replace(/^(?=1\d{9}$)/,'0');
const waNum=p=>{p=normPh(p);return p.startsWith('0')?'2'+p:p};
const wa=(p,t='')=>`https://wa.me/${waNum(p)}${t?'?text='+encodeURIComponent(t):''}`;
const clean=o=>JSON.parse(JSON.stringify(o));
const isNative=()=>!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());

/* ================= البيانات ================= */
const CS=['users','sectors','people','ledger','acts','visits','tasks','reqs','events','notifs','media'];
let D={};CS.forEach(c=>D[c]=[]);
let ME=null,AUTH_READY=!FB_ON,fdb=null,fauth=null,unsubs=[];

function seed(){
 const u=(name,phone,role,sector)=>({id:uid(),name,phone,role,sector,approved:true,at:Date.now()});
 const sc=(name,icon,order)=>({id:uid(),name,icon,color:DEFC[icon],order});
 const S=[sc('خدمة التعليم','edu',1),sc('خدمة الصحة','health',2),sc('خدمة الاحتياجات','needs',3),sc('خدمة الكنائس','church',4),sc('خدمة اجتماعية','social',5)];
 const [e,h,n,c,so]=S;
 const U=[u('المدير',ADMIN_PH[0]||'01207760898','admin',''),u('مينا عادل','01001234567','lead',e.id),u('مريم سمير','01112345678','servant',e.id),u('د. كيرلس منير','01223456789','lead',h.id),u('مارينا عادل','01055667788','servant',h.id),
  u('أبانوب رأفت','01098765432','lead',n.id),u('أبونا يوحنا','01511112222','lead',c.id),u('سارة ماهر','01033334444','lead',so.id),{...u('جون مجدي','01277788899','servant',e.id),approved:false}];
 const [ad,mina,mariam,kiro,marina,abanob,yo,sara]=U;
 const pp=(o,sec,by)=>({id:uid(),sector:sec,gender:'',address:'',map:'',guardian:'',gphone:'',notes:'',vis:'team',by,created:Date.now(),updates:[],age:'',edu:'',phone:'',...o});
 const P=[pp({name:'بيتر جرجس',age:13,gender:'ولد',city:'ملوي',address:'شارع الجلاء بجوار المدرسة الإعدادية',edu:'أولى إعدادي',type:'مصاريف دراسية + دروس',guardian:'جرجس فهمي (الأب)',gphone:'01223344556',updates:[{id:uid(),text:'جاب 92% في امتحان أكتوبر، محتاج دروس إنجليزي',at:Date.now()-5*864e5,by:mariam.id}]},e.id,mina.id),
  pp({name:'ماريان فوزي',age:16,gender:'بنت',city:'أبو قرقاص',edu:'أولى ثانوي',type:'كتب خارجية',guardian:'أم ماريان',gphone:'01011223344'},e.id,mina.id),
  pp({name:'يوسف ناجي',age:19,gender:'ولد',city:'المنيا',edu:'جامعة - تجارة',type:'مصاريف جامعة',vis:'mgr'},e.id,mina.id),
  pp({name:'أم مينا',age:62,city:'ديرمواس',type:'أدوية ضغط وسكر شهرية'},h.id,kiro.id),pp({name:'عم صموئيل',age:70,city:'ملوي',edu:'ابتدائي',type:'عملية مياه بيضاء'},h.id,kiro.id),
  pp({name:'أسرة روماني',city:'مطاي',type:'شنطة غذائية شهرية'},n.id,abanob.id),pp({name:'كنيسة مار جرجس - قرية الشيخ',city:'بني مزار',type:'ترميم سقف'},c.id,yo.id),
  pp({name:'رامي وجيه',age:35,city:'المنيا',edu:'دبلوم صنايع',type:'مشروع صغير (كشك)'},so.id,sara.id)];
 const lg=(sec,k,a,item,d)=>({id:uid(),sector:sec,kind:k,amount:a,item,date:d,note:''});
 const ac=(sec,title,kind,date,place,who,cost,details='')=>({id:uid(),sector:sec,title,kind,date,place,who,cost,details});
 return {users:U,sectors:S,people:P,
  ledger:[lg(e.id,'in',15000,'تبرعات أول الشهر','2026-11-01'),lg(e.id,'out',4200,'مصاريف مدارس','2026-11-05'),lg(e.id,'out',1800,'كتب خارجية','2026-11-10'),lg(h.id,'in',20000,'تبرع عيادة','2026-11-02'),lg(h.id,'out',6500,'أدوية شهرية','2026-11-06'),
   lg(n.id,'in',12000,'تبرعات','2026-11-03'),lg(n.id,'out',7800,'شنط غذائية','2026-11-12'),lg(c.id,'in',30000,'تبرع خاص','2026-11-04'),lg(c.id,'out',18000,'ترميم','2026-11-14'),lg(so.id,'in',10000,'تبرعات','2026-11-01'),lg(so.id,'out',5000,'مساعدة مشروع','2026-11-09')],
  acts:[ac(e.id,'فصل تقوية رياضيات','فصل تقوية','2026-11-22','قاعة الكنيسة','مريم سمير',0,'كل سبت 5 مساءً لطلاب الإعدادي'),ac(h.id,'قافلة طبية','قافلة طبية','2026-11-29','قرية الشيخ','د. كيرلس منير',3000,'كشف باطنة وأطفال + صرف أدوية'),ac(n.id,'توزيع بطاطين الشتاء','توزيع','2026-12-05','مطاي','أبانوب رأفت',6000)],
  visits:[{id:uid(),sector:e.id,pid:P[0].id,sid:mariam.id,at:rel(1,18),note:'متابعة المذاكرة وتسليم الكتب',status:'pending',report:'',by:mina.id},
   {id:uid(),sector:e.id,pid:P[1].id,sid:mariam.id,at:rel(-6,17),note:'زيارة تعارف',status:'done',report:'الأسرة مرحبة، ماريان محتاجة كتب كيمياء',by:mina.id},
   {id:uid(),sector:h.id,pid:P[4].id,sid:marina.id,at:rel(0,19),note:'متابعة بعد الكشف',status:'pending',report:'',by:kiro.id}],
  tasks:[{id:uid(),sector:e.id,title:'تجميع شهادات نص السنة',sid:mariam.id,due:rel(3).slice(0,10),details:'من كل المخدومين في الإعدادي',done:false,by:mina.id}],
  reqs:[{id:uid(),sector:e.id,title:'شراء كتب خارجية لماريان',details:'كيمياء وفيزياء',amount:650,pid:P[1].id,from:mariam.id,status:'pending',reply:'',at:Date.now()-864e5}],
  events:[{id:uid(),title:'يوم روحي لخدام النعمة الشافية',kind:'يوم روحي',place:'بيت خلوة - جبل الطير',start:'2026-11-27T09:00',end:'2026-11-27T17:00',details:'يوم صلاة وتأمل وتجديد لكل خدام القطاعات.',
   items:[{id:uid(),time:'09:00',title:'تسبحة وصلاة باكر',who:'أبونا يوحنا'},{id:uid(),time:'10:30',title:'كلمة: الخدمة بفرح',who:'مينا عادل'},{id:uid(),time:'15:00',title:'ورش القطاعات',who:'مسؤولي القطاعات'}],
   people:[{id:uid(),name:'مينا عادل',phone:'01001234567'},{id:uid(),name:'سارة ماهر',phone:'01033334444'}],sent:[]}],
  notifs:[],media:[]};
}
const LKEY='naama-local-v1';
function loadLocal(){let x;try{x=JSON.parse(localStorage.getItem(LKEY))}catch(e){}
 if(!x||!x.sectors)x=seed();CS.forEach(c=>D[c]=x[c]||[]);D.media=[];
 try{const m=JSON.parse(localStorage.getItem(LKEY+'-me'));if(m)ME=D.users.find(u=>u.id===m)||null}catch(e){}}
const saveLocal=()=>{if(FB_ON)return;try{const{media,...r}=D;localStorage.setItem(LKEY,JSON.stringify(r));localStorage.setItem(LKEY+'-me',JSON.stringify(ME?ME.id:null))}catch(e){}};

/* صور النسخة التجريبية على الجهاز */
let idb=null;
function idbInit(){try{const rq=indexedDB.open('naamaMedia',3);rq.onupgradeneeded=()=>{if(!rq.result.objectStoreNames.contains('m'))rq.result.createObjectStore('m',{keyPath:'id'})};
 rq.onsuccess=()=>{idb=rq.result;const g=idb.transaction('m').objectStore('m').getAll();g.onsuccess=()=>{D.media=g.result.filter(m=>m.blob).map(m=>{const{blob,...r}=m;return{...r,url:URL.createObjectURL(blob)}});draw()}}}catch(e){}}

async function put(c,o){
 if(!o.id)o.id=uid();
 const i=D[c].findIndex(x=>x.id===o.id);if(i>=0)D[c][i]=o;else D[c].push(o);
 if(FB_ON){const{id,_blob,...r}=o;try{await fdb.collection(c).doc(id).set(clean(r))}catch(e){console.warn(c,e);toast('مقدرتش أحفظ: مفيش صلاحية أو مفيش نت')}}
 else{if(c==='media'&&idb&&o._blob){try{const{url,_blob,...r}=o;idb.transaction('m','readwrite').objectStore('m').put({...r,blob:_blob})}catch(e){}}else if(c==='media'&&idb){try{const st=idb.transaction('m','readwrite').objectStore('m');const g=st.get(o.id);g.onsuccess=()=>{if(g.result){const{url,...r}=o;st.put({...g.result,...r})}}}catch(e){}}saveLocal()}
 draw();return o;
}
async function del(c,id){
 D[c]=D[c].filter(x=>x.id!==id);
 if(FB_ON){try{await fdb.collection(c).doc(id).delete()}catch(e){console.warn(e);toast('مقدرتش أحذف')}}
 else{if(c==='media'&&idb)try{idb.transaction('m','readwrite').objectStore('m').delete(id)}catch(e){};saveLocal()}
 draw();
}
async function upload(file){
 if(!FB_ON)return{url:URL.createObjectURL(file),_blob:file};
 const c=CFG.cloudinary||{};const fd=new FormData();fd.append('file',file);fd.append('upload_preset',c.uploadPreset);if(c.folder)fd.append('folder',c.folder);
 const r=await fetch(`https://api.cloudinary.com/v1_1/${c.cloudName}/auto/upload`,{method:'POST',body:fd});const j=await r.json();
 if(!j.secure_url)throw new Error(j.error&&j.error.message||'upload');return{url:j.secure_url};
}

/* ================= Firebase ================= */
const parts={};
function merge(c){const all=[];const seen=new Set();Object.keys(parts).filter(k=>k.startsWith(c+'#')).forEach(k=>parts[k].forEach(x=>{if(!seen.has(x.id)){seen.add(x.id);all.push(x)}}));D[c]=all}
function L(key,q){unsubs.push(q.onSnapshot(s=>{parts[key]=s.docs.map(d=>({id:d.id,...d.data()}));const c=key.split('#')[0];merge(c);if(c==='notifs')onNotifs();if(c==='visits'||c==='tasks')scheduleReminders();draw()},e=>console.warn(key,e.code||e)))}
function stopAll(){unsubs.forEach(u=>{try{u()}catch(e){}});unsubs=[];Object.keys(parts).forEach(k=>delete parts[k]);CS.forEach(c=>D[c]=[])}
function listen(){
 stopAll();const col=c=>fdb.collection(c);const uid=ME.id;
 L('sectors#all',col('sectors'));
 L('users#all',col('users'));
 if(!ME.approved&&ME.role!=='admin')return;
 L('events#all',col('events'));
 L('notifs#me',col('notifs').where('to','array-contains',uid));
 if(ME.phone)L('notifs#ph',col('notifs').where('to','array-contains',ME.phone));
 L('people#by',col('people').where('by','==',uid));
 L('media#by',col('media').where('by','==',uid));
 if(ME.role==='admin'){
  L('notifs#adm',col('notifs').where('to','array-contains','admin'));
  for(const c of['ledger','acts','visits','tasks','reqs'])L(c+'#all',col(c));
  for(const v of['team','mgr']){L('people#'+v,col('people').where('vis','==',v));L('media#'+v,col('media').where('vis','==',v))}
 }else{
  for(const c of['ledger','acts','visits','tasks','reqs'])L(c+'#sec',col(c).where('sector','==',ME.sector));
  L('people#team',col('people').where('sector','==',ME.sector).where('vis','==','team'));
  L('media#sec',col('media').where('sector','==',ME.sector).where('vis','==','team'));
  L('media#gen',col('media').where('sector','==','').where('vis','==','team'));
 }
}
function fbInit(){
 firebase.initializeApp(CFG.firebase);fdb=firebase.firestore();fauth=firebase.auth();
 try{fdb.enablePersistence({synchronizeTabs:true}).catch(()=>{})}catch(e){}
 fdb.collection('sectors').onSnapshot(s=>{if(!ME){D.sectors=s.docs.map(d=>({id:d.id,...d.data()}));draw()}},()=>{});
 fauth.onAuthStateChanged(async u=>{
  if(!u){ME=null;stopAll();AUTH_READY=true;draw();return}
  const ref=fdb.collection('users').doc(u.uid);
  ref.onSnapshot(async d=>{
   const phone=u.email.split('@')[0];
   if(!d.exists){
    if(ADMIN_PH.includes(phone)){await ref.set({name:'المدير',phone,role:'admin',sector:'',approved:true,at:Date.now()});return}
    ME={id:u.uid,name:'',phone,role:'servant',approved:false,missing:true};AUTH_READY=true;draw();return}
   const was=ME&&ME.id===u.uid?JSON.stringify([ME.approved,ME.role,ME.sector]):null;
   ME={id:u.uid,...d.data()};
   if(ADMIN_PH.includes(phone)&&ME.role!=='admin'){ref.update({role:'admin',approved:true});return}
   const now=JSON.stringify([ME.approved,ME.role,ME.sector]);
   AUTH_READY=true;if(was!==now){listen();R={v:'home'}}draw();
  },e=>{console.warn(e);AUTH_READY=true;draw()});
 });
}
const email=p=>normPh(p)+'@naama.app';

/* ================= إشعارات الموبايل ================= */
const LN=()=>isNative()&&window.Capacitor.Plugins&&window.Capacitor.Plugins.LocalNotifications;
const hash=s=>{let h=0;for(const ch of String(s))h=(h*31+ch.charCodeAt(0))|0;return Math.abs(h)%2000000000};
let notifBoot=Date.now();
function seenSet(){try{return new Set(JSON.parse(localStorage.getItem('naama-seen')||'[]'))}catch(e){return new Set()}}
function onNotifs(){
 const n=LN();if(!n||!ME)return;const seen=seenSet();const fresh=D.notifs.filter(x=>mine(x)&&!x.read.includes(me())&&!seen.has(x.id)&&x.at>notifBoot-6e5);
 if(fresh.length){n.schedule({notifications:fresh.slice(0,5).map(x=>({id:hash(x.id),title:x.title,body:x.msg,smallIcon:'ic_stat_naama',iconColor:'#0B2E5E'}))}).catch(()=>{});
  fresh.forEach(x=>seen.add(x.id));try{localStorage.setItem('naama-seen',JSON.stringify([...seen].slice(-300)))}catch(e){}}
}
let remTimer=null;
function scheduleReminders(){clearTimeout(remTimer);remTimer=setTimeout(async()=>{
 const n=LN();if(!n||!ME)return;
 try{const p=await n.getPending();const old=(p.notifications||[]).filter(x=>x.extra&&x.extra.rem);if(old.length)await n.cancel({notifications:old.map(x=>({id:x.id}))})}catch(e){}
 const list=[],now=Date.now();
 D.visits.filter(v=>v.status==='pending'&&v.sid===me()).forEach(v=>{const t=new Date(v.at).getTime()-2*36e5;const p=pOf(v.pid);if(t>now)list.push({id:hash('v'+v.id),title:'تذكير بزيارة',body:`زيارة ${p?p.name:''} الساعة ${dt(v.at).split('·')[1]||''}`,schedule:{at:new Date(t),allowWhileIdle:true},extra:{rem:1}})});
 D.tasks.filter(t=>!t.done&&t.sid===me()&&t.due).forEach(t=>{const d=new Date(t.due+'T09:00');if(d>now)list.push({id:hash('t'+t.id),title:'مهمة النهارده آخر معاد',body:t.title,schedule:{at:d,allowWhileIdle:true},extra:{rem:1}})});
 if(list.length)n.schedule({notifications:list.slice(0,60)}).catch(()=>{});
},800)}

/* ================= صلاحيات ================= */
let R={v:'home'},sheet=null,viewing=null,authTab='in';
const isAdmin=()=>ME&&ME.role==='admin';
const me=()=>ME?ME.id:'';
const sectorsSorted=()=>[...D.sectors].sort((a,b)=>(a.order||99)-(b.order||99)||String(a.name).localeCompare(b.name));
const mySectors=()=>isAdmin()?sectorsSorted():D.sectors.filter(s=>s.id===ME.sector);
const isLead=s=>isAdmin()||(ME.sector===s.id&&ME.role==='lead');
const servantsOf=s=>D.users.filter(u=>u.sector===s.id&&u.approved&&u.role!=='admin');
const nameOf=k=>k==='admin'?'المدير':(D.users.find(v=>v.id===k)?.name||'—');
const canSee=p=>p.by===me()||(isAdmin()?p.vis!=='me':(ME.sector===p.sector&&p.vis==='team'));
const canEdit=p=>{const s=secOf(p.sector);return p.by===me()||(isAdmin()&&p.vis!=='me')||(s&&isLead(s)&&p.vis==='team')};
const leadsOf=s=>['admin',...servantsOf(s).filter(v=>v.role==='lead').map(v=>v.id)];
const of=(c,s)=>D[c].filter(x=>x.sector===s.id);
const bal=s=>of('ledger',s).reduce((a,l)=>a+(l.kind==='in'?+l.amount:-l.amount),0);
const sumK=(s,k)=>of('ledger',s).filter(l=>l.kind===k).reduce((a,l)=>a+ +l.amount,0);
const secOf=id=>D.sectors.find(s=>s.id===id);
const pOf=id=>D.people.find(p=>p.id===id);
const mine=n=>(n.to||[]).includes(me())||(ME.phone&&(n.to||[]).includes(ME.phone))||(isAdmin()&&(n.to||[]).includes('admin'));
function notify(to,title,msg,link){to=[...new Set(to)].filter(k=>k&&k!==me()&&!(isAdmin()&&k==='admin'));if(!to.length)return;put('notifs',{id:uid(),title,msg,at:Date.now(),to,read:[],link:link||null,from:me()})}
const go=r=>{R=r;draw();scrollTo(0,0)};
let TT=0;const toast=m=>{TT=Date.now();document.querySelectorAll('.toast').forEach(x=>x.remove());const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)};
const overdue=x=>new Date(x)<new Date();
const soon=x=>new Date(x)-new Date()<72*36e5;

/* ================= نموذج إدخال ================= */
function form(title,fields,vals,onSave,onDel,btn){sheet={title,fields,vals:vals||{},onSave,onDel,btn};draw()}
function sheetHTML(){
 if(!sheet)return'';
 const f=sheet.fields.map(x=>{const cur=sheet.vals[x.k]??x.d??'',v=esc(cur);
  if(x.t==='info')return`<p class="meta" style="margin:0 0 12px">${x.l}</p>`;
  const inp=x.t==='select'?`<select name="${x.k}">${x.o.map(o=>`<option ${String(cur)===String(o[0])?'selected':''} value="${esc(o[0])}">${esc(o[1])}</option>`).join('')}</select>`
  :x.t==='area'?`<textarea name="${x.k}" ${x.req?'required':''}>${v}</textarea>`
  :`<input name="${x.k}" id="fld-${x.k}" type="${x.t||'text'}" value="${v}" ${x.req?'required':''} ${x.t==='tel'?'inputmode="tel" dir="ltr"':''} ${x.ph?`placeholder="${esc(x.ph)}"`:''}>`;
  return`<label class="f"><span>${x.l}</span>${inp}</label>${x.k==='map'?'<button type="button" class="btn sm ghost" data-a="gps" style="margin:-4px 0 12px">'+ic('pin',16)+' موقعي الحالي</button>':''}`}).join('');
 return`<div class="sheet-bg" data-a="close"><form class="sheet" id="sf"><h3>${esc(sheet.title)}</h3>${f}
 <div class="acts"><button class="btn">${sheet.btn||'حفظ'}</button><button type="button" class="btn ghost" data-a="close">إلغاء</button>${sheet.onDel?'<button type="button" class="btn acc" data-a="del">حذف</button>':''}</div></form></div>`;
}

/* ================= الشاشات ================= */
function vLoading(){return`<div class="login"><div class="logo" style="width:min(70%,260px);margin:0 auto"><img src="${LOGO}" alt="Healing Grace"></div><p class="meta" style="text-align:center">جاري التحميل…</p></div>`}
function vLogin(){
 const secs=sectorsSorted();
 if(!FB_ON)return`<div class="login"><div class="logo" style="width:min(80%,300px);margin:0 auto"><img src="${LOGO}" alt="Healing Grace"></div>
 <h1>النعمة الشافية</h1><p class="meta" style="text-align:center;margin:0">نسخة تجريبية — البيانات على الجهاز ده بس</p>
 <form id="lf" class="card"><label class="f"><span>مين بيدخل؟</span><select name="who">
 ${D.users.filter(u=>u.approved).map(u=>`<option value="${u.id}">${esc(u.name)} — ${ROLE[u.role]}${u.sector?' · '+esc(secOf(u.sector)?.name||''):''}</option>`).join('')}</select></label>
 <button class="btn" style="width:100%">دخول</button></form></div>`;
 return`<div class="login"><div class="logo" style="width:min(80%,300px);margin:0 auto"><img src="${LOGO}" alt="Healing Grace"></div>
 <h1>النعمة الشافية</h1>
 <div class="tabs"><button class="${authTab==='in'?'on':''}" data-a="authTab" data-k="in">دخول</button><button class="${authTab==='up'?'on':''}" data-a="authTab" data-k="up">خادم جديد</button></div>
 <form id="af" class="card">
 ${authTab==='up'?'<label class="f"><span>اسمك</span><input name="name" required></label>':''}
 <label class="f"><span>رقم التليفون</span><input name="phone" type="tel" inputmode="tel" dir="ltr" required></label>
 <label class="f"><span>كلمة السر</span><input name="pass" type="password" minlength="6" required></label>
 ${authTab==='up'?`<label class="f"><span>بتخدم في أنهي قطاع؟</span><select name="sector">${secs.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></label>`:''}
 <button class="btn" style="width:100%">${authTab==='up'?'إنشاء الحساب':'دخول'}</button></form>
 ${authTab==='up'?'<p class="note">بعد التسجيل طلبك بيروح للمدير، وأول ما يوافق يفتحلك قطاعك.</p>':''}</div>`;
}
function vPending(){
 return`<div class="login"><div class="logo" style="width:min(70%,260px);margin:0 auto"><img src="${LOGO}" alt="Healing Grace"></div>
 <div class="card" style="text-align:center"><h2 style="font-size:24px">أهلاً ${esc(ME.name||'')}</h2><p>طلبك وصل للمدير، وأول ما يوافق هيفتحلك ${esc(secOf(ME.sector)?.name||'قطاعك')}.</p>
 ${ME.missing?'<p class="meta">الحساب ناقص بياناته — اعمل خروج وسجّل تاني من "خادم جديد".</p>':''}
 <button class="btn ghost" data-a="logout">خروج</button></div></div>`;
}
function top(title,back){
 return`<div class="top">${back?`<button class="back" data-go='${back}' aria-label="رجوع">→</button>`:''}<h1>${esc(title)}</h1>
 <div class="who">${isAdmin()?'المدير العام':esc(ME.name)+'<br>'+esc(secOf(ME.sector)?.name||'')}<br><button data-a="logout">خروج</button></div></div>`;
}
function gallery(o){
 const Lm=D.media.filter(m=>o.pid?m.pid===o.pid:(!m.pid&&(o.sec?m.sector===o.sec:true))).sort((a,b)=>b.at-a.at);
 return`<div class="gal">${o.add?`<label class="m add" role="button" tabindex="0"><span>${ic('img',30)}<br>+ صور / فيديو</span><input type="file" accept="image/*,video/*" multiple hidden data-up="1" data-sec="${o.sec||''}" data-pid="${o.pid||''}"></label>`:''}
 ${Lm.map(m=>`<button class="m" data-a="view" data-id="${m.id}">${m.type==='video'?`<video src="${esc(m.url)}#t=0.5" muted preload="metadata" playsinline></video><span class="pl">▶</span>`:`<img src="${esc(m.url)}" alt="" loading="lazy">`}${m.cap?`<span class="cap">${esc(m.cap)}</span>`:''}</button>`).join('')}
 ${!Lm.length&&!o.add?'<div class="empty" style="width:100%">لسه مفيش صور</div>':''}</div>`;
}
function viewerHTML(){
 const m=D.media.find(x=>x.id===viewing);if(!m)return'';
 const own=isAdmin()||m.by===me();
 return`<div class="sheet-bg" data-a="closeV"><div class="sheet viewer">${m.type==='video'?`<video src="${esc(m.url)}" controls autoplay playsinline></video>`:`<img src="${esc(m.url)}" alt="">`}
 <label class="f" style="margin-top:12px"><span>الوصف</span><input id="capIn" value="${esc(m.cap||'')}" ${own?'':'readonly'}></label>
 <div class="meta" style="margin:-6px 0 10px">رفعها ${esc(nameOf(m.by))}</div>
 <div class="acts">${own?'<button class="btn" data-a="saveCap">حفظ الوصف</button><button class="btn acc" data-a="delMedia">حذف</button>':''}<button class="btn ghost" data-a="closeV">إغلاق</button></div></div></div>`;
}
function myQueue(){
 const out=[];
 mySectors().forEach(s=>{const Ld=isLead(s);
  of('visits',s).filter(v=>v.status==='pending'&&(v.sid===me()||Ld)).forEach(v=>out.push({k:'visit',s,x:v,when:v.at}));
  of('tasks',s).filter(t=>!t.done&&(t.sid===me()||Ld)).forEach(t=>out.push({k:'task',s,x:t,when:t.due}));
  if(Ld)of('reqs',s).filter(r=>r.status==='pending').forEach(r=>out.push({k:'req',s,x:r,when:''}))});
 return out;
}
const pendingUsers=()=>isAdmin()?D.users.filter(u=>!u.approved&&u.role!=='admin'):[];
function vHome(){
 const ss=mySectors(),tot=ss.reduce((a,s)=>a+bal(s),0),ppl=D.people.filter(p=>canSee(p)&&ss.some(s=>s.id===p.sector)).length,svs=ss.reduce((a,s)=>a+servantsOf(s).length,0);
 const q=myQueue().filter(i=>i.k==='req'||(i.when&&(soon(i.when)||overdue(i.when))));
 const next=D.events.filter(e=>(e.end||e.start)>=today()).sort((a,b)=>a.start<b.start?-1:1)[0];
 const pu=pendingUsers();
 return top('النعمة الشافية')+`<div class="hero"><div><h2>${isAdmin()?'أهلاً يا مدير الخدمة':'أهلاً '+esc(ME.name)}</h2><p>${isAdmin()?'كل القطاعات':esc(ss[0]?.name||'')} · ${ROLE[ME.role]}</p>
 <div class="sum"><div class="pill"><b>${ppl}</b>مخدوم</div><div class="pill"><b>${svs}</b>خادم</div><div class="pill"><b>${fmt(tot)}</b>الرصيد</div></div></div>
 <div class="logo"><img src="${LOGO}" alt="Healing Grace"></div></div>
 <div class="wrap">
 ${pu.length?`<div class="alert" data-go='{"v":"team"}' role="button" tabindex="0">${ic3('team','purple','sm')}<div style="flex:1"><div class="t">${pu.length} خادم مستنيين موافقتك</div><div class="meta">${pu.slice(0,3).map(u=>esc(u.name)).join('، ')}</div></div><span class="tag p">راجع</span></div>`:''}
 ${q.length?`<div class="sec-h" style="margin-top:4px"><h3>تنبيهات محتاجة منك</h3><button class="btn sm ghost" data-go='{"v":"follow"}'>الكل</button></div>${q.slice(0,4).map(alertCard).join('')}`:''}
 <div class="sec-h"><h3>صور وفيديوهات الخدمة</h3>${CFG.facebook?`<a class="btn sm ghost" href="${esc(CFG.facebook)}">صفحتنا على فيسبوك</a>`:''}</div>${gallery({add:isAdmin()})}
 <div class="sec-h"><h3>القطاعات</h3>${isAdmin()?'<button class="btn sm" data-a="addSector">+ قطاع</button>':''}</div>
 ${!ss.length&&isAdmin()?'<div class="card empty">لسه مفيش قطاعات.<br><button class="btn" style="margin-top:10px" data-a="seedSectors">ضيف القطاعات الخمسة الأساسية</button></div>':''}
 <div class="grid">${ss.map(s=>`<div class="card sector" data-go='{"v":"sector","id":"${s.id}"}' role="button" tabindex="0">
  ${ic3(s.icon,s.color)}<h3>${esc(s.name)}</h3>
  <div class="meta">${servantsOf(s).length} خادم · ${of('people',s).filter(canSee).length} مخدوم</div>
  <div class="bal ${bal(s)<0?'out':''}">${fmt(bal(s))}</div></div>`).join('')}</div>
 ${next?`<div class="sec-h"><h3>أقرب تنظيم</h3></div>${evCard(next)}`:''}
 ${isAdmin()?`<div class="sec-h"><h3>الإدارة</h3></div><button class="btn ghost" style="width:100%" data-go='{"v":"team"}'>${ic('team',18)} الخدام والصلاحيات</button>`:''}
 ${FB_ON?'':'<p class="note">نسخة تجريبية — البيانات على الجهاز ده بس.</p>'}
 <p class="note">${CFG.developerSite?`<a href="${esc(CFG.developerSite)}" style="color:inherit">تواصل مع مطور البرنامج</a>`:''}</p></div>`;
}
function alertCard(i){
 const s=i.s,x=i.x;let t,sub,icn,c;
 if(i.k==='visit'){const p=pOf(x.pid);t=`زيارة ${p?p.name:''}`;sub=`${nameOf(x.sid)} · ${dt(x.at)}`;icn='walk';c='blue'}
 else if(i.k==='task'){t=x.title;sub=`${nameOf(x.sid)} · لحد ${dt(x.due)}`;icn='check';c='green'}
 else{t='طلب: '+x.title;sub=`من ${nameOf(x.from)}${+x.amount?' · '+fmt(x.amount):''}`;icn='inbox';c='gold'}
 const late=i.when&&overdue(i.k==='task'?i.when+'T23:59':i.when);
 return`<div class="alert" data-go='{"v":"follow","tab":"${i.k}s"}' role="button" tabindex="0">${ic3(icn,c,'sm')}<div style="flex:1"><div class="t">${esc(t)}</div><div class="meta">${esc(sub)} · ${esc(s.name)}</div></div>${late?'<span class="tag no">متأخر</span>':i.k==='req'?'<span class="tag p">مستني رد</span>':'<span class="tag p">قريب</span>'}</div>`;
}
function vSector(){
 const s=secOf(R.id);if(!s||!mySectors().includes(s)){R={v:'home'};return vHome()}
 const tab=R.tab||'people',q=(R.q||'').trim(),Ld=isLead(s);
 let body='';
 if(tab==='people'){
  const list=of('people',s).filter(p=>canSee(p)&&(!q||[p.name,p.city,p.type,p.edu,p.address].join(' ').includes(q))).sort((a,b)=>String(a.name).localeCompare(b.name,'ar'));
  body=`<input class="search" id="q" placeholder="بحث بالاسم أو البلد أو نوع الخدمة" value="${esc(R.q||'')}">
  <div class="sec-h" style="margin-top:0"><h3>المخدومين (${list.length})</h3>${Ld?'<button class="btn sm" data-a="addPerson">+ تسجيل مخدوم</button>':''}</div>
  <div class="card">${list.length?list.map(p=>`<div class="row click" data-go='{"v":"person","id":"${p.id}"}'><div class="av">${esc((p.name||'?')[0])}</div><div class="main"><div class="t">${esc(p.name)}</div>
  <div class="meta">${p.age?esc(p.age)+' سنة · ':''}${esc(p.city||'')}${p.edu&&p.edu!=='—'?' · '+esc(p.edu):''}</div><div><span class="tag">${esc(p.type||'')}</span>${p.vis!=='team'?`<span class="tag p">${VIS[p.vis]}</span>`:''}</div></div>
  <span class="meta">‹</span></div>`).join(''):'<div class="empty">مفيش مخدومين ظاهرين ليك</div>'}</div>`;
 }else if(tab==='acts'){
  const A=of('acts',s).sort((a,b)=>a.date<b.date?1:-1);
  body=`<div class="sec-h" style="margin-top:0"><h3>أنشطة القطاع (${A.length})</h3><button class="btn sm" data-a="addAct">+ نشاط</button></div>
  ${A.map(a=>{const d=new Date(a.date||Date.now());return`<div class="card ev" style="margin-bottom:10px"><div class="date"><b>${a.date?d.getDate():'—'}</b><span>${a.date?MONTHS[d.getMonth()]:''}</span></div>
  <div><div style="display:flex;gap:6px;align-items:start"><div style="flex:1"><span class="tag">${esc(a.kind)}</span><h3 style="font-size:17px;margin-top:4px">${esc(a.title)}</h3></div><button class="icon-btn" data-a="editAct" data-id="${a.id}" aria-label="تعديل">✎</button></div>
  <div class="meta">${[a.place,a.who&&('مسؤول: '+a.who),+a.cost?('التكلفة: '+fmt(a.cost)):''].filter(Boolean).map(esc).join(' · ')}</div>${a.details?`<p style="margin:6px 0 0;font-size:15px">${esc(a.details)}</p>`:''}</div></div>`}).join('')||'<div class="card empty">مفيش أنشطة لسه</div>'}
  <div class="sec-h"><h3>صور القطاع</h3></div>${gallery({sec:s.id,add:true})}`;
 }else if(tab==='servants'){
  const sv=servantsOf(s);
  body=`<div class="sec-h" style="margin-top:0"><h3>خدام القطاع (${sv.length})</h3>${Ld?'<button class="btn sm" data-a="invite">+ دعوة خادم</button>':''}</div>
  <div class="card">${sv.map(v=>`<div class="row"><div class="av">${ic('user',20)}</div><div class="main"><div class="t">${esc(v.name)}</div>
  <div class="meta">${ROLE[v.role]} · <span dir="ltr">${esc(v.phone)}</span></div></div>
  <a class="btn sm wa" href="${wa(v.phone)}">واتساب</a>${isAdmin()?`<button class="icon-btn" data-a="editUser" data-id="${v.id}" aria-label="تعديل">✎</button>`:''}</div>`).join('')||'<div class="empty">مفيش خدام لسه — ابعتلهم دعوة يسجلوا</div>'}</div>`;
 }else{
  const Lg=of('ledger',s).sort((a,b)=>a.date<b.date?1:-1);
  body=`<div class="totals"><div class="card"><span class="meta">وارد</span><b class="in">${fmt(sumK(s,'in'))}</b></div>
  <div class="card"><span class="meta">صادر</span><b class="out">${fmt(sumK(s,'out'))}</b></div><div class="card"><span class="meta">الرصيد</span><b>${fmt(bal(s))}</b></div></div>
  ${Ld?'<div class="acts" style="margin-bottom:12px"><button class="btn" data-a="addLedger" data-k="in">+ وارد</button><button class="btn acc" data-a="addLedger" data-k="out">− صادر</button></div>':''}
  <div class="card">${Lg.map(l=>ledRow(l,null,Ld)).join('')||'<div class="empty">مفيش حركات لسه</div>'}</div>`;
 }
 return top(s.name,'{"v":"home"}')+`<div class="wrap"><div class="shead">${ic3(s.icon,s.color,'lg')}<div style="flex:1"><h2 style="font-size:24px">${esc(s.name)}</h2><div class="meta">${servantsOf(s).length} خادم · ${of('acts',s).length} نشاط · ${of('visits',s).filter(v=>v.status==='pending').length} زيارة جاية</div></div>
 ${isAdmin()?'<button class="btn sm ghost" data-a="editSector">✎ تعديل</button>':''}</div><div class="tabs">
 ${[['people','المخدومين'],['acts','الأنشطة'],['servants','الخدام'],['ledger','الحساب']].map(t=>`<button class="${tab===t[0]?'on':''}" data-go='{"v":"sector","id":"${s.id}","tab":"${t[0]}"}'>${t[1]}</button>`).join('')}</div>${body}</div>`;
}
function vPerson(){
 const p=pOf(R.id),s=p&&secOf(p.sector);if(!p||!s||!canSee(p)){R={v:'home'};return vHome()}
 const E=canEdit(p),Ld=isLead(s);
 const mapUrl=p.map||(p.address||p.city?'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent((p.address||'')+' '+(p.city||'')):'');
 const vis=of('visits',s).filter(v=>v.pid===p.id).sort((a,b)=>a.at<b.at?1:-1);
 const kv=[['السن',p.age?p.age+' سنة':''],['النوع',p.gender],['البلد',p.city],['العنوان',p.address],['التعليم',p.edu],['نوع الخدمة',p.type],['التليفون',p.phone],['ولي الأمر',p.guardian],['تليفون ولي الأمر',p.gphone],['ملاحظات',p.notes]].filter(x=>x[1]);
 return top('ملف مخدوم',JSON.stringify({v:'sector',id:s.id}))+`<div class="wrap">
 <div class="card"><div class="shead" style="margin-bottom:10px"><div class="av" style="width:64px;height:64px;font-size:26px">${esc((p.name||'?')[0])}</div><div style="flex:1"><h2 style="font-size:23px">${esc(p.name)}</h2>
 <div><span class="tag">${esc(s.name)}</span><span class="tag ${p.vis==='team'?'':'p'}">يشوفه: ${VIS[p.vis]}</span></div><div class="meta">سجّله ${esc(nameOf(p.by))}</div></div></div>
 <dl class="kv">${kv.map(x=>`<dt>${x[0]}</dt><dd ${/تليفون/.test(x[0])?'dir="ltr" style="text-align:right"':''}>${esc(x[1])}</dd>`).join('')}</dl>
 <div class="acts" style="margin-top:12px">${mapUrl?`<a class="btn ghost" href="${esc(mapUrl)}">${ic('pin',18)} اللوكيشن</a>`:''}${p.phone||p.gphone?`<a class="btn wa" href="${wa(p.phone||p.gphone)}">واتساب</a>`:''}${E?'<button class="btn" data-a="editPerson">✎ تعديل الملف</button>':''}</div></div>
 <div class="sec-h"><h3>صور وفيديوهات</h3></div>${gallery({pid:p.id,sec:s.id,add:true})}
 <div class="sec-h"><h3>الزيارات (${vis.length})</h3>${Ld?'<button class="btn sm" data-a="addVisit">+ كلّف خادم بزيارة</button>':''}</div>
 <div class="card">${vis.map(v=>visitRow(s,v,1)).join('')||'<div class="empty">مفيش زيارات لسه</div>'}</div>
 <div class="sec-h"><h3>التحديثات والمتابعة</h3><button class="btn sm" data-a="addUpdate">+ تحديث</button></div>
 <div class="card">${(p.updates||[]).length?`<div class="tl">${[...p.updates].sort((a,b)=>b.at-a.at).map(u=>`<div class="it"><div>${esc(u.text)}</div><div class="meta">${esc(nameOf(u.by))} · ${new Date(u.at).toLocaleDateString('ar-EG')}</div></div>`).join('')}</div>`:'<div class="empty">اكتب أي جديد عن المخدوم علشان الفريق يتابع</div>'}</div></div>`;
}
function visitRow(s,v,inPerson){
 const p=pOf(v.pid),Ld=isLead(s),mineV=v.sid===me(),late=v.status==='pending'&&overdue(v.at);
 return`<div class="row" style="align-items:start">${ic3('walk',v.status==='done'?'green':late?'red':'blue','sm')}<div class="main">
 <div class="t">${inPerson?'زيارة '+esc(nameOf(v.sid)):(p&&canSee(p)?`<span class="click" data-go='{"v":"person","id":"${v.pid}"}'>${esc(p.name)}</span>`:esc(p?.name||'مخدوم'))}</div>
 <div class="meta">${dt(v.at)}${inPerson?'':' · '+esc(nameOf(v.sid))}${R.v==='follow'&&isAdmin()?' · '+esc(s.name):''}</div>
 ${v.note?`<div style="font-size:14px">${esc(v.note)}</div>`:''}${v.report?`<div style="font-size:14px"><b>التقرير:</b> ${esc(v.report)}</div>`:''}
 <div>${v.status==='done'?'<span class="tag ok">تمت</span>':late?'<span class="tag no">متأخرة</span>':'<span class="tag p">لسه</span>'}</div>
 <div class="acts" style="margin-top:6px">${v.status==='pending'&&(mineV||Ld)?`<button class="btn sm ok" data-a="doneVisit" data-id="${v.id}">تمت الزيارة</button>`:''}${p&&(p.phone||p.gphone)&&v.status==='pending'?`<a class="btn sm wa" href="${wa(p.phone||p.gphone,'سلام ونعمة، هنزوركم '+dt(v.at))}">بلّغهم واتساب</a>`:''}${Ld?`<button class="btn sm ghost" data-a="editVisit" data-id="${v.id}">تعديل</button>`:''}</div></div></div>`;
}
function vFollow(){
 const tab=R.tab||'visits',ss=mySectors();let body='';
 const anyLead=ss.some(isLead);
 if(tab==='visits'){
  const Lv=ss.flatMap(s=>of('visits',s).filter(v=>isLead(s)||v.sid===me()).map(v=>({s,v}))).sort((a,b)=>(a.v.status===b.v.status?(a.v.status==='pending'?(a.v.at<b.v.at?-1:1):(a.v.at<b.v.at?1:-1)):a.v.status==='pending'?-1:1));
  body=`<div class="sec-h" style="margin-top:0"><h3>مواعيد الزيارات</h3>${anyLead?'<button class="btn sm" data-a="addVisit">+ تكليف بزيارة</button>':''}</div>
  <div class="card">${Lv.map(x=>visitRow(x.s,x.v)).join('')||'<div class="empty">مفيش زيارات</div>'}</div>`;
 }else if(tab==='tasks'){
  const Lt=ss.flatMap(s=>of('tasks',s).filter(t=>isLead(s)||t.sid===me()).map(t=>({s,t}))).sort((a,b)=>a.t.done-b.t.done||(a.t.due<b.t.due?-1:1));
  body=`<div class="sec-h" style="margin-top:0"><h3>المهمات</h3>${anyLead?'<button class="btn sm" data-a="addTask">+ مهمة</button>':''}</div>
  <div class="card">${Lt.map(({s,t})=>{const late=!t.done&&t.due&&overdue(t.due+'T23:59');return`<div class="row" style="align-items:start">
  <button class="icon-btn" style="border:2px solid var(--line);${t.done?'background:var(--in);color:#fff;border-color:var(--in)':''}" data-a="toggleTask" data-id="${t.id}" aria-label="تم">${t.done?'✓':''}</button>
  <div class="main"><div class="t" style="${t.done?'text-decoration:line-through;opacity:.6':''}">${esc(t.title)}</div><div class="meta">${esc(nameOf(t.sid))}${t.due?' · لحد '+dt(t.due):''}${isAdmin()?' · '+esc(s.name):''}</div>
  ${t.details?`<div style="font-size:14px">${esc(t.details)}</div>`:''}${late?'<span class="tag no">متأخرة</span>':''}</div>
  ${isLead(s)?`<button class="icon-btn" data-a="editTask" data-id="${t.id}" aria-label="تعديل">✎</button>`:''}</div>`}).join('')||'<div class="empty">مفيش مهمات</div>'}</div>`;
 }else{
  const Lr=ss.flatMap(s=>of('reqs',s).filter(r=>isLead(s)||r.from===me()).map(r=>({s,r}))).sort((a,b)=>(a.r.status==='pending')===(b.r.status==='pending')?b.r.at-a.r.at:a.r.status==='pending'?-1:1);
  body=`<div class="sec-h" style="margin-top:0"><h3>الطلبات</h3>${isAdmin()?'':'<button class="btn sm" data-a="addReq">+ طلب جديد</button>'}</div>
  <div class="card">${Lr.map(({s,r})=>{const p=r.pid&&pOf(r.pid);return`<div class="row" style="align-items:start">${ic3('inbox',r.status==='ok'?'green':r.status==='no'?'red':'gold','sm')}<div class="main">
  <div class="t">${esc(r.title)}</div><div class="meta">من ${esc(nameOf(r.from))} · ${new Date(r.at).toLocaleDateString('ar-EG')}${isAdmin()?' · '+esc(s.name):''}${p?' · للمخدوم '+esc(p.name):''}</div>
  ${r.details?`<div style="font-size:14px">${esc(r.details)}</div>`:''}${+r.amount?`<div class="bal">${fmt(r.amount)}</div>`:''}
  <span class="tag ${r.status==='ok'?'ok':r.status==='no'?'no':'p'}">${r.status==='ok'?'اتوافق عليه':r.status==='no'?'اترفض':'مستني رد'}</span>${r.reply?`<div class="meta">الرد: ${esc(r.reply)}</div>`:''}
  ${r.status==='pending'&&isLead(s)?`<div class="acts" style="margin-top:6px"><button class="btn sm ok" data-a="decide" data-k="ok" data-id="${r.id}">موافقة</button><button class="btn sm acc" data-a="decide" data-k="no" data-id="${r.id}">رفض</button></div>`:''}</div></div>`}).join('')||'<div class="empty">مفيش طلبات</div>'}</div>`;
 }
 const cnt=k=>myQueue().filter(i=>i.k===k).length;
 return top('المتابعة')+`<div class="wrap"><div class="tabs">${[['visits','الزيارات','visit'],['tasks','المهمات','task'],['reqs','الطلبات','req']].map(t=>`<button class="${tab===t[0]?'on':''}" data-go='{"v":"follow","tab":"${t[0]}"}'>${t[1]}${cnt(t[2])?` (${cnt(t[2])})`:''}</button>`).join('')}</div>${body}</div>`;
}
function vTeam(){
 if(!isAdmin()){R={v:'home'};return vHome()}
 const pu=pendingUsers();
 const row=u=>`<div class="row"><div class="av">${esc((u.name||'?')[0])}</div><div class="main"><div class="t">${esc(u.name)}</div><div class="meta"><span dir="ltr">${esc(u.phone)}</span> · ${ROLE[u.role]||''}${u.sector?' · '+esc(secOf(u.sector)?.name||''):''}</div></div>
  ${u.approved?'':`<button class="btn sm ok" data-a="approve" data-id="${u.id}">موافقة</button>`}<button class="icon-btn" data-a="editUser" data-id="${u.id}" aria-label="تعديل">✎</button></div>`;
 return top('الخدام والصلاحيات','{"v":"home"}')+`<div class="wrap">
 <div class="sec-h" style="margin-top:0"><h3>مستنيين موافقة (${pu.length})</h3></div><div class="card">${pu.map(row).join('')||'<div class="empty">مفيش طلبات انضمام</div>'}</div>
 ${sectorsSorted().map(s=>`<div class="sec-h"><h3>${esc(s.name)}</h3></div><div class="card">${servantsOf(s).map(row).join('')||'<div class="empty">مفيش خدام</div>'}</div>`).join('')}
 <p class="note">الخادم بيسجل من البرنامج برقمه، وإنت توافق وتحدد قطاعه ودوره (خادم أو مسؤول قطاع).</p></div>`;
}
function ledRow(l,sname,E){
 const d=new Date(l.date);
 return`<div class="row"><div class="main"><div class="t">${esc(l.item)}</div><div class="meta">${isNaN(d)?'':d.getDate()+' '+MONTHS[d.getMonth()]}${sname?' · '+esc(sname):''}${l.note?' · '+esc(l.note):''}</div></div>
 <div class="amt ${l.kind}">${l.kind==='in'?'+':'−'} ${Number(l.amount).toLocaleString('ar-EG')}</div>
 ${E?`<button class="icon-btn" data-a="editLedger" data-id="${l.id}" aria-label="تعديل">✎</button>`:''}</div>`;
}
function vAccounts(){
 if(!isAdmin()){R={v:'sector',id:ME.sector,tab:'ledger'};return vSector()}
 const S=sectorsSorted(),tin=S.reduce((a,s)=>a+sumK(s,'in'),0),tout=S.reduce((a,s)=>a+sumK(s,'out'),0);
 const mx=Math.max(1,...S.map(s=>sumK(s,'in')));
 const all=D.ledger.map(l=>({...l,sn:secOf(l.sector)?.name||''})).sort((a,b)=>a.date<b.date?1:-1);
 return top('كشف حساب كل القطاعات')+`<div class="wrap">
 <div class="totals"><div class="card"><span class="meta">إجمالي الوارد</span><b class="in">${fmt(tin)}</b></div>
 <div class="card"><span class="meta">إجمالي الصادر</span><b class="out">${fmt(tout)}</b></div><div class="card"><span class="meta">الرصيد</span><b>${fmt(tin-tout)}</b></div></div>
 <div class="card"><h3 style="font-size:18px">حسب القطاع</h3>
 ${S.map(s=>{const i=sumK(s,'in'),o=sumK(s,'out');return`<div class="barrow"><div class="l"><span>${esc(s.name)}</span><span class="bal">${fmt(i-o)}</span></div>
  <div class="bar"><i style="width:${Math.min(100,o/mx*100)}%;background:var(--out)"></i><i style="width:${Math.max(0,i-o)/mx*100}%;background:var(--in)"></i></div></div>`}).join('')}
 <p class="meta" style="margin:6px 0 0">الأحمر = اللي اتصرف، والأخضر = الباقي من الوارد.</p></div>
 <div class="sec-h"><h3>كل الحركات</h3></div><div class="card">${all.map(l=>ledRow(l,l.sn)).join('')||'<div class="empty">مفيش حركات</div>'}</div></div>`;
}
function evCard(e){
 const d=new Date(e.start);
 return`<div class="card ev click" data-go='{"v":"event","id":"${e.id}"}' role="button" tabindex="0" style="margin-bottom:10px">
 <div class="date"><b>${d.getDate()}</b><span>${MONTHS[d.getMonth()]}</span></div>
 <div><span class="tag">${esc(e.kind)}</span><h3 style="font-size:17px;margin-top:4px">${esc(e.title)}</h3><div class="meta">${esc(e.place)}</div></div></div>`;
}
function vEvents(){
 const list=[...D.events].sort((a,b)=>a.start<b.start?-1:1);
 return top('التنظيمات')+`<div class="wrap"><div class="sec-h" style="margin-top:0"><h3>أيام روحية ومؤتمرات وفعاليات</h3>${isAdmin()?'<button class="btn sm" data-a="addEvent">+ تنظيم</button>':''}</div>
 ${list.map(evCard).join('')||'<div class="empty">مفيش تنظيمات لسه</div>'}</div>`;
}
function vEvent(){
 const e=D.events.find(x=>x.id===R.id);if(!e){R={v:'events'};return vEvents()}
 const A=isAdmin();e.items=e.items||[];e.people=e.people||[];e.sent=e.sent||[];
 return top(e.kind,'{"v":"events"}')+`<div class="wrap">
 <div class="card"><h2 style="font-size:24px">${esc(e.title)}</h2>
 <dl class="kv" style="margin-top:10px"><dt>المكان</dt><dd>${esc(e.place)}</dd><dt>يبدأ</dt><dd>${dt(e.start)}</dd>${e.end?`<dt>ينتهي</dt><dd>${dt(e.end)}</dd>`:''}</dl>
 <p style="margin:10px 0 0;white-space:pre-line">${esc(e.details)}</p>
 ${A?'<div class="acts" style="margin-top:12px"><button class="btn ghost" data-a="editEvent">تعديل</button><button class="btn acc" data-a="notifyEv">إرسال إشعار</button></div>':''}</div>
 <div class="sec-h"><h3>الفقرات</h3>${A?'<button class="btn sm" data-a="addItem">+ فقرة</button>':''}</div>
 <div class="card">${e.items.length?[...e.items].sort((a,b)=>a.time<b.time?-1:1).map(i=>`<div class="prog"><div class="tm">${esc(i.time)}</div><div><div class="t">${esc(i.title)}</div>${i.who?`<div class="meta">${esc(i.who)}</div>`:''}</div>
  ${A?`<button class="icon-btn" data-a="editItem" data-id="${i.id}" aria-label="تعديل">✎</button>`:'<span></span>'}</div>`).join(''):'<div class="empty">مفيش فقرات لسه</div>'}</div>
 ${A?`<div class="sec-h"><h3>المدعوين (${e.people.length})</h3><button class="btn sm" data-a="addInv">+ شخص</button></div>
 <div class="card">${e.people.length?e.people.map(p=>`<div class="row"><div class="av">${esc((p.name||'?')[0])}</div><div class="main"><div class="t">${esc(p.name)}</div><div class="meta" dir="ltr" style="text-align:right">${esc(p.phone)}</div></div>
  ${R.wa?`<a class="btn sm wa" href="${wa(p.phone,R.wa)}">واتساب</a>`:''}<button class="icon-btn" data-a="delInv" data-id="${p.id}" aria-label="حذف">✕</button></div>`).join(''):'<div class="empty">ضيف الناس برقم تليفونهم علشان يوصلهم الإشعار</div>'}</div>
 ${e.sent.length?`<div class="sec-h"><h3>الإشعارات المرسلة</h3></div><div class="card">${e.sent.map(n=>`<div class="row"><div class="main"><div>${esc(n.msg)}</div><div class="meta">${new Date(n.at).toLocaleString('ar-EG')}</div></div></div>`).join('')}</div>`:''}`:''}</div>`;
}
function vNotifs(){
 const Ln=D.notifs.filter(mine).sort((a,b)=>b.at-a.at);
 return top('الإشعارات')+`<div class="wrap">${Ln.length?`<div class="card">${Ln.map(n=>`<div class="row ${n.link?'click':''}" ${n.link?`data-go='${esc(JSON.stringify(n.link))}'`:''}>${ic3('bell',(n.read||[]).includes(me())?'blue':'gold','sm')}<div class="main"><div class="t">${esc(n.title)}</div><div>${esc(n.msg)}</div><div class="meta">${new Date(n.at).toLocaleString('ar-EG')}</div></div></div>`).join('')}</div>`
 :'<div class="empty">مفيش إشعارات لسه. هيوصلك هنا أي تكليف بزيارة أو مهمة، أو رد على طلب، أو تنبيه بتنظيم.</div>'}</div>`;
}
function nav(){
 const items=[['home','الرئيسية','home'],['follow','المتابعة','check'],['accounts','الحسابات','money'],['events','التنظيمات','cal'],['notifs','الإشعارات','bell']];
 const un=D.notifs.filter(n=>mine(n)&&!(n.read||[]).includes(me())).length,fq=myQueue().length;
 const on=k=>R.v===k||(k==='home'&&['sector','person','team'].includes(R.v))||(k==='events'&&R.v==='event');
 return`<nav class="nav"><div>${items.map(i=>`<button class="${on(i[0])?'on':''}" data-go='{"v":"${i[0]}"}'>${ic(i[2])}${i[1]}${i[0]==='notifs'&&un?`<span class="dot">${un}</span>`:i[0]==='follow'&&fq?`<span class="dot">${fq}</span>`:''}</button>`).join('')}</div></nav>`;
}
function draw(){
 const app=document.getElementById('app');if(!app)return;
 if(!AUTH_READY){app.innerHTML=vLoading();return}
 if(!ME){app.innerHTML=vLogin()+sheetHTML();return}
 if(!ME.approved&&ME.role!=='admin'){app.innerHTML=vPending();return}
 const V={home:vHome,sector:vSector,person:vPerson,follow:vFollow,team:vTeam,accounts:vAccounts,events:vEvents,event:vEvent,notifs:vNotifs};
 app.innerHTML=(V[R.v]||vHome)()+nav()+sheetHTML()+viewerHTML();
 if(R.v==='notifs')markRead();
 const q=document.getElementById('q');if(q&&R.focusQ){q.focus();q.setSelectionRange(q.value.length,q.value.length)}
}
let marking=false;
function markRead(){if(marking)return;const L=D.notifs.filter(n=>mine(n)&&!(n.read||[]).includes(me()));if(!L.length)return;marking=true;
 setTimeout(()=>{L.forEach(n=>{n.read=[...(n.read||[]),me()];if(FB_ON)fdb.collection('notifs').doc(n.id).update({read:firebase.firestore.FieldValue.arrayUnion(me())}).catch(()=>{})});saveLocal();marking=false;draw()},1200)}

/* ================= الأوامر ================= */
const cur=()=>secOf(R.id);
const curE=()=>D.events.find(x=>x.id===R.id);
const curP=()=>pOf(R.id);
const PF=[{k:'name',l:'الاسم',req:1},{k:'age',l:'السن',t:'number'},{k:'gender',l:'النوع',t:'select',o:[['',''],['ولد','ولد'],['بنت','بنت'],['راجل','راجل'],['ست','ست'],['أسرة','أسرة']]},
 {k:'city',l:'البلد'},{k:'address',l:'العنوان بالتفصيل'},{k:'map',l:'لينك اللوكيشن (خرائط جوجل)',ph:'https://maps.app.goo.gl/...'},{k:'edu',l:'التعليم'},{k:'type',l:'نوع الخدمة المقدمة له'},
 {k:'phone',l:'التليفون',t:'tel'},{k:'guardian',l:'ولي الأمر'},{k:'gphone',l:'تليفون ولي الأمر',t:'tel'},{k:'notes',l:'ملاحظات',t:'area'},
 {k:'vis',l:'مين يشوف الملف ده؟',t:'select',o:Object.entries(VIS),d:'team'}];
const EF=[{k:'title',l:'اسم التنظيم',req:1},{k:'kind',l:'النوع',t:'select',o:['يوم روحي','مؤتمر','اجتماع','رحلة','زيارة','حفلة','أخرى'].map(x=>[x,x]),d:'يوم روحي'},
 {k:'place',l:'المكان'},{k:'start',l:'يبدأ',t:'datetime-local',req:1},{k:'end',l:'ينتهي',t:'datetime-local'},{k:'details',l:'التفاصيل',t:'area'}];
const SF=[{k:'name',l:'اسم القطاع',req:1},{k:'icon',l:'الأيقونة',t:'select',o:ICONS},{k:'color',l:'لون الأيقونة',t:'select',o:COLS},{k:'order',l:'الترتيب',t:'number'}];
const AF=[{k:'title',l:'اسم النشاط',req:1},{k:'kind',l:'النوع',t:'select',o:['نشاط','زيارة','قافلة طبية','توزيع','فصل تقوية','ورشة','اجتماع','رحلة','أخرى'].map(x=>[x,x]),d:'نشاط'},
 {k:'date',l:'التاريخ',t:'date'},{k:'place',l:'المكان'},{k:'who',l:'المسؤول'},{k:'cost',l:'التكلفة (جنيه)',t:'number'},{k:'details',l:'التفاصيل',t:'area'}];
const LF=k=>[{k:'item',l:k==='in'?'ورد في إيه (المصدر)':'صدر في إيه (البند)',req:1},{k:'amount',l:'المبلغ بالجنيه',t:'number',req:1},{k:'date',l:'التاريخ',t:'date'},{k:'note',l:'ملاحظة'}];
const IF=[{k:'time',l:'الوقت',t:'time',req:1},{k:'title',l:'الفقرة',req:1},{k:'who',l:'المسؤول عنها'}];
const TF=s=>[{k:'title',l:'المهمة',req:1},{k:'sid',l:'مكلّف بيها',t:'select',o:servOpts(s)},{k:'due',l:'آخر معاد',t:'date'},{k:'details',l:'تفاصيل',t:'area'}];
const servOpts=s=>servantsOf(s).map(v=>[v.id,v.name+(v.role==='lead'?' (مسؤول)':'')]);
const pplOpts=(s,blank)=>[...(blank?[['','—']]:[]),...of('people',s).filter(canSee).map(p=>[p.id,p.name])];
function pickSector(title,fn,onlyLead=true){
 const ss=mySectors().filter(s=>!onlyLead||isLead(s));
 if(R.v==='person')return fn(secOf(curP().sector));
 if(R.v==='sector')return fn(cur());
 if(ss.length===1)return fn(ss[0]);
 form(title+' — اختار القطاع',[{k:'s',l:'القطاع',t:'select',o:ss.map(s=>[s.id,s.name])}],{},v=>fn(secOf(v.s)),null,'التالي');
}
function visitForm(s,v){
 const p=R.v==='person'?curP():null;
 if(!servantsOf(s).length)return toast('مفيش خدام في القطاع ده لسه');
 form(v?'تعديل الزيارة':'تكليف بزيارة',[...(p||v?[]:[{k:'pid',l:'المخدوم',t:'select',o:pplOpts(s)}]),{k:'sid',l:'الخادم المكلّف',t:'select',o:servOpts(s)},{k:'at',l:'معاد الزيارة',t:'datetime-local',req:1},{k:'note',l:'المطلوب في الزيارة',t:'area'}],
 v?{...v}:{at:rel(1,18)},x=>{
  if(v){const ch=x.sid!==v.sid||x.at!==v.at;put('visits',{...v,...x});if(ch)notify([x.sid],'تعديل في زيارة',`زيارة ${pOf(v.pid)?.name||''} بقت ${dt(x.at)}`,{v:'follow',tab:'visits'});return}
  const nv={id:uid(),sector:s.id,pid:p?p.id:x.pid,status:'pending',report:'',by:me(),...x};if(!nv.pid)return toast('سجّل مخدوم الأول');
  put('visits',nv);notify([nv.sid],'اتكلفت بزيارة',`زيارة ${pOf(nv.pid)?.name} يوم ${dt(nv.at)}`,{v:'follow',tab:'visits'});toast('اتبعت تنبيه للخادم')},
 v?()=>del('visits',v.id):null);
}
function editUserForm(u){
 form('بيانات '+u.name,[{k:'name',l:'الاسم',req:1},{k:'sector',l:'القطاع',t:'select',o:sectorsSorted().map(s=>[s.id,s.name])},{k:'role',l:'الدور',t:'select',o:[['servant','خادم'],['lead','مسؤول القطاع']]},{k:'approved',l:'الحساب',t:'select',o:[['1','مفعّل'],['0','موقوف']]}],
  {...u,approved:u.approved?'1':'0'},x=>{const was=u.approved;put('users',{...u,...x,approved:x.approved==='1'});if(!was&&x.approved==='1')notify([u.id],'أهلاً بيك في النعمة الشافية','المدير وافق على حسابك',{v:'home'})},
  ()=>del('users',u.id));
}
const A={
 close:()=>{sheet=null;draw()},
 del:()=>{const f=sheet.onDel;sheet=null;f();toast('اتحذف')},
 authTab:(id,k)=>{authTab=k;draw()},
 logout:async()=>{if(FB_ON){stopAll();await fauth.signOut()}ME=null;saveLocal();R={v:'home'};draw()},
 gps:()=>{if(!navigator.geolocation)return toast('الموقع مش متاح هنا');toast('بحدد موقعك…');navigator.geolocation.getCurrentPosition(p=>{const i=document.getElementById('fld-map');if(i)i.value=`https://maps.google.com/?q=${p.coords.latitude.toFixed(6)},${p.coords.longitude.toFixed(6)}`;toast('اتحدد الموقع')},()=>toast('مقدرتش أحدد الموقع — شغّل اللوكيشن'),{enableHighAccuracy:true,timeout:15000})},
 seedSectors:()=>{[['خدمة التعليم','edu'],['خدمة الصحة','health'],['خدمة الاحتياجات','needs'],['خدمة الكنائس','church'],['خدمة اجتماعية','social']].forEach(([name,icon],i)=>put('sectors',{id:uid(),name,icon,color:DEFC[icon],order:i+1}))},
 addSector:()=>form('إضافة قطاع',SF,{icon:'star',color:'gold',order:D.sectors.length+1},v=>put('sectors',{id:uid(),...v,order:+v.order||99})),
 editSector:()=>{const s=cur();form('تعديل القطاع',SF,{...s},v=>put('sectors',{...s,...v,order:+v.order||99}),()=>{del('sectors',s.id);R={v:'home'}})},
 addPerson:()=>{const s=cur();form('تسجيل مخدوم جديد',PF,{vis:'team'},v=>{const p={id:uid(),sector:s.id,by:me(),created:Date.now(),updates:[],...v};put('people',p);R={v:'person',id:p.id}})},
 editPerson:()=>{const p=curP();form('تعديل ملف '+p.name,PF,{...p},v=>{const np={...p,...v};put('people',np);if(v.vis!==p.vis)D.media.filter(m=>m.pid===p.id&&(m.by===me()||isAdmin())).forEach(m=>put('media',{...m,vis:v.vis}))},()=>{del('people',p.id);R={v:'sector',id:p.sector}})},
 addUpdate:()=>{const p=curP();form('تحديث جديد عن '+p.name,[{k:'text',l:'إيه الجديد؟',t:'area',req:1}],{},v=>put('people',{...p,updates:[...(p.updates||[]),{id:uid(),text:v.text,at:Date.now(),by:me()}]}))},
 invite:()=>{const s=cur();const t=`سلام ونعمة\nحمّل برنامج "النعمة الشافية" وسجّل كخادم في ${s.name}:\n${CFG.publicUrl||''}\nسجّل برقم تليفونك واختار القطاع، وهنوافق على طول.`;const a=document.createElement('a');a.href='https://wa.me/?text='+encodeURIComponent(t);document.body.appendChild(a);a.click();a.remove()},
 editUser:id=>editUserForm(D.users.find(u=>u.id===id)),
 approve:id=>{const u=D.users.find(x=>x.id===id);form('موافقة على '+u.name,[{k:'sector',l:'القطاع',t:'select',o:sectorsSorted().map(s=>[s.id,s.name])},{k:'role',l:'الدور',t:'select',o:[['servant','خادم'],['lead','مسؤول القطاع']]}],{...u},
  x=>{put('users',{...u,...x,approved:true});notify([u.id],'أهلاً بيك في النعمة الشافية','المدير وافق على حسابك — قطاعك اتفتح',{v:'home'});toast('اتفعّل الحساب')},()=>del('users',u.id),'موافقة')},
 addLedger:(id,k)=>{const s=cur();form(k==='in'?'إضافة وارد':'إضافة صادر',LF(k),{date:today()},v=>put('ledger',{id:uid(),sector:s.id,kind:k,...v}))},
 editLedger:id=>{const l=D.ledger.find(x=>x.id===id);form('تعديل حركة',LF(l.kind),{...l},v=>put('ledger',{...l,...v}),()=>del('ledger',l.id))},
 addAct:()=>{const s=cur();form('إضافة نشاط',AF,{date:today()},v=>put('acts',{id:uid(),sector:s.id,...v}))},
 editAct:id=>{const a=D.acts.find(x=>x.id===id);form('تعديل نشاط',AF,{...a},v=>put('acts',{...a,...v}),()=>del('acts',a.id))},
 addVisit:()=>pickSector('تكليف بزيارة',s=>visitForm(s)),
 editVisit:id=>{const v=D.visits.find(x=>x.id===id);visitForm(secOf(v.sector),v)},
 doneVisit:id=>{const v=D.visits.find(x=>x.id===id),s=secOf(v.sector);
  form('تقرير الزيارة',[{k:'report',l:'حصل إيه في الزيارة؟',t:'area',req:1}],{},x=>{put('visits',{...v,status:'done',report:x.report,doneAt:Date.now()});
   const p=pOf(v.pid);if(p&&canSee(p))put('people',{...p,updates:[...(p.updates||[]),{id:uid(),text:'زيارة: '+x.report,at:Date.now(),by:me()}]});
   notify(leadsOf(s),'تمت زيارة',`${nameOf(me())} زار ${p?.name||''}`,{v:'follow',tab:'visits'})})},
 addTask:()=>pickSector('مهمة جديدة',s=>{if(!servantsOf(s).length)return toast('مفيش خدام في القطاع ده لسه');form('مهمة جديدة',TF(s),{due:today()},
  x=>{const t={id:uid(),sector:s.id,done:false,by:me(),...x};put('tasks',t);notify([t.sid],'مهمة جديدة',t.title+(t.due?' — لحد '+dt(t.due):''),{v:'follow',tab:'tasks'});toast('اتبعت تنبيه للخادم')})}),
 editTask:id=>{const t=D.tasks.find(x=>x.id===id),s=secOf(t.sector);form('تعديل المهمة',TF(s),{...t},x=>put('tasks',{...t,...x}),()=>del('tasks',t.id))},
 toggleTask:id=>{const t=D.tasks.find(x=>x.id===id),s=secOf(t.sector);if(!(t.sid===me()||isLead(s)))return;const nt={...t,done:!t.done,doneAt:Date.now()};put('tasks',nt);if(nt.done)notify(leadsOf(s),'مهمة خلصت',`${nameOf(me())} خلّص: ${t.title}`,{v:'follow',tab:'tasks'})},
 addReq:()=>pickSector('طلب جديد',s=>form('طلب جديد للمسؤول',[{k:'title',l:'الطلب',req:1},{k:'details',l:'التفاصيل',t:'area'},{k:'amount',l:'المبلغ لو فيه (جنيه)',t:'number'},{k:'pid',l:'خاص بمخدوم؟',t:'select',o:pplOpts(s,1)}],{},
  x=>{const r={id:uid(),sector:s.id,from:me(),status:'pending',reply:'',at:Date.now(),...x};put('reqs',r);notify(leadsOf(s),'طلب جديد',`${nameOf(me())}: ${r.title}`,{v:'follow',tab:'reqs'});toast('الطلب اتبعت للمسؤول')}),false),
 decide:(id,k)=>{const r=D.reqs.find(x=>x.id===id);form(k==='ok'?'موافقة على الطلب':'رفض الطلب',[{k:'reply',l:'رد للخادم (اختياري)',t:'area'}],{},x=>{put('reqs',{...r,status:k,reply:x.reply,decidedBy:me()});
  notify([r.from],k==='ok'?'تمت الموافقة على طلبك':'طلبك اترفض',r.title+(x.reply?' — '+x.reply:''),{v:'follow',tab:'reqs'})},null,k==='ok'?'موافقة':'رفض')},
 addEvent:()=>form('إضافة تنظيم',EF,{},v=>put('events',{id:uid(),items:[],people:[],sent:[],...v})),
 editEvent:()=>{const e=curE();form('تعديل التنظيم',EF,{...e},v=>put('events',{...e,...v}),()=>{del('events',e.id);R={v:'events'}})},
 addItem:()=>{const e=curE();form('إضافة فقرة',IF,{},v=>put('events',{...e,items:[...e.items,{id:uid(),...v}]}))},
 editItem:id=>{const e=curE(),it=e.items.find(i=>i.id===id);form('تعديل فقرة',IF,{...it},v=>put('events',{...e,items:e.items.map(i=>i.id===id?{...i,...v}:i)}),()=>put('events',{...e,items:e.items.filter(i=>i.id!==id)}))},
 addInv:()=>{const e=curE();form('إضافة مدعو',[{k:'name',l:'الاسم',req:1},{k:'phone',l:'رقم التليفون',t:'tel',req:1}],{},v=>put('events',{...e,people:[...e.people,{id:uid(),name:v.name,phone:normPh(v.phone)}]}))},
 delInv:id=>{const e=curE();put('events',{...e,people:e.people.filter(p=>p.id!==id)})},
 notifyEv:()=>{const e=curE();if(!e.people.length)return toast('ضيف مدعوين الأول');
  form('إشعار لكل المدعوين',[{k:'msg',l:'نص الإشعار',t:'area',req:1}],{msg:`تذكير: ${e.title} — ${dt(e.start)} في ${e.place}`},v=>{
   const ph=e.people.map(p=>normPh(p.phone)),ids=D.users.filter(x=>ph.includes(normPh(x.phone))).map(x=>x.id);
   notify([...ph,...ids],e.title,v.msg,{v:'event',id:e.id});put('events',{...e,sent:[{msg:v.msg,at:Date.now()},...e.sent]});R.wa=v.msg;toast('اتبعت إشعار للي عندهم البرنامج — وجنب كل اسم زرار واتساب')},null,'إرسال')},
 view:id=>{viewing=id;draw()},
 closeV:()=>{viewing=null;draw()},
 saveCap:()=>{const m=D.media.find(x=>x.id===viewing);put('media',{...m,cap:document.getElementById('capIn').value});viewing=null;draw();toast('اتحفظ')},
 delMedia:()=>{const id=viewing;viewing=null;del('media',id);toast('اتحذف')}
};

document.addEventListener('click',ev=>{
 const a=ev.target.closest('[data-a]');
 if(a){if((a.dataset.a==='close'||a.dataset.a==='closeV')&&ev.target!==a&&a.classList.contains('sheet-bg'))return;
  const f=A[a.dataset.a];if(f){ev.preventDefault();ev.stopPropagation();f(a.dataset.id,a.dataset.k)}return}
 const g=ev.target.closest('[data-go]');
 if(g&&!ev.target.closest('.sheet')&&!ev.target.closest('a')){try{go(JSON.parse(g.dataset.go))}catch(e){}}
});
document.addEventListener('keydown',ev=>{if(ev.key==='Enter'&&ev.target.matches('[role=button]'))ev.target.click();if(ev.key==='Escape'){if(viewing)A.closeV();else if(sheet)A.close()}});
document.addEventListener('input',ev=>{if(ev.target.id==='q'){R.q=ev.target.value;R.focusQ=1;draw();R.focusQ=0}});
document.addEventListener('change',async ev=>{const i=ev.target;if(!i.matches('[data-up]'))return;
 const files=[...i.files];if(!files.length)return;const pid=i.dataset.pid||'',sec=i.dataset.sec||'',p=pid&&pOf(pid);
 toast(FB_ON?`جاري رفع ${files.length} ملف…`:'بضيف…');let n=0;
 for(const f of files){try{const up=await upload(f);n++;
  put('media',{id:uid(),type:f.type.startsWith('video')?'video':'image',cap:'',at:Date.now(),sector:p?p.sector:sec,pid,vis:p?p.vis:'team',by:me(),...up})}catch(e){console.warn(e);toast('مقدرتش أرفع '+f.name)}}
 if(n)toast('اتضاف '+n+' ملف')});
document.addEventListener('submit',async ev=>{
 ev.preventDefault();const fd=Object.fromEntries(new FormData(ev.target));
 if(ev.target.id==='lf'){ME=D.users.find(u=>u.id===fd.who);saveLocal();R={v:'home'};draw();return}
 if(ev.target.id==='af'){
  const btn=ev.target.querySelector('button');btn.disabled=true;const ph=normPh(fd.phone);
  try{
   if(authTab==='up'){const c=await fauth.createUserWithEmailAndPassword(email(ph),fd.pass);const isA=ADMIN_PH.includes(ph);
    await fdb.collection('users').doc(c.user.uid).set({name:fd.name,phone:ph,sector:isA?'':fd.sector,role:isA?'admin':'servant',approved:isA,at:Date.now()});}
   else await fauth.signInWithEmailAndPassword(email(ph),fd.pass);
  }catch(e){btn.disabled=false;const m={'auth/wrong-password':'كلمة السر غلط','auth/invalid-credential':'الرقم أو كلمة السر غلط','auth/user-not-found':'الرقم ده مش متسجل — سجّل من "خادم جديد"','auth/email-already-in-use':'الرقم ده متسجل قبل كده — ادخل من "دخول"','auth/weak-password':'كلمة السر لازم 6 حروف أو أرقام على الأقل','auth/network-request-failed':'مفيش نت'}[e.code];toast(m||'حصلت مشكلة: '+(e.code||e.message))}
  return}
 if(ev.target.id==='sf'){const fn=sheet.onSave,t0=Date.now();sheet=null;fn(fd);draw();if(!sheet&&TT<t0)toast('اتحفظ')}
});

/* تشغيل */
(async()=>{
 const n=LN();if(n){try{await n.requestPermissions()}catch(e){}}
 if(FB_ON)fbInit();else{loadLocal();idbInit()}
 draw();
})();
}
