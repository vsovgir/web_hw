import { useState, useRef } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Cards from './components/Cards/Cards';
import Feedback from './components/Feedback/Feedback';
import Modal from './components/Modal/Modal';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import './index.css';

function App() {
  const [modalContent, setModalContent] = useState(null);

  const statsRef = useRef(null);
  const exhibitsRef = useRef(null);
  const employeesRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleOpenModal = (content) => setModalContent(content);
  const handleCloseModal = () => setModalContent(null);

  return (
    <>
      <Header />
      <main id="content" role="main">
        <Intro
          onScrollToFacts={() => statsRef.current.scrollIntoView({ behavior: 'smooth' })}
          onScrollToExhibits={() => exhibitsRef.current.scrollIntoView({ behavior: 'smooth' })}
          onScrollToEmployees={() => employeesRef.current.scrollIntoView({ behavior: 'smooth' })}
          onScrollToFeedback={() => feedbackRef.current.scrollIntoView({ behavior: 'smooth' })}
        />

        <section ref={statsRef}>
          <Stats />
        </section>
        <hr className="rule rule--divider" />

        <section ref={exhibitsRef}>
          <Cards title="Экспонаты" type="exhibits" onOpenModal={handleOpenModal} />
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

