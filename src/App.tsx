import { motion } from 'motion/react';
import { MapPin, Zap, Clock, Wifi, MessageCircle, Instagram, ChevronDown, ChevronRight, Star, ShieldCheck, Maximize, Coins, Volume2, Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const FAQ_ITEMS = [
  { q: "Onde a SmartWash está localizada?", a: "Estamos presentes em 3 endereços em Salvador: Pituba (Rua Amazonas, 1068), Av. ACM e Brotas." },
  { q: "Preciso levar sabão ou amaciante?", a: "Não! Utilizamos produtos de alta performance (Linha OMO e Comfort Profissional) que já são dispensados automaticamente pelas máquinas." },
  { q: "Quanto tempo demora o processo?", a: "Em média, 36 minutos para lavar e 45 minutos para secar. Suas roupas prontas em pouco mais de uma hora." },
  { q: "Quais as formas de pagamento aceitas?", a: "Aceitamos cartões de crédito, débito e PIX através do nosso terminal de autoatendimento." },
  { q: "Posso lavar edredom e cobertor?", a: "Sim! Nossas máquinas industriais comportam edredons até tamanho Queen." },
  { q: "Como funciona o sistema self-service?", a: "É simples: você escolhe a máquina, efetua o pagamento no terminal, coloca a roupa e dá o inicio." },
  { q: "A lavanderia está aberta em feriados?", a: "Sim, funcionamos todos os dias, incluindo domingos e feriados (verificar horários específicos de cada unidade no Google)." },
  { q: "Existe algum suporte no local?", a: "Nossas unidades são monitoradas e possuem totens de instrução claros, mas oferecemos suporte via WhatsApp para qualquer dúvida." },
  { q: "As máquinas de secar estragam a roupa?", a: "Não, você pode selecionar a temperatura ideal. A secagem correta ajuda até a eliminar a necessidade de passar o ferro em muitas peças." },
  { q: "Quero ser um franqueado, como faço?", a: "Ficamos felizes com seu interesse! Entre em contato através do link na nossa bio ou pelo e-mail de expansão para receber a apresentação do modelo de negócio." },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = instagramRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;
    const delay = 30;

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += step;
        scrollAmount += step;

        // Reset to start if we've scrolled a significant amount (simulating infinite)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, delay);

    // Pause on hover or touch
    const pauseScroll = () => clearInterval(autoScroll);
    
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('touchstart', pauseScroll);

    return () => {
      clearInterval(autoScroll);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-soft-ice text-deep-navy font-sans selection:bg-vibrant-blue/20">
      {/* Top Ticker */}
      <div className="bg-vibrant-blue text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10">
        <div className="flex animate-ticker">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-[11px] font-bold tracking-widest uppercase">
              FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-soft-ice/80 backdrop-blur-md sticky top-0 z-50 border-b border-medium-gray">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura_de_tela_2026-03-07_180049-removebg-preview.png" 
                alt="SmartWash Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="font-black text-lg tracking-tighter text-vibrant-blue hidden lg:block">LAVANDERIA SMART WASH</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-vibrant-blue/10 text-vibrant-blue px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-vibrant-blue/20">
              <Clock size={12} />
              24h
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-deep-navy/70">
            <a href="#sobre" className="hover:text-vibrant-blue transition">Sobre</a>
            <a href="#como-funciona" className="hover:text-vibrant-blue transition">Como Funciona</a>
            <a href="#beneficios" className="hover:text-vibrant-blue transition">Benefícios</a>
            <a href="#precos" className="hover:text-vibrant-blue transition">Preços</a>
            <a href="#unidades" className="hover:text-vibrant-blue transition">Unidades</a>
          </div>

          <a href="https://wa.me/5571999115133" target="_blank" rel="noopener noreferrer" className="bg-vibrant-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition shadow-lg shadow-vibrant-blue/20">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-vibrant-blue/5 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-vibrant-blue/10">
              <span className="w-1.5 h-1.5 bg-vibrant-blue rounded-full animate-pulse"></span>
              Referência em Salvador
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-deep-navy">
              Lavanderia Self-Service – <span className="text-vibrant-blue">Rápida, Moderna e Econômica</span>
            </h1>
            
            <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
              Na SmartWash você lava e seca suas roupas em pouco mais de uma hora, com produtos <span className="text-vibrant-blue font-semibold">profissionais</span> inclusos e total autonomia.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#unidades" className="bg-vibrant-blue hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition shadow-xl shadow-vibrant-blue/20 group">
                Ver Unidades
                <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
              <a href="#como-funciona" className="bg-soft-ice border border-medium-gray hover:border-vibrant-blue/20 text-deep-navy px-8 py-4 rounded-2xl font-bold transition">
                Como Funciona
              </a>
            </div>
            
            <a href="#precos" className="inline-flex bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl shadow-emerald-100">
              Quero lavar agora
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(37,77,232,0.2)] border-8 border-soft-ice">
              <video
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-d2eaac15-1cf9-4362-b13a-04d777a840a5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-soft-ice/90 backdrop-blur-md p-5 rounded-3xl border border-white/20 flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 bg-vibrant-blue rounded-xl flex items-center justify-center text-white">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-navy text-sm">SmartWash Lavanderia</h4>
                  <p className="text-xs text-deep-navy/70">Sua roupa pronta em aproximadamente uma hora</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-vibrant-blue/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-lavender/10 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </header>

      {/* Sobre a SmartWash Section */}
      <section id="sobre" className="py-24 bg-medium-gray overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-vibrant-blue/5 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-vibrant-blue/10">
              Sobre a SmartWash
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-deep-navy uppercase">
              Devolvendo <span className="text-vibrant-blue">Tempo, Economia e Praticidade</span> para você
            </h2>
            
            <div className="space-y-6 text-deep-navy/70 leading-relaxed">
              <p>
                A SmartWash foi fundada com um propósito simples: devolver tempo, economia e praticidade para você.
              </p>
              <p>
                Somos referência em lavanderia self-service, oferecendo uma estrutura moderna, ambiente seguro e equipamentos de alta performance que garantem mais eficiência e cuidado com suas roupas.
              </p>
              <p>
                Aqui você encontra praticidade, economia, autonomia e tecnologia para resolver tudo em aproximadamente uma hora — sem burocracia e sem esperar dias para retirar suas peças.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              <video
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQNYuwSQ_zfytI2CiyR3KpMcSsA5VfoQ8w86wvOdUcArEn9Uu8QE7b76tMqKLIMugei-H5dfDAXt5NIzl4mTVWI-MXzOtz6w9D6BsRU.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section id="beneficios" className="py-24 bg-soft-ice">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase">Nossos <span className="text-vibrant-blue">Diferenciais</span></h2>
            <p className="text-deep-navy/70">Na SmartWash você tem eficiência, segurança e comodidade no mesmo lugar.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Alta Performance", desc: "Máquinas industriais de última geração com alta capacidade e produtos profissionais." },
              { icon: ShieldCheck, title: "Produtos premium", desc: "Utilizamos OMO e Comfort super concentrado." },
              { icon: MapPin, title: "Estacionamento", desc: "Vagas exclusivas na porta para sua total comodidade." },
              { icon: Clock, title: "Aberto todos os dias", desc: "Funciona todos os dias da semana, inclusive feriado." },
              { icon: Maximize, title: "Conforto", desc: "Estrutura organizada, climatizada com Wi-Fi e espaço para trabalho." },
              { icon: Coins, title: "Clientes fiéis", desc: "Quem escolhe a SmartWash regularmente recebe presentes no aniversário e em outras datas especiais." },
            ].map((item, i) => (
              <div key={i} className="bg-medium-gray p-10 rounded-[32px] shadow-sm border border-white/10 hover:shadow-xl hover:shadow-vibrant-blue/10 transition-all duration-300">
                <div className="w-14 h-14 bg-vibrant-blue/5 rounded-2xl flex items-center justify-center text-vibrant-blue mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-navy">{item.title}</h3>
                <p className="text-deep-navy/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 bg-deep-navy relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-vibrant-blue/5 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-white/10">
                  Preço Justo e Transparente
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase">
                  Economia real em <br />
                  <span className="text-vibrant-blue">cada ciclo</span>
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  Na SmartWash, você paga um valor único por ciclo, com sabão e amaciante profissionais já inclusos. Sem taxas escondidas, sem complicação.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Sabão OMO Profissional incluso",
                    "Amaciante Comfort Profissional incluso",
                    "Máquinas de alta capacidade (até 10kg)",
                    "Ambiente monitorado e seguro"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                      <CheckCircle2 className="text-vibrant-blue" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-[48px] p-12 shadow-2xl shadow-vibrant-blue/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-blue/5 rounded-bl-[100px]"></div>
                  
                  <div className="text-center mb-10">
                    <span className="text-deep-navy/40 text-sm font-bold uppercase tracking-widest">Valor por Ciclo</span>
                    <div className="flex items-start justify-center gap-1 mt-2">
                      <span className="text-2xl font-bold text-deep-navy mt-2">R$</span>
                      <span className="text-8xl font-black text-vibrant-blue tracking-tighter">17,90</span>
                    </div>
                    <p className="text-deep-navy/60 font-medium mt-4">Lavar ou Secar</p>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/5571999115133" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-vibrant-blue hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition shadow-xl shadow-vibrant-blue/20 group"
                    >
                      <MessageCircle size={24} />
                      Falar no WhatsApp
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
                    </a>
                    <p className="text-[10px] text-center text-deep-navy/40 uppercase font-bold tracking-widest">
                      Atendimento imediato e suporte técnico
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-lavender text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl rotate-12 border-4 border-white">
                  MELHOR PREÇO!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mais que uma lavanderia */}
      <section className="py-24 bg-medium-gray">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Wifi, title: "Wi-Fi Grátis", desc: "Conecte-se enquanto espera." },
              { icon: Maximize, title: "Ar Condicionado", desc: "Ambiente sempre climatizado." },
              { icon: Star, title: "Workspace", desc: "Espaço de trabalho para você." },
              { icon: Volume2, title: "Ambiente clean", desc: "Conforto de estar em casa." },
            ].map((item, i) => (
              <div key={i} className="bg-soft-ice p-8 rounded-[32px] text-center border border-white/10">
                <div className="w-12 h-12 bg-medium-gray rounded-xl flex items-center justify-center text-vibrant-blue mx-auto mb-4 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-deep-navy mb-1">{item.title}</h4>
                <p className="text-xs text-deep-navy/70">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 bg-vibrant-blue/5 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-vibrant-blue/10">
              Conforto Total
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-deep-navy uppercase">
              Mais que uma lavanderia, um <span className="text-vibrant-blue">espaço para você</span>
            </h2>
            <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
              Projetamos nossas unidades para que sua espera seja produtiva ou relaxante. Enquanto suas roupas são cuidadas pela melhor tecnologia do mercado, você aproveita nossas comodidades.
            </p>
            <ul className="space-y-4">
              {[
                "Ambiente monitorado 24h por câmeras.",
                "Bancada para dobrar roupas com praticidade.",
                "Localização privilegiada e segura."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-deep-navy/80 font-medium">
                  <CheckCircle2 className="text-[#10B981]" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pagamento Simples e Rápido Section */}
      <section id="como-funciona" className="py-24 bg-soft-ice overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-medium-gray rounded-[48px] p-8 lg:p-16 border border-white/5 shadow-sm relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-vibrant-blue/10 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-vibrant-blue/20">
                  <Coins size={14} /> Praticidade no Pagamento
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight text-deep-navy uppercase">
                  Como usar o nosso <span className="text-vibrant-blue">Totem de Pagamento</span>
                </h2>
                <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
                  Nosso sistema é 100% intuitivo. No totem central, você seleciona o serviço, realiza o pagamento e libera sua máquina em poucos segundos.
                </p>
                
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Selecione o Serviço", desc: "Escolha entre Lavar ou Secar no menu principal." },
                    { step: "02", title: "Escolha a Máquina", desc: "Identifique o número da máquina que você deseja utilizar." },
                    { step: "03", title: "Forma de Pagamento", desc: "Pague via Cartão de Crédito, Débito ou PIX diretamente no terminal." },
                    { step: "04", title: "Dê o Play", desc: "Vá até a máquina escolhida e aperte o botão iniciar." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="text-2xl font-black text-vibrant-blue opacity-20 leading-none">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-deep-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-deep-navy/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-soft-ice bg-medium-gray aspect-[9/16] max-w-sm mx-auto">
                  <video
                    src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQNkoNFyb2pdz1vM20OKtR0Rppqy9ErMC0BkWQNqO1sJHTcxttE5tCBxWS9sX9GSt5FoUSgxFfUPLuw1GyieAIxCTcJh2sFFvVQR8RA.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Tutorial Passo a Passo</div>
                    <div className="text-lg font-black tracking-tighter">PAGAMENTO SMART</div>
                  </div>
                </div>
                
                {/* Decorative background blur */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-vibrant-blue/20 rounded-full blur-[100px] opacity-30"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia que economiza */}
      <section className="py-24 bg-soft-ice">
        <div className="container mx-auto px-6">
          <div className="bg-vibrant-blue rounded-[48px] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-white/20">
                  🌱 Economia e Sustentabilidade
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
                  Tecnologia que economiza água, energia e o seu dinheiro.
                </h2>
                <div className="space-y-6 text-white/80 leading-relaxed mb-10">
                  <p>
                    As máquinas profissionais da SmartWash utilizam ciclos otimizados que reduzem o consumo de água e energia quando comparados a lavagens domésticas tradicionais.
                  </p>
                  <p>
                    Ao escolher a lavanderia self-service, você contribui para um uso mais inteligente de recursos naturais, além de reduzir o desgaste da sua máquina de casa. Mais eficiência. Menos desperdício. Mais economia para você e para o planeta.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center lg:items-end">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl mb-8 w-full max-w-md aspect-square border-4 border-white/20">
                  <video
                    src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-7a5dcb81-1624-4ee7-9097-06c1dacc0c23.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <span className="text-2xl font-black tracking-tighter text-white">ECONOMIA SMART</span>
                  </div>
                </div>
                
                <div className="flex gap-4 w-full max-w-md">
                  <div className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                    <div className="text-3xl font-black mb-1">-50%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Consumo de Água</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                    <div className="text-3xl font-black mb-1">-30%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Energia Elétrica</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-blue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Clube de Vantagens */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 border border-white/10">
              <Sparkles size={14} /> Exclusivo para Membros
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Clube <span className="text-vibrant-blue">SmartWash</span> de Vantagens
            </h2>
            <p className="text-white/60 text-lg">
              Ao aderir ao nosso clube, você garante descontos exclusivos ao antecipar seus ciclos de lavagem. Economia real para quem valoriza praticidade.
            </p>
            <p className="text-vibrant-blue text-sm mt-2 font-bold">
              *Disponível apenas na unidade Pituba.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Video Section */}
            <div className="md:col-span-3 mb-12 flex justify-center">
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(37,77,232,0.2)] border-8 border-white/10 max-w-2xl w-full">
                <video
                  src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-f9f32ac1-27a4-4614-9846-67d6832fab50.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {[
              { 
                discount: "10%", 
                cycles: "10 Ciclos", 
                desc: "Ideal para quem lava roupas semanalmente e busca economia constante.",
                color: "bg-vibrant-blue/10 border-vibrant-blue/20"
              },
              { 
                discount: "15%", 
                cycles: "15 Ciclos", 
                desc: "O equilíbrio perfeito entre investimento e retorno para sua rotina.",
                color: "bg-vibrant-blue border-white/10 shadow-2xl shadow-vibrant-blue/20 scale-105 z-10",
                featured: true
              },
              { 
                discount: "20%", 
                cycles: "20+ Ciclos", 
                desc: "A maior economia possível. Para famílias ou uso intenso.",
                color: "bg-lavender/10 border-lavender/20"
              },
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[40px] border flex flex-col items-center text-center transition-transform hover:translate-y-[-8px] ${plan.color}`}>
                <div className={`text-5xl font-black mb-2 ${plan.featured ? 'text-white' : 'text-vibrant-blue'}`}>
                  {plan.discount}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">de desconto</div>
                <div className="text-2xl font-bold mb-4 uppercase tracking-tighter">{plan.cycles}</div>
                <p className={`text-sm leading-relaxed mb-8 ${plan.featured ? 'text-white/80' : 'text-white/60'}`}>
                  {plan.desc}
                </p>
                <a 
                  href="https://wa.me/5571999115133" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full py-4 rounded-2xl font-bold transition block ${plan.featured ? 'bg-white text-vibrant-blue hover:bg-slate-100' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Antecipar Agora
                </a>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Atendimento Personalizado</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Oferecemos serviço com <span className="text-white font-semibold">atendente em nossas lojas às quartas e quintas-feiras</span>, garantindo suporte total para suas lavagens.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 flex items-start gap-6">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Serviço de Delivery</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Busca e entrega de roupas com a qualidade Smart Wash. <span className="text-white font-semibold italic">Disponível exclusivamente para as unidades de Brotas e Pituba.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Unidades e Mapa */}
      <section id="unidades" className="py-24 bg-soft-ice">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-vibrant-blue/10 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4 border border-vibrant-blue/20">
              Onde estamos
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase">Nossas <span className="text-vibrant-blue">Unidades</span></h2>
            <p className="text-deep-navy/70 text-lg">Escolha a SmartWash mais próxima de você em Salvador.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Brotas (Matriz)",
                address: "Rua Waldemar Falcão, 146 - Shopping Florestal, Salvador - BA, 40296-700",
                hours: "Aberto até as 23:00",
                phone: "(71) 99911-5133",
                highlight: "Localizada dentro do Shopping Florestal; Avaliação 5.0 (66 comentários)",
                image: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-07%20at%204.54.15%20PM.jpeg",
                main: true,
                link: "https://taggycontact.me/SmartWashBrotas"
              },
              {
                name: "Santa Teresa",
                address: "Rua Luís Negreiro, 639 - Santa Teresa (Posto Ipiranga), Salvador - BA, 40265-090",
                hours: "Aberto 24 horas",
                phone: "(71) 99911-5133",
                highlight: "Conveniência 24h situada em um posto de combustíveis.",
                image: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-07%20at%204.54.49%20PM.jpeg",
                link: "https://taggycontact.me/smartwashacm"
              },
              {
                name: "Pituba",
                address: "Rua Amazonas - Edifício Amazonas, Loja 03 - Pituba, Salvador - BA, 41830-380",
                hours: "Aberto até as 00:00",
                phone: "(71) 99911-5133",
                highlight: "Atendimento via WhatsApp e localização privilegiada.",
                image: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-07%20at%204.54.30%20PM.jpeg",
                link: "https://taggycontact.me/smartwashpituba"
              }
            ].map((unidade, i) => (
              <div key={i} className={`bg-medium-gray rounded-[32px] border ${unidade.main ? 'border-vibrant-blue shadow-xl shadow-vibrant-blue/10' : 'border-white/10 shadow-sm'} flex flex-col h-full relative overflow-hidden group`}>
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={unidade.image} 
                    alt={unidade.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {unidade.main && (
                    <div className="absolute top-0 right-0 bg-vibrant-blue text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                      Loja Matriz
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black mb-4 text-deep-navy">{unidade.name}</h3>
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex gap-3 text-sm text-deep-navy/70">
                      <MapPin className="text-vibrant-blue shrink-0" size={18} />
                      <span>{unidade.address}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-deep-navy/70">
                      <Clock className="text-vibrant-blue shrink-0" size={18} />
                      <span>{unidade.hours}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-deep-navy/70 font-semibold">
                      <MessageCircle className="text-vibrant-blue shrink-0" size={18} />
                      <span>{unidade.phone}</span>
                    </div>
                    <p className="text-xs bg-soft-ice p-3 rounded-xl text-deep-navy/80 border border-white/10 italic">
                      {unidade.highlight}
                    </p>
                  </div>
                  <a href={unidade.link} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-2xl font-bold text-center transition ${unidade.main ? 'bg-vibrant-blue text-white hover:bg-vibrant-blue/90' : 'bg-soft-ice text-deep-navy hover:bg-soft-ice/80'}`}>
                    Saber mais sobre esta unidade
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social - Google Reviews Carousel */}
      <section className="py-24 bg-medium-gray overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                <span className="text-deep-navy font-bold ml-2">Avaliação 5.0 no Google</span>
              </div>
              <h2 className="text-4xl font-black uppercase">O que nossos clientes dizem</h2>
              <p className="text-deep-navy/70 mt-2">Confira os comentários de quem já utiliza a SmartWash em Salvador.</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-soft-ice text-deep-navy/70 px-4 py-2 rounded-full text-xs font-bold">Mais relevantes</div>
              <div className="bg-soft-ice/50 text-deep-navy/40 px-4 py-2 rounded-full text-xs font-bold">Mais recentes</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
              {[
                { name: "Helena Correia", date: "5 meses atrás", text: "Gostei muito do serviço! A ambiente está sempre limpo, o filtro da secadora sempre está limpinho e as roupas ficam muito cheirosas! Parabéns." },
                { name: "Diego Campos", date: "6 meses atrás", text: "Serviço impecável! As máquinas são modernas, rápidas e fáceis de usar. O ambiente é limpo, organizado e muito bem cuidado, com tudo funcionando perfeitamente. Ótimo custo-benefício e atendimento atencioso. Experiência prática e sem complicação — recomendo a todos!" },
                { name: "André Suzart", date: "6 meses atrás", text: "Top demais! Realmente é um serviço essencial, que nos traz independência e praticidade. Excelente custo benefício. Torço para que amplie e cresça cada vez mais!" },
                { name: "Alisson Barbosa", date: "6 meses atrás", text: "Ambiente confortável, propocionando praticidade e agilidade. Localização fácil e preço muito bom. Adorei essa experiência, serei um cliente assíduo." },
                { name: "Hebert Guerra", date: "2 meses atrás", text: "Excelente experiência! Ao contrário de outras lavanderias, eles se usam OMO e Comfort! Muito bom! 👏🏼👏🏼" },
                { name: "Francisco Correia", date: "6 meses atrás", text: "Muito rapido e fácil de usar, além da localização ótima, posso deixar a roupa lavando e fazer outras coisas no shopping enquanto espero!!" },
                { name: "Angelo Requiao", date: "6 meses atrás", text: "O serviço é de muita qualidade! Alem de ser pratico, é ideal para quem tem pouco espaco em casa para lavar e secar roupas. Eu recomendo muito !" },
                { name: "Laura Rezende", date: "6 meses atrás", text: "Super recomendo..,ambiente agradável, seguro,e o principal as roupas saíram super limpas ,cheirosas e sem danos. Voltarei mais vezes." },
                { name: "Lucas Bastos", date: "6 meses atrás", text: "Adorei a experiência! Máquinas fáceis de usar, espaço confortável e roupas saindo impecáveis. Vale muito a pena." },
                { name: "Vitor Maia", date: "6 meses atrás", text: "Já virei vip…Só essa semana foram 3 dias…Rápido,Fácil,Prático e o melhor…PREÇO EXTRAORDINÁRIO…Super recomendo" },
                { name: "Rafael Guimaraes", date: "6 meses atrás", text: "Melhor lavanderia da região de Brotas e Horto. Praticidade, conforto e muita qualidade na lavagem. As roupas ficam limpinhas e bem cheirosas!" },
                { name: "Beatriz Marcionília", date: "1 mês atrás", text: "Amei a experiência, organizado, limpo, prático e fácil de Usar" },
                { name: "Guilherme Guerra", date: "6 meses atrás", text: "Excelente lavanderia, muito limpa, organizada e o preço justo! Voltarei com certeza, pra mim uma das melhores de Salvador!" },
                { name: "Éfren Ferreira", date: "6 meses atrás", text: "Lavanderia muito top!! Tdo organizadinho, limpo, perfeito!! Estava precisando desse serviço aqui em Brotas." },
                { name: "Rodolfo Júnior", date: "6 meses atrás", text: "Experiência única. Praticidade, limpeza e economia. Roupas limpas e cheirosas. Parabéns! 👏🏻 👏🏻" }
              ].map((review, i) => (
                <div key={i} className="min-w-[350px] md:min-w-[400px] bg-soft-ice p-8 rounded-[32px] border border-white/10 snap-center hover:bg-vibrant-blue/5 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-vibrant-blue shadow-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-deep-navy">{review.name}</div>
                      <div className="text-[10px] text-deep-navy/40 uppercase tracking-widest font-bold">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-deep-navy/70 text-sm leading-relaxed italic">"{review.text}"</p>
                </div>
              ))}
            </div>
            
            {/* Gradient Fades for Scroll */}
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-medium-gray to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-medium-gray to-transparent pointer-events-none"></div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center gap-2 text-vibrant-blue font-bold hover:underline">
              Ver todas as avaliações no Google <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-medium-gray overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-vibrant-blue/10 text-vibrant-blue px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4 border border-vibrant-blue/20">
                <Instagram size={14} /> @smartwashlavanderia
              </div>
              <h2 className="text-4xl font-black mb-4 uppercase">Conecte-se <span className="text-vibrant-blue">conosco</span></h2>
              <p className="text-deep-navy/70 mt-2">Acompanhe novidades, dicas e promoções em nosso Instagram.</p>
            </div>
            <a href="https://www.instagram.com/smartwashlavanderia/" target="_blank" rel="noopener noreferrer" className="bg-vibrant-blue hover:bg-vibrant-blue/90 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl shadow-vibrant-blue/20">
              Seguir no Instagram
            </a>
          </div>
        </div>
        
        <div className="relative">
          {/* Draggable & Auto-scrolling Carousel */}
          <div 
            ref={instagramRef}
            className="flex gap-6 overflow-x-auto pb-12 px-6 snap-x no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {[
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8214.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8199.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8191.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8172.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172912.png",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172859.png",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172844.png",
              // Full duplicate set for seamless infinite scroll
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8214.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8199.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8191.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/IMG_8172.jpg",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172912.png",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172859.png",
              "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-07%20172844.png"
            ].map((img, i) => (
              <a
                key={i}
                href={i % 2 === 0 ? "https://www.instagram.com/smartwashlavanderia/" : "https://wa.me/5571999115133"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div 
                  className="w-[280px] md:w-[350px] aspect-square bg-soft-ice rounded-[32px] overflow-hidden shrink-0 snap-center shadow-sm border border-white/10 group relative"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={img} 
                    alt={`Instagram post ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Instagram size={32} />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
          
          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-medium-gray to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-medium-gray to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Seja um Franqueado Section */}
      <section id="franquias" className="py-24 bg-soft-ice overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="bg-deep-navy rounded-[48px] p-8 lg:p-20 text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-vibrant-blue/10 skew-x-12 translate-x-1/4"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lavender/20 rounded-full blur-[100px]"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border border-white/20">
                  Oportunidade de Negócio
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
                  Seja um <span className="text-vibrant-blue">Franqueado</span> SmartWash
                </h2>
                <p className="text-lg text-white/60 mb-10 leading-relaxed">
                  Invista no setor que mais cresce no Brasil. Um modelo de negócio self-service, com baixo custo operacional, alta tecnologia e suporte completo para você lucrar em Salvador e região.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: Zap, title: "Operação Enxuta", desc: "Sem necessidade de funcionários fixos." },
                    { icon: ShieldCheck, title: "Suporte Total", desc: "Da escolha do ponto ao marketing." },
                    { icon: Coins, title: "Alta Rentabilidade", desc: "Retorno sobre investimento acelerado." },
                    { icon: Sparkles, title: "Marca Forte", desc: "Referência em qualidade e tecnologia." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-10 h-10 bg-vibrant-blue rounded-xl flex items-center justify-center text-white">
                        <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://smartwash-franquia.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-vibrant-blue hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition shadow-2xl shadow-vibrant-blue/40 group"
                >
                  Quero receber a apresentação
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
                </a>
              </div>

              <div className="relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5">
                  <img 
                    src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-07%20at%204.54.15%20PM.jpeg" 
                    alt="Unidade SmartWash" 
                    className="w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <div className="w-12 h-12 bg-vibrant-blue rounded-xl flex items-center justify-center text-white font-black text-xl">
                        S
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Modelo de Sucesso</div>
                        <div className="text-xs text-white/60 italic">Unidade Brotas - Salvador/BA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-ice">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase">Dúvidas <span className="text-vibrant-blue">Frequentes</span></h2>
            <p className="text-deep-navy/70">Tudo o que você precisa saber para lavar suas roupas na SmartWash.</p>
          </div>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-medium-gray rounded-3xl border border-white/10 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <span className={`font-bold transition-colors ${openFaq === i ? 'text-vibrant-blue' : 'text-deep-navy group-hover:text-vibrant-blue'}`}>
                    {item.q}
                  </span>
                  <ChevronDown size={20} className={`text-vibrant-blue transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-deep-navy/70 text-sm leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-navy text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vibrant-blue via-lavender to-vibrant-blue"></div>
        
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura_de_tela_2026-03-07_180049-removebg-preview.png" 
                  alt="SmartWash Logo" 
                  className="h-16 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                A lavanderia self-service que devolve seu tempo. Tecnologia de ponta, economia real e o melhor cuidado para suas roupas em Salvador.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/smartwashlavanderia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-vibrant-blue transition text-white">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5571999115133" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] transition text-white">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-vibrant-blue">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#unidades" className="hover:text-white transition">Nossas Unidades</a></li>
                <li><a href="#precos" className="hover:text-white transition">Preços</a></li>
                <li><a href="#franquias" className="hover:text-white transition">Seja um Franqueado</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-vibrant-blue">Contato</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-vibrant-blue" />
                  Salvador, Bahia
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-vibrant-blue" />
                  (71) 99911-5133
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-vibrant-blue" />
                  lavanderiasmartwashssa@gmail.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-medium">
            <p>© 2024 SmartWash Lavanderia Self-Service. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5571999115133" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-emerald-500/20 hover:scale-110 transition-transform group"
      >
        <MessageCircle size={28} fill="currentColor" />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-deep-navy px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Fale com a gente!
        </div>
      </a>
    </div>
  );
}
