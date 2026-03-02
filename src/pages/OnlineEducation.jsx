import AppPromoSection from '../componets/AppPromoSection'
import CoursesSection from '../componets/CursesSection'
import Education from '../componets/Education'
import FAQSection from '../componets/FAQSection'
import HeroSection from '../componets/HeroSection'
import HeroZoom from '../componets/HeroZoom'
import Integrations from '../componets/Integrations'
import MentorsSection from '../componets/MentorsSection'
import ModernEducation from '../componets/ModernEducation'
import Statistika from '../componets/Statistika'
import Testimonials from '../componets/Testimonials'
import TopComponent from '../componets/TopComponent'
import TopFooter from '../componets/TopFooter'
import Footer from './../componets/Footer'

const OnlineEducation = () => {
	return (
		<div className=''>
			<HeroSection />
			<Statistika />
			<Education />
			<ModernEducation />
			<TopComponent />
			<HeroZoom />
			<CoursesSection />
			<MentorsSection />
			<Testimonials />
			<Integrations />
			<FAQSection />
			<AppPromoSection />
			<TopFooter />
			<Footer />
		</div>
	)
}

export default OnlineEducation
