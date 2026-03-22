'use client';
import { useEffect, useRef } from 'react';
export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv'); }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 200);
    return () => o.disconnect();
  }, []);
  return (
    <div style={{background:'#0A0804',color:'#F5EDD8',fontFamily:"'DM Sans',sans-serif"}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .r{opacity:0;transform:translateY(48px);transition:all 1.1s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.15s}.d2{transition-delay:.3s}.d3{transition-delay:.45s}
        .hw{opacity:0;transition:opacity 1.6s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1);opacity:1}.hl{transform:scale(1.12);opacity:0;transition:all 1.8s cubic-bezier(0.16,1,0.3,1) .3s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(35px);transition:all 1.2s cubic-bezier(0.16,1,0.3,1) .9s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(20px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.3s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.12;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#0A0804;background:linear-gradient(135deg,#C8A348,#8B7B3A);padding:18px 56px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(200,163,72,.3)}
        .bo{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:#C8A348;background:transparent;border:1px solid rgba(200,163,72,.3);padding:16px 40px;text-decoration:none;display:inline-block;transition:all .3s}.bo:hover{border-color:#C8A348;background:rgba(200,163,72,.08)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:contain;background-repeat:no-repeat;pointer-events:none}
        details summary::-webkit-details-marker{display:none}details summary{list-style:none}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.fg{grid-template-columns:1fr!important}.mg{grid-template-columns:1fr!important}.gg{grid-template-columns:1fr 1fr!important}}
      `}}/>
      <div className="grain"/>

      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'24px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(7,7,4,.9) 0%,transparent 100%)'}}>
        <span style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(16px,1.8vw,22px)',fontWeight:700,letterSpacing:'.05em',color:'#C8A348'}}>CINCO DE DRINKO</span>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2vw,32px)',alignItems:'center'}}>
          {['Menu','Vibe','Gallery'].map(l=><a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:'rgba(245,237,216,.4)',textDecoration:'none'}}>{l}</a>)}
          <a href="#tickets" className="bp" style={{padding:'10px 24px',fontSize:9}}>TICKETS →</a>
        </div>
      </nav>

      {/* HERO — FULL SCREEN TRANSPARENT LOGO */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#0A0804'}}>
        <img src="/images/tequila-bar.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.22,filter:'brightness(0.5) saturate(0.7)',zIndex:0}}/>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 40%,rgba(34,80,28,.25) 0%,rgba(10,8,4,.85) 65%)',zIndex:1}}/>
        <div className="hl" style={{position:'relative',zIndex:2}}><img src="/logo.png" alt="Cinco de Drinko" style={{width:'min(70vw,750px)',height:'auto',filter:'drop-shadow(0 0 80px rgba(200,163,72,.3))'}}/></div>
        <div className="ht" style={{position:'relative',zIndex:2,textAlign:'center',marginTop:32}}>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(200,163,72,.7)',marginBottom:8}}>Atlanta · May 5th, 2026 · Taco Tuesday Edition</p>
          <p style={{fontSize:'clamp(14px,1.3vw,18px)',color:'rgba(245,237,216,.5)',maxWidth:480,margin:'0 auto',lineHeight:1.7}}>Tacos. Tequila. The city&apos;s biggest Cinco de Mayo celebration.</p>
        </div>
        <div className="hc" style={{position:'relative',zIndex:2,display:'flex',gap:16,marginTop:40,flexWrap:'wrap',justifyContent:'center'}}>
          <a href="#tickets" className="bp">TICKETS →</a><a href="#vibe" className="bo">Explore</a>
        </div>
      </section>

      {/* THESIS — logo3 scattered as BG right side */}
      <section id="vibe" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo3.png)',backgroundPosition:'85% center',backgroundSize:'45%',opacity:.16,filter:'brightness(.45)'}}/>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 30% 50%,rgba(34,80,28,.15) 0%,transparent 55%)'}}/>
        <div className="dg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>
          <div className="r">
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'#4A8B3A',marginBottom:24}}>The Fiesta</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(40px,6vw,88px)',lineHeight:.9,color:'#F5EDD8',marginBottom:28}}>NOT JUST<br/>A PARTY.<br/><span style={{color:'#C8A348'}}>A TRADITION.</span></h2>
            <p style={{fontSize:'clamp(14px,1.2vw,17px)',lineHeight:1.85,color:'rgba(245,237,216,.45)',maxWidth:480,marginBottom:36}}>CINCO DE DRINKO is Atlanta&apos;s premier Cinco de Mayo celebration — a Taco Tuesday takeover with craft tequila flights, gourmet street tacos, live mariachi, DJs, and the energy only a HugLife event delivers.</p>
            <div style={{display:'flex',gap:40,flexWrap:'wrap'}}>
              {[['500+','Guests'],['5','Tequila Brands'],['MAY 5','Lock It In']].map(([n,l])=><div key={l}><div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,4vw,52px)',color:'#C8A348',lineHeight:1}}>{n}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(200,163,72,.5)',marginTop:6}}>{l}</div></div>)}
            </div>
          </div>
          <div className="r d2"><img src="/logo2.png" alt="" style={{width:'100%',maxHeight:520,objectFit:'contain',filter:'drop-shadow(0 20px 60px rgba(0,0,0,.4))'}}/></div>
        </div>
      </section>

      {/* EXPERIENCE — logo2 scattered BG left side */}
      <section id="menu" style={{position:'relative',background:'#12100A',padding:'120px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo2.png)',backgroundPosition:'10% center',backgroundSize:'35%',opacity:.14,filter:'brightness(.4)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r">
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'#4A8B3A',marginBottom:12}}>What Awaits</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,color:'#F5EDD8',marginBottom:64}}>THE <span style={{color:'#C8A348'}}>EXPERIENCE</span></h2>
          </div>
          <div className="mg" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2,background:'rgba(200,163,72,.08)'}}>
            {[['GOURMET STREET TACOS','Birria, al pastor, carnitas, carne asada — chef-crafted'],['TEQUILA FLIGHTS','Curated pours from premium distillers'],['MARGARITA BAR','Classic, spicy mango, tamarind, mezcal'],['LIVE MARIACHI','Traditional brass and strings at golden hour'],['DJ ROTATION','Reggaeton, Latin trap, Afrobeats, hip-hop'],['PHOTO ACTIVATIONS','Branded content moments designed to go viral'],['BEST DRESSED','Prizes for the best Cinco fits'],['VIP CABANAS','Bottle service, private entry, premium views'],['VENDOR VILLAGE','Local brands, artisans, and makers']].map(([t,d],i)=>
              <div key={i} className={`r d${i%3+1}`} style={{background:'#0A0804',padding:'36px 32px',borderLeft:'2px solid transparent',transition:'all .3s'}} onMouseEnter={e=>{e.currentTarget.style.borderLeftColor='#C8A348';e.currentTarget.style.background='#12100A'}} onMouseLeave={e=>{e.currentTarget.style.borderLeftColor='transparent';e.currentTarget.style.background='#0A0804'}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(16px,1.8vw,22px)',color:'#F5EDD8',marginBottom:8}}>{t}</div>
                <div style={{fontSize:12,color:'rgba(245,237,216,.35)',lineHeight:1.7}}>{d}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* GALLERY — logo variants scattered, not grouped */}
      <section id="gallery" style={{position:'relative',padding:'120px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'50%',opacity:.12,filter:'brightness(.4)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r"><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,color:'#F5EDD8',marginBottom:64}}>GALLERY</h2></div>
          <div className="r d1 gg" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:4}}>
            {['/logo.png','/logo2.png','/logo3.png'].map((s,i)=><div key={i} style={{aspectRatio:'4/3',overflow:'hidden',background:'#12100A',display:'flex',alignItems:'center',justifyContent:'center'}}><img src={s} alt="" style={{width:'85%',height:'85%',objectFit:'contain',transition:'transform .6s cubic-bezier(0.16,1,0.3,1)'}} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/></div>)}
          </div>
        </div>
      </section>

      {/* TICKETS — logo3 BG bottom right */}
      <section id="tickets" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo3.png)',backgroundPosition:'90% 80%',backgroundSize:'30%',opacity:.14,filter:'brightness(.4)'}}/>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(34,80,28,.2) 0%,transparent 60%)'}}/>
        <div className="r" style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'#4A8B3A',marginBottom:20}}>Lock In Your Spot</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(40px,7vw,100px)',lineHeight:.9,color:'#F5EDD8',marginBottom:24}}>GET YOUR<br/><span style={{color:'#C8A348'}}>TICKETS</span></h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'rgba(245,237,216,.45)',maxWidth:440,margin:'0 auto 44px'}}>Capacity is capped. Don&apos;t be the one asking for tickets on May 4th.</p>
          <a href="https://www.eventbrite.com/e/cinco-de-drinko-cinco-de-mayo-tickets-1985661246240" target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'20px 64px',fontSize:11}}>TICKETS →</a>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:'rgba(200,163,72,.3)',letterSpacing:'.2em',marginTop:16}}>Secure · Eventbrite</div>
        </div>
      </section>

      <footer style={{background:'#040402',borderTop:'1px solid rgba(200,163,72,.08)',padding:'56px clamp(24px,5vw,80px) 36px'}}>
        <div className="fg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40}}>
          <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:700,color:'#C8A348'}}>CINCO DE DRINKO</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:'#4A8B3A',marginTop:4}}>TACO TUESDAY EDT. · ATLANTA</div><p style={{fontSize:12,color:'rgba(245,237,216,.35)',marginTop:12,maxWidth:280,lineHeight:1.7}}>A KHG HugLife Event. Est. 2024.</p></div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:'#C8A348',marginBottom:16}}>EVENT</div>{['Experience','Menu','Gallery'].map(l=><div key={l} style={{fontSize:12,color:'rgba(245,237,216,.35)',marginBottom:8}}>{l}</div>)}</div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:'#C8A348',marginBottom:16}}>CONNECT</div>{['Get Tickets','@just.huglife','404.819.9609'].map(l=><div key={l} style={{fontSize:12,color:'rgba(245,237,216,.35)',marginBottom:8}}>{l}</div>)}</div>
        </div>
        <div style={{maxWidth:1400,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid rgba(200,163,72,.06)',fontSize:10,fontFamily:"'DM Mono',monospace",color:'rgba(245,237,216,.15)'}}>© 2026 Cinco de Drinko. A KHG Enterprise.</div>
      </footer>
    </div>
  );
}
