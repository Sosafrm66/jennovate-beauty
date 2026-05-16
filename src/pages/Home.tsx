import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-primary/20 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <span className="font-sans font-medium text-xs tracking-[0.25em] text-foreground uppercase">
          Jennovate
        </span>
        <nav className="hidden md:flex gap-10">
          {["Services", "Experience", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-[11px] tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          className="rounded-none border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-sans text-[10px] tracking-[0.2em] uppercase h-9 px-6 transition-all duration-500"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-background">
      {/* Desktop: parallax wrapper; Mobile: static fill */}
      <div className="hidden md:block absolute inset-0 w-full h-[120%] -top-[10%]">
        <motion.div style={{ y }} className="w-full h-full">
          <img
            src="/images/hero.jpg"
            alt="Luxury beauty editorial"
            className="w-full h-full object-cover object-[50%_15%] opacity-85"
          />
        </motion.div>
      </div>
      <div className="md:hidden absolute inset-0 w-full h-full">
        <img
          src="/images/hero.jpg"
          alt="Luxury beauty editorial"
          className="w-full h-full object-cover object-[50%_10%] opacity-85"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="font-sans text-primary text-[11px] tracking-[0.25em] uppercase mb-4 md:mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-primary block"></span>
            Miami Shores, FL
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,12vw,120px)] leading-[0.9] tracking-[-0.03em] text-foreground italic pr-4">
            Where beauty <br />
            <span className="not-italic">becomes art.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    "Knotless Braids",
    "Box Braids",
    "Cornrows",
    "Locs Styling",
    "Luxury Nail Art",
    "Gel Extensions",
    "Press-On Artistry",
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-primary block"></span>
                Services
              </h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-background/80 max-w-sm">
                Precision is beauty. Every braid, every stroke of color is executed with absolute intentionality. We do not rush art.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col gap-0 border-t border-background/10">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group border-b border-background/10 py-6 md:py-8 flex justify-between items-center hover:pr-8 transition-all duration-500 cursor-default"
                >
                  <h3 className="font-serif text-3xl md:text-5xl tracking-[-0.02em] group-hover:text-primary transition-colors duration-500">
                    {service}
                  </h3>
                  <span className="font-sans text-xs tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                    EXPLORE
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-primary/10 -translate-y-1/2 z-0 pointer-events-none" />
      <div className="absolute left-1/2 top-0 w-px h-full bg-primary/10 -translate-x-1/2 z-0 pointer-events-none hidden md:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary mb-12 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-primary block"></span>
            The Experience
            <span className="w-8 h-px bg-primary block"></span>
          </h2>
          <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em] text-foreground mb-12 italic">
            Subtle. <br className="md:hidden" /> Intentional. <br className="md:hidden" /> <span className="not-italic">Refined.</span>
          </h3>
          <p className="font-sans text-base md:text-lg leading-[1.9] text-foreground/70 max-w-2xl mx-auto">
            Jennovate Beauty elevates braiding and nail artistry to the level of high fashion. Stepping into our studio is like walking onto a set. It's unhurried, deliberate, and deeply magnetic. We don't just provide a service; we author a transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div style={{ y: y1 }} className="relative h-[60vh] md:h-[80vh] w-full">
            <img
              src="/images/gallery-braids.jpg"
              alt="Intricate luxury braids"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative h-[50vh] md:h-[70vh] w-full md:mt-32">
            <img
              src="/images/gallery-nails.jpg"
              alt="Luxury nail art"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-16 -left-8 md:-left-24 bg-foreground p-8 md:p-12 z-10 max-w-xs">
              <p className="font-serif text-2xl md:text-3xl tracking-[-0.02em] text-background italic leading-tight">
                "Every detail is a deliberate choice."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-serif text-5xl md:text-8xl tracking-[-0.03em] mb-12">
            Reserve <br className="hidden md:block" />
            <span className="italic">Your Session</span>
          </h2>
          <p className="font-sans text-sm tracking-[0.1em] uppercase mb-16 text-background/60">
            Miami Shores, FL
          </p>
          <a
            href="mailto:booking@jennovatebeauty.com"
            className="group relative inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase py-5 px-12 border border-background hover:bg-background hover:text-foreground transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-background translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-primary/20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans font-medium text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
          © 2025 Jennovate Beauty
        </span>
        <span className="font-serif text-lg text-primary italic">
          Jennovate
        </span>
        <span className="font-sans text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
          Miami Shores, FL
        </span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
