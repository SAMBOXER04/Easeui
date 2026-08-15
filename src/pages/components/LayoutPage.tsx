import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
import { Layout } from "@/components/Layout/Layout";

<Layout gap={4} align="center">
  <div className="bg-indigo-600 text-white px-6 py-4 rounded-md">
    Item 1
  </div>

  <div className="bg-indigo-500 text-white px-6 py-4 rounded-md">
    Item 2
  </div>

  <div className="bg-indigo-400 text-white px-6 py-4 rounded-md">
    Item 3
  </div>
</Layout>

<Layout
  direction="column"
  gap={4}
  align="center"
>
  <div className="bg-indigo-600 text-white px-6 py-4 rounded-md">
    Item 1
  </div>

  <div className="bg-indigo-500 text-white px-6 py-4 rounded-md">
    Item 2
  </div>
</Layout>

<Layout
  justify="between"
  align="center"
  fullWidth
>
  <div className="bg-indigo-600 text-white px-6 py-4 rounded-md">
    Left
  </div>

  <div className="bg-indigo-500 text-white px-6 py-4 rounded-md">
    Center
  </div>

  <div className="bg-indigo-400 text-white px-6 py-4 rounded-md">
    Right
  </div>
</Layout>

<Layout
  justify="center"
  align="center"
  fullWidth
>
  <div className="bg-purple-600 text-white px-6 py-3 rounded-md">
    Centered
  </div>
</Layout>

<Layout
  justify="around"
  align="center"
  fullWidth
>
  <div className="bg-pink-600 text-white px-5 py-3 rounded-md">
    One
  </div>

  <div className="bg-pink-500 text-white px-5 py-3 rounded-md">
    Two
  </div>

  <div className="bg-pink-400 text-white px-5 py-3 rounded-md">
    Three
  </div>
</Layout>

<Layout
  justify="evenly"
  align="center"
  fullWidth
>
  <div className="bg-green-600 text-white px-5 py-3 rounded-md">
    One
  </div>

  <div className="bg-green-500 text-white px-5 py-3 rounded-md">
    Two
  </div>

  <div className="bg-green-400 text-white px-5 py-3 rounded-md">
    Three
  </div>
</Layout>
`;

  const propsData = [
    {
      prop: "direction",
      type: '"row" | "column"',
      default: '"row"',
      description: "Controls the direction of the layout items",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end" | "stretch"',
      default: '"stretch"',
      description: "Controls the alignment of items on the cross axis",
    },
    {
      prop: "justify",
      type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
      default: '"start"',
      description: "Controls the distribution of items on the main axis",
    },
    {
      prop: "gap",
      type: "number",
      default: "4",
      description: "Controls the spacing between layout items",
    },
    {
      prop: "padding",
      type: "number",
      default: "0",
      description: "Controls the padding inside the layout",
    },
    {
      prop: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Makes the layout take the full available width",
    },
    {
      prop: "fullHeight",
      type: "boolean",
      default: "false",
      description: "Makes the layout take the full available height",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes for the layout",
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
          Layout
        </p>

        <p className="text-lg text-gray-600">
          A flexible layout component for arranging elements using direction,
          alignment, spacing, and distribution.
        </p>
      </header>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          {/* Usage */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold">Usage</h2>

            {/* Row Layout */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Row Layout</h3>

              <ComponentDemo
                code={`
<Layout gap={4} align="center">
  <div className="bg-indigo-600 text-white px-6 py-4 rounded-md">
    Item 1
  </div>

  <div className="bg-indigo-500 text-white px-6 py-4 rounded-md">
    Item 2
  </div>

  <div className="bg-indigo-400 text-white px-6 py-4 rounded-md">
    Item 3
  </div>
</Layout>
`}
              >
                <Layout gap={4} align="center">
                  <div className="bg-indigo-600 text-white px-6 py-4 rounded-md">
                    Item 1
                  </div>

                  <div className="bg-indigo-500 text-white px-6 py-4 rounded-md">
                    Item 2
                  </div>

                  <div className="bg-indigo-400 text-white px-6 py-4 rounded-md">
                    Item 3
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Column Layout */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Column Layout</h3>

              <ComponentDemo
                code={`
<Layout
  direction="column"
  gap={3}
  align="center"
>
  <div className="bg-indigo-600 text-white px-6 py-3 rounded-md">
    Item 1
  </div>

  <div className="bg-indigo-500 text-white px-6 py-3 rounded-md">
    Item 2
  </div>

  <div className="bg-indigo-400 text-white px-6 py-3 rounded-md">
    Item 3
  </div>
</Layout>
`}
              >
                <Layout direction="column" gap={3} align="center">
                  <div className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                    Item 1
                  </div>

                  <div className="bg-indigo-500 text-white px-6 py-3 rounded-md">
                    Item 2
                  </div>

                  <div className="bg-indigo-400 text-white px-6 py-3 rounded-md">
                    Item 3
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Center Layout */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Center Layout</h3>

              <ComponentDemo
                code={`
<Layout
  justify="center"
  align="center"
  fullWidth
  className="min-h-28 bg-gray-100 rounded-lg"
>
  <div className="bg-purple-600 text-white px-6 py-3 rounded-md">
    Centered
  </div>
</Layout>
`}
              >
                <Layout
                  justify="center"
                  align="center"
                  fullWidth
                  className="min-h-28 bg-gray-100 rounded-lg"
                >
                  <div className="bg-purple-600 text-white px-6 py-3 rounded-md">
                    Centered
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Space Between */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Space Between</h3>

              <ComponentDemo
                code={`
<Layout
  justify="between"
  align="center"
  fullWidth
  className="bg-gray-100 p-4 rounded-lg"
>
  <div className="bg-indigo-600 text-white px-5 py-3 rounded-md">
    Left
  </div>

  <div className="bg-indigo-500 text-white px-5 py-3 rounded-md">
    Center
  </div>

  <div className="bg-indigo-400 text-white px-5 py-3 rounded-md">
    Right
  </div>
</Layout>
`}
              >
                <Layout
                  justify="between"
                  align="center"
                  fullWidth
                  className="bg-gray-100 p-4 rounded-lg"
                >
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-md">
                    Left
                  </div>

                  <div className="bg-indigo-500 text-white px-5 py-3 rounded-md">
                    Center
                  </div>

                  <div className="bg-indigo-400 text-white px-5 py-3 rounded-md">
                    Right
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Space Around */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Space Around</h3>

              <ComponentDemo
                code={`
<Layout
  justify="around"
  align="center"
  fullWidth
  className="bg-gray-100 p-4 rounded-lg"
>
  <div className="bg-pink-600 text-white px-5 py-3 rounded-md">
    One
  </div>

  <div className="bg-pink-500 text-white px-5 py-3 rounded-md">
    Two
  </div>

  <div className="bg-pink-400 text-white px-5 py-3 rounded-md">
    Three
  </div>
</Layout>
`}
              >
                <Layout
                  justify="around"
                  align="center"
                  fullWidth
                  className="bg-gray-100 p-4 rounded-lg"
                >
                  <div className="bg-pink-600 text-white px-5 py-3 rounded-md">
                    One
                  </div>

                  <div className="bg-pink-500 text-white px-5 py-3 rounded-md">
                    Two
                  </div>

                  <div className="bg-pink-400 text-white px-5 py-3 rounded-md">
                    Three
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Space Evenly */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Space Evenly</h3>

              <ComponentDemo
                code={`
<Layout
  justify="evenly"
  align="center"
  fullWidth
  className="bg-gray-100 p-4 rounded-lg"
>
  <div className="bg-green-600 text-white px-5 py-3 rounded-md">
    One
  </div>

  <div className="bg-green-500 text-white px-5 py-3 rounded-md">
    Two
  </div>

  <div className="bg-green-400 text-white px-5 py-3 rounded-md">
    Three
  </div>
</Layout>
`}
              >
                <Layout
                  justify="evenly"
                  align="center"
                  fullWidth
                  className="bg-gray-100 p-4 rounded-lg"
                >
                  <div className="bg-green-600 text-white px-5 py-3 rounded-md">
                    One
                  </div>

                  <div className="bg-green-500 text-white px-5 py-3 rounded-md">
                    Two
                  </div>

                  <div className="bg-green-400 text-white px-5 py-3 rounded-md">
                    Three
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Start Alignment */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Start Alignment</h3>

              <ComponentDemo
                code={`
<Layout
  direction="column"
  align="start"
  gap={3}
  fullWidth
  className="bg-gray-100 p-4 rounded-lg"
>
  <div className="bg-orange-600 text-white px-5 py-3 rounded-md">
    Small
  </div>

  <div className="bg-orange-500 text-white px-8 py-3 rounded-md">
    Medium
  </div>

  <div className="bg-orange-400 text-white px-12 py-3 rounded-md">
    Large
  </div>
</Layout>
`}
              >
                <Layout
                  direction="column"
                  align="start"
                  gap={3}
                  fullWidth
                  className="bg-gray-100 p-4 rounded-lg"
                >
                  <div className="bg-orange-600 text-white px-5 py-3 rounded-md">
                    Small
                  </div>

                  <div className="bg-orange-500 text-white px-8 py-3 rounded-md">
                    Medium
                  </div>

                  <div className="bg-orange-400 text-white px-12 py-3 rounded-md">
                    Large
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* End Alignment */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">End Alignment</h3>

              <ComponentDemo
                code={`
<Layout
  direction="column"
  align="end"
  gap={3}
  fullWidth
  className="bg-gray-100 p-4 rounded-lg"
>
  <div className="bg-red-600 text-white px-5 py-3 rounded-md">
    Small
  </div>

  <div className="bg-red-500 text-white px-8 py-3 rounded-md">
    Medium
  </div>

  <div className="bg-red-400 text-white px-12 py-3 rounded-md">
    Large
  </div>
</Layout>
`}
              >
                <Layout
                  direction="column"
                  align="end"
                  gap={3}
                  fullWidth
                  className="bg-gray-100 p-4 rounded-lg"
                >
                  <div className="bg-red-600 text-white px-5 py-3 rounded-md">
                    Small
                  </div>

                  <div className="bg-red-500 text-white px-8 py-3 rounded-md">
                    Medium
                  </div>

                  <div className="bg-red-400 text-white px-12 py-3 rounded-md">
                    Large
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Padding */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Padding</h3>

              <ComponentDemo
                code={`
<Layout
  gap={4}
  padding={6}
  fullWidth
  className="bg-gray-100 rounded-lg"
>
  <div className="bg-blue-600 text-white px-6 py-4 rounded-md">
    Padded Item 1
  </div>

  <div className="bg-blue-500 text-white px-6 py-4 rounded-md">
    Padded Item 2
  </div>
</Layout>
`}
              >
                <Layout
                  gap={4}
                  padding={6}
                  fullWidth
                  className="bg-gray-100 rounded-lg"
                >
                  <div className="bg-blue-600 text-white px-6 py-4 rounded-md">
                    Padded Item 1
                  </div>

                  <div className="bg-blue-500 text-white px-6 py-4 rounded-md">
                    Padded Item 2
                  </div>
                </Layout>
              </ComponentDemo>
            </div>

            {/* Nested Layout */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Nested Layout</h3>

              <ComponentDemo
                code={`
<Layout
  direction="column"
  gap={4}
  padding={4}
  fullWidth
  className="bg-gray-100 rounded-lg"
>
  <Layout justify="between" align="center" fullWidth>
    <div className="font-semibold text-gray-800">
      Dashboard
    </div>

    <div className="bg-indigo-600 text-white px-4 py-2 rounded-md">
      Action
    </div>
  </Layout>

  <Layout gap={3} fullWidth>
    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
      Card 1
    </div>

    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
      Card 2
    </div>

    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
      Card 3
    </div>
  </Layout>
</Layout>
`}
              >
                <Layout
                  direction="column"
                  gap={4}
                  padding={4}
                  fullWidth
                  className="bg-gray-100 rounded-lg"
                >
                  <Layout justify="between" align="center" fullWidth>
                    <div className="font-semibold text-gray-800">Dashboard</div>

                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                      Action
                    </div>
                  </Layout>

                  <Layout gap={3} fullWidth>
                    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
                      Card 1
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
                      Card 2
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 p-5 rounded-md">
                      Card 3
                    </div>
                  </Layout>
                </Layout>
              </ComponentDemo>
            </div>
          </section>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
