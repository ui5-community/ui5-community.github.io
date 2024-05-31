sap.ui.define(["exports","../locale/getLocale","../locale/languageChange","../locale/normalizeLocale","../locale/nextFallbackLocale","../generated/AssetParameters","../config/Language"],function(e,t,n,s,a,o,c){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.registerI18nLoader=e.getI18nBundleData=e.fetchI18nBundle=void 0;t=r(t);s=r(s);a=r(a);function r(e){return e&&e.__esModule?e:{default:e}}const l=new Set;const u=new Set;const i=new Map;const g=new Map;const d=new Map;const f=(e,t,n)=>{const s=`${e}/${t}`;d.set(s,n)};e.registerI18nLoader=f;const m=(e,t)=>{i.set(e,t)};const h=e=>i.get(e);e.getI18nBundleData=h;const L=(e,t)=>{const n=`${e}/${t}`;return d.has(n)};const p=(e,t)=>{const n=`${e}/${t}`;const s=d.get(n);if(s&&!g.get(n)){g.set(n,s(t))}return g.get(n)};const A=e=>{if(!l.has(e)){console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`);l.add(e)}};const $=(e,t)=>t!==o.DEFAULT_LANGUAGE&&!L(e,t);const w=async e=>{const n=(0,t.default)().getLanguage();const r=(0,t.default)().getRegion();let l=n+(r?`-${r}`:``);if($(e,l)){l=(0,s.default)(l);while($(e,l)){l=(0,a.default)(l)}}const i=(0,c.getFetchDefaultLanguage)();if(l===o.DEFAULT_LANGUAGE&&!i){m(e,null);return}if(!L(e,l)){A(e);return}try{const t=await p(e,l);m(e,t)}catch(e){const t=e;if(!u.has(t.message)){u.add(t.message);console.error(t.message)}}};e.fetchI18nBundle=w;(0,n.attachLanguageChange)(e=>{const t=[...i.keys()];return Promise.all(t.map(w))})});
//# sourceMappingURL=i18n.js.map