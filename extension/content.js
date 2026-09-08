(() => {
window.__waSocietyExporter = async function(){
 const phoneRe=/(?:\+?\s*91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/;
 const clean=s=>{let d=(s||"").replace(/\D/g,"");if(d.length===10&&/^[6-9]/.test(d))return"+91"+d;if(d.length===12&&d.startsWith("91"))return"+"+d;return""};
 const dialog=[...document.querySelectorAll('[role="dialog"]')].find(e=>/Search members|Search contacts/i.test(e.innerText||""));
 if(!dialog)throw Error("Open Group Info → View all members first.");
 let group="WhatsApp Group",h=document.querySelector("header");
 if(h){for(const e of h.querySelectorAll("span[title],span")){let t=(e.getAttribute("title")||e.innerText||"").trim();if(t&&t!="WhatsApp"&&t.length<100){group=t;break}}}
 const sc=[...dialog.querySelectorAll("*")].filter(e=>{let s=getComputedStyle(e);return(s.overflowY=="auto"||s.overflowY=="scroll")&&e.scrollHeight>e.clientHeight+20}).sort((a,b)=>b.scrollHeight-a.scrollHeight)[0]||dialog;
 const extract=()=>{let out=[],seen=new Set();
   for(const el of [...dialog.querySelectorAll("span,div")]){
     let raw=(el.innerText||"").replace(/\u00a0/g," ").trim(),m=raw.match(phoneRe);if(!m)continue;
     let phone=clean(m[0]);if(!phone||seen.has(phone))continue;
     let row=el;for(let i=0;i<8&&row;i++,row=row.parentElement){if(row.getAttribute?.("role")=="listitem")break}
     let name="";
     const titled=[...row.querySelectorAll("[title]")].map(x=>(x.getAttribute("title")||"").trim()).filter(x=>x&&!phoneRe.test(x)&&x.length<=80&&!/group admin|add member tag|search members|search contacts/i.test(x));
     if(titled.length)name=titled[0];
     if(!name){
       const vals=[...new Set([...row.querySelectorAll("span,div")].map(x=>(x.innerText||"").replace(/\s+/g," ").trim()).filter(x=>x.length>=2&&x.length<=80&&!phoneRe.test(x)&&!/\n/.test(x)&&!/group admin|add member tag|search members|search contacts|^you$/i.test(x)))];
       if(vals.length)name=vals.sort((a,b)=>a.length-b.length)[0];
     }
     if(!name)name=phone;seen.add(phone);out.push({name,phone,group});
   }return out};
 let all=new Map(),last=-1,stuck=0;
 for(let i=0;i<600;i++){for(const x of extract())all.has(x.phone)||all.set(x.phone,x);
   let before=sc.scrollTop;sc.scrollTop=Math.min(before+Math.max(450,sc.clientHeight*.85),sc.scrollHeight);sc.dispatchEvent(new Event("scroll",{bubbles:true}));
   await new Promise(r=>setTimeout(r,650));let after=sc.scrollTop;if(after==before||after==last)stuck++;else stuck=0;last=after;
   if(after+sc.clientHeight>=sc.scrollHeight-8&&stuck>=3)break}
 for(const x of extract())all.has(x.phone)||all.set(x.phone,x);return[...all.values()];
};
})();