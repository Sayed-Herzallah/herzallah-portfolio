"use client";

import React from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const [profileImgSrc, setProfileImgSrc] = React.useState(portfolioData.profileImage);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 glow-spot animate-gradient-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 glow-spot" />

      {/* Sun Overlay for Summer theme */}
      <div className="sun-element" />
      
      {/* Heat Wave shimmer Overlay for Summer theme */}
      <div className="heat-wave" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Desktop-only absolutely centered profile & monitor SVG (scaled to 55vh to prevent any overlap on text columns) */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none select-none">
        <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center transform lg:-translate-x-[2%] xl:-translate-x-[1%]">
          {/* Radial Glow directly behind the portrait area */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px] z-0 animate-pulse" />
          
          <Image
            src={profileImgSrc}
            alt={portfolioData.name}
            width={650}
            height={850}
            priority
            unoptimized
            className="h-full max-h-[68vh] w-auto object-contain opacity-95 relative z-10"
            onError={() => setProfileImgSrc("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400")}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-y-8 items-center min-h-[85vh] lg:min-h-[80vh]">
        
        {/* Left Column (Desktop) / Centered Top Content (Mobile/Tablet): Greeting and Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-6 lg:pt-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-display tracking-wide text-white leading-[1.15]">
            I&apos;m Eng.{" "}
            <span className="bg-gradient-to-r from-[#f3f4f6] via-primary to-secondary bg-clip-text text-transparent block mt-1 lg:mt-2 transition-all duration-700">
              Sayed <br className="hidden lg:inline" />
              Herzallah
            </span>
          </h1>
          
          {/* High-contrast, two-line title to keep things clean, clear, and highlight Backend focus */}
          <div className="text-sm uppercase tracking-[0.2em] font-bold text-gray-300 mt-4 pl-0.5 leading-relaxed">
            <div>Full Stack Developer</div>
            <div className="text-secondary font-bold text-xs tracking-[0.15em] mt-1.5 block">
              (Backend Focused)
            </div>
          </div>

          {/* Social Links under the Name with CONNECT: label (high contrast) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 pl-0.5">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Connect:</span>
            <div className="flex items-center gap-5 text-gray-300">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077b5] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.4)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${portfolioData.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25d366] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5cf6] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CV Button — visible on all screens */}
          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-secondary/10 self-center lg:self-start group/cv"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover/cv:translate-y-0.5" />
            Download CV
          </a>
        </motion.div>

        {/* Mobile & Tablet Portrait Graphic (stacks in center, hidden on desktop, scaled up on tablet) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-1 lg:hidden flex justify-center items-center relative my-1 w-full max-w-[360px] xs:max-w-[400px] sm:max-w-lg md:max-w-xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-purple-600/20 blur-[60px] z-0 animate-pulse" />
          <Image
            src={profileImgSrc}
            alt={portfolioData.name}
            width={450}
            height={550}
            priority
            unoptimized
            className="w-full h-auto object-contain relative z-10 select-none pointer-events-none max-h-[55vh] xs:max-h-[58vh] sm:max-h-[62vh] md:max-h-[65vh]"
            onError={() => setProfileImgSrc("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400")}
          />
        </motion.div>

        {/* Mobile & Tablet Description & View My Work (stacks in center, hidden on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="col-span-1 lg:hidden flex flex-col items-center justify-center text-center mt-1 mb-6"
        >
          <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed mb-6 max-w-sm md:max-w-2xl">
            I am a Backend-Focused Full-Stack Developer specializing in Node.js, Express, and database engineering. I translate complex requirements into clean, optimized, and production-ready APIs.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors duration-200 group"
          >
            <span>View My Work</span>
            <svg
              className="w-10 h-3 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200 text-white"
              viewBox="0 0 40 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="0" y1="6" x2="38" y2="6" />
              <polyline points="32,1 38,6 32,11" />
            </svg>
          </a>
        </motion.div>

        {/* Desktop-only Description & View My Work Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden lg:flex lg:col-span-3 lg:col-start-10 flex-col items-start justify-center text-left pl-4"
        >
          <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed mb-8">
            I am a Backend-Focused Full-Stack Developer specializing in Node.js, Express, and database engineering. I translate complex requirements into clean, optimized, and production-ready APIs.
          </p>
          
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors duration-200 group"
          >
            <span>View My Work</span>
            <svg
              className="w-10 h-3 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200 text-white"
              viewBox="0 0 40 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="0" y1="6" x2="38" y2="6" />
              <polyline points="32,1 38,6 32,11" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Rich Bilingual Search Indexing Block (Accessibility & SEO Crawlers) */}
      <div className="sr-only absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none select-none" aria-hidden="true">
        <h2>سيد حرز الله | Sayed Herzallah - مطور ويب متكامل Full-Stack Developer</h2>
        <p>
          مرحباً بكم في معرض أعمال المهندس سيد حرز الله (Sayed Herzallah)، مطور ويب متكامل (Full-Stack Web Developer) متخصص في هندسة الأنظمة الخلفية (Backend focused) وهندسة قواعد البيانات (Database Engineering).
          سيد حرز الله (Sayed Herzallah) يعمل في القاهرة، مصر (Cairo, Egypt)، ولديه خبرة واسعة في بناء المواقع والأنظمة المعقدة وقواعد البيانات عالية الأداء.
        </p>
        <p>
          الكلمات المفتاحية للبحث عن سيد حرز الله:
          سيد حرز الله مبرمج، سيد حرز الله مطور نود، سيد حرزالله، حرز الله مطور، مطور باك اند مصر، مطور ميرن مصر، مطور ويب القاهرة، Sayed Herzallah, Sayed Herzallah portfolio, Sayed Herzallah website, Sayed Herzallah developer.
          سيد حرز الله حاصل على بكالوريوس نظم معلومات حاسب آلي من معهد الدلتا العالي (Delta Higher Institute).
          تم اختيار سيد حرز الله ضمن 5000 مطور في مبادرة Google Build with AI Masr Edition (بناء مع الذكاء الاصطناعي من جوجل مصر).
          حاصل على تدريب وشهادات معتمدة من المعهد القومي للاتصالات NTI (MERN stack developer) ومنحة Creativa من وزارة الاتصالات وتكنولوجيا المعلومات MCIT في تطوير الواجهات باستخدام React.js.
        </p>
        <h3>المشاريع التي قام ببنائها سيد حرز الله (Sayed Herzallah Projects):</h3>
        <ul>
          <li>منصة عطاء الخيرية (Ataa Charity Platform) - تطبيق تبرعات متكامل بنظام React و TypeScript و Express.</li>
          <li>نظام رعاية لتشخيص وعلاج طبيعي للأطفال (R3aya Care System API) - لوحة تحكم طبية لربط المعالجين وأولياء الأمور وقراءة مستشعرات العضلات EMG.</li>
          <li>منصة سيوة للسياحة (Siwa Oasis Travel Platform API) - نظام حجز رحلات ومقاعد باصات وحسابات سياحية متطورة ومنع الحجز المزدوج.</li>
          <li>تطبيق فحص أورام المخ بالذكاء الاصطناعي (Brain Tumor AI Analysis Web App) - واجهة طبيب متكاملة لرفع وقراءة تحاليل أشعة الرنين المغناطيسي وتحديد الأورام بدقة.</li>
          <li>منصة أفق العقارية (UFUQ Real Estate Platform) - موقع عرض العقارات والفلل والشقق وإدارة حسابات العملاء.</li>
          <li>وكالة فيلا للعقارات (Villa Agency React Application) - نظام لإدارة حجوزات الفلل واستعراض تفاصيلها كاملة.</li>
          <li>تطبيق صراحة للمراسلة السرية (Sharaha Messaging App Backend) - نظام إرسال واستقبال رسائل مجهولة بخصوصية عالية.</li>
          <li>منصة التواصل الاجتماعي (Social Media Real-time API) - نظام تفاعلي للمنشورات والمتابعات والمحادثات المباشرة بالـ WebSockets.</li>
        </ul>
        <p>
          المهارات والتقنيات التي يستخدمها المهندس سيد حرز الله:
          Node.js, Express.js, JavaScript, TypeScript, React.js, Next.js, Redux, MySQL, MongoDB, Mongoose, Sequelize ORM, SQLite, RESTful APIs, Git, GitHub, WebSockets Socket.io, Docker, Clean Architecture.
          برمجة قواعد البيانات، حماية الواجهات البرمجية JWT، تحسين سرعة الاستعلامات، خريطة الموقع sitemap.xml، إثبات ملكية جوجل google-site-verification.
        </p>
      </div>

    </section>
  );
}
