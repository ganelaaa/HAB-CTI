export default function Fifra() {
  return (
    <div className="px-20 py-10 tracking-wide">
      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-2 text-sm text-gray-500 mb-8">
        <svg
          className="usa-icon text-gray-500"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use href="/assets/img/sprite.svg#arrow_back"></use>
        </svg>
        <a href="/" className="text-primary hover:underline">
          Home
        </a>
        <span>›</span>
        <span className="text-primary">Processing Permits</span>
        <span>›</span>
        <span className="text-gray-800">FIFRA</span>
      </div>

      <div>
        <h1>Federal Insecticide, Fungicide, and</h1>
        <h1>Rodenticide Act (FIFRA)</h1>
        <p>FIFRA Overview</p>
      </div>

      <p>
        Background: The Federal Insecticide, Fungicide, and Rodenticide Act
        (FIFRA) is an EPA-enforced act that regulates the distribution, sale,
        production, and use of pesticides and pesticide devices in the United
        States. Any substance intended to prevent, destroy, repel, or mitigate a
        pest is considered a pesticide and must be approved by FIFRA. Under
        FIFRA, “the label is the law,” meaning that to lawfully use a pesticide,
        the directions and warnings prescribed on a pesticide’s label must be
        followed exactly. As there is little active enforcement of pesticides
        following their approval, registering a pesticide with FIFRA is a
        time-consuming and data-intensive process. Pesticides will only be
        approved if 1.) the registrant supplies ample data to demonstrate that
        the pesticide works as intended without adverse impact to humans,
        non-target organisms, and environments, and 2.) the EPA’s analyses of
        the registrant's data and existing scientific literature indicate a
        pesticide can be used with “reasonable certainty of no harm.”
      </p>
    </div>
  );
}
