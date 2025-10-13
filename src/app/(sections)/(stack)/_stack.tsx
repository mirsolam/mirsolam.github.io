export default function Stack() {
  return (
    <div
      id="section_stack"
      data-name="section"
      data-index="2"
      data-continue-classname="stack-length"
      data-prev-continue-classname="short"
      className="gradient-theme w-full"
    >
      <div className="h-screen grid grid-row-1 items-center justify-items-center">
        <div className="grid row-start-1 items-center justify-items-center sm:mt-[9rem]">
          <div className="flex items-center justify-items-end justify-end">
            <div
              id="accent_left_triangleup_stack"
              className="accent-left-triangle-up mt-[-10.4rem] mr-[-1px] xs:mr-[0px]"
            />
          </div>
          <div className="flex items-center justify-items-start justify-start">
            <div
              id="accent_right_triangleup_stack"
              className="accent-right-triangle-up mt-[-10.4rem] ml-[0px] mxs:ml-[0.5px] xs:ml-[0px]"
            />
          </div>

          <div className="stack-group-pic" />

          <div className="flex items-center justify-items-end justify-end">
            <div
              id="accent_left_triangledown_stack"
              className="accent-left-triangle-down mt-[9rem] mr-[-2px]"
            />
          </div>
          <div className="flex items-center justify-items-start justify-start">
            <div
              id="accent_right_triangledown_stack"
              className="accent-right-triangle-down mt-[9rem]"
            />
          </div>
          <div className="grid items-start">
            <div
              id="accent_continue_stack"
              className="accent-continue mr-[-1px] mt-[4.5rem] z-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
