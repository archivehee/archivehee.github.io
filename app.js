(() => {
'use strict';
const d = window.PORTFOLIO;
let lang='en';
try {lang=localStorage.getItem('portfolio-language')==='ko'?'ko':'en';} catch{}
const t=v=>typeof v==='object'&&v!==null?(v[lang]||v.en||''):v;
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=t(text);if(cls)n.className=cls;return n;};
const target=id=>document.getElementById(id);
const set=(id,value)=>target(id).textContent=t(value);
const empty=()=>el('div',{en:'No entries listed yet.',ko:'아직 등록된 항목이 없습니다.'},'empty');
function link(label,url){const a=el('a',label,'text-link');if(/^https:\/\//.test(url)){a.href=url;a.target='_blank';a.rel='noopener noreferrer';}return a;}
function render(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en]').forEach(n=>n.textContent=n.dataset[lang].replace(/\\n/g,'\n'));
 set('role',d.profile.role);set('headline',d.profile.headline);set('bio',d.profile.bio);set('affiliation',d.profile.affiliation);
 target('linkedin').href=d.linkedin;target('github').href=d.github;
 target('lang').textContent=lang==='en'?'KO ↗':'EN ↗';target('lang').setAttribute('aria-label',lang==='en'?'한국어로 전환':'Switch to English');
 target('interests').replaceChildren(...d.profile.interests.map(x=>el('span',x)));
 for(const kind of ['education','experience'])target(kind).replaceChildren(...d.profile[kind].map(x=>{const row=el('div',undefined,'timeline-row');row.append(el('small',x.date),el('p',x));if(x.detail)row.append(el('em',x.detail));return row;}));
 for(const kind of ['international','domestic'])target(kind).replaceChildren(...(d[kind].length?d[kind].map(p=>{const row=el('article',undefined,'publication');const meta=el('div',undefined,'pub-meta');meta.append(el('span',p.venue,'venue'),el('div',p.date,'pub-date'));const body=el('div');body.append(el('h4', p.title));

if (p.description) {
  body.append(el('p', p.description));
}

if (Array.isArray(p.authors) && p.authors.length > 0) {
  const authors = el('p', undefined, 'pub-authors');

  p.authors.forEach((name, index) => {
    if (index > 0) {
      authors.append(document.createTextNode(', '));
    }

    const isMe = ['daehee kang', '강대희'].includes(
      name.replace(/[†‡*]/g, '').trim().toLowerCase()
    );
    const cleanName = name.replace(/†/g, '').trim();
 
    authors.append(
      el(isMe ? 'strong' : 'span', cleanName, isMe ? 'author-me' : undefined)
    );
    
    if (name.includes('†')) {
      authors.append(el('sup', '†', 'author-mark'));
    }
   
  });

  body.append(authors);

}const links=el('div',undefined,'pub-links');if(p.paper)links.append(link({en:'Read paper ↗',ko:'논문 읽기 ↗'},p.paper));if(p.code)links.append(link('Code ↗',p.code));body.append(links);row.append(meta,body);return row;}):[empty()]));
 target('project-list').replaceChildren(...d.projects.map(p=>{const row=el('article',undefined,'project'),meta=el('div'),body=el('div');meta.append(el('div',p.category,'category'),el('small',p.date));body.append(el('h3',p.title),el('p',p.description));if (Array.isArray(p.authors) && p.authors.length > 0) {
  const authors = el('p', undefined, 'pub-authors');

  p.authors.forEach((name, index) => {
    if (index > 0) {
      authors.append(document.createTextNode(', '));
    }

    const cleanName = name.replace(/†/g, '').trim();
    const isMe = ['daehee kang', '강대희'].includes(
      cleanName.toLowerCase()
    );

    authors.append(
      el(isMe ? 'strong' : 'span', cleanName, isMe ? 'author-me' : undefined)
    );

    if (name.includes('†')) {
      authors.append(el('sup', '†', 'author-mark'));
    }
  });

  body.append(authors);
}const tags=el('div',undefined,'tags');tags.append(...p.tags.map(s=>el('span',s,'tag')));body.append(tags);if(p.url)body.append(link({en:'View project ↗',ko:'프로젝트 보기 ↗'},p.url));row.append(meta,body);return row;}));
 target('patent-list').replaceChildren(...(d.patents.length?d.patents.map(p=>{const row=el('article',undefined,'timeline-row');row.append(el('h3',p.title),el('p',p.description));if(p.url)row.append(link({en:'View patent ↗',ko:'특허 보기 ↗'},p.url));return row;}):[empty()]));
 target('skill-list').replaceChildren(...d.skills.map(s=>{const group=el('div',undefined,'skill-group'),tags=el('div',undefined,'tags');tags.append(...s.items.map(x=>el('span',x,'tag')));group.append(el('h3',s.title),tags);return group;}));
 set('certificate',d.certificate);set('hobby-title',d.hobby.title);set('hobby-description',d.hobby.description);
}
target('lang').addEventListener('click',()=>{lang=lang==='en'?'ko':'en';try{localStorage.setItem('portfolio-language',lang);}catch{}render();});
render();
})();
