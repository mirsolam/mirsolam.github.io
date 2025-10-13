export default function Certificates() {
  return (
    <div
      id="section_certificates"
      data-name="section"
      data-index="3"
      className="gradient-theme w-full"
    >
      <div className="h-screen grid grid-row-1 items-center justify-items-center">
        <div className="grid row-start-1 items-center justify-items-center">
          <div className="flex items-center justify-items-end justify-end">
            <div
              id="accent_left_triangleup_certificates"
              className="accent-left-triangle-up mt-[-10.4rem] mr-[0px] xs:mr-[0px]"
            />
          </div>
          <div className="flex items-center justify-items-start justify-start">
            <div
              id="accent_right_triangleup_certificates"
              className="accent-right-triangle-up mt-[-10.4rem] sm:ml-[2px] xs:ml-[2px]"
            />
          </div>

          <div className="certificates-group-pic sm:mt-[7.4rem] xs:mt-[5rem]" />

          <div className="flex items-center justify-items-end justify-end">
            <div
              id="accent_left_triangledown_certificates"
              className="accent-left-triangle-down mt-[9rem] mr-[-2px]"
            />
          </div>
          <div className="flex items-center justify-items-start justify-start">
            <div
              id="accent_right_triangledown_certificates"
              className="accent-right-triangle-down mt-[9rem]"
            />
          </div>
          <div className="grid items-start">
            <div
              id="accent_continue_certificates"
              className="accent-continue mr-[-1px] mt-[4.5rem] z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
