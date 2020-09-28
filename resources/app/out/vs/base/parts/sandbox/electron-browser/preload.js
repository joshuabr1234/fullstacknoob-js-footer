/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const{ipcRenderer:e,webFrame:n,crashReporter:o,contextBridge:r}=require("electron"),t={ipcRenderer:{send(n,...o){c(n)&&e.send(n,...o)},on(n,o){c(n)&&e.on(n,o)},once(n,o){c(n)&&e.once(n,o)},removeListener(n,o){c(n)&&e.removeListener(n,o)}},webFrame:{setZoomLevel(e){"number"==typeof e&&n.setZoomLevel(e)}},crashReporter:{addExtraParameter(e,n){o.addExtraParameter(e,n)}},process:{platform:process.platform,env:process.env,_whenEnvResolved:void 0,get whenEnvResolved(){return this._whenEnvResolved||(this._whenEnvResolved=new Promise((function(n){const o=setTimeout((function(){console.warn("Preload: Unable to resolve shell environment in a reasonable time"),n()}),3e3);e.once("vscode:acceptShellEnv",(function(e,r){clearTimeout(o),Object.assign(process.env,r),n()})),e.send("vscode:fetchShellEnv")}))),this._whenEnvResolved},on:function(e,n){(function(e){if("uncaughtException"!==e)throw new Error(`Unsupported process event '${e}'`);return!0})(e)&&process.on(e,n)}},context:{
sandbox:process.argv.includes("--enable-sandbox")}};let s=process.argv.includes("--context-isolation");if(s)try{r.exposeInMainWorld("vscode",t)}catch(e){console.error(e),s=!1}function c(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}s||(window.vscode=t)}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/58bb7b2331731bf72587010e943852e13e6fd3cf/core/vs/base/parts/sandbox/electron-browser/preload.js.map
