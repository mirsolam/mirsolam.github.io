export default function Stack() {
    return (
        <div id="section_stack" data-name="section" data-index="2" data-continue-classname="stack-length" data-prev-continue-classname="short" className="gradient-theme w-full">
            <div className="h-screen grid grid-row-1 items-center justify-items-center" >
                <div className="grid row-start-1 items-center justify-items-center sm:mt-[9rem]">
                    <div className="grid items-center justify-items-end">
                        <div id="accent_left_triangleup_stack" className="accent-left-triangle-up mt-[-10.4rem] sm:mr-[0px] xs:mr-[0px]" />
                    </div>
                    <div className="grid items-center justify-items-start">
                        <div id="accent_right_triangleup_stack" className="accent-right-triangle-up mt-[-10.4rem] sm:ml-[2px] mxs:ml-[1px] xs:ml-[2px]" />
                    </div>

                    <div className="stack-group-pic" />

                    <div className="grid items-center justify-items-end">
                        <div id="accent_left_triangledown_stack" className="accent-left-triangle-down mt-[9rem] mr-[-2px]" />
                    </div>
                    <div className="grid items-center justify-items-start">
                        <div id="accent_right_triangledown_stack" className="accent-right-triangle-down mt-[9rem]" />
                    </div>
                    <div className="grid items-start">
                        <div id="accent_continue_stack" className="accent-continue mr-[-1px] mt-[4.5rem] z-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};