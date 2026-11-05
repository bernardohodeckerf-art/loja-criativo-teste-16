export function Hero({whatsapp}:{whatsapp:string}) { return (
    <section className="hero" id="inicio" aria-label="Montevideo Burguer">
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Montevideo Burguer — início"><span>MONTEVIDEO</span><span>BURGUER</span></a>
        <button className="nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir menu"><span></span><span></span><span></span></button>
        <nav className="navigation" id="primary-navigation" aria-label="Navegação principal">
          <a className="nav-link active" href="#inicio" aria-current="page">INÍCIO</a>
          <a className="nav-link" href="#burgers">BURGERS</a>
          <a className="nav-link" href="#como-pedir">COMO PEDIR</a>
          <a className="nav-link" href="#localizacao">LOCALIZAÇÃO</a>
        </nav>
        <span className="brand-check" aria-hidden="true"><i></i><i></i><i></i></span>
      </header>

      <div className="composition" id="conteudo">
        <h1 className="headline headline-left" aria-label="Artesanal. Do jeito que dá fome.">
          <svg className="mobile-headline" viewBox="0 0 420 480" aria-hidden="true">
            <defs>
              <linearGradient id="mobile-smash-blue" x2="1" y2="1"><stop stopColor="#0348c7"/><stop offset=".48" stopColor="#023ab8"/><stop offset="1" stopColor="#022ca7"/></linearGradient>
              <linearGradient id="mobile-chapa-blue" x2="1" y2=".3"><stop stopColor="#0759ce"/><stop offset=".44" stopColor="#0753c8"/><stop offset=".46" stopColor="#0337b5"/><stop offset="1" stopColor="#022ba8"/></linearGradient>
            </defs>
            <text x="210" y="170" textAnchor="middle" fontSize="260" textLength="400" lengthAdjust="spacingAndGlyphs" fill="url(#mobile-smash-blue)">ARTESANAL.</text>
            <text x="210" y="318" textAnchor="middle" fontSize="220" textLength="420" lengthAdjust="spacingAndGlyphs" fill="url(#mobile-smash-blue)">DO JEITO</text>
            <text x="210" y="475" textAnchor="middle" fontSize="234" textLength="385" lengthAdjust="spacingAndGlyphs" fill="url(#mobile-chapa-blue)">QUE DÁ FOME.</text>
          </svg>
          <svg viewBox="0 0 400 460" role="img" aria-hidden="true">
            <defs>
              
              <linearGradient id="smash-base" x1="0" y1="0" x2="1" y2=".2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0242c0"/><stop offset=".3" stopColor="#023bb8"/><stop offset=".7" stopColor="#023fbc"/><stop offset="1" stopColor="#023bb7"/>
              </linearGradient>
              <radialGradient id="smash-light" cx=".16" cy="1.05" r=".95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0755ce" stopOpacity=".85"/><stop offset="1" stopColor="#0755ce" stopOpacity="0"/>
              </radialGradient>
              <pattern id="ink-smash" width="1" height="1" patternContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#smash-base)"/><rect width="1" height="1" fill="url(#smash-light)"/>
              </pattern>
              <linearGradient id="feito-base" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0551cd"/><stop offset=".2" stopColor="#0346bf"/><stop offset=".52" stopColor="#032eac"/><stop offset="1" stopColor="#022aa7"/>
              </linearGradient>
              <linearGradient id="feito-shade" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#022eac" stopOpacity="0"/><stop offset=".34" stopColor="#022eac" stopOpacity="0"/><stop offset=".65" stopColor="#022eac" stopOpacity=".96"/><stop offset="1" stopColor="#022daa"/>
              </linearGradient>
              <pattern id="ink-feito" width="1" height="1" patternContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#feito-base)"/><rect width="1" height="1" fill="url(#feito-shade)"/>
              </pattern>
              <linearGradient id="chapa-base" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0857ce"/><stop offset=".3" stopColor="#0b59cf"/><stop offset=".44" stopColor="#0b56cb"/><stop offset=".455" stopColor="#0333b2"/><stop offset=".7" stopColor="#022ba9"/><stop offset="1" stopColor="#032aa7"/>
              </linearGradient>
              <linearGradient id="chapa-light" x1="0" y1="0" x2=".2" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1266d9" stopOpacity="0"/><stop offset="1" stopColor="#1266d9" stopOpacity=".16"/>
              </linearGradient>
              <pattern id="ink-chapa" width="1" height="1" patternContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#chapa-base)"/><rect width=".445" height="1" fill="url(#chapa-light)"/>
              </pattern>
            </defs>
            <text x="0" y="170" fontSize="260" textLength="377" lengthAdjust="spacingAndGlyphs" fill="url(#ink-smash)">ARTESANAL.</text>
            <text x="0" y="307" fontSize="196" textLength="324" lengthAdjust="spacingAndGlyphs" fill="url(#ink-feito)">DO JEITO</text>
            <text x="0" y="454" fontSize="212" textLength="303" lengthAdjust="spacingAndGlyphs" fill="url(#ink-chapa)">QUE DÁ FOME.</text>
          </svg>
        </h1>
        <p className="headline headline-right" aria-label="Montevideo Burguer em Blumenau.">
          <svg viewBox="0 0 323 490" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="chega-base" x1="0" y1="1" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0228a5"/><stop offset=".55" stopColor="#0128a3"/><stop offset="1" stopColor="#0332af"/>
              </linearGradient>
              <linearGradient id="quente-base" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0450c7"/><stop offset=".18" stopColor="#0553cc"/><stop offset=".48" stopColor="#033cb4"/><stop offset=".62" stopColor="#0238b0"/><stop offset="1" stopColor="#022ba7"/>
              </linearGradient>
              <radialGradient id="quente-light" cx=".57" cy="0" r=".6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0962db" stopOpacity=".65"/><stop offset="1" stopColor="#0962db" stopOpacity="0"/>
              </radialGradient>
              <pattern id="ink-quente" width="1" height="1" patternContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#quente-base)"/><rect width="1" height="1" fill="url(#quente-light)"/>
              </pattern>
              <linearGradient id="na-sua-base" x1="0" y1="0" x2="1" y2=".35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0335b3"/><stop offset=".38" stopColor="#032da9"/><stop offset=".7" stopColor="#022ba6"/><stop offset="1" stopColor="#032ca9"/>
              </linearGradient>
              <linearGradient id="porta-base" x1="0" y1="0" x2="1" y2=".9" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0331ad"/><stop offset=".4" stopColor="#033bb6"/><stop offset=".72" stopColor="#0449c1"/><stop offset="1" stopColor="#0448bf"/>
              </linearGradient>
              <pattern id="ink-chega" width="1" height="1" patternContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#chega-base)"/></pattern>
              <pattern id="ink-na-sua" width="1" height="1" patternContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#na-sua-base)"/></pattern>
              <pattern id="ink-porta" width="1" height="1" patternContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#porta-base)"/></pattern>
            </defs>
            <text x="161.5" y="163" fontSize="250" textAnchor="middle" textLength="315" lengthAdjust="spacingAndGlyphs" fill="url(#ink-chega)">MONTE</text>
            <text x="161.5" y="291" fontSize="188" textAnchor="middle" textLength="296" lengthAdjust="spacingAndGlyphs" fill="url(#ink-quente)">VIDEO</text>
            <text x="193" y="396" fontSize="144" textAnchor="middle" textLength="217" lengthAdjust="spacingAndGlyphs" fill="url(#ink-na-sua)">BURGUER</text>
            <text x="208.5" y="486" fontSize="130" textAnchor="middle" textLength="209" lengthAdjust="spacingAndGlyphs" fill="url(#ink-porta)">BLUMENAU.</text>
          </svg>
        </p>
        <img className="burger real-burger" src="/assets/burgers/15010285.jpg" width="1400" height="2100" fetchPriority="high" alt="Foto de hambúrguer com queijo, bacon e salada servido em tábua de madeira. Imagem ilustrativa." />

        <div className="delivery-signature">


          <p className="hero-desktop-caption">Montevideo Burguer.<br /><mark>Blumenau / SC.</mark></p>
          <p className="hero-mobile-caption">Montevideo Burguer.<br /><mark>Blumenau / SC.</mark></p>
        </div>
        <div className="order-wrap">
          <a className="order-button" href={whatsapp} aria-label="Consultar cardápio pelo WhatsApp"><span>VER<br />CAR<br />DÁPIO</span></a>
          <span className="rays rays-order" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
      </div>
      <div className="checkerboard" aria-hidden="true"></div>
    </section>

); }
