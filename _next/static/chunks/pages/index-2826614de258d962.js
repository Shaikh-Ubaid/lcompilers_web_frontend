(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7698)}])},7698:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(4051),o=n.n(r),a=n(5893),c=n(6574),s=n(1889),u=n(4842),l=n(5152),d=n.n(l),_=c.Z.TabPane,m=d()(Promise.all([n.e(281),n.e(668),n.e(286)]).then(n.bind(n,2286)),{loadableGenerated:{webpack:function(){return[2286]}},ssr:!1});var f=function(e){var t=e.disabled,n=e.sourceCode,r=e.setSourceCode,o=e.activeTab,i=e.handleUserTabChange,l=e.myHeight,d=(0,a.jsxs)(s.Z,{disabled:t,onClick:function(){return i(o)},children:[(0,a.jsx)(u.Z,{})," Run"]});return(0,a.jsx)("div",{className:"card-container",style:{height:"100%"},children:(0,a.jsx)(c.Z,{tabBarExtraContent:d,style:{height:"100%"},children:(0,a.jsx)(_,{tab:"main.f90",style:{height:l},children:(0,a.jsx)(m,{sourceCode:n,setSourceCode:r})},"1")})})},p=n(7132),h=n(5439);var g=function(e){var t=e.activeTab,n=e.output,r=e.handleUserTabChange,o=e.myHeight;return(0,a.jsxs)("div",{className:"card-container",children:[(0,a.jsx)(h.Z,{block:!0,style:{margin:"6px 0px 22px 0px"},options:["STDOUT","AST","ASR","WAT","CPP","PY"],value:t,onChange:function(e){return r(e)}}),(0,a.jsx)(s.Z,{onClick:function(){navigator.clipboard.writeText(n)},style:{position:"absolute",right:"40px",top:"80px"},children:(0,a.jsx)(p.Z,{})}),(0,a.jsx)("pre",{style:{margin:"0px",height:o,overflow:"scroll",border:"1px solid black"},children:(0,a.jsx)("div",{id:"outputBox",style:{minHeight:"100%",fontSize:"0.9em",padding:"10px"},dangerouslySetInnerHTML:{__html:n}})})]})},x=n(4298),y=n.n(x),b=n(7294);function w(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){w(i,r,o,a,c,"next",e)}function c(e){w(i,r,o,a,c,"throw",e)}a(void 0)}))}}function j(){return new Promise((function(e,t){Module.onRuntimeInitialized=function(){e({emit_ast_from_source:Module.cwrap("emit_ast_from_source","string",["string"]),emit_asr_from_source:Module.cwrap("emit_asr_from_source","string",["string"]),emit_wat_from_source:Module.cwrap("emit_wat_from_source","string",["string"]),emit_cpp_from_source:Module.cwrap("emit_cpp_from_source","string",["string"]),emit_py_from_source:Module.cwrap("emit_wat_from_source","string",["string"]),emit_wasm_from_source:Module.cwrap("emit_wasm_from_source","string",["string"])})}}))}function T(e,t,n,r){var o=function(e){return t.push(e.toString())},i=function(){r(t.join(" ")+"\n"),t.length=0};return{js:{memory:e,print_i32:o,print_i64:o,print_f32:o,print_f64:o,print_str:function(n,r){return t.push(new TextDecoder("utf8").decode(new Uint8Array(e.buffer,n,r)))},flush_buf:i,set_exit_code:function(e){return n.val=e},cpu_time:function(e){return Date.now()/1e3},show_img:function(n,r,o){var a=new DataView(e.buffer,o,Int32Array.BYTES_PER_ELEMENT*r*n),c=document.createElement("CANVAS");c.width=n,c.height=r;for(var s=c.getContext("2d"),u=s.createImageData(n,r),l=0;l<u.data.length;l+=4)u.data[l+0]=a.getInt32(l,!0),u.data[l+1]=a.getInt32(l,!0),u.data[l+2]=a.getInt32(l,!0),u.data[l+3]=255;s.putImageData(u,0,0),t.push('<img alt="constructed image" src="'.concat(c.toDataURL("image/jpeg"),'" height="').concat(r,'" width="').concat(n,'" style="aspect-ratio: 1 / 1;"/>')),i()},show_img_color:function(n,r,o){var a=new DataView(e.buffer,o,4*Int32Array.BYTES_PER_ELEMENT*r*n),c=document.createElement("CANVAS");c.width=n,c.height=r;for(var s=c.getContext("2d"),u=s.createImageData(n,r),l=0;l<u.data.length;l++)u.data[l]=a.getInt32(4*l,!0);s.putImageData(u,0,0),t.push('<img alt="constructed image" src="'.concat(c.toDataURL("image/jpeg"),'" height="').concat(r,'" width="').concat(n,'" style="aspect-ratio: 1 / 1;"/>')),i()}}}}function R(e,t){return S.apply(this,arguments)}function S(){return(S=v(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,WebAssembly.instantiate(t,n);case 3:r=e.sent,(0,r.instance.exports._lcompilers_main)(),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:return e.abrupt("return","Success");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function N(e,t){return A.apply(this,arguments)}function A(){return A=v(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:r=e.sent,t.emit_ast_from_source=function(e){try{return r.emit_ast_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: AST could not be generated from the code"),0}},t.emit_asr_from_source=function(e){try{return r.emit_asr_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: ASR could not be generated from the code"),0}},t.emit_wat_from_source=function(e){try{return r.emit_wat_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: WAT could not be generated from the code"),0}},t.emit_cpp_from_source=function(e){try{return r.emit_cpp_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: CPP could not be generated from the code"),0}},t.emit_py_from_source=function(e){try{return r.emit_py_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: LLVM could not be generated from the code"),0}},t.compile_code=function(e){try{return r.emit_wasm_from_source(e)}catch(t){return console.log(t),n(t+"\nERROR: The code could not be compiled. Either there is a compile-time error or there is an issue at our end."),0}},t.execute_code=function(){var e=v(o().mark((function e(t,r){var i,a,c,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={val:1},a=[],c=new WebAssembly.Memory({initial:100,maximum:100}),s=T(c,a,i,r),e.next=6,R(t,s);case 6:if(u=e.sent,0!=i.val){e.next=9;break}return e.abrupt("return",1);case 9:return console.log(u),n(u+"\nERROR: The code could not be executed. Either there is a runtime error or there is an issue at our end."),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();case 10:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}var C=function(e){var t=e.moduleReady,n=e.setModuleReady,r=e.lfortran_funcs,i=e.openNotification,c=e.myPrint,s=e.handleUserTabChange,u=(0,b.useCallback)(v(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r,c);case 2:n(!0),i("LFortran Module Initialized!","bottomRight"),console.log("LFortran Module Initialized!"),s("STDOUT");case 6:case"end":return e.stop()}}),e)}))),[t]);return(0,a.jsx)("div",{children:(0,a.jsx)(y(),{src:"./lpython.js",onLoad:u})})},E={src_code_mandel_brot:'program mandelbrot\ninteger, parameter :: Nx = 600, Ny = 450, n_max = 255, dp=8\nreal(dp), parameter :: xcenter = -0.5_dp, ycenter = 0.0_dp, &\n    width = 4, height = 3, dx_di = width/Nx, dy_dj = -height/Ny, &\n    x_offset = xcenter - (Nx+1)*dx_di/2, y_offset = ycenter - (Ny+1)*dy_dj/2\ninteger :: image(Nx,Ny), image_color(4,Nx,Ny), palette(3,4), i, j, n, idx\nreal(dp) :: x, y, x_0, y_0, x_sqr, y_sqr\ninterface\n    subroutine show_img(w, h, A) bind(c)\n    integer, intent(in) :: w, h\n    integer, intent(in) :: A(w,h)\n    end subroutine\n    subroutine show_img_color(w, h, A) bind(c)\n    integer, intent(in) :: w, h\n    integer, intent(in) :: A(4,w,h)\n    end subroutine\nend interface\ndo j = 1, Ny\n    y_0 = y_offset + dy_dj * j\n    do i = 1, Nx\n        x_0 = x_offset + dx_di * i\n        x = 0; y = 0; n = 0\n        do\n            x_sqr = x ** 2; y_sqr = y ** 2\n            if (x_sqr + y_sqr > 4 .or. n == n_max) then\n                image(i,j) = 255-n\n                exit\n            end if\n            y = y_0 + 2 * x * y\n            x = x_0 + x_sqr - y_sqr\n            n = n + 1\n        end do\n    end do\nend do\npalette(1,1) =   0; palette(2,1) = 135; palette(3,1) =  68\npalette(1,2) =   0; palette(2,2) =  87; palette(3,2) = 231\npalette(1,3) = 214; palette(2,3) =  45; palette(3,3) =  32\npalette(1,4) = 255; palette(2,4) = 167; palette(3,4) =   0\ndo j = 1, Ny\n    do i = 1, Nx\n        idx = image(i,j) - (image(i,j)/4)*4 + 1\n        image_color(1,i,j) = palette(1,idx) ! Red\n        image_color(2,i,j) = palette(2,idx) ! Green\n        image_color(3,i,j) = palette(3,idx) ! Blue\n        image_color(4,i,j) = 255            ! Alpha\n    end do\nend do\nprint *, "The Mandelbrot image in color:"\ncall show_img_color(Nx, Ny, image_color)\nprint *, "The Mandelbrot image in grayscale:"\ncall show_img(Nx, Ny, image)\nprint *, "Done."\nend program mandelbrot\n',src_code_expr2:"def main0():\n    x: i32\n    x = (2+3)*5\n    print(x)\n\nmain0()\n"},k=n(6348),P=n(6226),M=n(1382),I=n(9614),U=n(888),D=n(4431);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Z(i,r,o,a,c,"next",e)}function c(e){Z(i,r,o,a,c,"throw",e)}a(void 0)}))}}function q(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=new(n.n(D)()),z=(0,a.jsx)(U.Z,{style:{fontSize:24},spin:!0}),B=function(e,t){I.Z.info({message:e,placement:t})},V={emit_ast_from_source:null,emit_asr_from_source:null,emit_wat_from_source:null,emit_wasm_from_source:null,emit_cpp_from_source:null,emit_py_from_source:null,compile_code:null,execute_code:null};function W(){var e=(0,b.useState)(!1),t=e[0],n=e[1],r=(0,b.useState)(E.src_code_expr2),i=r[0],c=r[1],s=(0,b.useState)("STDOUT"),u=s[0],l=s[1],d=(0,b.useState)(""),_=d[0],m=d[1],p=(0,b.useState)("calc(100vh - 170px)"),h=p[0];p[1];function x(e){return y.apply(this,arguments)}function y(){return(y=L(o().mark((function e(t){var n,r,a,c,s,u,d,_,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("STDOUT"!=t){e.next=19;break}if(""!==i.trim()){e.next=5;break}return m("No Source Code to compile"),l(t),e.abrupt("return");case 5:if(!(n=V.compile_code(i))){e.next=17;break}if(r=q(n.split(",")),a=r[0],c=r.slice(1),"0"===a){e.next=12;break}m(H.ansi_to_html(c)),e.next=17;break;case 12:return s=[],e.next=15,V.execute_code(new Uint8Array(c),(function(e){return s.push(e)}));case 15:e.sent&&m(s.join(""));case 17:e.next=20;break;case 19:"AST"==t?(u=V.emit_ast_from_source(i))&&m(H.ansi_to_html(u)):"ASR"==t?(d=V.emit_asr_from_source(i))&&m(H.ansi_to_html(d)):"WAT"==t?(_=V.emit_wat_from_source(i))&&m(H.ansi_to_html(_)):"CPP"==t?(f=V.emit_cpp_from_source(i))&&m(H.ansi_to_html(f)):"PY"==t?m("Support for PY is not yet enabled"):(console.log("Unknown key:",t),m("Unknown key: "+t));case 20:l(t);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{moduleReady:t,setModuleReady:n,lfortran_funcs:V,openNotification:B,myPrint:m,handleUserTabChange:x}),(0,a.jsxs)(k.Z,{gutter:[16,16],children:[(0,a.jsx)(P.Z,{xs:{span:24},sm:{span:24},md:{span:12},children:(0,a.jsx)(f,{disabled:!t,sourceCode:i,setSourceCode:c,activeTab:u,handleUserTabChange:x,myHeight:h})}),(0,a.jsx)(P.Z,{xs:{span:24},sm:{span:24},md:{span:12},children:t?(0,a.jsx)(g,{activeTab:u,output:_,handleUserTabChange:x,myHeight:h}):(0,a.jsx)(M.Z,{style:{position:"relative",top:"50%",left:"50%"},indicator:z})})]})]})}}},function(e){e.O(0,[459,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);