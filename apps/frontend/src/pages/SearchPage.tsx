import { Container } from '@mui/material';
import type React from 'react';
import Search from '../components/Search';

const SearchPage: React.FC = () => {
  return (
    <Container component="section" sx={{ py: 4, maxWidth: 'lg' }}>
      <Search />
    </Container>
  );
};

export default SearchPage;
