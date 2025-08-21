export default function Certificates() {
    return (
        <div id="section_certificates" data-name="section" className="secondary-theme w-full">
            <div className="h-screen grid grid-row-1 items-center justify-items-center">
                <div className="grid xl:grid-cols-4 sm:grid-cols-4 xs:grid-cols-1">
                    <div className="xl:col-start-3 sm:col-start-2 xs:col-start-2 xl:col-span-1 sm:col-span-3">
                        <div className="text-2xl font-bold text-center">My Certificates</div>
                    </div>
                    <div className="xl:col-start-2 sm:col-start-2 xs:col-start-2 xl:col-span-3 sm:col-span-3">
                        <div className="row-start-1 items-center justify-items-center">
                            <div className="certificate-group-pic xl:w-[60vw] lg:w-[60vw] sm:w-[60vw] xs:w-[90vw]  mt-[4rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const STACK_SECTION_NUMBER = 2;