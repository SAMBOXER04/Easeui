import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Menu,
  X,
  Box,
  CreditCard,
  Circle,
  Type,
  Navigation,
  GalleryHorizontal,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  const componentIcons = {
    Button: Box,
    Card: CreditCard,
    Modal: Circle,
    Input: Type,
    Navbar: Navigation,
    Carousel: GalleryHorizontal,
    Tooltip: MessageCircle,
    Layout: LayoutDashboard,
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          w-64
          p-5
          flex
          flex-col
          bg-white
          border-r
          border-gray-200

          fixed
          md:static
          top-0
          left-0
          h-full
          z-20

          transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          transition-transform
          duration-300
          ease-in-out

          md:translate-x-0
        `}
      >
        {/* Sidebar Header */}

        <div className="flex items-center justify-between mb-8">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <h2 className="text-lg font-bold tracking-tight">
              Ease<span className="text-indigo-600">UI</span>
            </h2>

            <p className="text-xs text-gray-400 mt-0.5">Components</p>
          </div>

          {/* Mobile Close */}

          <button
            className="md:hidden text-gray-500 hover:text-gray-900"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Component Label */}

        <div className="mb-3">
          <p 
         
          className="px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400 " >
            Components
          </p>
        </div>

        {/* Component List */}

        <ul className="flex flex-col gap-1">
          {components.map((item) => {
            const Icon = componentIcons[item as keyof typeof componentIcons];

            const isActive =
              location.pathname === `/components/${item.toLowerCase()}`;

            return (
              <li
                onClick={() => {
                  navigate(item.toLowerCase());
                  setSidebarOpen(false);
                }}
                key={item}
                className={`
                  group
                  cursor-pointer
                  relative
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2.5
                  rounded-lg
                  text-sm
                  transition-all
                  duration-200
                  ease-in-out

                  ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {/* Active Indicator */}

                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-indigo-600" />
                )}

                <Icon
                  size={17}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={`
                    transition-colors
                    ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-400 group-hover:text-gray-600"
                    }
                  `}
                />

                <span>{item}</span>
              </li>
            );
          })}
        </ul>

        {/* Sidebar Bottom */}

        <div className="mt-auto">
          <div className="border-t border-gray-200 pt-5">
            <p className="text-xs text-gray-400 leading-relaxed">
              Beautiful components for building modern React applications.
            </p>

            <button
              onClick={() => navigate("/")}
              className="
                mt-4
                text-xs
                font-medium
                text-indigo-600
                hover:text-indigo-700
                transition-colors
              "
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="flex-1 min-w-0 overflow-auto h-screen">
        {/* Mobile Header */}

        <div className="md:hidden sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white/90 backdrop-blur border-b border-gray-200">
          <div>
            <p className="font-bold text-lg">
              Ease<span className="text-indigo-600">UI</span>
            </p>

            <p className="text-xs text-gray-400">Components</p>
          </div>

          <button
            className="
              h-9
              w-9
              rounded-lg
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-600
              hover:bg-gray-50
            "
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Page */}

        <main className="p-5 md:p-8 lg:p-10">
          {location.pathname === "/components" ? (
            <div className="max-w-5xl mx-auto">
              {/* Hero */}
              <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 p-8 md:p-12">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium text-indigo-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    EaseUI Components
                  </div>

                  <h1 className="mt-6 max-w-2xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                    Build beautiful interfaces
                    <span className="text-indigo-600"> faster.</span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-500">
                    A collection of reusable, customizable and
                    developer-friendly React components designed to help you
                    build modern interfaces quickly.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => navigate("/components/button")}
                      className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-indigo-600
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                shadow-sm
                transition-all
                hover:bg-indigo-700
                hover:-translate-y-0.5
              "
                    >
                      Explore Components
                    </button>

                    <button
                      onClick={() => navigate("/")}
                      className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-gray-200
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-700
                transition-all
                hover:bg-gray-50
              "
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </section>

              {/* Components */}
              <section className="mt-12">
                <div className="mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Explore Components
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Everything you need to build your next interface.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {components.map((item) => {
                    const Icon =
                      componentIcons[item as keyof typeof componentIcons];

                    return (
                      <button
                        key={item}
                        onClick={() => navigate(item.toLowerCase())}
                        className="
                  group
                  text-left
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  transition-all
                  duration-200
                  hover:border-indigo-200
                  hover:shadow-md
                  hover:-translate-y-0.5
                "
                      >
                        <div
                          className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-indigo-50
                  text-indigo-600
                  transition-colors
                  group-hover:bg-indigo-600
                  group-hover:text-white
                "
                        >
                          <Icon size={19} />
                        </div>

                        <h3
                          className="
                  mt-4
                  font-semibold
                  text-gray-900
                "
                        >
                          {item}
                        </h3>

                        <p
                          className="
                  mt-1
                  text-sm
                  leading-relaxed
                  text-gray-500
                "
                        >
                          Explore the {item.toLowerCase()} component and its
                          available options.
                        </p>

                        <div
                          className="
                  mt-4
                  text-xs
                  font-medium
                  text-indigo-600
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
                        >
                          View component →
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Bottom CTA */}
              <section className="mt-12">
                <div
                  className="
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          p-7
          text-center
        "
                >
                  <h2 className="text-xl font-semibold text-gray-900">
                    Ready to start building?
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Pick a component from the sidebar and start exploring its
                    API and examples.
                  </p>
                </div>
              </section>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default ComponentLayout;
