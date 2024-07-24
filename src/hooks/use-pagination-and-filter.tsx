import { useState } from 'react';

import { type PaginationState } from '@tanstack/react-table';

interface IUsePaginationAndFilterReturn {
  page: number;
  pageSize: number;
  globalFilter: string;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setGlobalFilter: (filter: string) => void;
  handlePaginationChange: (
    updater: PaginationState | ((old: PaginationState) => PaginationState),
  ) => void;
}

export function usePaginationAndFilter(): IUsePaginationAndFilterReturn {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [globalFilter, setGlobalFilter] = useState<string>('');

  function handlePaginationChange(
    updater: PaginationState | ((old: PaginationState) => PaginationState),
  ): void {
    if (typeof updater === 'function') {
      const newState = updater({ pageIndex: page, pageSize });
      setPage(newState.pageIndex);
      setPageSize(newState.pageSize);
    } else {
      setPage(updater.pageIndex);
      setPageSize(updater.pageSize);
    }
  }

  return {
    page,
    pageSize,
    globalFilter,
    setPage,
    setPageSize,
    setGlobalFilter,
    handlePaginationChange,
  };
}
