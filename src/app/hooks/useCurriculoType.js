"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const useCurriculoType = () => {
  const searchParams = useSearchParams();
  const [curriculoType, setCurriculoType] = useState('front');

  useEffect(() => {
    const type = searchParams.get('curriculo');
    if (type === 'sap' || type === 'front') {
      setCurriculoType(type);
    } else {
      setCurriculoType('front');
    }
  }, [searchParams]);

  return curriculoType;
};

export default useCurriculoType;

