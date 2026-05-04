import React, { useState, useEffect, useRef } from 'react'
import { Phone, Home, Car, Clock, Shield, MapPin, CheckCircle2, Menu, X, Key, Video, Radio, AlertTriangle, Lock, Facebook, Instagram, Mail, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const WhatsAppIcon = ({ size = 24, fill = "currentColor", ...props }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

// Shared Components
import LazyVideo from '@shared/components/LazyVideo'
import ServiceMap from '@shared/components/ServiceMap'
import Portfolio from '@shared/components/Portfolio'
import { BrandsMarquee } from '@shared/components/Marquees'

// Dynamic asset loading for shared components
const brandLogos = import.meta.glob('../assets/images/brands/*.webp', { eager: true });
const galleryPhotos = import.meta.glob('../assets/images/gallery/*.webp', { eager: true });

const brandsList = Object.values(brandLogos).map(mod => mod.default);
const photosList = Object.values(galleryPhotos).map(mod => mod.default);

// Essential static imports
import logo from '../assets/images/ui/hero-logo.jpg'

import heroBg from '../assets/images/ui/background.webp'

import toolsDetail from '../assets/images/gallery/IMG-20250901-WA0044.webp'
import aboutSideImg from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.08.15.webp'
import whyChooseFixing from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.03.19.webp'
import videoMedia from '../assets/videos/video.mp4'
import backgroundVideo from '../assets/videos/background.mp4'
import extraVideo3 from '../assets/videos/WhatsApp Video 2026-03-02 at 17.03.39.mp4'
import extraVideo4 from '../assets/videos/WhatsApp Video 2026-03-02 at 17.03.41.mp4'
import imgEmergency from '../assets/images/ui/howto.webp'
import srv2 from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.08.13.webp'
import srv3 from '../assets/images/gallery/IMG-20250901-WA0016.webp'
import srv4 from '../assets/images/gallery/IMG-20250901-WA0017.webp'
import srv5 from '../assets/images/gallery/IMG-20250901-WA0034.webp'
import keyDuplicationImg from '../assets/images/gallery/key-duplication-service.webp'
import emergencyCase1 from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.08.14 (4).webp'
import card1Img from '../assets/images/gallery/WhatsApp Image 2026-03-02 at 17.06.58.webp'
import card2Img from '../assets/images/gallery/IMG-20250901-WA0020.webp'
import card5Img from '../assets/images/gallery/IMG-20250901-WA0025.webp'
import almoradi from '../assets/images/ui/almoradi.webp'

import { CITIES, slugify } from '@shared/constants/cities'
import { CITY_NEIGHBORHOODS } from '@shared/constants/neighborhoods'

const HomePage = ({ t, i18n, openLegal }) => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [openCity, setOpenCity] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.area-item-wrapper')) {
                setOpenCity(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <header id="inicio" className="hero">
                <div className="hero-container-3d" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <div className="hero-3d-scene">
                        <motion.div
                            className="mesh-gradient"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.80, 0.30]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundImage: `url(${heroBg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
                            }}
                        />
                    </div>

                    <div className="hero-grid">
                        <div className="hero-text">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {t('hero.title1')}<br></br> {t('hero.title2')}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.span
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ color: '#ffdd00', fontWeight: '500', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}
                                >
                                    {t('hero.subtitle_badge')}
                                </motion.span>
                                {t('hero.subtitle_text')}
                            </motion.p>
                        </div>

                        <div className="hero-card-area">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="floating-card"
                            >
                                <div className="card-header">
                                    <div className="avatar">
                                        <img src="/house.png" alt="Chaveiro" />
                                    </div>
                                    <div className="user-info">
                                        <p className="name">{t('hero.card_status')}</p>
                                        <p className="role">{t('hero.card_role')}</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <motion.a
                                        href="tel:+34602659054"
                                        className="phone-link call-btn"
                                        whileInView={{ scale: [1, 1.05, 1] }}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ 
                                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                            type: "spring", stiffness: 400, damping: 10 
                                        }}
                                    >
                                        <Phone fill="currentColor" size={32} />
                                        <span>{t('hero.call_now')}</span>
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/34602659054"
                                        className="phone-link wa-btn"
                                        whileInView={{ scale: [1, 1.05, 1] }}
                                        whileHover={{ scale: 1.1, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ 
                                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                            type: "spring", stiffness: 400, damping: 10 
                                        }}
                                    >
                                        <WhatsAppIcon fill="currentColor" size={20} />
                                        <span>{t('hero.write_us')}</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="emergency-cases container">
                <div className="section-head-v2">
                    <span className="sub-tag">{t('hero.subtitle_badge')}</span>
                    <h2>{t('emergency_cases.title')}</h2>
                    <p>{t('emergency_cases.subtitle')}</p>
                </div>

                <div className="cases-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="case-card"
                    >
                        <div className="case-image">
                            <img src={srv4} alt="New key programming" />
                        </div>
                        <div className="case-info">
                            <h3>{t('emergency_cases.case3_title')}</h3>
                            <p>{t('emergency_cases.case3_desc')}</p>
                            <a href="https://wa.me/34602659054" className="case-link">{t('emergency_cases.btn')}</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="case-card"
                    >
                        <div className="case-image">
                            <img src={srv2} alt="Llave atascada" />
                        </div>
                        <div className="case-info">
                            <h3>{t('emergency_cases.case2_title')}</h3>
                            <p>{t('emergency_cases.case2_desc')}</p>
                            <a href="https://wa.me/34602659054" className="case-link">{t('emergency_cases.btn')}</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="case-card"
                    >
                        <div className="case-image">
                            <img src={emergencyCase1} alt="Car opening" />
                        </div>
                        <div className="case-info">
                            <h3>{t('emergency_cases.case1_title')}</h3>
                            <p>{t('emergency_cases.case1_desc')}</p>
                            <a href="https://wa.me/34602659054" className="case-link">{t('emergency_cases.btn')}</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* High Conversion Sales CTA Banner */}
            <section className="sales-cta-banner">
                <div className="container">
                    <div className="sales-cta-box">
                        <div className="sales-cta-content">
                            <span className="live-indicator">
                                <span className="pulse-dot"></span> {t('sales_cta.live_status')}
                            </span>
                            <h2>{t('sales_cta.title')}</h2>
                            <p>{t('sales_cta.subtitle')}</p>
                        </div>
                        <div className="sales-cta-actions">
                            <motion.a 
                                href="tel:+34602659054" 
                                className="btn-sales-call"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <Phone size={36} /> {t('sales_cta.call_btn')}
                            </motion.a>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-sales-wa"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                            >
                                <WhatsAppIcon size={64} /> {t('sales_cta.wa_btn')}
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre" className="about-split">
                <div className="container about-grid">
                    <div className="about-image-main">
                        <LazyVideo src={backgroundVideo} autoPlay loop muted playsInline className="rounded-40" />
                    </div>
                    <div className="about-content">
                        <span className="sub-tag">{t('about.tag')}</span>
                        <div className="about-title-flex">
                            <h2>{t('about.title')}</h2>
                            <img src={aboutSideImg} alt="Detalle" className="about-side-img" />
                        </div>
                        <p className="about-subtitle">{t('about.subtitle')}</p>
                        <p>
                            {t('about.p1')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>
                    </div>
                </div>
            </section>

            <Portfolio t={t} photos={photosList} />

            {/* Trust-Focused Trust Banner (New Design) */}
            <section className="trust-conversion-banner">
                <div className="container">
                    <div className="trust-banner-card">
                        <div className="trust-banner-text">
                            <span className="trust-tag">
                                <Shield size={18} className="text-white" /> {t('trust_cta.badge')}
                            </span>
                            <h2>{t('trust_cta.title')}</h2>
                            <p>{t('trust_cta.subtitle')}</p>
                        </div>
                        <div className="trust-banner-action" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <motion.a 
                                href="tel:+34602659054" 
                                className="btn-trust-cta"
                                style={{ background: 'var(--brand-yellow)', color: 'black' }}
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <Phone size={30} fill="currentColor" />
                                <span>{t('trust_cta.call_btn')}</span>
                            </motion.a>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-trust-cta"
                                style={{ background: '#25D366', color: 'white' }}
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1, background: '#22c35e' }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                            >
                                <WhatsAppIcon size={64} />
                                <span>{t('trust_cta.wa_btn')}</span>
                                <ChevronRight size={24} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicos" className="services-showcase">
                <div className="container">
                    <div className="showcase-header">
                        <div className="header-left">
                            <span className="sub-tag text-white">{t('services.tag')}</span>
                            <h2 className="text-white">{t('services.title')}</h2>
                            <p className="text-white opacity-80 max-w-2xl mt-4">
                                {t('services.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="showcase-grid">
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card1Img})` }}></div>
                            <div className="service-icon-box">
                                <Home size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.locks_title')}</h3>
                                <p>{t('services.locks_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card2Img})` }}></div>
                            <div className="service-icon-box">
                                <Key size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.auto_title')}</h3>
                                <p>{t('services.auto_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${keyDuplicationImg})` }}></div>
                            <div className="service-icon-box">
                                <CheckCircle2 size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.keys_title')}</h3>
                                <p>{t('services.keys_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${card5Img})` }}></div>
                            <div className="service-icon-box">
                                <Shield size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.emergency_title')}</h3>
                                <p>{t('services.emergency_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${imgEmergency})` }}></div>
                            <div className="service-icon-box">
                                <Clock size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.access_title')}</h3>
                                <p>{t('services.access_desc')}</p>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="service-bg" style={{ backgroundImage: `url(${srv5})` }}></div>
                            <div className="service-icon-box">
                                <Lock size={40} />
                            </div>
                            <div className="card-overlay">
                                <h3>{t('services.vehicle_locks_title')}</h3>
                                <p>{t('services.vehicle_locks_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Context Call to Action for Residential */}
            <section className="tech-cta-banner" style={{ padding: '40px 0', background: '#ffffff' }}>
                <div className="container">
                    <div style={{ background: '#0c0c0c', borderRadius: '40px', padding: '50px 30px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.3)' }}>
                        <h2 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '2.5rem' }}>{t('inline_cta1.title')}</h2>
                        <p style={{ color: '#a0a0a0', marginBottom: '35px', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 35px' }}>{t('inline_cta1.subtitle')}</p>
                        <motion.a 
                            href="https://wa.me/34602659054" 
                            style={{ 
                                background: '#ffdd00', 
                                color: '#000000', 
                                padding: '18px 45px', 
                                borderRadius: '50px', 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                fontWeight: '700',
                                fontSize: '1.2rem',
                                textDecoration: 'none',
                                boxShadow: '0 10px 30px rgba(255, 221, 0, 0.25)' 
                            }}
                            whileInView={{ scale: [1, 1.05, 1] }}
                            whileHover={{ scale: 1.1, background: '#ffffff', color: '#000000' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ 
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <WhatsAppIcon size={64} fill="currentColor" /> {t('inline_cta1.btn')}
                        </motion.a>
                    </div>
                </div>
            </section>

            <section className="why-choose container">
                <div className="section-center-header">
                    <span className="sub-tag">{t('why_choose.tag')}</span>
                    <h2>{t('why_choose.title')}</h2>
                    <p>{t('why_choose.desc')}</p>
                </div>

                <div className="why-grid-three">
                    <div className="why-col" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="feature-card-overlap">
                            <LazyVideo
                                src={extraVideo4}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="overlap-vid"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }}
                            />
                            <div className="overlap-content">
                                <h3>{t('why_choose.col1_title')}</h3>
                                <p>{t('why_choose.col1_desc')}</p>
                            </div>
                        </div>
                        <div className="how-title-v2" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
                            <span className="sub-tag" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{t('why_choose.how_tag')}</span>
                            <h2 style={{ fontSize: '2.8rem', lineHeight: '1.1', color: '#0c0c0c', marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t('why_choose.how_title') }}></h2>
                        </div>
                    </div>

                    <div className="why-col">
                        <LazyVideo
                            src={extraVideo3}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="full-height-img"
                        />
                    </div>

                    <div className="why-col">
                        <div className="feature-card-feature">
                            <span className="big-percent">{t('why_choose.col3_percent')}</span>
                            <p>{t('why_choose.col3_desc')}</p>
                            <img src={whyChooseFixing} alt="Profissional chaveiro" className="card-inner-img" />
                            <a href="tel:+34602659054" className="btn-vibe-green">{t('why_choose.btn_call')}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works container" style={{ paddingTop: '2rem' }}>
                <div className="how-layout-grid">
                    <div className="how-visual-v2">
                        <img src={toolsDetail} alt="Expertise" className="rounded-large" />
                    </div>
                    <div className="how-steps-v2">
                        <div className="step-v2">
                            <div className="step-num">01</div>
                            <div className="step-info">
                                <h3>{t('steps.step1_title')}</h3>
                                <p>{t('steps.step1_desc')}</p>
                            </div>
                        </div>
                        <div className="step-v2">
                            <div className="step-num">02</div>
                            <div className="step-info">
                                <h3>{t('steps.step2_title')}</h3>
                                <p>{t('steps.step2_desc')}</p>
                            </div>
                        </div>
                        <div className="step-v2">
                            <div className="step-num">03</div>
                            <div className="step-info">
                                <h3>{t('steps.step3_title')}</h3>
                                <p>{t('steps.step3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-v4">
                <div className="container">
                    <div className="faq-grid-v4">
                        <div className="faq-left-v4">
                            <span className="sub-tag">{t('faq.tag')}</span>
                            <h2>{t('faq.title')}</h2>
                            <img src="/logo-faq.jpg?v=2" alt="Locksmith Solutions" className="faq-logo-v4" />
                        </div>
                        <div className="faq-accordion-v4">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div 
                                    key={num} 
                                    className={`faq-item-v4 ${activeFaq === num ? 'active' : ''}`}
                                    onClick={() => setActiveFaq(activeFaq === num ? null : num)}
                                >
                                    <div className="faq-header-v4">
                                        <div className="faq-q-text">
                                            <span className="faq-index">0{num}</span>
                                            <h3>{t(`faq.q${num}`)}</h3>
                                        </div>
                                        <div className="faq-icon-v4">
                                            {activeFaq === num ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {activeFaq === num && (
                                            <motion.div 
                                                className="faq-answer-v4"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <p>{t(`faq.a${num}`)}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials container">
                <div className="section-head-split">
                    <div>
                        <span className="sub-tag">{t('testimonials.tag')}</span>
                        <h2>{t('testimonials.title')}</h2>
                    </div>
                    <div className="avatars-group">
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#4285F4' }}>AS</div>
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#DB4437' }}>MR</div>
                        <div className="sm-avatar initials-avatar" style={{ backgroundColor: '#F4B400' }}>MH</div>
                        <p className="avatar-text">{t('testimonials.desc')}</p>
                    </div>
                </div>

                <div className="testi-grid">
                    <div className="testi-card">
                        <div className="quote-mark">"</div>
                        <p className="testi-text">"{t('testimonials.t1_text')}"</p>
                        <div className="stars">★★★★★</div>
                        <div className="testi-author">
                            <div>
                                <h4>ALEXANDRE SILVA</h4>
                                <span>{t('testimonials.client')}</span>
                            </div>
                            <div className="initials-avatar" style={{ backgroundColor: '#4285F4' }}>AS</div>
                        </div>
                    </div>
                    <div className="testi-card">
                        <div className="quote-mark">"</div>
                        <p className="testi-text">"{t('testimonials.t2_text')}"</p>
                        <div className="stars">★★★★★</div>
                        <div className="testi-author">
                            <div>
                                <h4>Martina Rodriguez</h4>
                                <span>{t('testimonials.client')}</span>
                            </div>
                            <div className="initials-avatar" style={{ backgroundColor: '#DB4437' }}>MR</div>
                        </div>
                    </div>
                    <div className="testi-card">
                        <div className="quote-mark">"</div>
                        <p className="testi-text">"{t('testimonials.t3_text')}"</p>
                        <div className="stars">★★★★★</div>
                        <div className="testi-author">
                            <div>
                                <h4>Miguel Hernán</h4>
                                <span>{t('testimonials.client')}</span>
                            </div>
                            <div className="initials-avatar" style={{ backgroundColor: '#F4B400' }}>MH</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <div className="cta-box">
                        <div className="cta-banner-content">
                            <span className="sub-tag text-green">{t('cta.tag')}</span>
                            <h2 dangerouslySetInnerHTML={{ __html: t('cta.title') }}></h2>
                            <motion.a 
                                href="https://wa.me/34602659054" 
                                className="btn-dark-cta" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileInView={{ scale: [1, 1.05, 1] }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <span className="btn-icon"><WhatsAppIcon fill="currentColor" size={24} /></span> +34 602 659 054
                            </motion.a>
                        </div>
                        <div className="cta-banner-img">
                            <img src={srv5} alt="Lock Inspection" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="zonas" className="service-areas-section">
                <div className="container">
                    <div className="areas-split-layout">
                        <div className="areas-visual-left">
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                src={almoradi}
                                alt="Almoradi Service"
                                className="almoradi-img-large"
                            />
                        </div>

                        <div className="areas-content-right">
                            <div className="areas-header-v3">
                                <span className="sub-tag">{t('areas.tag')}</span>
                                <h2>{t('areas.title')}</h2>
                                <p>{t('areas.desc')}</p>
                            </div>

                            <div className="areas-grid-compact">
                                {CITIES.map((name, index) => {
                                    const neighborhoods = CITY_NEIGHBORHOODS[name];
                                    const isOpen = openCity === name;
                                    const hasNeighborhoods = neighborhoods && neighborhoods.length > 0;

                                    return (
                                        <div
                                            key={index}
                                            className="area-item-wrapper"
                                            style={{ position: 'relative' }}
                                            onMouseEnter={() => setOpenCity(name)}
                                            onMouseLeave={() => setOpenCity(null)}
                                        >
                                            {hasNeighborhoods ? (
                                                <div className={`area-pill-compact ${isOpen ? 'is-open' : ''}`} style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                                                    <Link to={`/cerrajero-${slugify(name)}`} style={{ color: 'inherit', textShadow: 'none', border: 'none', background: 'none', flex: 1, padding: '0px', textAlign: 'left', fontWeight: '500' }}>
                                                        {name}
                                                    </Link>
                                                    <div
                                                        style={{ cursor: 'pointer', paddingLeft: '8px', display: 'flex', alignItems: 'center' }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setOpenCity(isOpen ? null : name);
                                                        }}
                                                    >
                                                        <ChevronDown size={14} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={`/cerrajero-${slugify(name)}`} className="area-pill-compact">
                                                    {name}
                                                </Link>
                                            )}

                                            <AnimatePresence>
                                                {isOpen && neighborhoods && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        className="neighborhoods-dropdown"
                                                    >
                                                        <div className="dropdown-arrow" />
                                                        <div className="mobile-dropdown-header">
                                                            <span>{name}</span>
                                                            <button
                                                                className="close-dropdown-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setOpenCity(null);
                                                                }}
                                                            >
                                                                <X size={20} />
                                                            </button>
                                                        </div>
                                                        <div className="dropdown-content">
                                                            {neighborhoods.map((n, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to={`/cerrajero-${slugify(name)}?barrio=${encodeURIComponent(n)}`}
                                                                    className="neighborhood-dropdown-item"
                                                                    onClick={() => setOpenCity(null)}
                                                                >
                                                                    {n}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="location-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="location-content"
                    >
                        <div className="location-info-card">
                            <span className="sub-tag">{t('location.tag')}</span>
                            <h2 className="location-title">{t('location.title')}</h2>
                            <div className="address-box">
                                <div className="address-icon">
                                    <MapPin size={24} />
                                </div>
                                <p className="location-address">{t('location.address_title')}<br />C. Pico Lobo, 7A, 03189 Orihuela, Alicante</p>
                            </div>
                        </div>

                        <div className="map-wrapper">
                            <div className="map-container">
                                <ServiceMap />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BrandsMarquee t={t} brandsList={brandsList} />
        </>
    )
}

export default HomePage
