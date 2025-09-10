"use client";

import { useEffect } from 'react';

export function MobileScrollOptimizer() {
  useEffect(() => {
    // Detectar si estamos en un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile || isTouchDevice) {
      // Optimizaciones específicas para dispositivos móviles
      const rootElement = document.documentElement;
      const bodyElement = document.body;

      // Aplicar propiedades CSS dinámicamente
      rootElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
      bodyElement.style.setProperty('overscroll-behavior', 'none');
      bodyElement.style.setProperty('touch-action', 'pan-y');

      if (isIOS) {
        // Optimizaciones específicas para iOS
        bodyElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
        bodyElement.style.setProperty('overscroll-behavior-y', 'none');
        
        // Prevenir zoom en inputs
        const metaViewport = document.querySelector('meta[name="viewport"]');
        if (metaViewport) {
          metaViewport.setAttribute('content', 
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          );
        }
      }

      // Optimizar animaciones para dispositivos con batería baja
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2 || !battery.charging) {
            // Reducir animaciones cuando la batería está baja
            document.body.classList.add('reduce-animations');
            
            // Agregar CSS dinámico para reducir animaciones
            const style = document.createElement('style');
            style.textContent = `
              .reduce-animations .revealFx {
                transition-duration: 0.3s !important;
                filter: none !important;
                mask-image: none !important;
              }
              .reduce-animations .revealFx.hidden {
                opacity: 0.5;
              }
              .reduce-animations .revealFx.revealed {
                opacity: 1;
              }
            `;
            document.head.appendChild(style);
          }
        });
      }

      // Mejorar el rendimiento del scroll
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Aquí se pueden agregar optimizaciones adicionales durante el scroll
            ticking = false;
          });
          ticking = true;
        }
      };

      // Listener para scroll optimizado
      window.addEventListener('scroll', optimizeScroll, { passive: true });
      window.addEventListener('touchmove', optimizeScroll, { passive: true });

      // Cleanup
      return () => {
        window.removeEventListener('scroll', optimizeScroll);
        window.removeEventListener('touchmove', optimizeScroll);
      };
    }
  }, []);

  return null; // Este componente no renderiza nada
}
