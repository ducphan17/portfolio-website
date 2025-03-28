(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{691:(e,s,r)=>{"use strict";r.d(s,{Header:()=>c});var a=r(5155),t=r(2115),i=r(6874),n=r.n(i),l=r(4416),o=r(4783),d=r(7168);function c(){let[e,s]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),c=function(){let[e,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=()=>{s(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}();(0,t.useEffect)(()=>{let e=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let m=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Contact",href:"#contact"}];return(0,a.jsx)("header",{className:"sticky top-0 z-50 w-full transition-all duration-200 ".concat(e?"bg-background/80 backdrop-blur-md shadow-sm":"bg-transparent"),children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:[(0,a.jsx)(n(),{href:"#home",className:"text-xl font-bold",children:"Portfolio"}),c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.$,{variant:"ghost",size:"icon",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?(0,a.jsx)(l.A,{}):(0,a.jsx)(o.A,{})}),r&&(0,a.jsx)("div",{className:"fixed inset-0 top-16 bg-background z-40 p-4",children:(0,a.jsxs)("nav",{className:"flex flex-col space-y-4",children:[m.map(e=>(0,a.jsx)(n(),{href:e.href,className:"text-lg py-2 hover:text-primary transition-colors",onClick:()=>i(!1),children:e.name},e.name)),(0,a.jsx)(d.$,{asChild:!0,className:"mt-4",children:(0,a.jsx)(n(),{href:"#contact",children:"Hire Me"})})]})})]}):(0,a.jsxs)("nav",{className:"flex items-center space-x-8",children:[m.map(e=>(0,a.jsx)(n(),{href:e.href,className:"text-sm font-medium hover:text-primary transition-colors",children:e.name},e.name)),(0,a.jsx)(d.$,{asChild:!0,children:(0,a.jsx)(n(),{href:"#contact",children:"Hire Me"})})]})]})})}},1544:(e,s,r)=>{"use strict";r.d(s,{Contact:()=>v});var a=r(5155),t=r(2115),i=r(7168),n=r(3999);function l(e){let{className:s,type:r,...t}=e;return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,n.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...t})}function o(e){let{className:s,...r}=e;return(0,a.jsx)("textarea",{"data-slot":"textarea",className:(0,n.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),...r})}function d(e){let{className:s,...r}=e;return(0,a.jsx)("div",{"data-slot":"card",className:(0,n.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...r})}function c(e){let{className:s,...r}=e;return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,n.cn)("px-6",s),...r})}var m=r(8883),u=r(9420),x=r(4516),h=r(2486);function v(){let[e,s]=(0,t.useState)({name:"",email:"",subject:"",message:""}),r=e=>{let{name:r,value:a}=e.target;s(e=>({...e,[r]:a}))},n=[{icon:(0,a.jsx)(m.A,{className:"h-5 w-5"}),title:"Email",value:"phantienduc17072005@gmail.com",link:"mailto:phantienduc17072005@gmail.com"},{icon:(0,a.jsx)(u.A,{className:"h-5 w-5"}),title:"Phone",value:"+1 (505) 730-9037",link:"tel:+15057309037"},{icon:(0,a.jsx)(x.A,{className:"h-5 w-5"}),title:"Location",value:"Brownsville, TX",link:null}];return(0,a.jsx)("section",{id:"contact",className:"py-20 bg-muted/30",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"text-center mb-12",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-4",children:"Get In Touch"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the form below."})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,a.jsx)("div",{className:"md:col-span-1 space-y-4",children:n.map((e,s)=>(0,a.jsx)(d,{children:(0,a.jsxs)(c,{className:"p-6 flex items-start gap-4",children:[(0,a.jsx)("div",{className:"p-2 rounded-md bg-primary/10 text-primary mt-1",children:e.icon}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-1",children:e.title}),e.link?(0,a.jsx)("a",{href:e.link,className:"text-muted-foreground hover:text-primary transition-colors",children:e.value}):(0,a.jsx)("p",{className:"text-muted-foreground",children:e.value})]})]})},s))}),(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsx)(d,{children:(0,a.jsx)(c,{className:"p-6",children:(0,a.jsxs)("form",{onSubmit:r=>{r.preventDefault(),console.log("Form submitted:",e),alert("Thank you for your message! I will get back to you soon."),s({name:"",email:"",subject:"",message:""})},className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"text-sm font-medium",children:"Your Name"}),(0,a.jsx)(l,{id:"name",name:"name",value:e.name,onChange:r,placeholder:"Enter your name",required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"text-sm font-medium",children:"Your Email"}),(0,a.jsx)(l,{id:"email",name:"email",type:"email",value:e.email,onChange:r,placeholder:"john@example.com",required:!0})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"subject",className:"text-sm font-medium",children:"Subject"}),(0,a.jsx)(l,{id:"subject",name:"subject",value:e.subject,onChange:r,placeholder:"Project Inquiry",required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),(0,a.jsx)(o,{id:"message",name:"message",value:e.message,onChange:r,placeholder:"Tell me about your project...",rows:5,required:!0})]}),(0,a.jsxs)(i.$,{type:"submit",className:"w-full sm:w-auto gap-2",children:[(0,a.jsx)(h.A,{className:"h-4 w-4"}),"Send Message"]})]})})})})]})]})})}},3999:(e,s,r)=>{"use strict";r.d(s,{cn:()=>i});var a=r(2596),t=r(9688);function i(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,t.QP)((0,a.$)(s))}},7168:(e,s,r)=>{"use strict";r.d(s,{$:()=>o});var a=r(5155);r(2115);var t=r(4624),i=r(2085),n=r(3999);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:s,variant:r,size:i,asChild:o=!1,...d}=e,c=o?t.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,n.cn)(l({variant:r,size:i,className:s})),...d})}},7371:(e,s,r)=>{Promise.resolve().then(r.bind(r,1544)),Promise.resolve().then(r.bind(r,691)),Promise.resolve().then(r.t.bind(r,6874,23)),Promise.resolve().then(r.t.bind(r,3063,23))}},e=>{var s=s=>e(e.s=s);e.O(0,[721,441,684,358],()=>s(7371)),_N_E=e.O()}]);