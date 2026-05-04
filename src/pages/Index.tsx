import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {
  Briefcase,
  Heart,
  Cake,
  PartyPopper,
  Crown,
  IceCream,
  Leaf,
  Sparkles,
  Wheat,
  MessageCircle,
  Settings2,
  Smile,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HERO_IMG =
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/6c9ce6d9bef526243ec621d0222c7185.jpg";

const eventTypes = [
  { icon: Briefcase, title: "Corporativo", desc: "Networking com sabor." },
  { icon: Heart, title: "Casamento", desc: "Doçura para celebrar o amor." },
  { icon: Cake, title: "Aniversário", desc: "Torne seu dia ainda mais especial." },
  { icon: PartyPopper, title: "Festa Infantil", desc: "Diversão deliciosa para os pequenos." },
  { icon: Crown, title: "Debutantes", desc: "Um brinde doce aos 15 anos." },
];

const machines = [
  {
    name: "Snow Branca",
    desc: "Minimalista e elegante. Combina com qualquer decoração.",
    img: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/2ca2942f76515a0b6ba443592f39f3e2.jpg",
  },
  {
    name: "Cherry Vermelha",
    desc: "Vibrante e retrô. O destaque visual da sua festa.",
    img: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/c4f07daf24889b5b0c065153e4276b40.jpg",
  },
  {
    name: "Pink Berry Bike",
    desc: "Nossa famosa bike rosa. Charme e mobilidade total.",
    img: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/0244a9f8a13b5098f1ace2a2d4c1d9f4.jpg",
  },
];

const galleryImgs = [
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/750cba536ef9222fbc79c87fe6b350d7.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/c0ea2bba9109ff4be7ef40ce5c1e59c1.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/78cb4aca9cde841a807f8a4ba1d443be.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/4153c36d6905986bab12cac2e46e590e.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/3b92c3ff43a337aaec64a62d3c2ec5e8.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/4af4da0ea5d9248bebc16461e664dcba.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/5bde14c7ebc14b736851bae70150e105.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/04d39fa778baf07d11e0682196ef2765.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/2522810e0ab7e6ad10dc6ee1f0f164e6.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/84ecd73e930bc11b7868c62e1e1764f3.jpg",
  "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/337d1268698ada2bbd4b4bc5eae02acd.jpg",
];

const features = [
  { icon: IceCream, title: "Sorvete à Vontade", desc: "Uma experiência doce e sem limites para seus convidados." },
  { icon: Leaf, title: "0% Lactose", desc: "Inclusão é essencial. Nossos sorvetes são seguros para intolerantes." },
  { icon: Sparkles, title: "Sem Gordura", desc: "Sabor leve e refrescante, feito à base de água e frutas." },
  { icon: Wheat, title: "Sem Glúten", desc: "Delicioso e seguro para todos os seus convidados aproveitarem." },
];

const brands = [
  { name: "Casas Bahia", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/0071f543cc79754715dbaf0435d3145b.png" },
  { name: "Nubank", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/af5033ba796be48b67ffc00e8daf2004.webp" },
  { name: "Ipiranga", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/0ef7bbacfe282e69f560b3fa9ff84f4f.png" },
  { name: "Alpargatas", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/b8b0a77c0f087d42986e9b32b70fea83.jpg" },
  { name: "Mary Kay", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/4217ee87478f7806cada72942ded22e6.jpg" },
  { name: "HDI Seguros", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/888239b9c8330afd7b2a0d855ce7fae5.png" },
  { name: "Salon Line", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/13542dd227b634f67f724e119e04f2aa.png" },
  { name: "Alsco", src: "https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/026d39a3ca63c6116cf177157747d4ab.png" },
];

const steps = [
  { n: "01", icon: MessageCircle, title: "Entre em Contato", desc: "Envie uma mensagem pelo WhatsApp ou formulário." },
  { n: "02", icon: Settings2, title: "Personalize", desc: "Escolha a máquina e os sabores ideais para seu evento." },
  { n: "03", icon: Smile, title: "Aproveite", desc: "Nossa equipe monta, serve e desmonta tudo para você." },
];

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    eventType: "",
    date: "",
    time: "",
    guests: "",
    cep: "",
    notes: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pedido enviado!",
      description: "Em breve entraremos em contato com sua proposta personalizada.",
    });
    setForm({
      name: "",
      whatsapp: "",
      email: "",
      eventType: "",
      date: "",
      time: "",
      guests: "",
      cep: "",
      notes: "",
    });
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Carrinho retrô de sorvete soft americano Memory Cream"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="container relative z-10 text-center text-white animate-fade-up">
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium border border-white/30">
            Sorvete Soft Americano
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
            Experiências que ficam<br />na memória
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto opacity-95 drop-shadow">
            Sorvete americano retrô com charme, qualidade e presença marcante em eventos
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#contato">Eu quero</a>
          </Button>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="py-24 bg-gradient-soft">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Perfeito para Todo Tipo de Evento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Levamos nossa estrutura completa para onde você precisar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eventTypes.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-3xl p-6 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÁQUINAS */}
      <section id="maquinas" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Conheça os nossos modelos
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o modelo perfeito para a estética do seu evento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {machines.map((m) => (
              <div
                key={m.name}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Máquina ${m.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{m.name}</h3>
                  <p className="text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 bg-gradient-soft">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nossos Eventos!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais do que máquinas, levamos experiências únicas. Confira alguns momentos especiais.
            </p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Evento Memory Cream ${i + 1}`}
                loading="lazy"
                className="w-full rounded-2xl shadow-card hover:shadow-elegant hover:scale-[1.02] transition-smooth break-inside-avoid"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Diferenciais
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`rounded-3xl p-8 text-center shadow-card transition-smooth hover:-translate-y-1 ${
                  i % 2 === 0 ? "bg-secondary/20" : "bg-primary/20"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    i % 2 === 0 ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center bg-gradient-primary rounded-3xl p-12 shadow-elegant">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Quer levar essa experiência para o seu evento?
            </h3>
            <Button variant="accent" size="xl" asChild>
              <a href="#contato">Eu quero</a>
            </Button>
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="py-24 bg-gradient-soft overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img
              src="https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/6e39f7ee994fbbfb0cd39fe8138ded71.jpg"
              alt="Pink Berry Bike Memory Cream"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-4">
              Destaque da Coleção
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              A Charmosa <span className="text-primary">Pink Berry Bike</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mais que uma máquina de sorvete, um cenário instagramável para seu evento!
              Leve todo o charme retrô e o sabor irresistível para seus convidados.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Quero a Pink Berry</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Memory Cream</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos apaixonados por criar momentos doces. Nascemos com a missão de levar o
            autêntico sorvete soft americano para festas e eventos com um toque moderno e
            profissional. Mais do que servir sorvete, nós servimos sorrisos, com máquinas
            de alta qualidade, ingredientes selecionados e uma equipe treinada para
            encantar seus convidados do início ao fim.
          </p>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-20 bg-gradient-soft overflow-hidden">
        <div className="container text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Quem experimentou, recomenda!
          </h2>
          <p className="text-muted-foreground">
            Veja algumas das empresas que recomendam a Memory Cream
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-x w-max gap-12 px-6">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-20 w-40 bg-card rounded-2xl shadow-card px-4"
              >
                <img
                  src={b.src}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SABORES */}
      <section id="sabores" className="py-24 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nossos Sorvetes
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sorvetes leves, cremosos e irresistíveis, com mais de 25 deliciosos sabores
              para surpreender seus convidados. Uma experiência refrescante que transforma
              seu evento em um momento ainda mais especial.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Baunilha", "Chocolate", "Morango", "Menta", "Pistache", "Caramelo", "Cookies", "Coco", "Maracujá"].map(
                (s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img
              src="https://horizons-cdn.hostinger.com/1274e6ef-bd61-4572-8761-f47e1ac4b8cf/d7723ce7954ce356d39bf90a05daa2aa.png"
              alt="Sorvetes soft Memory Cream"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-gradient-soft">
        <div className="container">
          <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">
            Como Funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ n, icon: Icon, title, desc }) => (
              <div key={n} className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-smooth">
                <span className="absolute -top-6 -left-2 font-display text-7xl font-bold text-primary/30">
                  {n}
                </span>
                <div className="relative">
                  <div className="w-14 h-14 mb-4 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
<section id="contato" className="py-24 bg-background">
  <div className="container max-w-3xl">
    <div className="text-center mb-12">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        Vamos levar essa alegria para seu evento?
      </h2>
      <p className="text-lg text-muted-foreground">
        Preencha o formulário abaixo e receba seu orçamento personalizado.
      </p>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Validação de Data no Submit (Double check)
        const selectedDate = new Date(form.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
          alert("Por favor, selecione uma data futura para o evento.");
          return;
        }
        
        onSubmit(e);
      }}
      className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nome completo" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="form-input"
          />
        </Field>
        
        {/* WHATSAPP COM MÁSCARA */}
        <Field label="WhatsApp" required>
          <input
            required
            placeholder="(00) 00000-0000"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: maskWhatsApp(e.target.value) })}
            className="form-input"
          />
        </Field>
      </div>

      <Field label="E-mail" required>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="form-input"
        />
      </Field>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Tipo de evento" required>
          <select
            required
            value={form.eventType}
            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            className="form-input"
          >
            <option value="">Selecione...</option>
            <option>Aniversário</option>
            <option>Casamento</option>
            <option>Corporativo</option>
            <option>Festa Infantil</option>
            <option>Debutante</option>
            <option>Feira / Evento Empresarial</option>
            <option>Inauguração</option>
            <option>Outro</option>
          </select>
        </Field>

        {/* DATA MÍNIMA (BLOQUEIA DATAS PASSADAS NO CALENDÁRIO) */}
        <Field label="Data do evento" required>
          <input
            type="date"
            required
            min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Horário de início">
          <select
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="form-input"
          >
            <option value="">Selecione...</option>
            {Array.from({ length: 15 }, (_, i) => 8 + i).map((h) => (
              <option key={h}>{String(h).padStart(2, "0")}:00</option>
            ))}
          </select>
        </Field>

        {/* QUANTIDADE MÍNIMA 1 */}
        <Field label="Quantidade de convidados">
          <input
            type="number"
            min="1"
            value={form.guests}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setForm({ ...form, guests: val < 1 ? 1 : e.target.value });
            }}
            className="form-input"
          />
        </Field>
      </div>

      {/* CEP COM MÁSCARA */}
      <Field label="CEP do local do evento">
        <input
          placeholder="00000-000"
          value={form.cep}
          onChange={(e) => setForm({ ...form, cep: maskCEP(e.target.value) })}
          className="form-input"
        />
      </Field>

      <Field label="Observações">
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="form-input resize-none"
        />
      </Field>

      <Button type="submit" variant="hero" size="xl" className="w-full">
        Solicitar Proposta
      </Button>
    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground">M</span>
            </div>
            <span className="font-display text-xl font-bold">Memory Cream</span>
          </div>
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Memory Cream. Sorvete soft americano para eventos inesquecíveis.
          </p>
        </div>
      </footer>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.2);
        }
      `}</style>
    </div>
  );
};

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="block text-sm font-medium mb-2 text-foreground">
      {label}
      {required && <span className="text-primary"> *</span>}
    </span>
    {children}
  </label>
);
const maskWhatsApp = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\={11})\d+?$/, "$1") // limita 11 dígitos
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

const maskCEP = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

export default Index;
