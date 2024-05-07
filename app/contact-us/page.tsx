// import { AuthenticationForm } from '@/components/AuthenticationForm/AuthenticationForm';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { FaqWithImage } from '@/components/FaqWithImage/FaqWithImage';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Container size={'xl'}>
        <ContactForm />
        <FaqWithImage />
      </Container>
    </>
  );
}
