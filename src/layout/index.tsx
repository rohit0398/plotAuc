import { ReactNode } from 'react';

import { Footer, Header } from '@/molecules';

import { Meta } from './Meta';

type IMainProps = {
  meta?: ReactNode;
  nav?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

export default function Layout(props: IMainProps) {
  const { meta, nav, children, footer } = props;

  return (
    <>
      {/* render the sco part */}
      {meta || <Meta title="PLOT AUCTION" description="Grow your business" />}

      {/* render navBar */}
      {nav || <Header />}

      {/* render main section */}
      <section className="">{children}</section>

      {/* render footer */}
      {footer || <Footer />}
    </>
  );
}
