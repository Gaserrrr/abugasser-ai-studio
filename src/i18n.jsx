import React, { createContext, useContext, useEffect, useState } from 'react'

const dict = {
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'من أنا',
      services: 'خدماتي',
      work: 'أعمالي',
      prompts: 'البرومبتات',
      contact: 'تواصل',
    },
    hero: {
      badge: 'مبدع ذكاء اصطناعي',
      title: 'أبو جاسر الجزار',
      subtitle: 'أحوّل الأفكار إلى تجارب بصرية بالذكاء الاصطناعي',
      desc: 'مصمم ومبدع ذكاء اصطناعي متخصص في توليد الصور، بناء الهويات البصرية، وكتابة البرومبتات الاحترافية التي تُنتج نتائج استثنائية.',
      cta1: 'شوف أعمالي',
      cta2: 'تواصل معايا',
      stat1: 'مشروع مكتمل',
      stat2: 'عميل راضي',
      stat3: 'سنة خبرة',
    },
    about: {
      title: 'من أنا',
      p1: 'أنا أبو جاسر الجزار، مبدع ذكاء اصطناعي بشغف بتحويل الخيال إلى واقع بصري. أدمج أحدث أدوات التوليد مع حسّ تصميمي دقيق.',
      p2: 'أعمالي تجمع بين جمال الصورة المولّدة ودقّة الهوية التجارية — من الإعلانات إلى المحتوى الرقمي الجاهز للنشر.',
      skillsTitle: 'مهاراتي',
    },
    services: {
      title: 'خدماتي',
      sub: 'حلول بصرية مدعومة بالذكاء الاصطناعي',
      items: [
        { title: 'توليد الصور بالذكاء الاصطناعي', desc: 'صور احترافية مولّدة حسب الطلب لأي فكرة أو منتج أو مفهوم بصري.' },
        { title: 'هويات بصرية ذكية', desc: 'شعارات وصور متكاملة مبنية بأسلوب موحّد عبر أدوات التوليد.' },
        { title: 'برومبتات احترافية', desc: 'كتابة وصياغة برومبتات معمّقة تُعطي نتائج دقيقة ومتكررة.' },
        { title: 'محتوى إعلاني بالذكاء الاصطناعي', desc: 'حملات بصرية وفيديوهات قصيرة جاهزة للنشر على منصات التواصل.' },
        { title: 'تحرير وترميم الصور', desc: 'تحسين، تلوين، وإزالة عناصر بذكاء اصطناعي بجودة عالية.' },
        { title: 'استشارات وتدريب', desc: 'جلسات لتعليم الفرق استخدام أدوات الذكاء الاصطناعي الإبداعي.' },
      ],
    },
    work: {
      title: 'أعمالي',
      sub: 'مختارات من مشاريعي البصرية',
      view: 'عرض المشروع',
    },
    prompts: {
      title: 'مكتبة البرومبتات',
      sub: 'برومبتات جاهزة تبدأ منها',
      copy: 'نسخ',
      copied: 'تم النسخ',
    },
    contact: {
      title: 'تواصل معايا',
      sub: 'هل عندك فكرة؟ خليني أحوّلها لواقع',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      msg: 'رسالتك',
      send: 'إرسال الرسالة',
      whatsapp: 'راسلني على واتساب',
    },
    footer: {
      rights: 'كل الحقوق محفوظة',
      made: 'صُمم بالذكاء الاصطناعي لـ',
    },
  },
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      work: 'Work',
      prompts: 'Prompts',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI Creative',
      title: 'Abu Gasser El-Gazzar',
      subtitle: 'Turning ideas into AI-powered visual experiences',
      desc: 'An AI designer & creative specialized in image generation, visual identities, and professional prompts that deliver exceptional results.',
      cta1: 'View my work',
      cta2: 'Get in touch',
      stat1: 'Projects done',
      stat2: 'Happy clients',
      stat3: 'Years of craft',
    },
    about: {
      title: 'About me',
      p1: "I'm Abu Gasser El-Gazzar, an AI creative passionate about turning imagination into visual reality. I blend cutting-edge generation tools with precise design intuition.",
      p2: 'My work fuses the beauty of generated imagery with brand-grade precision — from advertising to ready-to-publish digital content.',
      skillsTitle: 'My skills',
    },
    services: {
      title: 'Services',
      sub: 'AI-powered visual solutions',
      items: [
        { title: 'AI Image Generation', desc: 'Bespoke professional images generated on demand for any idea, product, or visual concept.' },
        { title: 'Smart Visual Identities', desc: 'Logos and full brand kits built with a consistent style across generation tools.' },
        { title: 'Professional Prompts', desc: 'Deep prompt engineering that yields accurate, repeatable results.' },
        { title: 'AI Advertising Content', desc: 'Visual campaigns and short videos ready to publish on social platforms.' },
        { title: 'Image Editing & Restoration', desc: 'AI-powered enhancement, colorization, and object removal at high quality.' },
        { title: 'Consulting & Training', desc: 'Sessions to teach teams how to use creative AI tools.' },
      ],
    },
    work: {
      title: 'My Work',
      sub: 'Selected visual projects',
      view: 'View project',
    },
    prompts: {
      title: 'Prompt Library',
      sub: 'Ready-to-use prompts to start from',
      copy: 'Copy',
      copied: 'Copied',
    },
    contact: {
      title: "Let's talk",
      sub: 'Got an idea? Let me turn it into reality',
      name: 'Name',
      email: 'Email',
      msg: 'Your message',
      send: 'Send message',
      whatsapp: 'Message me on WhatsApp',
    },
    footer: {
      rights: 'All rights reserved',
      made: 'AI-designed for',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')

  useEffect(() => {
    const d = dict[lang]
    document.documentElement.lang = lang
    document.documentElement.dir = d.dir
  }, [lang])

  const toggle = () => setLang((l) => (l === 'ar' ? 'en' : 'ar'))
  const t = (path) => {
    const keys = path.split('.')
    let cur = dict[lang]
    for (const k of keys) cur = cur?.[k]
    return cur ?? path
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
