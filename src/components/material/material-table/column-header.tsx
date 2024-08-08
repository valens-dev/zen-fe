import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { FilterRange } from '@/shared/filters/by-range';
import { FilterMaterial } from '@/shared/filters/by-materials';

import IconFilter from '@/assets/icon/filter.svg?react';

interface IColumnHeaderProps {
  title: string;
  filterType: string;
}

export function ColumnHeader({ title, filterType }: IColumnHeaderProps) {
  const [showIcon, setShowIcon] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function applyFilter(filterValue): void {
    throw new Error('Function not implemented.');
  }
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setShowIcon(!showIcon);
    setModalOpen(!modalOpen);
    setAnchorEl(event.currentTarget as HTMLElement);
  }

  return (
    <Box display="flex" alignItems="center">
      <Typography fontSize={14} onClick={handleClick}>
        {title}
      </Typography>
      <IconFilter display={showIcon ? 'block' : 'none'} />
      {filterType === 'range' ? (
        <FilterRange
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setShowIcon(false);
          }}
          setFilterHeight={(filterValue) => {
            return applyFilter(filterValue);
          }}
          title={`Filter by ${title}`}
          anchorEl={anchorEl}
        />
      ) : (
        <Box />
        // <FilterMaterial
        //   open={modalOpen}
        //   onClose={() => {
        //     setModalOpen(false);
        //     setShowIcon(false);
        //   }}
        //   onApply={applyFilter}
        //   title={`Filter by ${title}`}
        //   anchorEl={anchorEl}
        // />
      )}
    </Box>
  );
}
