let data=[];
const $=id=>document.getElementById(id),status=t=>$("status").textContent=t;
async function getTab(){return(await chrome.tabs.query({active:true,currentWindow:true}))[0]}
$("start").onclick=async()=>{ $("start").disabled=true;$("download").disabled=true;$("preview").style.display="none";
 try{status("Scanning members… please keep the member list open.");let tab=await getTab();
 await chrome.scripting.executeScript({target:{tabId:tab.id},files:["content.js"]});
 let res=await chrome.scripting.executeScript({target:{tabId:tab.id},func:async()=>{if(!window.__waSocietyExporter)throw Error("Refresh WhatsApp Web and try again.");return await window.__waSocietyExporter()}});
 data=res[0]?.result||[];if(!data.length)throw Error("No phone numbers found. Make sure View all members is open.");
 $("count").textContent=data.length;$("group").textContent=data[0].group||"Current group";$("download").disabled=false;
 status("Scan complete. Review the preview and download.");$("previewRows").innerHTML=data.slice(0,8).map(x=>`<div class="row"><div class="name">${esc(x.name)}</div><div class="phone">${esc(x.phone)}</div></div>`).join("");$("preview").style.display="block";
 }catch(e){status("ERROR: "+e.message)}finally{$("start").disabled=false}};
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
$("download").onclick=()=>{if(!data.length)return;let rows=[["Name","Phone","Group"],...data.map(r=>[r.name,`="${r.phone}"`,r.group])];
let csv=rows.map(row=>row.map(x=>`"${String(x??"").replaceAll('"','""')}"`).join(",")).join("\r\n"),blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
a.href=url;a.download="whatsapp_group_members.csv";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)};