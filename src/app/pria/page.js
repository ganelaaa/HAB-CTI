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
        <span className="text-primary">FIFRA</span>
        <span>›</span>
        <span className="text-gray-800">Pesticide Registration</span>
      </div>

      {/* WIP */}
      <div className="text-center mb-8 mt-10">
        <h1 className="text-3xl text-primary font-bold">
          This page is currently under development
        </h1>
        <p>Please check back soon!</p>
      </div>

      {/* background image */}
      <div className="relative text-white mt-4 h-60">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-65 z-0" />
        {/* Content */}
        <div className="relative z-10 py-16 px-1 text-center mt-5">
          <h1 className="!text-4xl font-bold !mb-0 !mt-1">
            Pesticide Registration
          </h1>

          <p className="text-lg !mt-3 text-gray-200">
            FIFRA pesticide product registration
          </p>
        </div>
      </div>
    </div>
  );
}
