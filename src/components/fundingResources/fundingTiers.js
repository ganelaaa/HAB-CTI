export default function FundingTiers() {
  return (
    <div>
      {/* images */}
      <div className="flex flex-row gap-50 justify-center mt-20">
        <img src="/NOAA.svg" className="w-50 h-50 object-contain" />
        <img src="/UMCES.png" className="w-50 h-50  object-contain" />
        <img src="/MOTE.png" className="w-50 h-50  object-contain" />
      </div>

      {/* Tiers */}
      <div className="px-5 py-10">
        <h1 className="font-bold">US Harmful Algal Bloom - Control</h1>
        <h1 className="font-bold">Technologies Incubator Clearinghouse</h1>

        <div className="bg-primary-lighter px-3 py-10 flex flex-row gap-25">
          <p>Incubator Funding</p>
          <p>Other Funding</p>
          <div className="bg-white">
            <h1 className="font-bold">Tier 1</h1>
            <p>Lab expiriments &</p>
            <p>Literature Search</p>
            <p>Img here</p>
            <ul>
              <li>Effects on the cells and Toxins in the Lab</li>
              <li>Previous Uses Worldwide</li>
              <li>Exisiting Regulatory</li>
              <li>Approvals</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 2</h1>
            <p>Mesocosms,</p>
            <p>Raceways,</p>
            <p>Collaborations</p>
            <p>Img here</p>
            <ul>
              <li>Effective with Natural Communities</li>
              <li>Ecological Impacts</li>
              <li>Human Health Concerns</li>
              <li>Logistical Issues</li>
              <li>Economically Feasible</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 3</h1>
            <p>Canals/Marinas,</p>
            <p>Nearshore,</p>
            <p>Offshore</p>
            <p>Img here</p>
            <ul>
              <li>Pilot Studies</li>
              <li>Field Demonstrations</li>
              <li>Federal/State/Local</li>
              <li>Regulatory Approvals</li>
              <li>Public Interactions</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 4</h1>
            <p>Commercialize</p>
            <p>Monitor</p>
            <p>Img here</p>
            <ul>
              <li>Customers</li>
              <li>Intellectual Property</li>
              <li>Efficiency Scaling</li>
              <li>State/Local Budgets</li>
              <li>Deployment</li>
              <li>Contractors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
