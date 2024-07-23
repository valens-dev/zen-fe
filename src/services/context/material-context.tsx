import {
  useState,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
} from 'react';

import { DEFAULT_TYPE } from '@/services/constants';
import { getMaterials } from '@/services/material-service';
import { type IProduct, type IApiParams } from '@/services/types/material-api';

interface IMaterialContext {
  materials: IProduct[];
  totalPages: number;
  fetchMaterials: (params: IApiParams) => void;
}

const MaterialContext = createContext<IMaterialContext | undefined>(undefined);

export function useMaterialContext(): IMaterialContext {
  const context = useContext(MaterialContext);
  if (!context) {
    throw new Error(
      'useMaterialContext must be used within a MaterialProvider',
    );
  }
  return context;
}

export function MaterialProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [materials, setMaterials] = useState<IProduct[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [params, setParams] = useState<IApiParams>({ type: DEFAULT_TYPE });

  async function fetchMaterials(newParams: IApiParams): Promise<void> {
    try {
      const data = await getMaterials(newParams);
      setMaterials(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching materials:', error);
    }
  }

  useEffect(() => {
    void fetchMaterials(params);
  }, [params]);

  function updateParams(newParams: IApiParams): void {
    setParams((prevParams) => {
      const updatedParams = { ...prevParams, ...newParams };
      void fetchMaterials(updatedParams);
      return updatedParams;
    });
  }

  return (
    <MaterialContext.Provider
      value={{ materials, totalPages, fetchMaterials: updateParams }}
    >
      {children}
    </MaterialContext.Provider>
  );
}
