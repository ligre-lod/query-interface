import { OpenInNew, Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import type React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      height: '100%',
      border: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ color: 'text.secondary', '& > p': { mb: 2 } }}>{children}</Box>
  </Paper>
);

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 6, md: 10 },
          px: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, letterSpacing: '-0.025em', mb: 2 }}
          >
            LiGre
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            A Lemma Bank for Ancient Greek via Linked Data
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Welcome to the home of LiGre &mdash; Linking Greek.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={RouterLink}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
            >
              Search the Lemma Bank
            </Button>
            <Button
              component={Link}
              href="https://lila-erc.eu/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              endIcon={<OpenInNew />}
            >
              About LiLa
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Sections */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard title="About">
              <p>
                LiGre is a linked open data resource that publishes
                lemmatized Ancient Greek vocabulary as structured,
                interlinked RDF data. Each lemma is modeled using the{' '}
                <Link
                  href="https://www.w3.org/community/ontolex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OntoLex-Lemon
                </Link>{' '}
                vocabulary and the{' '}
                <Link
                  href="https://lila-erc.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LiLa
                </Link>{' '}
                <code>Lemma</code> class, so Ancient Greek lemmas can be
                published, queried, and linked following the same
                conventions as the broader Linked Data knowledge base built
                for Latin by the LiLa project.
              </p>
            </SectionCard>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard title="Data">
              <p>
                The Lemma Bank is exposed as RDF through a SPARQL endpoint,
                and individual lemmas can be browsed as Linked Data
                resources via LodView. Use the query interface to search
                and filter the lemma bank directly.
              </p>
              <Button
                component={RouterLink}
                to="/search"
                variant="text"
                sx={{ px: 0 }}
              >
                Search the Lemma Bank &rarr;
              </Button>
            </SectionCard>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard title="Output">
              <p>
                The design and rationale behind LiGre are described in{' '}
                <em>
                  &ldquo;From Lemmas to Links: A Lemma Bank for Ancient
                  Greek&rdquo;
                </em>
                , Swaelens, C., Mambrini, F., &amp; Passarotti, M. (2026),
                Language Technology for Historical and Ancient Languages
                (LT4HALA), ELRA Language Resources Association.
              </p>
            </SectionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
