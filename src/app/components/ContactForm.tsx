import { useState, useRef } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const formRef = useRef<HTMLFormElement>(null);

  const clearError = (fieldName: string) => {
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[fieldName];
        return newErrors;
      });
    }
    if (result && result.includes("خطأ")) {
      setResult("");
    }
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: {[key: string]: string} = {};

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim() === '') {
      newErrors.name = 'الرجاء إدخال الاسم';
    }

    if (!email || email.trim() === '') {
      newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
    }

    if (!message || message.trim() === '') {
      newErrors.message = 'الرجاء كتابة رسالتك';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setResult("جاري الإرسال...");
    formData.append("access_key", "568a0e67-7a2e-4756-8ad6-8e0d2d090356");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setResult("حدث خطأ، يرجى المحاولة مرة أخرى");
      }
    } catch (error) {
      setResult("حدث خطأ، يرجى المحاولة مرة أخرى");
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-[#0d5345] mb-2">الاسم <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={() => clearError('name')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-[#0d5345]/20 focus:border-[#0d5345] focus:ring-[#0d5345]/20'
          } focus:ring-2 outline-none transition-all`}
          placeholder="أدخل اسمك الكامل"
        />
        {errors.name && (
          <div className="mt-2 flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-[#0d5345] mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={() => clearError('email')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-[#0d5345]/20 focus:border-[#0d5345] focus:ring-[#0d5345]/20'
          } focus:ring-2 outline-none transition-all`}
          placeholder="example@email.com"
        />
        {errors.email && (
          <div className="mt-2 flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{errors.email}</span>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-[#0d5345] mb-2">رقم الجوال (اختياري)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-[#0d5345]/20 focus:border-[#0d5345] focus:ring-2 focus:ring-[#0d5345]/20 outline-none transition-all"
          placeholder="+966 XX XXX XXXX"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#0d5345] mb-2">الرسالة <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          onChange={() => clearError('message')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-[#0d5345]/20 focus:border-[#0d5345] focus:ring-[#0d5345]/20'
          } focus:ring-2 outline-none transition-all resize-none`}
          placeholder="اكتب رسالتك هنا..."
        ></textarea>
        {errors.message && (
          <div className="mt-2 flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg border border-red-200">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{errors.message}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-br from-[#0f6550] to-[#0d5345] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
      >
        إرسال الرسالة
      </button>

      {result && (
        <div className={`flex items-center gap-3 p-4 rounded-lg ${
          result.includes("نجاح")
            ? "bg-green-50 text-green-700 border border-green-200"
            : result.includes("خطأ")
            ? "bg-red-50 text-red-700 border border-red-200"
            : "bg-blue-50 text-blue-700 border border-blue-200"
        }`}>
          {result.includes("نجاح") && (
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {result.includes("خطأ") && (
            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          {result.includes("جاري") && (
            <svg className="w-6 h-6 flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          <span className="flex-1">{result}</span>
        </div>
      )}
    </form>
  );
}
