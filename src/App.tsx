/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  CheckCircle2, 
  BarChart3, 
  Building2, 
  Users, 
  FileText, 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Layers,
  LayoutGrid,
  Lock,
  Wind,
  Droplets,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
    {children}
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  className?: string,
  onClick?: () => void
}) => {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200',
    outline: 'border-2 border-slate-200 text-slate-700 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-100'
  };

  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// --- Sections ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid-pattern selection:bg-brand-200 selection:text-brand-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase">
              АР<span className="text-brand-600">БАТ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Проекты', 'Услуги', 'О нас', 'Контакты'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                {item}
              </a>
            ))}
            <Button variant="secondary" className="py-2 px-5 text-sm">Получить КП</Button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Проекты', 'Услуги', 'О нас', 'Контакты'].map((item) => (
                <a key={item} href="#" className="text-2xl font-bold text-slate-900" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <Button variant="primary" className="w-full text-lg py-4">Получить КП</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. Attention Grabber (Hero) */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionTag>Инженерное проектирование 4.0</SectionTag>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Проектируем <span className="text-brand-600">интеллект</span> вашего здания
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  Комплексное проектирование инженерных систем и систем безопасности для B2B и B2G. Сокращаем расходы на строительство до 15% за счет точных расчетов и BIM-технологий.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="px-8 py-4 text-lg">
                    Рассчитать стоимость проекта <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    Смотреть портфолио
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dashboard-style background element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[600px] hidden lg:block opacity-40 pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute top-0 right-0 w-[500px] h-[400px] glass rounded-3xl p-6 rotate-[-5deg] translate-x-12 translate-y-[-20px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">BIM_MODEL_V2.4</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
                  <div className="h-32 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-brand-200" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-12 bg-brand-50 rounded-lg" />
                    <div className="h-12 bg-slate-50 rounded-lg" />
                    <div className="h-12 bg-slate-50 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-20 w-[400px] h-[300px] glass rounded-3xl p-6 rotate-[8deg] translate-x-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <Shield className="text-brand-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">SECURITY STATUS</div>
                    <div className="text-sm font-bold text-slate-900">SYSTEMS ACTIVE</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div className="text-[10px] font-mono">NODE_0{i}_STABLE</div>
                      <div className="text-[10px] font-mono text-slate-400">99.9%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Definition */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTag>Проблематика</SectionTag>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Ошибки в проектировании стоят <span className="text-red-400">миллионы</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10">
                  Некачественный проект — это не просто бумага. Это реальные риски, которые проявляются на этапе строительства и эксплуатации.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <AlertTriangle className="text-red-400" />, title: "Перерасход бюджета", desc: "Из-за неучтенных коллизий и лишних материалов затраты растут на 20-30%." },
                    { icon: <Clock className="text-amber-400" />, title: "Срыв сроков", desc: "Постоянные доработки проекта в процессе монтажа останавливают стройку." },
                    { icon: <Shield className="text-blue-400" />, title: "Проблемы с экспертизой", desc: "Несоответствие ГОСТам и СНиПам ведет к отказам в разрешениях." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-slate-800 flex items-center justify-center p-12">
                  <div className="relative w-full h-full border-2 border-dashed border-slate-700 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2">
                      <AlertTriangle className="text-red-400 w-8 h-8" />
                    </div>
                    <div className="w-3/4 h-3/4 border-2 border-dashed border-slate-700 rounded-full animate-[spin_15s_linear_infinite_reverse] flex items-center justify-center">
                      <div className="w-1/2 h-1/2 border-2 border-dashed border-slate-700 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-black text-white mb-2">42%</div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Риск коллизий без BIM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution Proposal */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <SectionTag>Наше решение</SectionTag>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Системный подход к инженерной сложности
              </h2>
              <p className="text-slate-600 text-lg">
                Мы создаем цифровую экосистему здания, где каждая система работает в синергии с остальными.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Layers className="w-8 h-8 text-brand-600" />, 
                  title: "BIM-моделирование (LOD 400)", 
                  desc: "Создаем детализированные 3D-модели, исключая пересечения коммуникаций еще до начала работ." 
                },
                { 
                  icon: <Zap className="w-8 h-8 text-brand-600" />, 
                  title: "Энергоэффективность", 
                  desc: "Оптимизируем потребление ресурсов, внедряя современные системы автоматизации и рекуперации." 
                },
                { 
                  icon: <Lock className="w-8 h-8 text-brand-600" />, 
                  title: "Интегрированная безопасность", 
                  desc: "Единый контур управления: видеонаблюдение, СКУД, ОПС и системы пожаротушения." 
                }
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl flex flex-col items-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Achievements Presentation */}
        <section className="py-20 bg-brand-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full grid-pattern" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Лет опыта", value: "12+" },
                { label: "Проектов", value: "450+" },
                { label: "Млн м² спроектировано", value: "3.5" },
                { label: "Сэкономлено клиентам", value: "₽1.2B" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-brand-100 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Benefits Demonstration */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-48 glass rounded-2xl p-6 flex flex-col justify-end bg-brand-50/50">
                      <BarChart3 className="text-brand-600 mb-4" />
                      <div className="text-sm font-bold">Точность расчетов 99.8%</div>
                    </div>
                    <div className="h-64 glass rounded-2xl p-6 flex flex-col justify-end bg-slate-900 text-white">
                      <LayoutGrid className="text-brand-400 mb-4" />
                      <div className="text-sm font-bold">Модульная архитектура систем</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-64 glass rounded-2xl p-6 flex flex-col justify-end bg-slate-100">
                      <Shield className="text-slate-900 mb-4" />
                      <div className="text-sm font-bold">Полное соответствие ГОСТ</div>
                    </div>
                    <div className="h-48 glass rounded-2xl p-6 flex flex-col justify-end bg-brand-600 text-white">
                      <Clock className="text-white mb-4" />
                      <div className="text-sm font-bold">Сдача проекта в срок</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionTag>Преимущества</SectionTag>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Почему лидеры рынка выбирают <span className="text-brand-600">АРБАТ</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "BIM-сопровождение", desc: "Мы не просто отдаем чертежи, мы сопровождаем модель на всех этапах строительства." },
                    { title: "Авторский надзор", desc: "Контролируем реализацию проекта на объекте, чтобы результат соответствовал задумке." },
                    { title: "Оптимизация спецификаций", desc: "Подбираем оборудование с лучшим соотношением цена/качество, не переплачивая за бренды." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Social Proof */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <SectionTag>Нам доверяют</SectionTag>
              <h2 className="text-3xl font-bold text-slate-900">Партнеры и клиенты</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['ГАЗПРОМ', 'ПИК', 'САМОЛЕТ', 'РОСТЕХ', 'MR GROUP', 'ДОМ.РФ'].map((logo) => (
                <div key={logo} className="text-2xl font-black tracking-tighter text-slate-400">{logo}</div>
              ))}
            </div>
            
            <div className="mt-24 grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Александр Волков", 
                  role: "Технический директор, MR Group", 
                  text: "АРБАТ разработали проект ОВиК и ВК для нашего нового ЖК. Благодаря BIM-модели мы выявили 120 коллизий еще до начала монтажа, что сэкономило нам около 4.5 млн рублей." 
                },
                { 
                  name: "Елена Смирнова", 
                  role: "Главный инженер, ГосСтройПроект", 
                  text: "Профессиональный подход к системам безопасности. Проект прошел государственную экспертизу с первого раза без единого замечания. Рекомендую как надежного партнера." 
                }
              ].map((review, idx) => (
                <div key={idx} className="glass rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <Zap key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />)}
                  </div>
                  <p className="text-slate-700 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200" />
                    <div>
                      <div className="font-bold text-slate-900">{review.name}</div>
                      <div className="text-sm text-slate-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Product/Service Offer */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <SectionTag>Наши услуги</SectionTag>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Комплексные пакеты проектирования
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Инженерные сети", 
                  icon: <Wind className="text-brand-600" />,
                  items: ["Отопление и вентиляция (ОВиК)", "Водоснабжение и канализация (ВК)", "Электроснабжение (ЭОМ)", "Слаботочные системы"] 
                },
                { 
                  title: "Системы безопасности", 
                  icon: <Shield className="text-brand-600" />,
                  items: ["Видеонаблюдение (СОТ)", "Контроль доступа (СКУД)", "Пожарная сигнализация (АПС)", "Оповещение (СОУЭ)"] 
                },
                { 
                  title: "Спец. разделы", 
                  icon: <FileText className="text-brand-600" />,
                  items: ["Мероприятия по ПБ (МПБ)", "Энергоэффективность", "Автоматизация (АСУ ТП)", "Диспетчеризация (БМС)"] 
                }
              ].map((pkg, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl border-t-4 border-t-brand-600">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{pkg.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Scarcity Effect */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass bg-white/50 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center animate-pulse">
                  <Clock className="text-amber-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Бесплатный аудит проекта</h3>
                  <p className="text-slate-600">Осталось всего <span className="font-bold text-amber-600">3 места</span> на апрель для бесплатного экспресс-аудита вашей документации.</p>
                </div>
              </div>
              <Button variant="secondary" className="whitespace-nowrap">Забронировать место</Button>
            </div>
          </div>
        </section>

        {/* 9. Guarantee */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="w-full aspect-video glass bg-white/5 rounded-3xl p-8 flex flex-col justify-center border-white/10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center">
                      <Shield className="text-white w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold">Гарантия 100%</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-400" />
                      <span>Прохождение экспертизы с первого раза</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-400" />
                      <span>Соответствие всем актуальным нормам 2026 года</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-brand-400" />
                      <span>Страхование профессиональной ответственности</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-500 rounded-full blur-3xl opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20" />
              </div>
              <div>
                <SectionTag>Ваша уверенность</SectionTag>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Мы берем на себя все <span className="text-brand-400">юридические риски</span></h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Наши проекты проходят строгий внутренний контроль качества. Если у экспертизы возникнут вопросы к нашим решениям — мы устраняем их бесплатно в течение 48 часов.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-sm font-mono text-brand-400 mb-2">CERTIFICATE_ID: AR-2026-9941</div>
                  <div className="text-white font-bold">Членство в СРО №1042.01-2014-77258301</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Call to Action (CTA) */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 -skew-x-12 translate-x-20" />
              
              <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Готовы начать <span className="text-brand-600">проект?</span></h2>
                  <p className="text-xl text-slate-600 mb-12">
                    Оставьте заявку, и наш главный инженер свяжется с вами в течение 30 минут для первичной консультации.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Phone className="text-slate-600 w-5 h-5" />
                      </div>
                      <span className="text-xl font-bold text-slate-900">+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Mail className="text-slate-600 w-5 h-5" />
                      </div>
                      <span className="text-xl font-bold text-slate-900">info@arbat.ru</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass bg-white p-8 rounded-3xl shadow-2xl border-slate-100">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Имя</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Иван" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Телефон</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="+7 (___) ___+__-__" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Компания</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="ООО 'Застройщик'" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">О проекте</label>
                      <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all h-32" placeholder="Краткое описание объекта..." />
                    </div>
                    <Button className="w-full py-4 text-lg">Отправить заявку</Button>
                    <p className="text-[10px] text-center text-slate-400">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Warning */}
        <section className="py-12 bg-red-50 border-y border-red-100">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 text-red-800">
            <AlertTriangle className="flex-shrink-0 w-6 h-6" />
            <p className="text-sm font-medium">
              <span className="font-bold">Внимание:</span> С 1 мая вступают в силу новые требования СП 484.1311500. Проекты, начатые после этой даты, потребуют на 25% больше согласований. Успейте заказать проект по старым нормам.
            </p>
          </div>
        </section>

        {/* 12. Closing Reminder */}
        <footer className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Cpu className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold tracking-tighter uppercase">
                    АР<span className="text-brand-600">БАТ</span>
                  </span>
                </div>
                <p className="text-slate-400 max-w-md leading-relaxed">
                  Ваш надежный партнер в мире инженерных систем. Мы создаем проекты, которые работают безупречно, экономят ваши деньги и обеспечивают безопасность людей.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Навигация</h4>
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Портфолио</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Услуги проектирования</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">BIM-технологии</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Контакты</h4>
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-400 mt-1" />
                    <span>г. Москва, Пресненская наб., 12, Башня Федерация</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-400" />
                    <span>+7 (495) 123-45-67</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-400" />
                    <span>info@arbat.ru</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
              <div>© 2026 ПРОЕКТНАЯ ОРГАНИЗАЦИЯ АРБАТ. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
