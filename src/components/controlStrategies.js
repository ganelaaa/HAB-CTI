export default function ControlStrategies() {
  return (
    <div className="px-20 py-10">
      {/* Strategies Headings */}
      <p className="text-green-600 font-bold">CONTROL STRATEGIES</p>
      <p className="font-bold text-2xl">Types of HAB Control Technologies</p>
      <p className="text-xs">
        Determining what type of product you have is key as each type has a
        different process for registration
      </p>

      {/* Control Technology Tabs */}
      <div className="rounded border-b border-l-2 border-t-2 border-r-2 border-gray-300">
        <div className="bg-[#d6efd3] flex flex-row text-gray-500 font-bold gap-45 px-4 py-4">
          <p className="bg-[#538200] px-2 py-2 text-white rounded">
            <svg
              class="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#science"></use>
            </svg>
            Chemical
          </p>
          <p>
            <svg
              class="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#hourglass_empty"></use>
            </svg>
            Biological
          </p>
          <p>
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#wash"></use>
            </svg>
            Physical
          </p>
        </div>

        {/* Pesticide Types */}
        <div className="bg-primary-lighter text-gray-500 font-bold gap-15 px-3 py-3 flex flex-row">
          <p className="bg-primary rounded py-2 px-2 text-white font-bold">
            Conventional Chemical
          </p>
          <p>Biochemical Pesticides</p>
          <p>Antimicrobial Pesticides</p>
          <p>Minimum Risk Pesticides</p>
        </div>

        {/* Information Block */}
        <div className="rounded border-b border-l border-t border-r border-gray-300 bg-white text-black">
          <div>Image here</div>
          <div>
            <h1 className="font-bold">Conventional Chemical</h1>
            <p className="font-light">
              Conventional pesticides are all active ingredients other than
              biological pesticides and antimicrobial pesticides. Conventional
              active ingredients are geenrally produced synthetically, i.e., are
              synthetic chemicals athat prevent, mitigate, destroy, or repel any
              pest; or that act as a plant growth regulator, desiccant,
              defoliant or nitrogen stabilizer.
            </p>
            <p className="font-light mt-6">
              Wood preservative and anti-foulant products that do not have
              antimicrobial uses and agricultural fungicide and aquatic
              herbicide products are either classified as a conventional or a
              biochemical pesticide. biochemical pesticides eith a toxic mode of
              action are classified for the purposes of the registration process
              as conventional pesticides.
            </p>
            <button className="usa-button bg-blue-700">
              Know More
              <svg
                className="usa-icon"
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <use href="/assets/img/sprite.svg#arrow_forward"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
