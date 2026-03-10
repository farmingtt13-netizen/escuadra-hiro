import React from 'react';
import { Gamepad2, Coffee, Trophy, Zap, Users, Calendar, ChevronRight, Monitor, Cpu, Download, Leaf, Target, Star } from 'lucide-react';

const App = () => {
  // Datos de los torneos activos
  const tournaments = [
    { id: 1, game: "Valorant League", date: "Viernes 20:00", prize: "$5,000 MXN", slots: "12/16 Squads", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    { id: 2, game: "Smash Bros Ultimate", date: "Sábado 18:00", prize: "Monitor 240Hz", slots: "30/64 Players", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1957&q=80" },
    { id: 3, game: "League of Legends", date: "Domingo 17:00", prize: "$10,000 MXN + RP", slots: "6/8 Teams", image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" }
  ];

  return (
    <div className="min-h-screen bg-[#231814] font-sans text-[#FDFBF7] selection:bg-emerald-500 selection:text-white scroll-smooth">
      {/* NAVEGACIÓN */}
      <nav className="flex items-center justify-between p-6 bg-[#170F0B]/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#3E2723]">
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-emerald-500" size={32} />
          <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500 uppercase">
            Escuadra Hiro
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-xs tracking-widest text-[#D7CCC8]">
          <a href="#fuel" className="hover:text-emerald-400 transition-colors text-xs">Menú Fuel</a>
          <a href="#arena" className="hover:text-emerald-400 transition-colors text-xs">La Arena</a>
          <a href="#torneos" className="hover:text-emerald-400 transition-colors text-xs">Torneos</a>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-sm font-bold uppercase skew-x-[-10deg] border border-emerald-400/50 transition-all shadow-lg">
          <span className="skew-x-[10deg] inline-block">Reservar Estación</span>
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Gaming Setup" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#231814] via-[#231814]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 bg-[#3E2723]/60 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-widest backdrop-blur-sm shadow-xl">
            <Zap size={14} className="mr-2 text-amber-500" /> Especialidad & Esports
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase">
            Energía Real.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-amber-500">
              Gloria Total.
            </span>
          </h2>
          <p className="text-xl text-[#D7CCC8] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            El cuartel general donde la precisión del café de especialidad colisiona con la intensidad de los videojuegos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="#fuel" className="bg-emerald-600 text-white px-10 py-4 rounded-sm font-black uppercase hover:bg-emerald-500 hover:scale-105 transition-all skew-x-[-5deg] flex items-center justify-center gap-3">
              <Coffee size={20} className="skew-x-[5deg]" /> 
              <span className="skew-x-[5deg]">Menú Fuel Bar</span>
            </a>
            <a href="#torneos" className="border-2 border-amber-600 text-amber-500 px-10 py-4 rounded-sm font-black uppercase hover:bg-amber-900/30 hover:scale-105 transition-all skew-x-[-5deg] flex items-center justify-center gap-3">
              <Trophy size={20} className="skew-x-[5deg]" /> 
              <span className="skew-x-[5deg]">Ver Torneos</span>
            </a>
          </div>
        </div>
      </header>

      {/* FUEL BAR (MENU) */}
      <section id="fuel" className="py-24 px-6 bg-[#2D201A] relative border-y border-[#3E2723] overflow-hidden">
        <div className="absolute -left-20 top-20 opacity-10 rotate-45 text-emerald-600"><Leaf size={300} /></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-xs">Repostaje de Elite</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 italic mt-2">Fuel Bar Hiro</h3>
            <div className="h-1 w-24 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#1E140F]/80 backdrop-blur-sm p-10 rounded-3xl border border-[#3E2723] shadow-2xl group transition-all hover:border-amber-500/30">
              <div className="flex items-center gap-4 mb-8">
                <Coffee className="text-amber-500" size={36} />
                <h4 className="text-2xl font-black uppercase tracking-wider">Especialidad</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Cold Brew Overclock", desc: "Extracción lenta de 24h para energía máxima.", price: "$75" },
                  { name: "V60 Sniper Focus", desc: "Claridad mental con notas cítricas.", price: "$85" },
                  { name: "Espresso Respawn", desc: "Shot doble para volver a la partida.", price: "$50" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-[#3E2723] pb-4 group/item">
                    <div>
                      <span className="font-bold uppercase text-[#FDFBF7] block group-hover/item:text-emerald-400 transition-colors">{item.name}</span>
                      <p className="text-xs text-[#A1887F] font-light mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-500 font-black">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1E140F]/80 backdrop-blur-sm p-10 rounded-3xl border border-[#3E2723] shadow-2xl group transition-all hover:border-emerald-500/30">
              <div className="flex items-center gap-4 mb-8">
                <Zap className="text-emerald-500" size={36} />
                <h4 className="text-2xl font-black uppercase tracking-wider">Buffs & Elixires</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Matcha Healer", desc: "Energía sostenida sin ansiedad.", price: "$90" },
                  { name: "Stamina Smoothie", desc: "Plátano, cacao y maca para largas sesiones.", price: "$105" },
                  { name: "Chai Agility", desc: "Especias naturales para reflejos rápidos.", price: "$75" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-[#3E2723] pb-4 group/item">
                    <div>
                      <span className="font-bold uppercase text-[#FDFBF7] block group-hover/item:text-amber-400 transition-colors">{item.name}</span>
                      <p className="text-xs text-[#A1887F] font-light mt-1">{item.desc}</p>
                    </div>
                    <span className="text-emerald-500 font-black">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LA ARENA */}
      <section id="arena" className="py-24 px-6 bg-[#1E140F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
                src="https://images.unsplash.com/photo-1618323009515-1723812c2427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1935&q=80" 
                alt="Arena" 
                className="relative rounded-2xl border border-[#3E2723] w-full object-cover shadow-2xl sepia-[.1]"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-emerald-500 text-black px-4 py-1 rounded font-black text-xs uppercase tracking-widest shadow-xl">
                SQUAD ALPHA ZONE
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-black uppercase mb-8">The Hiro Arena</h3>
            <p className="text-[#D7CCC8] mb-10 text-xl font-light leading-relaxed">
              Equipamiento de nivel profesional en un entorno diseñado para la inmersión. Adiós al lag y a las sillas incómodas. Aquí la técnica lo es todo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Cpu className="text-emerald-500 shrink-0" size={28} />
                <div>
                  <h5 className="font-bold uppercase text-sm">RTX 4080s</h5>
                  <p className="text-xs text-[#A1887F]">Poder máximo en cada estación de combate.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="text-amber-500 shrink-0" size={28} />
                <div>
                  <h5 className="font-bold uppercase text-sm">240Hz Ready</h5>
                  <p className="text-xs text-[#A1887F]">Fluidez absoluta. No más retrasos en tus clutches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TORNEOS (ZONA DE GUERRA) */}
      <section id="torneos" className="py-24 px-6 bg-[#231814] relative border-t border-[#3E2723]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Competencia Semanal</span>
              <h3 className="text-5xl font-black uppercase text-white mt-2 mb-4 tracking-tighter">Zona de Guerra</h3>
              <p className="text-[#D7CCC8] text-lg max-w-xl font-light">Inscríbete, compite y reclama tu lugar en el Hall of Fame de Escuadra Hiro.</p>
            </div>
            <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-bold uppercase tracking-widest group text-sm transition-all border-b border-emerald-500/20 pb-1">
              Calendario Completo <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournaments.map((t) => (
              <div key={t.id} className="group bg-[#2D201A] border border-[#3E2723] hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-2 flex flex-col h-full shadow-2xl relative">
                <div className="h-52 overflow-hidden relative">
                  <img src={t.image} alt={t.game} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D201A] to-transparent h-full"></div>
                  <div className="absolute top-4 left-4 bg-[#170F0B]/80 backdrop-blur-md px-3 py-1 rounded border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-tighter">
                    Registro Abierto
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col relative">
                  <h4 className="text-2xl font-black uppercase mb-6 text-white leading-tight tracking-tight">{t.game}</h4>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-xs text-[#A1887F]">
                      <Calendar size={16} className="text-amber-500" /> <span className="uppercase">{t.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#A1887F]">
                      <Users size={16} className="text-emerald-500" /> <span className="uppercase tracking-widest">{t.slots} Listos</span>
                    </div>
                  </div>

                  <div className="bg-[#1E140F] p-4 rounded-xl border border-[#3E2723] mb-8 mt-auto text-center group-hover:bg-[#170F0B] transition-colors shadow-inner">
                      <p className="text-[10px] text-[#8D6E63] uppercase font-bold tracking-[3px] mb-1">Premios Totales</p>
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 tracking-tighter">{t.prize}</p>
                  </div>

                  <button className="w-full bg-emerald-900/20 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-700/50 font-bold uppercase py-4 rounded-xl transition-all text-[10px] tracking-[0.3em] shadow-lg">
                    Inscribir Squad
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#170F0B] py-24 px-6 text-center border-t border-[#3E2723]">
        <Gamepad2 className="text-emerald-600 mx-auto mb-10 animate-pulse" size={60} />
        <h2 className="text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-600 mb-6 tracking-[0.4em]">Escuadra Hiro</h2>
        <p className="text-[#A1887F] mb-12 font-light max-w-md mx-auto italic text-sm leading-relaxed">
          Donde la cultura del café alimenta la gloria. Nos vemos en la próxima partida. GG WP.
        </p>
        
        <div className="flex justify-center gap-10 text-[#D7CCC8] text-[10px] font-bold uppercase tracking-[0.4em] mb-16">
            <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Twitch</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Discord</a>
        </div>
        
        <div className="text-[10px] text-[#5D4037] font-mono uppercase tracking-[0.4em] opacity-50">
            &copy; {new Date().getFullYear()} Escuadra Hiro Hub. Built for Glory.
        </div>
      </footer>
    </div>
  );
};

export default App;