import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail, Phone, Instagram, Facebook, Loader2, CheckCircle } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lahiru-sanjeewa-8b2a59323/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Lahiru075", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/lakshan_lahiruu/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.7 } },
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus('sending');

    try {

      const response = await fetch("https://formspree.io/f/mjgazwnp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={blurReveal}
        className="max-w-5xl mx-auto relative z-10"
      >
        <h2 className="section-heading">
          Contact <span>Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground tracking-tight">
                Let's Work <span className="glow-text">Together</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-4 flex items-center gap-4 border-white/5 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
                  <a href="mailto:sanjeewalahiru057@gmail.com" className="text-sm hover:text-primary transition-colors">
                    sanjeewalahiru057@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4 border-white/5 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Phone</p>
                  <a href="tel:+94719068149" className="text-sm hover:text-primary transition-colors">
                    +94 71 906 8149
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass-card p-8 border-white/5">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a <span className="glow-text">Message</span></h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="glow-input bg-secondary/20"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="glow-input bg-secondary/20"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="glow-input bg-secondary/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid || status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 rounded-xl font-bold transition-all disabled:opacity-50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] active:scale-95 overflow-hidden"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  "Error, try again!"
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Background Aura Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSection;