import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material';
import type React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationLinks from './NavigationLinks';
import ThemeSwitcher from './ThemeSwitcher';

interface LayoutProps {
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ mode, onToggleTheme }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            {/*<Typography variant="h1" component="h1" sx={{ mb: 0.5 }}>*/}
            {/*  LiGre Query Interface*/}
            {/*</Typography>*/}
            <NavigationLinks />
          </Box>
          <ThemeSwitcher mode={mode} onToggleTheme={onToggleTheme} />
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 3,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ opacity: 0.8 }}
          >
            LiGre is developed at Ghent University. Source and toolkit on{' '}
            <Link
              href="https://github.com/LiGre-LOD"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              GitHub
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
