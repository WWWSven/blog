'use client';

import { useRef, useEffect, useState } from 'react';
 
 
export function Svg({ source }: { source: string }) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [svg, setSvg] = useState('');
  useEffect(() => {
    if (containerRef.current && source) {
        const styledSource = source.replace(/(<svg[^>]*)/, '$1 style="max-width: 100%; height: auto;"');
        setSvg(styledSource)
    }
  }, [source, containerRef]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: svg }} />;
}

