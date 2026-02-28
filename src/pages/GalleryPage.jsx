import { useState, useCallback, useEffect } from 'react';
import { galleryImages } from '../data/galleryData';

export function GalleryPage() {
    const [lightbox, setLightbox] = useState(null);
    const [loaded, setLoaded] = useState({});

    const openLightbox = useCallback((idx) => setLightbox(idx), []);
    const closeLightbox = useCallback(() => setLightbox(null), []);

    const goNext = useCallback(() => {
        setLightbox((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const goPrev = useCallback(() => {
        setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (lightbox === null) return;
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightbox, goNext, goPrev, closeLightbox]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = lightbox !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightbox]);

    const handleImgLoad = (id) => setLoaded((prev) => ({ ...prev, [id]: true }));

    return (
        <div className="bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat relative w-full flex flex-col hero-gradient overflow-x-hidden">

            {/* ── Header ── */}
            <div className="gallery-header">
                <span className="gallery-badge">Sports Week 2025</span>
                <h1 className="gallery-title font-minecraft-bold">Last Year's Gallery</h1>
                <p className="gallery-sub">
                    Relive the energy, sweat, and glory of Sports Week 2025 — captured in every frame.
                </p>
            </div>

            {/* ── Pinterest Masonry Grid ── */}
            <main className="gallery-main">
                <div className="pinterest-grid">
                    {galleryImages.map((img, idx) => (
                        <div
                            key={img.id}
                            className={`pin-card ${img.span === 'tall' ? 'pin-tall' : 'pin-short'}`}
                            onClick={() => openLightbox(idx)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View ${img.alt}`}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                        >
                            {/* Skeleton shimmer */}
                            {!loaded[img.id] && <div className="pin-skeleton" />}
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className={`pin-img ${loaded[img.id] ? 'pin-img--loaded' : ''}`}
                                onLoad={() => handleImgLoad(img.id)}
                            />
                            <div className="pin-overlay">
                                <span className="pin-label">{img.label}</span>
                                <span className="pin-zoom-icon">⤢</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="border-t border-primary/10 py-8 px-6 text-center text-primary text-sm">
                © 2026 Sports Week · Government Engineering College, Patan
            </footer>

            {/* ── Lightbox ── */}
            {lightbox !== null && (
                <div
                    className="lightbox-backdrop"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    {/* Counter badge */}
                    <div className="lightbox-counter-badge" onClick={(e) => e.stopPropagation()}>
                        {lightbox + 1} / {galleryImages.length}
                    </div>

                    {/* Close */}
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    {/* Prev */}
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    {/* Content */}
                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={galleryImages[lightbox].src}
                            alt={galleryImages[lightbox].alt}
                            className="lightbox-img"
                        />
                        <p className="lightbox-caption font-minecraft">
                            {galleryImages[lightbox].label}
                        </p>
                    </div>

                    {/* Next */}
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
