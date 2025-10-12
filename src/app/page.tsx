import Home from "./(sections)/(home)/_home";
import Certificates from "./(sections)/(certificates)/_certificates";
import Contacts from "./(sections)/(contacts)/_contacts";
import Stack from "./(sections)/(stack)/_stack";
import WhoAmI from "./(sections)/(whoAmI)/_whoAmI";
import Projects from "./(sections)/(projects)/_projects";
export default function Page() {
    return (
        <>
            <Home />
            <WhoAmI />
            <Stack />
            <Certificates />
            <Projects />
            <Contacts />
        </>
    );
}
