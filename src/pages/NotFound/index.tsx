import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
      </Container>
    </MainTemplate>
  );
}
