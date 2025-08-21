export default function Home() {
    return (
        <div id="section_home" data-name="section" className="primary-theme w-full">
            <div className="grid xl:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1">
                <div className="xl:col-start-4 sm:col-start-2 xl:col-span-1 sm:col-span-3">
                    <div className="h-screen grid grid-row-1 items-center justify-items-center">
                        <div className="row-start-1">
                            <div className="cv-pic" />
                            <div className="lg:text-2xl sm:text-lg xs:text-lg">Amirhossein</div>
                            <div className="lg:text-2xl sm:text-lg xs:text-lg">Full-stack Developer</div>
                            <div className="lg:text-2xl sm:text-lg xs:text-lg">Computer Science Bachelor</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};