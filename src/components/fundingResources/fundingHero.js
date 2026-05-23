export default function FundingHero() {
  return (
    <div className="tracking-wide">
      {/* link to go back to home */}
      <div className="flex flex-row mt-5 ml-4 font-light">
        <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 cursor-pointer w-fit">
          <svg
            className="usa-icon text-gray-500"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use href="/assets/img/sprite.svg#arrow_back"></use>
          </svg>
          <a className="text-black ml-2 text-sm relative group" href="/">
            Funding Resources
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-700" />
          </a>
        </div>
      </div>

      {/* Background image */}
      <div className="relative text-white mt-4 overflow-hidden h-85">
        <div
          className="absolute inset-0 bg-cover bg-center kenburns-loop"
          style={{ backgroundImage: "url('/fundingHero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-0" />
        {/* Content */}
        <div className="relative z-10 py-16 px-1 text-center mt-5">
          <svg
            className="usa-icon text-5xl border p-1 rounded !mb-0"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use href="/assets/img/sprite.svg#attach_money"></use>
          </svg>
          <h1 className="!text-6xl font-bold !mb-0 !mt-1">
            Funding Opportunities
          </h1>
          <p className="text-lg !mt-3 text-gray-200">
            A repository of available grants and funding options
          </p>
          <p className="text-lg !mt-0 text-gray-200">for your research.</p>
        </div>
      </div>

      <div className="border-primary-lighter border-b-6 mt-20 flex flex-row">
        <div>
          <p className="font-bold">On this page</p>
          <p>US HABCTI Grant Information</p>
          <p>2025 Notice of Funding and Review Process</p>
          <p>Resources</p>
          <p>Other Funding Opportunities</p>
        </div>
        <div>
          <h1 className="text-primary-darker">US HAB-CTI Grant Information</h1>
          <p className="mb-6 font-light">
            One of the objectives of the US HAB-CTI is to fund extramural proof
            of concept, innovative HAB control tools and technology projects to
            assess their real-world feasibility. It is anticipated that US
            HAB-CTI research will primarily be conducted in the scale of "Tier
            1" (small scale lab testing) or "Tier 2" (tanks, mesocosms, and
            raceways). Promising US HAB-CTI tools and technologies will be
            encouraged to apply to relevant future NOAA Prevention Control and
            Mitigation HAB competitive funding announcements or other
            opportunities independent from the US HAB-CTI (shown as "Tier 3" and
            "Tier 4" in image).
          </p>
        </div>
      </div>
    </div>
  );
}
