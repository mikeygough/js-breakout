(()=>{"use strict";const t=class{constructor(t=0,e=0,s=100,i=100,h="#f00"){this.x=t,this.y=e,this.width=s,this.height=i,this.color=h}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},e=class extends t{constructor(t,e,s=75,i=20,h="#0095DD",o=1){super(t,e,s,i,h),this.status=o}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},s=document.getElementById("myCanvas"),i=s.getContext("2d"),h=new class{constructor(t,e="#fee08b",s="#ffffbf",i="#e6f598"){this.canvas=t,this.colorOne=e,this.colorTwo=s,this.colorThree=i}render(t){const e=t.createLinearGradient(0,0,this.canvas.width,this.canvas.height);e.addColorStop(0,this.colorOne),e.addColorStop(.5,this.colorTwo),e.addColorStop(1,this.colorThree),t.fillStyle=e,t.fillRect(0,0,this.canvas.width,this.canvas.height)}}(s,"#222222","#222222","#222222"),o=new class extends t{constructor(t=0,e=0,s=10,i="#999999"){super(t,e,0,0,i),this.radius=s,this.dx=2,this.dy=-2}move(){this.x+=this.dx,this.y+=this.dy}render(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}}(s.width/2,s.height-30),r=document.getElementById("gameMessage");r.style.color="#CCCCCC",r.style.font="16px 'Press Start 2P', system-ui",r.style.textAlign="center";const n=new class extends t{constructor(t,e,s=75,i=10,h="#3B86F7"){super(t,e,s,i,h)}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}}((s.width-75)/2,s.height-10);let l=!1,d=!1;const c=[];for(let t=0;t<4;t+=1){c[t]=[];for(let s=0;s<5;s+=1){const i=85*s+30,h=30*t+30;let o;switch(c[t][s]=new e(i,h),t%4){case 0:o="#5FA052";break;case 1:o="#A3A43F";break;case 2:o="#BC7143";break;case 3:o="#BB504B";break;default:o="#4146C2"}c[t][s].color=o}}const a=new class extends t{constructor(t=0,e=0,s=8,i=20,h="#CCCCCC",o=0,r="16px 'Press Start 2P', system-ui"){super(t,e,s,i,h),this.value=o,this.font=r}render(t){t.font=this.font,t.fillStyle=this.color,t.fillText(`Score: ${this.value}`,this.width,this.height)}reset(){this.value=0}},y=new class extends t{constructor(t=0,e=0,s=345,i=20,h="#CCCCCC",o=3,r="16px 'Press Start 2P', system-ui"){super(t,e,s,i,h),this.value=o,this.font=r}render(t){t.font=this.font,t.fillStyle=this.color,t.fillText(`Lives: ${this.value}`,this.width,this.height)}reset(){this.value=3}};let u=!0;const f=document.getElementById("hitBrick");document.addEventListener("keydown",(function(t){"Right"===t.key||"ArrowRight"===t.key?l=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(d=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"===t.key||"ArrowRight"===t.key?l=!1:"Left"!==t.key&&"ArrowLeft"!==t.key||(d=!1)}),!1),document.addEventListener("mousemove",(function(t){const e=t.clientX-s.offsetLeft;e>0&&e<s.width&&(n.x=e-n.width/2)}),!1),function t(){u&&(i.clearRect(0,0,s.width,s.height),h.render(i),function(){for(let t=0;t<4;t+=1)for(let e=0;e<5;e+=1){const s=c[t][e];1===s.status&&s.render(i)}}(),o.render(i),n.render(i),a.render(i),y.render(i),function(){for(let t=0;t<4;t+=1)for(let e=0;e<5;e+=1){const s=c[t][e];1===s.status&&o.x>s.x&&o.x<s.x+s.width&&o.y>s.y&&o.y<s.y+s.height&&(o.dy=-o.dy,s.status=0,a.value+=1,f.play(),20===a.value&&(r.innerHTML="You Win! <br> CONGRATULATIONS! <br> Playing again in 5 seconds...",r.style.display="block",u=!1,setTimeout((()=>{document.location.reload()}),5e3)))}}(),(o.x+o.dx>s.width-o.radius||o.x+o.dx<o.radius)&&(o.dx=-o.dx),o.y+o.dy<o.radius?o.dy=-o.dy:o.y+o.dy>s.height-o.radius&&(o.x>n.x&&o.x<n.x+n.width?o.dy=-o.dy:(y.value-=1,0===y.value?(r.innerHTML="You Lose! <br>Playing again in 5 seconds...",r.style.display="block",u=!1,setTimeout((()=>{document.location.reload()}),5e3)):(o.x=s.width/2,o.y=s.height-30,o.dx=3,o.dy=-3,n.x=(s.width-n.width)/2))),l&&n.x<s.width-n.width?n.x+=7:d&&n.x>0&&(n.x-=7),o.x+=o.dx,o.y+=o.dy,requestAnimationFrame(t))}()})();