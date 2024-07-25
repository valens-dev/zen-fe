import { type PaginationState } from '@tanstack/react-table';
import { useState, type Dispatch, type SetStateAction } from 'react';

interface IUseTableFilters {
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

export function useTableFilters(): IUseTableFilters {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return { pagination, setPagination, globalFilter, setGlobalFilter };
}
