"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3071],{3071:function(a,b,c){c.r(b);var d=c(7896),e=c(2784),f=c(9089),g=c(6050),h=function(a){return e.createElement(g.Z,(0,d.Z)({},a,{mainSize:20}),e.createElement("path",{d:"M15.4167 4.16667H12.0833C11.3932 4.16667 10.8333 4.72657 10.8333 5.41667V8.75001C10.8333 9.44011 11.3932 10 12.0833 10H14.1667V11.6667C14.1667 12.5859 13.4193 13.3333 12.5 13.3333H12.2917C11.9453 13.3333 11.6667 13.612 11.6667 13.9583V15.2083C11.6667 15.5547 11.9453 15.8333 12.2917 15.8333H12.5C14.8021 15.8333 16.6667 13.9688 16.6667 11.6667V5.41667C16.6667 4.72657 16.1068 4.16667 15.4167 4.16667ZM7.91668 4.16667H4.58334C3.89324 4.16667 3.33334 4.72657 3.33334 5.41667V8.75001C3.33334 9.44011 3.89324 10 4.58334 10H6.66668V11.6667C6.66668 12.5859 5.91928 13.3333 5.00001 13.3333H4.79168C4.44532 13.3333 4.16668 13.612 4.16668 13.9583V15.2083C4.16668 15.5547 4.44532 15.8333 4.79168 15.8333H5.00001C7.30209 15.8333 9.16668 13.9688 9.16668 11.6667V5.41667C9.16668 4.72657 8.60678 4.16667 7.91668 4.16667Z"}))};h.displayName="DoubleQuoteIcon",h.propTypes=f.Z,b.default=h},9089:function(a,b,c){var d=c(3980);c.n(d);var e={colour:d.string,disabled:d.bool,disabledColour:d.string,fixColour:d.string,hoverColour:(0,d.oneOfType)([d.bool,d.string]),onClick:d.func,size:(0,d.oneOfType)([d.number,d.string])};b.Z=e},6050:function(a,b,c){var d,e,f,g,h=c(1171),i=c(7896),j=c(9740),k=c(2784),l=c(316),m=["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"],n=function(a){var b=a.children,c=a.colour,d=a.disabled,e=a.disabledColour,f=a.hoverColour,g=a.onClick,h=a.size,l=a.stroke,n=a.translate,o=(0,j.Z)(a,m),p=o.mainSize,r="";if("string"==typeof h)switch(h){case"xs":r=12;break;case"sm":r=16;break;case"lg":r=24;break;case"xl":r=32;break;default:r=20;break}else r=h||20;var s=1;return p&&r!==p&&(s=Number(r/p)),k.createElement(q,(0,i.Z)({colour:c,disabled:d,disabledColour:e,hoverColour:f,onClick:g,scale:s,size:r,stroke:l,translate:n,xmlns:"http://www.w3.org/2000/svg"},o),b)};n.displayName="IconWrapper";var o={DEFAULT:"default",HOVER:"hover"},p=function(a,b){var c=b.colour,d=b.context,e=b.disabled,f=b.disabledColour,g=b.hoverColour,h=b.theme,i=h.ICONS,j=h.THEME_COLOUR,k=d?j.context:c||i.defaultIconColour;return a===o.DEFAULT?e&&f?f:e?i.disabledIconColour:k:a===o.HOVER&&g?(!0===g&&(g=i.hoverIconColour),e&&f?f:e?i.disabledIconColour:g||i.hoverIconColour||k):e?f||i.disabledIconColour:k},q=l.ZP.svg(d||(d=(0,h.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),function(a){var b=a.size;if("number"==typeof b)return(0,l.iv)(e||(e=(0,h.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),b,b)},function(a){return p(o.DEFAULT,a)},function(a){return a.stroke},function(a){var b=a.scale,c=a.translate;return b&&(0,l.iv)(f||(f=(0,h.Z)(["\n          transform: scale(",") ",";\n        "])),b,c||"")},function(a){return p(o.HOVER,a)},function(a){var b=a.onClick,c=a.disabled;return b&&!c&&(0,l.iv)(g||(g=(0,h.Z)(["\n      cursor: pointer;\n    "])))});b.Z=n}}])