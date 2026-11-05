import { useState, type CSSProperties } from 'react';
import { Pause, Play } from 'lucide-react';
type Slide = {src:string; alt:string; label?:string};
export function ImageAutoSlider({images,duration=30,paused=false}:{images:Slide[];duration?:number;paused?:boolean}) {
 const [isPaused,setIsPaused]=useState(paused);
 if (!images.length) return null;
 return <div className="mv-slider" style={{'--mv-duration':Math.max(duration,10)+'s'} as CSSProperties} data-paused={isPaused} role="region" aria-label="Galeria de hambúrgueres">
 <button className="motion-control" onClick={()=>setIsPaused(p=>!p)} aria-pressed={isPaused} aria-label={isPaused?'Retomar animação':'Pausar animação'}>{isPaused?<Play size={20}/>:<Pause size={20}/>}</button>
 <div className="mv-track">{[0,1].map(copy=><div className="mv-group" key={copy} aria-hidden={copy===1?true:undefined}>{images.map((item,i)=><figure className="mv-slide" key={item.src+i}><img src={item.src} alt={copy?'':item.alt} width={480} height={600} loading="lazy" decoding="async"/>{item.label&&<figcaption className="sr-only">{item.label}</figcaption>}</figure>)}</div>)}</div></div>;
}
