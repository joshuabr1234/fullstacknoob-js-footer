/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const perf=(globalThis.MonacoPerformanceMarks=globalThis.MonacoPerformanceMarks||[],{mark(t){globalThis.MonacoPerformanceMarks.push(t,Date.now())}});perf.mark("renderer/started");const bootstrapWindow=(()=>window.MonacoBootstrapWindow)(),whenEnvResolved=bootstrapWindow.globals().process.whenEnvResolved;function showPartsSplash(t){let o;if(perf.mark("willShowPartsSplash"),"string"==typeof t.partsSplashPath)try{o=JSON.parse(require.__$__nodeRequire("fs").readFileSync(t.partsSplashPath,"utf8"))}catch(t){}const e=t.highContrast&&t.autoDetectHighContrast;let r,i,a;o&&e&&"hc-black"!==o.baseTheme&&(o=void 0),o&&t.extensionDevelopmentPath&&(o.layoutInfo=void 0),o?(r=o.baseTheme,i=o.colorInfo.editorBackground,a=o.colorInfo.foreground):e?(r="hc-black",i="#000000",a="#FFFFFF"):(r="vs-dark",i="#1E1E1E",a="#CCCCCC");const n=document.createElement("style");if(n.className="initialShellColors",document.head.appendChild(n),n.innerHTML=`body { background-color: ${i}; color: ${a}; margin: 0; padding: 0; }`,
o&&o.layoutInfo){const{id:e,layoutInfo:i,colorInfo:a}=o,n=document.createElement("div");n.id=e,n.className=r,i.windowBorder&&(n.style.position="relative",n.style.height="calc(100vh - 2px)",n.style.width="calc(100vw - 2px)",n.style.border="1px solid var(--window-border-color)",n.style.setProperty("--window-border-color",a.windowBorder),i.windowBorderRadius&&(n.style.borderRadius=i.windowBorderRadius)),i.sideBarWidth=Math.min(i.sideBarWidth,window.innerWidth-(i.activityBarWidth+i.editorPartMinWidth)),
t.folderUri||t.workspace?n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${a.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${a.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: ${i.activityBarWidth}px; width: ${i.sideBarWidth}px; background-color: ${a.sideBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${a.statusBarBackground};"></div>\n\t\t\t`:n.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${i.titleBarHeight}px; background-color: ${a.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${i.titleBarHeight}px); top: ${i.titleBarHeight}px; ${i.sideBarSide}: 0; width: ${i.activityBarWidth}px; background-color: ${a.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${i.statusBarHeight}px; background-color: ${a.statusBarNoFolderBackground};"></div>\n\t\t\t`,
document.body.appendChild(n)}perf.mark("didShowPartsSplash")}bootstrapWindow.load(["vs/workbench/workbench.desktop.main","vs/nls!vs/workbench/workbench.desktop.main","vs/css!vs/workbench/workbench.desktop.main"],(async function(t,o){return perf.mark("didLoadWorkbenchMain"),performance.mark("workbench-start"),await whenEnvResolved,perf.mark("main/startup"),require("vs/workbench/electron-browser/desktop.main").main(o)}),{removeDeveloperKeybindingsAfterLoad:!0,canModifyDOM:function(t){showPartsSplash(t)},beforeLoaderConfig:function(t,o){o.recordStats=!0},beforeRequire:function(){perf.mark("willLoadWorkbenchMain")}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/58bb7b2331731bf72587010e943852e13e6fd3cf/core/vs/code/electron-browser/workbench/workbench.js.map
