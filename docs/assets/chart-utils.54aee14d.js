const n=["#0FA6F3","#FE6D59","#FBB410","#9C56B8","#58DB93","#3E76E5","#FFE231","#18B99B"];function u(t){return t>n.length-1?u(t-n.length):n[t]}function o(t){const r=Number.parseInt(t.substring(1,3),16),s=Number.parseInt(t.substring(3,5),16),e=Number.parseInt(t.substring(5,7),16);return(r*299+s*587+e*114)/1e3>=160?"black":"white"}export{o as a,u as g};
