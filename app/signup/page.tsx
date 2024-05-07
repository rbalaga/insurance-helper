import { AuthenticationForm } from '@/components/AuthenticationForm/AuthenticationForm';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Container size={'xl'}>
        <Container size={'xs'}>
          <AuthenticationForm authType='signup' />
        </Container>
      </Container>
    </>
  );
}
