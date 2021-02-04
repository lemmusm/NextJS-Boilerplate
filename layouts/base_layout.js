import Header from '../components/header';
import Footer from '../components/footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
