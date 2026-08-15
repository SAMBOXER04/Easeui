import {
  ArrowRight,
  Code2,
  Layers3,
  Sparkles,
  Zap,
  Github,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button/Button";
import { Layout } from "@/components/Layout/Layout";

const HomePage = () => {
  const navigate = useNavigate();

  const components = [
    {
      name: "Button",
      description:
        "Flexible buttons with variants, sizes and animations.",
      route: "/components/button",
      letter: "B",
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    {
      name: "Card",
      description:
        "Flexible containers for displaying and organizing content.",
      route: "/components/card",
      letter: "C",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      name: "Modal",
      description:
        "Dialogs for displaying important content and actions.",
      route: "/components/modal",
      letter: "M",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    {
      name: "Input",
      description:
        "Clean and flexible inputs for building forms.",
      route: "/components/input",
      letter: "I",
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      name: "Navbar",
      description:
        "Navigation components for modern interfaces.",
      route: "/components/navbar",
      letter: "N",
      bg: "bg-cyan-100",
      text: "text-cyan-600",
    },
    {
      name: "Carousel",
      description:
        "Display content through smooth interactive slides.",
      route: "/components/carousel",
      letter: "C",
      bg: "bg-pink-100",
      text: "text-pink-600",
    },
    {
      name: "Tooltip",
      description:
        "Display contextual information when users interact with an element.",
      route: "/components/tooltip",
      letter: "T",
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      name: "Layout",
      description:
        "Flexible layouts for arranging content with ease.",
      route: "/components/layout",
      letter: "L",
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-gray-200">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 mb-8">
              <Sparkles size={15} />
              Modern React UI Library
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                tracking-tight
                leading-tight
              "
              style={{ color: "var(--text-color)" }}
            >
              Build beautiful
              <span className="block text-indigo-600">
                interfaces faster.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A collection of reusable, customizable and
              developer-friendly React components built with
              TypeScript and Tailwind CSS.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

              <Button
                variant="primary"
                size="lg"
                hoverAnimation="scale"
                onClick={() => navigate("/components")}
              >
                Explore Components
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/components/button")}
              >
                <Code2 size={18} className="mr-2" />
                Get Started
              </Button>

            </div>

            {/* Technologies */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">

              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                TypeScript
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                Tailwind CSS
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                React
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COMPONENT SHOWCASE
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-12">

          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Component Library
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Everything you need to build
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Flexible components designed to work together
            and help you create modern interfaces quickly.
          </p>

        </div>


        {/* Showcase */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-10 shadow-sm">

          <Layout
            direction="column"
            gap={8}
            align="center"
          >

            {/* Buttons */}
            <Layout
              gap={4}
              align="center"
            >

              <Button
                variant="primary"
                size="sm"
                hoverAnimation="jiggle"
              >
                Primary
              </Button>

              <Button
                variant="secondary"
                size="lg"
                hoverAnimation="bounce"
              >
                Secondary
              </Button>

              <Button
                variant="outline"
                size="sm"
              >
                Outline
              </Button>

              <Button
                variant="dark"
                size="sm"
              >
                Dark
              </Button>

            </Layout>


            {/* Feature Preview Cards */}
            <Layout
              gap={4}
              fullWidth
            >

              <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6">

                <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Layers3 size={20} />
                </div>

                <h3 className="font-semibold mt-4">
                  Reusable
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Build interfaces using flexible
                  reusable components.
                </p>

              </div>


              <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6">

                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <Zap size={20} />
                </div>

                <h3 className="font-semibold mt-4">
                  Fast
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Create polished interfaces without
                  starting from scratch.
                </p>

              </div>


              <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6">

                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <Code2 size={20} />
                </div>

                <h3 className="font-semibold mt-4">
                  Developer Friendly
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Written in TypeScript with a simple
                  and predictable API.
                </p>

              </div>

            </Layout>

          </Layout>

        </div>
      </section>


      {/* =====================================================
          WHY THIS LIBRARY
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="max-w-2xl mb-14">

            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Why this library?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Simple components.
              Powerful interfaces.
            </h2>

            <p className="text-gray-600 mt-4">
              Everything is designed to be easy to understand,
              customize and reuse across your projects.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {/* TypeScript */}
            <div className="rounded-xl border border-gray-200 bg-white p-7">

              <div className="h-11 w-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Code2 size={22} />
              </div>

              <h3 className="text-lg font-semibold mt-5">
                TypeScript First
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Fully typed component APIs make your
                development experience safer and easier.
              </p>

            </div>


            {/* Customizable */}
            <div className="rounded-xl border border-gray-200 bg-white p-7">

              <div className="h-11 w-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <Sparkles size={22} />
              </div>

              <h3 className="text-lg font-semibold mt-5">
                Customizable
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Change variants, sizes, spacing,
                animations and styles to match your project.
              </p>

            </div>


            {/* Ready */}
            <div className="rounded-xl border border-gray-200 bg-white p-7">

              <div className="h-11 w-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <Zap size={22} />
              </div>

              <h3 className="text-lg font-semibold mt-5">
                Ready to Use
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Drop components directly into your project
                and start building immediately.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          POPULAR COMPONENTS
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          <div>

            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Explore
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Popular Components
            </h2>

            <p className="text-gray-600 mt-3">
              Start with the components you need.
            </p>

          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/components")}
          >
            View all components
            <ArrowRight size={16} className="ml-2" />
          </Button>

        </div>


        {/* Component Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {components.map((component) => (

            <div
              key={component.name}
              onClick={() => navigate(component.route)}
              className="
                group
                cursor-pointer
                rounded-xl
                border
                border-gray-200
                p-6
                bg-white
                hover:border-indigo-300
                hover:shadow-md
                hover:-translate-y-1
                transition-all
              "
            >

              <div
                className={`
                  h-11
                  w-11
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  ${component.bg}
                  ${component.text}
                `}
              >
                <span className="font-bold">
                  {component.letter}
                </span>
              </div>

              <h3 className="font-semibold mt-5">
                {component.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                {component.description}
              </p>

              <div className="mt-5 text-sm text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore
                <ArrowRight size={14} />
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CODE SECTION
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>

              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Simple API
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Start building in seconds.
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Import a component, customize it with props
                and you're ready to build.
              </p>

              <Button
                variant="primary"
                size="lg"
                className="mt-7"
                onClick={() => navigate("/components/button")}
              >
                Read Documentation
                <ArrowRight size={18} className="ml-2" />
              </Button>

            </div>


            {/* Code Window */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">

              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs text-slate-500">
                  example.tsx
                </span>

              </div>

              <pre className="p-6 text-sm leading-7 overflow-x-auto text-slate-300">
{`import { Button } from "@/components/Button";

export default function App() {
  return (
    <Button
      variant="primary"
      size="lg"
      hoverAnimation="scale"
    >
      Get Started
    </Button>
  );
}`}
              </pre>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-16 md:px-16 text-center">

          {/* Glow */}
          <div className="absolute inset-0 opacity-20">

            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500 blur-3xl" />

          </div>

          <div className="relative">

            <p className="text-indigo-400 font-medium">
              Start building today
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Build something beautiful.
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto mt-5">
              Explore the components, customize them for your
              project and create interfaces you love.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/components")}
              >
                Explore Components
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-slate-700 hover:bg-slate-800"
                onClick={() => {
                  window.open(
                    "https://github.com",
                    "_blank"
                  );
                }}
              >
                <Github size={18} className="mr-2" />
                GitHub
              </Button>

            </div>

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
                UI Library
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beautiful components for modern React applications.
              </p>

            </div>


            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">

              <button
                onClick={() => navigate("/components")}
                className="hover:text-indigo-600 transition-colors"
              >
                Documentation
              </button>

              <button
                onClick={() => navigate("/components")}
                className="hover:text-indigo-600 transition-colors"
              >
                Components
              </button>

              <button
                onClick={() => {
                  window.open(
                    "https://github.com",
                    "_blank"
                  );
                }}
                className="hover:text-indigo-600 transition-colors"
              >
                GitHub
              </button>

            </div>

          </div>


          <div className="border-t border-gray-200 mt-8 pt-6 text-sm text-gray-500">
            © 2026 UI Library. Built with React, TypeScript and Tailwind CSS.
          </div>

        </div>

      </footer>

    </div>
  );
};

export default HomePage;