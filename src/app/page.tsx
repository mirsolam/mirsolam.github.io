import Home from "./(sections)/(home)/_home";
import Certificates from "./(sections)/(certificates)/_certificates";
import Contacts from "./(sections)/(contacts)/_contacts";
import Education from "./(sections)/(education)/_education";
import AusEducationDetails from "./(sections)/(education)/(aus)/(details)/_aus_education_details";
import Experience from "./(sections)/(experience)/_experience";
import AstrautmDetails from "./(sections)/(experience)/(astrautm)/(details)/_astrautm_details";
import AstrautmOverview from "./(sections)/(experience)/(astrautm)/(overview)/_astrautm_overview";
import AusDetails from "./(sections)/(experience)/(aus)/(details)/_aus_details";
import AusOverview from "./(sections)/(experience)/(aus)/(overview)/_aus_overview";
import EgmaDetails from "./(sections)/(experience)/(egma)/(details)/_egma_details";
import EgmaOverview from "./(sections)/(experience)/(egma)/(overview)/_egma_overview";
import Stack from "./(sections)/(stack)/_stack";
export default function Page() {
    return (
        <>
            <Home />
            <Stack />
            <Certificates />
            <Experience />
            <EgmaOverview />
            <EgmaDetails />
            <AstrautmOverview />
            <AstrautmDetails />
            <AusOverview />
            <AusDetails />
            <Education />
            <AusEducationDetails />
            <Contacts />
        </>
    );
}
