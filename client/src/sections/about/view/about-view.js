import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTestimonials from '../about-testimonials';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function AboutView({data}) {
  return (
      <AboutWhat data={data} />
  );
}

AboutView.propTypes = {
  hero: PropTypes.object.isRequired
}
