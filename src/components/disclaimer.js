export default function Disclaimer() {
  return (
    <div className="px-20 py-10">
      {/* Warning */}
      <p className="text-green-600 font-bold">DISCLAIMER</p>
      <p className="font-bold text-2xl">Warning & Report</p>

      {/* Attention! */}
      <div className="flex flex-row mt-7 h-80 w-full">
        <div className="bg-[#f4e3db] text-black py-3 px-9 w-2xl">
          <div className="font-bold">
            <div className="text-xl">
              <svg
                className="usa-icon text-2xl"
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <use href="/assets/img/sprite.svg#info"></use>
              </svg>
              Attention!
            </div>
            <h3>Content last updated as of: March 04, 2025, Monday</h3>
          </div>
          <p className="mt-5">
            The information available through US HAB CTI's web site is provided
            as a public service and if for educational purposes only. All
            efforts have been made to ensure the material on this site is
            accurate and up to date However, US HAB-CTI and University of
            Maryland Center for Environemntal Science cannot be held responsible
            for any circumstances resulting from its use, unavailability, or
            possible inaccuracy.
          </p>
          <p className="mt-5">
            US HAB-CTI makes no representations and specifically disclaims all
            liabilities and warranties, express, implied, or statutory,
            regarding the accuracy, timeliness, or completeness for any
            particular purpose of any material contained on this site.
          </p>
        </div>

        {/* Report Errors */}
        <div className="bg-primary-lighter py-3 px-3 ml-3 border border-primary">
          <h1 className="font-bold">Report Errors</h1>
          <p>Found broken links, missing content, or errors?</p>
          <p className="mt-5">
            File a report below. We'll look into it and get it sorted.
          </p>
          <button className="usa-button bg-blue-700 border">
            File a Report
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#arrow_forward"></use>
            </svg>
          </button>
          <button className="usa-button bg-white text-primary border">
            View Status of a Report
          </button>
        </div>
      </div>
    </div>
  );
}
