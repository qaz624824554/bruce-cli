const{alias:e}=require("./bruce"),{AbsPath:t,IsExist:n,ReadEntry:s}=require("../util/setting");function r(e){const n=s(),r=n.map((s=>({[s]:[`webpack-dev-server/client?http://localhost:${e}/`,"webpack/hot/dev-server",t(`src${n.length>1?`/pages/${s}`:""}/index`)]})));return Object.assign({},...r)}function o(n){const s=Object.keys(e);return{vendor:n.map((n=>t(`node_modules/${s.includes(n)?e[n]:n}`)))}}function c(){const e=n("dist/static/vendor.json")?require(t("dist/static/vendor.json")):[],r=s(),o=r.map((e=>({[e]:t(`src${r.length>1?`/pages/${e}`:""}/index`)})));return Object.assign(e.length?{vendor:e}:{},...o)}module.exports={GetDevEntry:r,GetDllEntry:o,GetProdEntry:c};