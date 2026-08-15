import { Carousel } from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode[]",
      default: "—",
      description: "Slides displayed inside the carousel",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically moves to the next slide",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Time in milliseconds between automatic slide changes",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Controls whether previous and next arrows are displayed",
    },
    {
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Controls whether slide indicators are displayed",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "true",
      description: "Allows the carousel to loop from the last slide to the first",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes for the carousel",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>

        <p className="text-lg text-gray-600">
          A carousel component for displaying multiple pieces of content
          using slides, navigation controls, and indicators.
        </p>
      </header>

      {/* Usage */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        {/* Basic Carousel */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Basic Carousel
          </h3>

          <ComponentDemo
            code={`
import { Carousel } from "@/components/Carousel/Carousel";

<Carousel>
  <div className="h-64 bg-indigo-600 flex items-center justify-center text-white text-2xl">
    Slide 1
  </div>

  <div className="h-64 bg-purple-600 flex items-center justify-center text-white text-2xl">
    Slide 2
  </div>

  <div className="h-64 bg-pink-600 flex items-center justify-center text-white text-2xl">
    Slide 3
  </div>
</Carousel>
`}
          >
            <Carousel>
              <div className="h-64 bg-indigo-600 flex items-center justify-center text-white text-2xl">
                Slide 1
              </div>

              <div className="h-64 bg-purple-600 flex items-center justify-center text-white text-2xl">
                Slide 2
              </div>

              <div className="h-64 bg-pink-600 flex items-center justify-center text-white text-2xl">
                Slide 3
              </div>
            </Carousel>
          </ComponentDemo>
        </div>

        {/* Without Arrows */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Without Arrows
          </h3>

          <ComponentDemo
            code={`
<Carousel showArrows={false}>
  <div className="h-64 bg-blue-600 flex items-center justify-center text-white text-2xl">
    Slide 1
  </div>

  <div className="h-64 bg-cyan-600 flex items-center justify-center text-white text-2xl">
    Slide 2
  </div>

  <div className="h-64 bg-teal-600 flex items-center justify-center text-white text-2xl">
    Slide 3
  </div>
</Carousel>
`}
          >
            <Carousel showArrows={false}>
              <div className="h-64 bg-blue-600 flex items-center justify-center text-white text-2xl">
                Slide 1
              </div>

              <div className="h-64 bg-cyan-600 flex items-center justify-center text-white text-2xl">
                Slide 2
              </div>

              <div className="h-64 bg-teal-600 flex items-center justify-center text-white text-2xl">
                Slide 3
              </div>
            </Carousel>
          </ComponentDemo>
        </div>

        {/* Without Dots */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Without Dots
          </h3>

          <ComponentDemo
            code={`
<Carousel showDots={false}>
  <div className="h-64 bg-orange-600 flex items-center justify-center text-white text-2xl">
    Slide 1
  </div>

  <div className="h-64 bg-red-600 flex items-center justify-center text-white text-2xl">
    Slide 2
  </div>

  <div className="h-64 bg-rose-600 flex items-center justify-center text-white text-2xl">
    Slide 3
  </div>
</Carousel>
`}
          >
            <Carousel showDots={false}>
              <div className="h-64 bg-orange-600 flex items-center justify-center text-white text-2xl">
                Slide 1
              </div>

              <div className="h-64 bg-red-600 flex items-center justify-center text-white text-2xl">
                Slide 2
              </div>

              <div className="h-64 bg-rose-600 flex items-center justify-center text-white text-2xl">
                Slide 3
              </div>
            </Carousel>
          </ComponentDemo>
        </div>

        {/* Auto Play */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Auto Play
          </h3>

          <ComponentDemo
            code={`
<Carousel
  autoPlay
  interval={2000}
>
  <div className="h-64 bg-green-600 flex items-center justify-center text-white text-2xl">
    Slide 1
  </div>

  <div className="h-64 bg-emerald-600 flex items-center justify-center text-white text-2xl">
    Slide 2
  </div>

  <div className="h-64 bg-lime-600 flex items-center justify-center text-white text-2xl">
    Slide 3
  </div>
</Carousel>
`}
          >
            <Carousel
              autoPlay
              interval={2000}
            >
              <div className="h-64 bg-green-600 flex items-center justify-center text-white text-2xl">
                Slide 1
              </div>

              <div className="h-64 bg-emerald-600 flex items-center justify-center text-white text-2xl">
                Slide 2
              </div>

              <div className="h-64 bg-lime-600 flex items-center justify-center text-white text-2xl">
                Slide 3
              </div>
            </Carousel>
          </ComponentDemo>
        </div>

        {/* No Loop */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Disable Loop
          </h3>

          <ComponentDemo
            code={`
<Carousel loop={false}>
  <div className="h-64 bg-slate-700 flex items-center justify-center text-white text-2xl">
    First
  </div>

  <div className="h-64 bg-slate-600 flex items-center justify-center text-white text-2xl">
    Second
  </div>

  <div className="h-64 bg-slate-500 flex items-center justify-center text-white text-2xl">
    Last
  </div>
</Carousel>
`}
          >
            <Carousel loop={false}>
              <div className="h-64 bg-slate-700 flex items-center justify-center text-white text-2xl">
                First
              </div>

              <div className="h-64 bg-slate-600 flex items-center justify-center text-white text-2xl">
                Second
              </div>

              <div className="h-64 bg-slate-500 flex items-center justify-center text-white text-2xl">
                Last
              </div>
            </Carousel>
          </ComponentDemo>
        </div>

        {/* Card Carousel */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Card Carousel
          </h3>

          <ComponentDemo
            code={`
<Carousel>
  <div className="h-64 bg-white border flex flex-col items-center justify-center">
    <h3 className="text-xl font-semibold">
      Card One
    </h3>

    <p className="text-gray-500">
      First card content
    </p>
  </div>

  <div className="h-64 bg-white border flex flex-col items-center justify-center">
    <h3 className="text-xl font-semibold">
      Card Two
    </h3>

    <p className="text-gray-500">
      Second card content
    </p>
  </div>

  <div className="h-64 bg-white border flex flex-col items-center justify-center">
    <h3 className="text-xl font-semibold">
      Card Three
    </h3>

    <p className="text-gray-500">
      Third card content
    </p>
  </div>
</Carousel>
`}
          >
            <Carousel>
              <div className="h-64 bg-white border flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">
                  Card One
                </h3>

                <p className="text-gray-500">
                  First card content
                </p>
              </div>

              <div className="h-64 bg-white border flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">
                  Card Two
                </h3>

                <p className="text-gray-500">
                  Second card content
                </p>
              </div>

              <div className="h-64 bg-white border flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">
                  Card Three
                </h3>

                <p className="text-gray-500">
                  Third card content
                </p>
              </div>
            </Carousel>
          </ComponentDemo>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>

    </div>
  );
};

export default CarouselPage;