import { useState } from 'react'
import { type Lang } from '../App'

interface Props {
  isOpen: boolean
  onClose: () => void
  lang: Lang
}

const t = {
  ENG: {
    title: 'Consultation & Contact',
    subtitle: 'Get in touch with TAV 3D experts for your architectural visualization, 3D mapping, or VR project.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name...',
    phoneLabel: 'Phone / Zalo',
    phonePlaceholder: 'Enter phone number...',
    serviceLabel: 'Service Needed',
    messageLabel: 'Project Details',
    messagePlaceholder: 'Tell us about your project requirements...',
    submitBtn: 'Send Consultation Request',
    successMsg: 'Thank you! We have received your request and will contact you within 2 hours.',
    directContact: 'Direct Hotline & Zalo',
    emailContact: 'Email Support',
    address: 'Ho Chi Minh City, Vietnam',
    workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
  },
  VIE: {
    title: 'Thông Tin Liên Hệ & Tư Vấn',
    subtitle: 'Liên hệ ngay với chuyên gia TAV 3D để nhận tư vấn giải pháp kết xuất 3D, 3D mapping và thực tế ảo VR.',
    nameLabel: 'Họ và Tên',
    namePlaceholder: 'Nhập họ tên của bạn...',
    phoneLabel: 'Số Điện Thoại / Zalo',
    phonePlaceholder: 'Nhập số điện thoại...',
    serviceLabel: 'Dịch Vụ Cần Tư Vấn',
    messageLabel: 'Nội Dung Yêu Cầu',
    messagePlaceholder: 'Mô tả ngắn gọn về dự án của bạn...',
    submitBtn: 'Gửi Yêu Cầu Tư Vấn',
    successMsg: 'Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ tư vấn trong vòng 2 giờ.',
    directContact: 'Hotline & Zalo Trực Tiếp',
    emailContact: 'Email Hỗ Trợ',
    address: 'TP. Hồ Chí Minh, Việt Nam',
    workingHours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
  },
}

const serviceOptions = [
  '3D Rendering & Visuals',
  '3D Projection Mapping',
  '3D Modeling & Architecture',
  'VR / AR Virtual Tour',
  'Commercial / VFX Production',
]

export default function ContactModal({ isOpen, onClose, lang }: Props) {
  const tx = t[lang]
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2800)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 animate-modal-in select-none">
      <div className="relative w-full max-w-[620px] bg-[#0A0A0A] border border-[#FF6B00]/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(255,107,0,0.25)] overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)', filter: 'blur(40px)' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white hover:text-black border border-white/15 flex items-center justify-center transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 mb-3 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-wider">
              TAV 3D CONSULTING
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-2 uppercase">
            {tx.title}
          </h2>
          <p className="text-white/70 text-xs md:text-sm">{tx.subtitle}</p>
        </div>

        {/* Direct Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a
            href="tel:0775315323"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-[#FF6B00]/15 border border-white/10 hover:border-[#FF6B00]/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FF9E00] group-hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-[10px] text-white/50 uppercase">{tx.directContact}</div>
              <div className="font-display font-bold text-white text-sm group-hover:text-[#FF9E00] transition-colors">
                0775 315 323
              </div>
            </div>
          </a>

          <a
            href="mailto:tuantn@tav.vn"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-[#FF6B00]/15 border border-white/10 hover:border-[#FF6B00]/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FF9E00] group-hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-[10px] text-white/50 uppercase">{tx.emailContact}</div>
              <div className="font-display font-bold text-white text-sm group-hover:text-[#FF9E00] transition-colors">
                tuantn@tav.vn
              </div>
            </div>
          </a>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#FF6B00]/20 border border-[#FF6B00] text-center animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-black mx-auto flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-display font-bold text-white text-base mb-1">{tx.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-white/70 mb-1.5">{tx.nameLabel}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={tx.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF6B00] text-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-white/70 mb-1.5">{tx.phoneLabel}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={tx.phonePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF6B00] text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-white/70 mb-1.5">{tx.serviceLabel}</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141414] border border-white/15 focus:border-[#FF6B00] text-white text-sm outline-none transition-colors"
              >
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs text-white/70 mb-1.5">{tx.messageLabel}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={tx.messagePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF6B00] text-white text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-outline w-full py-3.5 rounded-xl text-sm group font-bold"
            >
              <span>{tx.submitBtn}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
