'use client';

import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/constants';

const VAGARO_WIDGET_SRC =
  'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqCJ4tE3CcT3qmV35y6RuQlXiz3avV34mC2PeFJ4mC30m9dSycvCu7gCmjZcoapOUc9CvdfQOapkvdfYQ69WOcW?v=GdgSUhAjnfOAJ28TUmut2LA8saQAQR5G3yKTmyzzW6qG#';

export default function BookingSection({ closingHeadline }: { closingHeadline: string }) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = VAGARO_WIDGET_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <section id="book-now" className="bg-cream py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-copper">
          Book Online
        </p>

        <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
          Schedule Your Visit
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Pick your service and find a time that works for you — powered securely by Vagaro, our real-time booking partner.
        </p>

        <div className="mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
          <div
            id="frameTitle"
            className="embedded-widget-title"
            style={{
              fontSize: '23px',
              color: '#333',
              fontFamily: 'Arial, Helvetica, sans-serif',
              lineHeight: '24px',
              padding: '18px 10px 8px',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          />

          <div
            ref={widgetRef}
            className="vagaro"
            style={{
              width: '250px',
              padding: 0,
              border: 0,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <style>
              {'.vagaro a { font-size: 14px; color: #AAA; text-decoration: none; }'}
            </style>

            <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>{' '}
            <a href="https://www.vagaro.com/pro/salon-software">
              Salon Software
            </a>,{' '}
            <a href="https://www.vagaro.com/pro/spa-software">
              Spa Software
            </a>{' '}
            &{' '}
            <a href="https://www.vagaro.com/pro/fitness-software">
              Fitness Software
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          {closingHeadline}
        </h2>

        <a
          href={SITE.phoneHref}
          className="mt-4 inline-block text-xl font-semibold text-copper-light hover:underline"
        >
          {SITE.phone}
        </a>
      </section>
    </>
  );
}
