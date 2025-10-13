export default function Home() {
  return (
    <div
      id="section_home"
      data-name="section"
      data-index="0"
      data-continue-classname="stretch"
      className="primary-theme w-full"
    >
      <div className="h-screen grid grid-row-1 items-center justify-items-center">
        <div className="grid row-start-1 items-center justify-items-center">
          <div className="grid grid-cols-3 items-center justify-items-center">
            <div className="flex col-start-1 items-center justify-items-end justify-end">
              <div
                id="accent_left_home"
                className="accent-line xs:mr-(--home-side-accent-margin)"
              />
            </div>
            <div
              id="logo_home"
              className="grid col-start-2 items-center justify-items-center"
            >
              <div className="logo-pic sm:w-[17rem] xs:w-[10rem]" />
              <div className="grid items-start justify-items-center">
                <div
                  id="accent_continue_home"
                  className="accent-continue mt-[-1px]"
                />
              </div>
            </div>
            <div className="flex col-start-3 items-center justify-items-start justify-start">
              <div
                id="accent_right_home"
                className="accent-line xs:ml-(--home-side-accent-margin)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
