import { useState } from 'react';

import { Box } from '@mui/material';

import { Header } from '@/layouts/header';
import { type IHeaderProps } from '@/layouts/header/types';

import { Product } from './product/product';
import { PurchasingPart } from './purchasing-part/purchasing-part';
import { ManufacturingPart } from './manufacturing-part/manufacturing-part';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleChange(_event: React.SyntheticEvent, newValue: number): void {
    setSelectedTab(newValue);
  }

  const headerProps: IHeaderProps = {
    title: 'Material',
    tabs: [
      { label: 'Product', component: <Product /> },
      { label: 'Manufacturing part', component: <ManufacturingPart /> },
      { label: 'Purchasing part', component: <PurchasingPart /> },
    ],
    selectedTab,
    handleChange,
  };

  return (
    <Box className={classes.wrapper}>
      <Header {...headerProps} />
    </Box>
  );
}
