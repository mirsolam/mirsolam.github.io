export default function AusEducationDetails() {
    return (
        <div id="section_education_aus_details" data-name="section" className="primary-theme w-full">
            <div className="grid xl:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1">
                <div className="xl:col-start-3 sm:col-start-2 sm:col-span-3">
                    <div className="h-screen grid grid-row-1 items-center justify-items-center">
                        <div className="row-start-1">
                            <div className="xl:h-[8rem] sm:h-[6rem] xs:h-[5rem]">
                                <div className="aus-icon float-right xs:mr-2" />
                            </div>
                            <div className="text-2xl font-bold text-center">Thesis</div>
                            <br /> <br />
                            <div className="lg:text-2xl sm:text-lg xs:text-base sm:px-3 xs:px-3 text-center">
                                My thesis was titled Motorcycle Proximity Detection System
                            </div>
                            <br />
                            <div className="lg:text-2xl sm:text-lg xs:text-base sm:px-3 xs:px-3 text-justified">
                                It was an object detection system built using Python
                                and TensorFlow on a Nvidia Jetson Xavier with a Linux operating system, that utilized computer vision to calculate the relative distance
                                and speed of the detected object and determine its threat level.
                                The system was equipped with a mobile application connected to a Firebase database that alerted
                                the user based on the determined threat level.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}