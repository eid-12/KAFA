import { useEffect } from 'react';
import { Droplet, Leaf, MapPin, Gift, TrendingUp, Users, Target, Shield, Award, Send } from 'lucide-react';
import logo from '../imports/kafa-transparent-logo_(1)-1.png';
import ContactForm from './components/ContactForm';

export default function App() {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logo;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Set page title
    document.title = 'كفى - الحل الرقمي لإدارة النفايات الدوائية';
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#0d5345]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="كفى" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#0d5345] hover:text-[#0a4033] transition-colors">عن المنصة</a>
              <a href="#how-it-works" className="text-[#0d5345] hover:text-[#0a4033] transition-colors">كيف يعمل</a>
              <a href="#partners" className="text-[#0d5345] hover:text-[#0a4033] transition-colors">شركاؤنا</a>
              <a href="#contact" className="text-[#0d5345] hover:text-[#0a4033] transition-colors">تواصل معنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f6550] via-[#0d5345] to-[#0a4033]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-full mb-6 shadow-lg">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">نحمي بيئتك لنصون صحتك</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
                كفى: الحل الرقمي المفقود لإدارة النفايات الدوائية
              </h1>
              <p className="text-xl mb-8 text-white leading-relaxed">
                مشروع طموح لبناء أول منصة سعودية متكاملة للتخلص الآمن من الأدوية - رؤية نحو مستقبل أكثر استدامة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-[#0d5345] px-8 py-4 rounded-xl font-bold hover:bg-white/95 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 text-center">
                  انضم لرؤيتنا
                </a>
                <a href="#contact" className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-all shadow-xl text-center">
                  تواصل معنا
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-2xl">
                <img src={logo} alt="كفى شعار" className="w-full max-w-md mx-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - الرؤية */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">التحدي الذي نواجهه</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مشكلة النفايات الدوائية في المملكة تحتاج إلى حل رقمي شامل
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-[#0d5345]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#0d5345]" />
              </div>
              <h3 className="text-2xl text-[#0d5345] mb-3">هدر دوائي ضخم</h3>
              <p className="text-gray-600">مليارات الريالات تُهدر سنوياً بسبب سوء إدارة الأدوية والتخلص غير المنظم منها</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-[#0d5345]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#0d5345]" />
              </div>
              <h3 className="text-2xl text-[#0d5345] mb-3">احتفاظ عشوائي</h3>
              <p className="text-gray-600">نسبة كبيرة من الأسر السعودية تحتفظ بأدوية فائضة أو منتهية الصلاحية دون معرفة بمخاطرها</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-[#0d5345]/10 rounded-full flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-[#0d5345]" />
              </div>
              <h3 className="text-2xl text-[#0d5345] mb-3">تهديد بيئي</h3>
              <p className="text-gray-600">التخلص العشوائي يُلوث المياه الجوفية والتربة ويزيد مقاومة المضادات الحيوية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - ماذا سيفعل كفى */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0d5345]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm text-[#0d5345]">الرؤية التقنية للمشروع</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">ماذا سيفعل كفى؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              أول منصة سعودية تربط بين المريض والصيدلية والمنظومة الصحية لمتابعة مسار الدواء حتى لحظة التخلص منه
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 border border-[#0d5345]/10 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#0d5345] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">أتمتة إدارة الأدوية المنزلية</h3>
              <p className="text-gray-700 leading-relaxed">
                سيوفر التطبيق "خزانة رقمية" تتيح للمستخدمين تسجيل أدويتهم ومتابعة تواريخ صلاحيتها بشكل آلي
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 border border-[#0d5345]/10 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#0d5345] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">بناء جسر رقمي</h3>
              <p className="text-gray-700 leading-relaxed">
                نطمح للتكامل مع منصة "وصفتي" الوطنية لربط سلس بين المريض والصيدلية والمنظومة الصحية
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 border border-[#0d5345]/10 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#0d5345] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">تسهيل الوصول لنقاط التخلص</h3>
              <p className="text-gray-700 leading-relaxed">
                سيعمل النظام على توفير خريطة تفاعلية ترشد المستخدمين إلى أقرب المواقع المعتمدة للتخلص الآمن من الأدوية
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 border border-[#0d5345]/10 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#0d5345] rounded-2xl flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">تحفيز الوعي البيئي</h3>
              <p className="text-gray-700 leading-relaxed">
                ستعتمد المنصة على تحويل "التخلص الآمن" إلى سلوك إيجابي من خلال نظام حوافز يمنح المستخدمين نقاطاً ومكافآت
              </p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 border border-[#0d5345]/10 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#0d5345] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-[#0d5345] mb-3">دعم الاقتصاد الدائري</h3>
                  <p className="text-gray-700 leading-relaxed">
                    تسعى المنصة لتقليل التلوث البيئي الناتج عن التخلص العشوائي، مع رؤية لتحويل النفايات الدوائية إلى مواد خام يمكن الاستفادة منها صناعياً
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto shadow-2xl">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-100" />
            <h3 className="text-2xl md:text-3xl mb-4 font-medium">حماية البيئة والصحة العامة</h3>
            <p className="text-lg text-white leading-relaxed mb-6">
              منع تسرب المواد الكيميائية للمياه الجوفية والتربة، والمساهمة في تقليل مخاطر مقاومة المضادات الحيوية
            </p>
            <div className="pt-8 border-t border-white/40">
              <p className="text-xl md:text-2xl leading-relaxed">
                نحول عملية التخلص من الدواء من <span className="inline-block bg-white/40 px-4 py-2 rounded-lg text-white font-bold mx-1">عبء بيئي وصحي</span> إلى <span className="inline-block bg-white/40 px-4 py-2 rounded-lg text-white font-bold mx-1">تجربة رقمية سهلة ومجزية</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">كيف يعمل التطبيق</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              رحلة بسيطة وآمنة للتخلص من الأدوية المنتهية الصلاحية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="w-12 h-12 bg-white text-[#0d5345] rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-lg">1</div>
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 font-medium">تكامل مع "وصفتي"</h3>
                <p className="text-white/90">نطمح للتكامل مع نظام وصفتي الوطني لتتبع الأدوية</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="w-12 h-12 bg-white text-[#0d5345] rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-lg">2</div>
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3 font-medium">مسح الباركود</h3>
                <p className="text-white/90">مسح باركود الدواء يدوياً للتعرف عليه وتسجيله</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="w-12 h-12 bg-white text-[#0d5345] rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-lg">3</div>
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 font-medium">الخريطة الخضراء</h3>
                <p className="text-white/90">تحديد أقرب نقطة تخلص آمنة عبر خريطة تفاعلية</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="w-12 h-12 bg-white text-[#0d5345] rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-lg">4</div>
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 font-medium">نقاط ومكافآت</h3>
                <p className="text-white/90">احصل على مكافآت مثل قهوة مجانية وقسائم أمازون</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0d5345]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm text-[#0d5345]">نبني المستقبل معاً</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">شركاؤنا المستقبليون</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نسعى للشراكة مع الجهات الحكومية والشركات الرائدة لتحقيق رؤية مستدامة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'وزارة الصحة', icon: Shield, desc: 'الإشراف الصحي' },
              { name: 'الهيئة العامة للغذاء والدواء', icon: Award, desc: 'الرقابة الدوائية' },
              { name: 'نوبكو', icon: Leaf, desc: 'إدارة النفايات' },
              { name: 'موانئ', icon: Target, desc: 'الخدمات اللوجستية' }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center border-2 border-[#0d5345]/10 hover:border-[#0d5345]/30">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0d5345] to-[#0a4033] rounded-full flex items-center justify-center mx-auto mb-4">
                  <partner.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg text-[#0d5345] mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0d5345]/5 to-[#0a4033]/5 rounded-2xl p-8 md:p-12 border border-[#0d5345]/20 text-center">
            <h3 className="text-2xl text-[#0d5345] mb-4">بالإضافة إلى الصيدليات الكبرى</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              نستهدف التعاون مع شبكات الصيدليات الرائدة في المملكة لتكون نقاط التخلص الآمن في متناول الجميع
            </p>
          </div>
        </div>
      </section>

      {/* Tech Features & Vision 2030 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">لماذا كفى؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مشروع استراتيجي يتماشى مع طموحات المملكة نحو الاستدامة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d5345] to-[#0a4033] rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">أول محرك في السوق</h3>
              <p className="text-gray-600 leading-relaxed">فرصة فريدة لريادة سوق إدارة النفايات الدوائية بدون منافس مباشر في المملكة</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d5345] to-[#0a4033] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">متوافق مع رؤية 2030</h3>
              <p className="text-gray-600 leading-relaxed">يدعم المبادرة السعودية الخضراء وأهداف التحول الرقمي في القطاع الصحي</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0d5345]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d5345] to-[#0a4033] rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0d5345] mb-3">تأثير بيئي مستدام</h3>
              <p className="text-gray-600 leading-relaxed">حماية حقيقية للبيئة والصحة العامة عبر منع التلوث الدوائي والحفاظ على الموارد</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f6550] to-[#0d5345] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4 font-medium">نموذج الاستدامة المالية</h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                خطة متكاملة لضمان استدامة المشروع واستمراريته
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">72%</div>
                  <div className="text-lg text-white">رسوم خدمات المنصة</div>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-white rounded-full h-3 shadow-lg" style={{width: '72%'}}></div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">14%</div>
                  <div className="text-lg text-white">بيانات ESG والتقارير</div>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-white rounded-full h-3 shadow-lg" style={{width: '14%'}}></div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">14%</div>
                  <div className="text-lg text-white">بيع المواد الخام</div>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-white rounded-full h-3 shadow-lg" style={{width: '14%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section للمستثمرين والشركاء */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f6550] via-[#0d5345] to-[#0a4033]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-medium">مشروع في مرحلة MVP - فرصة استثمارية فريدة</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-6 leading-tight font-bold">
            كن جزءاً من التغيير
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            ننشئ حالياً النموذج الأولي للمشروع ونبحث عن شركاء ومستثمرين يؤمنون برؤيتنا نحو بيئة أكثر استدامة
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl mb-2 font-medium text-white">فرصة ريادية</h3>
              <p className="text-white/95">كن أول المستثمرين في السوق الواعد</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl mb-2 font-medium text-white">تأثير مستدام</h3>
              <p className="text-white/95">استثمار يخدم البيئة والمجتمع</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl mb-2 font-medium text-white">نمو مضمون</h3>
              <p className="text-white/95">سوق ضخم بحاجة ملحة للحلول</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-[#0d5345] px-8 py-4 rounded-xl font-bold hover:bg-white/95 transition-all shadow-2xl transform hover:scale-105 text-center">
              للمستثمرين - تواصل معنا
            </a>
            <a href="#contact" className="bg-white/20 backdrop-blur-md border-2 border-white/40 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-all shadow-xl text-white text-center">
              للشراكات الاستراتيجية
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0d5345]/10 px-4 py-2 rounded-full mb-4">
              <Send className="w-5 h-5 text-[#0d5345]" />
              <span className="text-sm text-[#0d5345] font-medium">تواصل معنا</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0d5345] mb-4">هل لديك استفسار أو اقتراح؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع أسئلتك. سواء كنت مستثمراً أو شريكاً محتملاً، لا تتردد في التواصل معنا
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-[#0d5345]/10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d5345] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img src={logo} alt="كفى" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/80 mb-4">نحو مستقبل أكثر نظافة واستدامة</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/eid-rawaf-alrashidi-09b260256" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">عن المنصة</a></li>
                <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">كيف يعمل</a></li>
                <li><a href="#partners" className="text-white/80 hover:text-white transition-colors">شركاؤنا</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-white/80">
                <li className="lowercase">eid.rawwaf@gmail.com</li>
                <li className="text-right">‎+966 53 195 7455</li>
                <li className="text-sm">للاستفسارات والشراكات</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="text-center mb-4">
              <p className="text-2xl mb-2">نحو مستقبل أكثر نظافة</p>
              <p className="text-white/60 text-sm">مشروع كفى - في مرحلة التأسيس والتطوير</p>
            </div>
            <p className="text-white/80 text-center text-sm">© 2026 كفى - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}