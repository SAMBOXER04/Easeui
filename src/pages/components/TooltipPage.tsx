import { Tooltip } from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="This is a tooltip">
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
    Hover me
  </button>
</Tooltip>

<Tooltip content="Save your changes" side="bottom">
  <button className="px-4 py-2 bg-green-600 text-white rounded-md">
    Save
  </button>
</Tooltip>

<Tooltip content="Delete this item" side="right">
  <button className="px-4 py-2 bg-red-600 text-white rounded-md">
    Delete
  </button>
</Tooltip>

<Tooltip
  content="Tooltip with delay"
  side="left"
  delayDuration={500}
>
  <button className="px-4 py-2 bg-slate-900 text-white rounded-md">
    Delayed
  </button>
</Tooltip>
`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "—",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "side",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The side where the tooltip appears",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end"',
      default: '"center"',
      description: "The alignment of the tooltip relative to the trigger",
    },
    {
      prop: "sideOffset",
      type: "number",
      default: "8",
      description: "Distance between the tooltip and the trigger",
    },
    {
      prop: "delayDuration",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the tooltip when set to true",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes for the tooltip",
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
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when the user hovers over or focuses
          on an element.
        </p>
      </header>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <Tooltip content="This is a tooltip">
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                Hover me
              </button>
            </Tooltip>

            <Tooltip content="Save your changes" side="bottom">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
                Save
              </button>
            </Tooltip>

            <Tooltip content="Delete this item" side="right">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
                Delete
              </button>
            </Tooltip>

            <Tooltip
              content="Tooltip with delay"
              side="left"
              delayDuration={500}
            >
              <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md">
                Delayed
              </button>
            </Tooltip>
          </div>
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

export default TooltipPage;