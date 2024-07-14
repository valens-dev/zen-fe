import { Box, Typography } from '@mui/material';

interface ISectionHeaderProps {
  title: string;
  actions: React.ReactNode;
}

export function SctionHeader({
  title,
  actions,
}: ISectionHeaderProps): React.ReactNode {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>{actions}</Box>
    </Box>
  );
}
