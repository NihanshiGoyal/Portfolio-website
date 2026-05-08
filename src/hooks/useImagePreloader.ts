import { useEffect, useState } from 'react';

export const useImagePreloader = (imageSources: string[]) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalCount = imageSources.length;

    if (totalCount === 0) {
      setLoading(false);
      return;
    }

    const loadedImages = imageSources.map((src) => {
      const img = new Image();
      img.src = src;
      const onImageLoad = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / totalCount) * 100));
        if (loadedCount === totalCount) {
          setLoading(false);
        }
      };
      img.onload = onImageLoad;
      img.onerror = onImageLoad; // Continue even if an image fails
      return img;
    });

    setImages(loadedImages);
  }, [imageSources]);

  return { images, loading, progress };
};
