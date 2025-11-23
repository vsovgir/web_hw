import { useState, useRef } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Cards from './components/Cards/Cards';
import Feedback from './components/Feedback/Feedback';
import Modal from './components/Modal/Modal';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import ExhibitsPage from './components/ExhibitsPage/ExhibitsPage';
import FactsPage from './components/FactsPage/FactsPage';
import './index.css';

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [page, setPage] = useState('home'); 
  const goToPage = (nextPage) => {
    setPage(nextPage);
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }
  };

  const statsRef = useRef(null);
  const exhibitsRef = useRef(null);
  const employeesRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleOpenModal = (content) => setModalContent(content);
  const handleCloseModal = () => setModalContent(null);

  const goHome = () => goToPage('home');

  if (page === 'exhibits') {
    return (
      <>
        <Header onBack={goHome} />
        <main id="content" role="main">
          <ExhibitsPage onOpenModal={handleOpenModal} />
        </main>
        <ScrollToTopButton />
        {modalContent && <Modal content={modalContent} onClose={handleCloseModal} />}
      </>
    );
  }

    if (page === 'facts') {
    return (
      <>
        <Header onBack={goHome} />
        <main id="content" role="main">
          <FactsPage />
        </main>
        <ScrollToTopButton />
        {modalContent && <Modal content={modalContent} onClose={handleCloseModal} />}
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="content" role="main">
        <Intro
          onScrollToFacts={() => statsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onScrollToExhibits={() => exhibitsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onScrollToEmployees={() => employeesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onScrollToFeedback={() => feedbackRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />

        <section ref={statsRef}>
          <Stats onMoreFacts={() => goToPage('facts')} />
        </section>
        <hr className="rule rule--divider" />

        <section ref={exhibitsRef}>
          <Cards
            title="Экспонаты"
            type="exhibits"
            onOpenModal={handleOpenModal}
            onMoreExhibits={() => goToPage('exhibits')}
          />
        </section>
        <hr className="rule rule--divider" />

        <section ref={employeesRef}>
          <Cards title="Сотрудники" type="employees" onOpenModal={handleOpenModal} />
        </section>
        <hr className="rule rule--divider" />

        <section ref={feedbackRef}>
          <Feedback title="Отзывы" type="reviews" onOpenModal={handleOpenModal} />
        </section>

        <hr className="rule rule--divider" />
      </main>

      <ScrollToTopButton />
      {modalContent && <Modal content={modalContent} onClose={handleCloseModal} />}
    </>
  );
}

export default App;

