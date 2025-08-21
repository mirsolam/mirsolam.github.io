export default function Education() {
    return (
        <div id="section_education" data-name="section" className="primary-theme w-full">
            <div className="grid xl:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1">
                <div className="xl:col-start-3 sm:col-start-2 sm:col-span-3">
                    <div className="h-screen grid grid-row-1 items-center justify-items-center">
                        <div className="row-start-1">
                            <div className="xl:h-[8rem] sm:h-[6rem] xs:h-[5rem]">
                                <div className="aus-icon float-right xs:mr-2" />
                            </div>
                            <div className="text-2xl font-bold text-center">University</div>
                            <br /> <br />
                            <div className="lg:text-2xl sm:text-lg xs:text-base text-center">
                                American University of Sharjah (AUS)
                            </div>
                            <div className="lg:text-2xl sm:text-lg xs:text-base text-center">
                                2017 - 2022
                            </div>
                            <div className="lg:text-2xl sm:text-lg xs:text-base text-center">
                                Sharjah, United Arab Emirates
                            </div>
                            <br />
                            <div className="lg:text-2xl sm:text-lg xs:text-base sm:px-3 xs:px-3 text-justified">
                                I completed my Bachelor’s of Science in Computer Science
                                at the American University of Sharjah.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}