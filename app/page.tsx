import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Welcome />
      <ColorSchemeToggle />
      <FeaturesCards />
      <FooterLinks />
    </>
  );
}
