(this["webpackJsonp2048-game"]=this["webpackJsonp2048-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(8),c=n.n(r),i=n(2),a=(n(13),n(1)),f=n.n(a),o=n(3),s=n(5),u=n.n(s),l=(n(14),n(15),n(0)),b=f.a.memo((function(e){var t=e.cell;return Object(l.jsx)("div",{className:u()("cell",{"cell--2":2===t},{"cell--4":4===t},{"cell--8":8===t},{"cell--16":16===t},{"cell--32":32===t},{"cell--64":64===t},{"cell--128":128===t},{"cell--256":256===t},{"cell--512":512===t},{"cell--1024":1024===t},{"cell--2048":2048===t}),children:t||""})})),j=function(e){var t=e.gameDataRow;return Object(l.jsx)("div",{className:"game-row",children:t.map((function(e,t){return Object(l.jsx)(b,{cell:e},t)}))})},v=(n(17),function(){return Math.floor(4*Math.random())}),m=function(){return 10===Math.ceil(10*Math.random())?4:2},O=function(){return Math.random()},d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h=f.a.memo((function(){var e=Object(a.useState)(d),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),s=f[0],b=f[1],h=Object(a.useState)(!1),g=Object(i.a)(h,2),x=g[0],_=g[1],k=Object(a.useState)(!1),w=Object(i.a)(k,2),p=w[0],N=w[1],y=Object(a.useState)(0),S=Object(i.a)(y,2),A=S[0],C=S[1],E=function(e,t){var n=Object(a.useState)((function(){try{return JSON.parse("".concat(localStorage.getItem(e)))||t}catch(n){return t}})),r=Object(i.a)(n,2),c=r[0],f=r[1];return[c,function(t){f(t),localStorage.setItem(e,JSON.stringify(t))}]}("best score",0),J=Object(i.a)(E,2),M=J[0],I=J[1],L=Object(a.useCallback)((function(e){b(e.key)}),[]),D=Object(a.useCallback)((function(){!n.some((function(e){return e.some((function(e){return 0===e}))}))&&p||function(){for(var e=Object(o.a)(n),t=!1,c=e.length-2;c>=0;c-=1)switch(c){case 2:for(var i=function(n){if(0!==e[3][n]&&e[2][n]===e[3][n])e[3][n]*=2,e[2][n]=0,C((function(t){return t+e[3][n]})),t=!0;else if(0===e[3][n]&&0!==e[2][n]){var r=[e[2][n],e[3][n]];e[3][n]=r[0],e[2][n]=r[1],t=!0}},a=0;a<=3;a+=1)i(a);break;case 1:for(var f=function(n){if(0!==e[3][n]&&e[1][n]===e[3][n]&&0===e[2][n])e[3][n]*=2,e[1][n]=0,C((function(t){return t+e[3][n]})),t=!0;else if(0===e[3][n]&&0!==e[1][n]){var r=[e[1][n],e[3][n]];e[3][n]=r[0],e[1][n]=r[1],t=!0}},s=0;s<=3;s+=1)f(s);for(var u=function(n){if(0!==e[2][n]&&e[1][n]===e[2][n])e[2][n]*=2,e[1][n]=0,C((function(t){return t+e[2][n]})),t=!0;else if(0===e[2][n]&&0!==e[1][n]){var r=[e[1][n],e[2][n]];e[2][n]=r[0],e[1][n]=r[1],t=!0}},l=0;l<=3;l+=1)u(l);break;case 0:for(var j=function(n){if(0!==e[3][n]&&e[0][n]===e[3][n]&&0===e[1][n]&&0===e[2][n])e[3][n]*=2,e[0][n]=0,C((function(t){return t+e[3][n]})),t=!0;else if(0===e[3][n]&&0!==e[0][n]){var r=[e[0][n],e[3][n]];e[3][n]=r[0],e[0][n]=r[1],t=!0}},d=0;d<=3;d+=1)j(d);for(var h=function(n){if(0!==e[2][n]&&e[0][n]===e[2][n]&&0===e[1][n])e[2][n]*=2,e[0][n]=0,C((function(t){return t+e[2][n]})),t=!0;else if(0===e[2][n]&&0!==e[0][n]){var r=[e[0][n],e[2][n]];e[2][n]=r[0],e[0][n]=r[1],t=!0}},g=0;g<=3;g+=1)h(g);for(var x=function(n){if(0!==e[1][n]&&e[0][n]===e[1][n])e[1][n]*=2,e[0][n]=0,C((function(t){return t+e[1][n]})),t=!0;else if(0===e[1][n]&&0!==e[0][n]){var r=[e[0][n],e[1][n]];e[1][n]=r[0],e[0][n]=r[1],t=!0}},_=0;_<=3;_+=1)x(_)}if(t){var k=O()>.4?0:1;e[1].every((function(e){return 0!==e}))&&(k=0);var w=[k,v()];if(0!==e[w[0]][w[1]])for(;0!==e[w[0]][w[1]];)w=[k,v()];e[w[0]][w[1]]=m()}r(e),b("")}()}),[n]),R=Object(a.useCallback)((function(){!n.some((function(e){return e.some((function(e){return 0===e}))}))&&p||function(){for(var e=Object(o.a)(n),t=!1,c=0;c<=e.length;c+=1)switch(c){case 1:for(var i=function(n){if(0!==e[0][n]&&e[0][n]===e[1][n])e[0][n]*=2,e[1][n]=0,C((function(t){return t+e[0][n]})),t=!0;else if(0===e[0][n]&&0!==e[1][n]){var r=[e[1][n],e[0][n]];e[0][n]=r[0],e[1][n]=r[1],t=!0}},a=0;a<=3;a+=1)i(a);break;case 2:for(var f=function(n){if(0!==e[0][n]&&e[0][n]===e[2][n]&&0===e[1][n])e[0][n]*=2,e[2][n]=0,C((function(t){return t+e[0][n]})),t=!0;else if(0===e[0][n]&&0!==e[2][n]){var r=[e[2][n],e[0][n]];e[0][n]=r[0],e[2][n]=r[1],t=!0}},s=0;s<=3;s+=1)f(s);for(var u=function(n){if(0!==e[1][n]&&e[1][n]===e[2][n])e[1][n]*=2,e[2][n]=0,C((function(t){return t+e[1][n]})),t=!0;else if(0===e[1][n]&&0!==e[2][n]){var r=[e[2][n],e[1][n]];e[1][n]=r[0],e[2][n]=r[1],t=!0}},l=0;l<=3;l+=1)u(l);break;case 3:for(var j=function(n){if(0!==e[0][n]&&e[3][n]===e[0][n]&&0===e[1][n]&&0===e[2][n])e[0][n]*=2,e[3][n]=0,C((function(t){return t+e[0][n]})),t=!0;else if(0===e[0][n]&&0!==e[3][n]){var r=[e[3][n],e[0][n]];e[0][n]=r[0],e[3][n]=r[1],t=!0}},d=0;d<=3;d+=1)j(d);for(var h=function(n){if(0!==e[1][n]&&e[1][n]===e[3][n]&&0===e[2][n])e[1][n]*=2,e[3][n]=0,C((function(t){return t+e[1][n]})),t=!0;else if(0===e[1][n]&&0!==e[3][n]){var r=[e[3][n],e[1][n]];e[1][n]=r[0],e[3][n]=r[1],t=!0}},g=0;g<=3;g+=1)h(g);for(var x=function(n){if(0!==e[2][n]&&e[2][n]===e[3][n])e[2][n]*=2,e[3][n]=0,C((function(t){return t+e[2][n]})),t=!0;else if(0===e[2][n]&&0!==e[3][n]){var r=[e[3][n],e[2][n]];e[2][n]=r[0],e[3][n]=r[1],t=!0}},_=0;_<=3;_+=1)x(_)}if(t){var k=O()>.4?3:2;e[2].every((function(e){return 0!==e}))&&(k=3);var w=[k,v()];if(0!==e[w[0]][w[1]])for(;0!==e[w[0]][w[1]];)w=[k,v()];e[w[0]][w[1]]=m()}r(e),b("")}()}),[n]),Y=Object(a.useCallback)((function(){!n.some((function(e){return e.some((function(e){return 0===e}))}))&&p||function(){for(var e=Object(o.a)(n),t=!1,c=function(n){for(var r=e[n].length-2;r>=0;r-=1)switch(r){case 2:if(0!==e[n][3]&&e[n][3]===e[n][2])e[n][3]*=2,e[n][2]=0,C((function(t){return t+e[n][3]})),t=!0;else if(0===e[n][3]&&0!==e[n][2]){var c=[e[n][2],e[n][3]];e[n][3]=c[0],e[n][2]=c[1],t=!0}break;case 1:if(0!==e[n][3]&&e[n][3]===e[n][1]&&0===e[n][2])e[n][3]*=2,e[n][1]=0,C((function(t){return t+e[n][3]})),t=!0;else if(0===e[n][3]&&0!==e[n][1]){var i=[e[n][1],e[n][3]];e[n][3]=i[0],e[n][1]=i[1],t=!0}if(0!==e[n][2]&&e[n][2]===e[n][1])e[n][2]*=2,e[n][1]=0,C((function(t){return t+e[n][2]})),t=!0;else if(0===e[n][2]&&0!==e[n][1]){var a=[e[n][1],e[n][2]];e[n][2]=a[0],e[n][1]=a[1],t=!0}break;case 0:if(0!==e[n][3]&&e[n][3]===e[n][0]&&0===e[n][2]&&0===e[n][1])e[n][3]*=2,e[n][0]=0,C((function(t){return t+e[n][3]})),t=!0;else if(0===e[n][3]&&0!==e[n][0]){var f=[e[n][0],e[n][3]];e[n][3]=f[0],e[n][0]=f[1],t=!0}if(0!==e[n][2]&&e[n][2]===e[n][0]&&0===e[n][1])e[n][2]*=2,e[n][0]=0,C((function(t){return t+e[n][2]})),t=!0;else if(0===e[n][2]&&0!==e[n][0]){var o=[e[n][0],e[n][2]];e[n][2]=o[0],e[n][0]=o[1],t=!0}if(0!==e[n][1]&&e[n][1]===e[n][0])e[n][1]*=2,e[n][0]=0,C((function(t){return t+e[n][1]})),t=!0;else if(0===e[n][1]&&0!==e[n][0]){var s=[e[n][0],e[n][1]];e[n][1]=s[0],e[n][0]=s[1],t=!0}}},i=0;i<e.length;i+=1)c(i);if(t){var a=O()>.4?0:1;e.every((function(e){return 0!==e[1]}))&&(a=0);var f=[v(),a];if(0!==e[f[0]][f[1]])for(;0!==e[f[0]][f[1]];)f=[v(),a];e[f[0]][f[1]]=m()}r(e),b("")}()}),[n]),B=Object(a.useCallback)((function(){!n.some((function(e){return e.some((function(e){return 0===e}))}))&&p||function(){for(var e=Object(o.a)(n),t=!1,c=function(n){for(var r=1;r<e[n].length;r+=1)switch(r){case 1:if(0!==e[n][0]&&e[n][0]===e[n][1])e[n][0]*=2,e[n][1]=0,C((function(t){return t+e[n][0]})),t=!0;else if(0===e[n][0]&&0!==e[n][1]){var c=[e[n][1],e[n][0]];e[n][0]=c[0],e[n][1]=c[1],t=!0}break;case 2:if(0!==e[n][0]&&e[n][0]===e[n][2]&&0===e[n][1])e[n][0]*=2,e[n][2]=0,C((function(t){return t+e[n][0]})),t=!0;else if(0===e[n][0]&&0!==e[n][2]){var i=[e[n][2],e[n][0]];e[n][0]=i[0],e[n][2]=i[1],t=!0}if(0!==e[n][1]&&e[n][1]===e[n][2])e[n][1]*=2,e[n][2]=0,C((function(t){return t+e[n][1]})),t=!0;else if(0===e[n][1]&&0!==e[n][2]){var a=[e[n][2],e[n][1]];e[n][1]=a[0],e[n][2]=a[1],t=!0}break;case 3:if(0!==e[n][0]&&e[n][0]===e[n][3]&&0===e[n][2]&&0===e[n][1])e[n][0]*=2,e[n][3]=0,C((function(t){return t+e[n][0]})),t=!0;else if(0===e[n][0]&&0!==e[n][3]){var f=[e[n][3],e[n][0]];e[n][0]=f[0],e[n][3]=f[1],t=!0}if(0!==e[n][1]&&e[n][1]===e[n][3]&&0===e[n][2])e[n][1]*=2,e[n][3]=0,C((function(t){return t+e[n][1]})),t=!0;else if(0===e[n][1]&&0!==e[n][3]){var o=[e[n][3],e[n][1]];e[n][1]=o[0],e[n][3]=o[1],t=!0}if(0!==e[n][2]&&e[n][2]===e[n][3])e[n][2]*=2,e[n][3]=0,C((function(t){return t+e[n][2]})),t=!0;else if(0===e[n][2]&&0!==e[n][3]){var s=[e[n][3],e[n][2]];e[n][2]=s[0],e[n][3]=s[1],t=!0}}},i=0;i<e.length;i+=1)c(i);if(t){var a=O()>.4?3:2;e.every((function(e){return 0!==e[2]}))&&(a=3);var f=[v(),a];if(0!==e[f[0]][f[1]])for(;0!==e[f[0]][f[1]];)f=[v(),a];e[f[0]][f[1]]=m()}r(e),b("")}()}),[n]);return Object(a.useEffect)((function(){A>=M&&I(A)}),[A]),Object(a.useEffect)((function(){var e;n.some((function(e){return e.includes(2048)}))&&_(!0);for(var t=0;t<n.length;t+=1)for(var r=0;r<n[t].length;r+=1)0===t&&(0===r&&(n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r+1]&&0!==n[t+1][r]&&0!==n[t][r+1]||(e=!0)),3===r&&(n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r-1]&&0!==n[t+1][r]&&0!==n[t][r-1]||(e=!0)),r>0&&r<3&&(n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r-1]&&n[t][r]!==n[t][r+1]&&0!==n[t+1][r]&&0!==n[t][r+1]&&0!==n[t][r-1]||(e=!0))),3===t&&(0===r&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t][r+1]&&0!==n[t-1][r]&&0!==n[t][r+1]||(e=!0)),3===r&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t][r-1]&&0!==n[t-1][r]&&0!==n[t][r-1]||(e=!0)),r>0&&r<3&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t][r-1]&&n[t][r]!==n[t][r+1]&&0!==n[t-1][r]&&0!==n[t][r-1]&&0!==n[t][r+1]||(e=!0))),t>0&&t<3&&(0===r&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r+1]&&0!==n[t-1][r]&&0!==n[t+1][r]&&0!==n[t][r+1]||(e=!0)),3===r&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r-1]&&0!==n[t-1][r]&&0!==n[t+1][r]&&0!==n[t][r-1]||(e=!0)),r>0&&r<3&&(n[t][r]!==n[t-1][r]&&n[t][r]!==n[t+1][r]&&n[t][r]!==n[t][r-1]&&n[t][r]!==n[t][r+1]&&0!==n[t-1][r]&&0!==n[t+1][r]&&0!==n[t][r-1]&&0!==n[t][r+1]||(e=!0)));e?N(!1):(N(!0),document.removeEventListener("keydown",L))}),[n]),Object(a.useEffect)((function(){var e=Object(o.a)(n),t=[v(),v()],c=[v(),v()];if(t[0]===c[0]&&t[1]===c[1])for(;t[0]===c[0]&&t[1]===c[1];)c=[v(),v()];e[t[0]][t[1]]=m(),e[c[0]][c[1]]=m(),r(e)}),[]),Object(a.useEffect)((function(){switch(document.addEventListener("keydown",L),s){case"ArrowDown":D();break;case"ArrowUp":R();break;case"ArrowRight":Y();break;case"ArrowLeft":B()}}),[s]),Object(l.jsxs)("div",{className:"game-field",children:[Object(l.jsxs)("div",{className:"game-field__score-container",children:[Object(l.jsxs)("div",{className:"game-field__score",children:[Object(l.jsx)("span",{children:"Score"}),Object(l.jsx)("span",{children:A})]}),Object(l.jsxs)("div",{className:"game-field__best-score",children:[Object(l.jsx)("span",{children:"Best score"}),Object(l.jsx)("span",{children:M})]})]}),Object(l.jsx)("div",{className:"game-field__game-board",children:n.map((function(e,t){return Object(l.jsx)(j,{gameDataRow:e},t)}))}),Object(l.jsx)("h1",{className:u()("game-field__winning-title",{"game-field__winning-title--active":x}),children:"Congratulation!!! You WIN!!!"}),Object(l.jsx)("h1",{className:u()("game-field__game-over-title",{"game-field__game-over-title--active":p}),children:"You lose :("})]})})),g=(n(18),f.a.memo((function(e){var t=e.startGame;return Object(l.jsxs)("div",{className:"start-screen",children:[Object(l.jsx)("h1",{className:"start-screen__title",children:"2048"}),Object(l.jsxs)("div",{className:"start-screen__description",children:["Join the tiles, get to",Object(l.jsx)("b",{children:" 2048!"})]}),Object(l.jsx)("button",{type:"button",className:"start-screen__button",onClick:function(){return t()},children:"Start game"}),Object(l.jsxs)("div",{className:"start-screen__instruction",children:[Object(l.jsx)("b",{children:"HOW TO PLAY: "}),"Use your",Object(l.jsx)("b",{children:" arrow keys "}),"to move the tiles. Tiles with the same number",Object(l.jsx)("b",{children:" merge into one "}),"when they touch. Add them up to reach",Object(l.jsx)("b",{children:" 2048!"})]})]})}))),x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(l.jsx)("div",{className:"App",children:n?Object(l.jsx)(h,{}):Object(l.jsx)(g,{startGame:function(){return r(!0)}})})};n(19);c.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ea0b2364.chunk.js.map