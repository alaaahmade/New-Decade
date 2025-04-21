import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTestimonials from '../about-testimonials';
import PropTypes from 'prop-types';
import SplashScreen from '../../../components/loading-screen/splash-screen';

// ----------------------------------------------------------------------

export default function AboutView({data}) {
  return data ? (<AboutWhat data={data} /> ): (<SplashScreen />)

}

AboutView.propTypes = {
  data: PropTypes.object.isRequired
}
