import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Code2,
  LayoutTemplate,
  Monitor,
  ShoppingBag,
  Smartphone,
  UserRound,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button/Button";
import ComponentDemo from "./ComponentsDemo";

const TemplatePage = () => {
  const navigate = useNavigate();

  // -------------------------------------------------------
  // TEMPLATE CODE
  // -------------------------------------------------------

  const saasCode = `
import { Button } from "@/components/Button/Button";
import { Layout } from "@/components/Layout/Layout";

<Layout direction="column" align="center" gap={6}>
  <h1 className="text-5xl font-bold">
    Build faster with EaseUI
  </h1>

  <p className="text-gray-600">
    Beautiful components for modern React applications.
  </p>

  <Button variant="primary" size="lg">
    Get Started
  </Button>
</Layout>
`;

  const ecommerceCode = `
import { Button } from "@/components/Button/Button";
import { Layout } from "@/components/Layout/Layout";

<Layout direction="column" gap={6}>
  <h1 className="text-4xl font-bold">
    Everything you need.
  </h1>

  <div className="grid grid-cols-3 gap-4">
    <div className="border rounded-lg p-4">
      Product 1
    </div>

    <div className="border rounded-lg p-4">
      Product 2
    </div>

    <div className="border rounded-lg p-4">
      Product 3
    </div>
  </div>
</Layout>
`;

  const dashboardCode = `
import { Layout } from "@/components/Layout/Layout";

<Layout direction="column" gap={4}>
  <h1 className="text-3xl font-bold">
    Dashboard
  </h1>

  <div className="grid grid-cols-3 gap-4">
    <div className="border rounded-lg p-5">
      Total Revenue
    </div>

    <div className="border rounded-lg p-5">
      Users
    </div>

    <div className="border rounded-lg p-5">
      Orders
    </div>
  </div>
</Layout>
`;

  const portfolioCode = `
import { Button } from "@/components/Button/Button";

<div className="text-center">
  <p className="text-indigo-600">
    Hello, I'm
  </p>

  <h1 className="text-5xl font-bold mt-2">
    John Doe
  </h1>

  <p className="text-gray-600 mt-4">
    Frontend Developer & Designer
  </p>

  <Button variant="primary" className="mt-6">
    View My Work
  </Button>
</div>
`;

  // -------------------------------------------------------
  // UI
  // -------------------------------------------------------

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="space-y-3">

        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Templates
        </p>

        <p className="text-lg text-gray-600">
          Beautiful, ready-to-use website templates built with
          reusable EaseUI components.
        </p>

      </header>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Build faster
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Start your next project with a complete layout instead
          of building everything from scratch. Each template is
          designed using EaseUI components.
        </p>

      </section>


      {/* =====================================================
          SAAS TEMPLATE
      ====================================================== */}

      <section className="space-y-5">

        <div>
          <div className="flex items-center gap-3">

            <div className="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <LayoutTemplate size={20} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                SaaS Landing Page
              </h2>

              <p className="text-sm text-gray-500">
                Landing page for SaaS products and startups.
              </p>
            </div>

          </div>
        </div>

        <ComponentDemo code={saasCode}>

          <div className="w-full">

            <div className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">

              {/* Navbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b">

                <div className="font-bold text-lg text-indigo-600">
                  EaseUI
                </div>

                <div className="hidden md:flex items-center gap-5 text-sm text-gray-500">
                  <span>Features</span>
                  <span>Pricing</span>
                  <span>About</span>
                </div>

                <Button size="sm">
                  Get Started
                </Button>

              </div>

              {/* Hero */}
              <div className="text-center px-6 py-16">

                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 text-xs font-medium">
                  <Zap size={12} />
                  Build faster
                </div>

                <h1 className="text-4xl font-bold mt-5">
                  Build beautiful
                  <span className="text-indigo-600">
                    {" "}interfaces.
                  </span>
                </h1>

                <p className="text-gray-500 max-w-lg mx-auto mt-4">
                  A modern UI component library for building
                  beautiful React applications faster.
                </p>

                <div className="flex justify-center gap-3 mt-7">

                  <Button>
                    Get Started
                    <ArrowRight size={15} className="ml-2" />
                  </Button>

                  <Button variant="outline">
                    Documentation
                  </Button>

                </div>

              </div>

            </div>

          </div>

        </ComponentDemo>

      </section>


      {/* =====================================================
          ECOMMERCE TEMPLATE
      ====================================================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
            <ShoppingBag size={20} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              E-Commerce
            </h2>

            <p className="text-sm text-gray-500">
              Product-focused online store template.
            </p>
          </div>

        </div>

        <ComponentDemo code={ecommerceCode}>

          <div className="w-full">

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

              {/* Navbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b">

                <div className="font-bold text-lg">
                  Shoply
                </div>

                <div className="flex items-center gap-5 text-sm text-gray-500">
                  <span>Shop</span>
                  <span>Collections</span>
                  <span>About</span>
                </div>

                <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingBag size={16} />
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-end justify-between mb-6">

                  <div>
                    <p className="text-sm text-indigo-600 font-medium">
                      Featured
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                      Popular Products
                    </h2>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                  >
                    View All
                  </Button>

                </div>

                <div className="grid grid-cols-3 gap-4">

                  {[1, 2, 3].map((item) => (

                    <div
                      key={item}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >

                      <div className="h-28 bg-gray-100 flex items-center justify-center">
                        <ShoppingBag
                          size={28}
                          className="text-gray-400"
                        />
                      </div>

                      <div className="p-4">

                        <p className="font-medium">
                          Product {item}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          $49.00
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </ComponentDemo>

      </section>


      {/* =====================================================
          DASHBOARD TEMPLATE
      ====================================================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
            <BarChart3 size={20} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Dashboard
            </h2>

            <p className="text-sm text-gray-500">
              Analytics dashboard for business applications.
            </p>
          </div>

        </div>

        <ComponentDemo code={dashboardCode}>

          <div className="w-full">

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

              <div className="flex">

                {/* Sidebar */}
                <div className="w-40 border-r p-4 hidden md:block">

                  <div className="font-bold text-indigo-600 mb-6">
                    Dashboard
                  </div>

                  <div className="space-y-3 text-sm text-gray-500">

                    <div className="text-indigo-600 font-medium">
                      Overview
                    </div>

                    <div>Analytics</div>
                    <div>Customers</div>
                    <div>Settings</div>

                  </div>

                </div>

                {/* Main */}
                <div className="flex-1 p-6">

                  <div className="flex items-center justify-between mb-6">

                    <div>
                      <h2 className="text-xl font-bold">
                        Overview
                      </h2>

                      <p className="text-sm text-gray-500">
                        Here's what's happening today.
                      </p>
                    </div>

                    <Button size="sm">
                      Export
                    </Button>

                  </div>

                  <div className="grid grid-cols-3 gap-3">

                    <div className="border rounded-lg p-4">

                      <p className="text-xs text-gray-500">
                        Revenue
                      </p>

                      <p className="text-xl font-bold mt-2">
                        $24,500
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        +12.5%
                      </p>

                    </div>

                    <div className="border rounded-lg p-4">

                      <p className="text-xs text-gray-500">
                        Customers
                      </p>

                      <p className="text-xl font-bold mt-2">
                        8,549
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        +8.2%
                      </p>

                    </div>

                    <div className="border rounded-lg p-4">

                      <p className="text-xs text-gray-500">
                        Orders
                      </p>

                      <p className="text-xl font-bold mt-2">
                        1,249
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        +5.4%
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </ComponentDemo>

      </section>


      {/* =====================================================
          PORTFOLIO TEMPLATE
      ====================================================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
            <UserRound size={20} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Portfolio
            </h2>

            <p className="text-sm text-gray-500">
              Personal portfolio for developers and designers.
            </p>
          </div>

        </div>

        <ComponentDemo code={portfolioCode}>

          <div className="w-full">

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 text-center">

              <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <UserRound size={28} />
              </div>

              <p className="text-indigo-600 text-sm font-medium mt-5">
                Hello, I'm
              </p>

              <h1 className="text-3xl font-bold mt-1">
                Alex Morgan
              </h1>

              <p className="text-gray-500 mt-2">
                Frontend Developer & UI Designer
              </p>

              <p className="text-sm text-gray-500 max-w-md mx-auto mt-4">
                I create modern, accessible and beautiful
                digital experiences for the web.
              </p>

              <div className="flex justify-center gap-3 mt-6">

                <Button>
                  View My Work
                </Button>

                <Button variant="outline">
                  Contact Me
                </Button>

              </div>

            </div>

          </div>

        </ComponentDemo>

      </section>


      {/* =====================================================
          TEMPLATE FEATURES
      ====================================================== */}

      <section className="space-y-6">

        <h2 className="text-2xl font-semibold">
          Why use EaseUI templates?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border border-gray-200 rounded-lg p-6">

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Zap size={19} />
              </div>

              <h3 className="font-semibold">
                Build Faster
              </h3>

            </div>

            <p className="text-sm text-gray-600 mt-3">
              Start with complete page structures instead of
              creating every section from scratch.
            </p>

          </div>


          <div className="border border-gray-200 rounded-lg p-6">

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                <Check size={19} />
              </div>

              <h3 className="font-semibold">
                Reusable Components
              </h3>

            </div>

            <p className="text-sm text-gray-600 mt-3">
              Templates are built using the same reusable
              components available in EaseUI.
            </p>

          </div>


          <div className="border border-gray-200 rounded-lg p-6">

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Code2 size={19} />
              </div>

              <h3 className="font-semibold">
                TypeScript Ready
              </h3>

            </div>

            <p className="text-sm text-gray-600 mt-3">
              Built with React and TypeScript for a better
              developer experience.
            </p>

          </div>


          <div className="border border-gray-200 rounded-lg p-6">

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <Smartphone size={19} />
              </div>

              <h3 className="font-semibold">
                Responsive
              </h3>

            </div>

            <p className="text-sm text-gray-600 mt-3">
              Designed to work smoothly across desktop,
              tablet and mobile devices.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section>

        <div className="rounded-xl bg-slate-900 text-white p-10 md:p-14 text-center">

          <h2 className="text-3xl font-bold">
            Ready to build something?
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Explore EaseUI components and start building your
            next project faster.
          </p>

          <div className="flex justify-center gap-3 mt-7">

            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/components")}
            >
              Explore Components
              <ArrowRight size={17} className="ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>

              <p className="font-bold text-lg">
                EaseUI
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beautiful components and templates for React.
              </p>

            </div>


            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">

              <button
                onClick={() => navigate("/")}
                className="hover:text-indigo-600 transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => navigate("/about")}
                className="hover:text-indigo-600 transition-colors"
              >
                About
              </button>

              <button
                onClick={() => navigate("/components")}
                className="hover:text-indigo-600 transition-colors"
              >
                Components
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("templates")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-indigo-600 transition-colors"
              >
                Templates
              </button>

            </div>

          </div>


          <div className="border-t border-gray-200 mt-8 pt-6 text-sm text-gray-500">
            © 2026 EaseUI. Built with React, TypeScript and Tailwind CSS.
          </div>

        </div>

      </footer>

    </div>
  );
};

export default TemplatePage;