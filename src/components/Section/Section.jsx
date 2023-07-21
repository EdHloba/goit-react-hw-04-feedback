import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
  <section className={css.Container}>
    <h2 className={css.Title}>{title}</h2>
    {children}
  </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;