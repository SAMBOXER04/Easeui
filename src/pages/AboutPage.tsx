import {
  ArrowRight,
  Code2,
  Heart,
  Layers3,
  Sparkles,
  Zap,
  Github,
  Users,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button/Button";


const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-gray-200">

        {/* Background */}
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
              About the Library
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-6xl
                font-bold
                tracking-tight
                leading-tight
              "
              style={{ color: "var(--text-color)" }}
            >
              Built to make
              <span className="block text-indigo-600">
                UI development easier.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A modern collection of reusable React components
              designed to help developers build beautiful,
              consistent and responsive interfaces faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">

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
                View Documentation
              </Button>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Our Philosophy
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Less time writing UI.
              <br />
              More time building ideas.
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Building a modern interface often means writing the
              same UI patterns again and again. Buttons, cards,
              inputs, navigation, modals and layouts are common
              across almost every application.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              This library brings those patterns together into
              reusable components that are easy to understand,
              customize and integrate into your React projects.
            </p>

            <Button
              variant="link"
              className="px-0 mt-5"
              onClick={() => navigate("/components")}
            >
              Browse the components
              <ArrowRight size={16} className="ml-2" />
            </Button>

          </div>


          {/* Right - Visual */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">

              {/* Fake browser header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-200">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 h-6 flex-1 rounded-md bg-gray-100" />

              </div>

              {/* UI preview */}
              <div className="p-7">

                <div className="h-8 w-32 rounded-md bg-gray-100 mb-6" />

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-lg border border-gray-200 p-5">

                    <div className="h-9 w-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Layers3 size={18} />
                    </div>

                    <div className="h-3 w-24 rounded bg-gray-100 mt-4" />
                    <div className="h-2 w-32 rounded bg-gray-100 mt-2" />

                  </div>

                  <div className="rounded-lg border border-gray-200 p-5">

                    <div className="h-9 w-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <Zap size={18} />
                    </div>

                    <div className="h-3 w-24 rounded bg-gray-100 mt-4" />
                    <div className="h-2 w-32 rounded bg-gray-100 mt-2" />

                  </div>

                </div>

                <div className="flex gap-3 mt-5">

                  <Button size="sm">
                    Primary
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Secondary
                  </Button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              What we care about
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Designed with developers in mind.
            </h2>

            <p className="text-gray-600 mt-4">
              Every component is built around simplicity,
              flexibility and a great developer experience.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Simple */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">

              <div className="h-11 w-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Sparkles size={21} />
              </div>

              <h3 className="font-semibold text-lg mt-5">
                Simple
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Components have clear APIs that are easy to
                understand and use.
              </p>

            </div>


            {/* Flexible */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">

              <div className="h-11 w-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <Layers3 size={21} />
              </div>

              <h3 className="font-semibold text-lg mt-5">
                Flexible
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Customize components to match your project's
                design and requirements.
              </p>

            </div>


            {/* Fast */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">

              <div className="h-11 w-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <Zap size={21} />
              </div>

              <h3 className="font-semibold text-lg mt-5">
                Fast
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Start building interfaces without recreating
                common UI patterns.
              </p>

            </div>


            {/* Developer First */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">

              <div className="h-11 w-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                <Code2 size={21} />
              </div>

              <h3 className="font-semibold text-lg mt-5">
                Developer First
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                TypeScript-friendly APIs and predictable
                component behavior.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Built with modern technology
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Modern tools. Clean components.
          </h2>

          <p className="text-gray-600 mt-4">
            The library is designed around technologies
            developers already love.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {/* React */}
          <div className="rounded-xl border border-gray-200 p-7 hover:border-indigo-300 hover:shadow-md transition-all">

            <div className="text-3xl font-bold text-cyan-500">
              ⚛
            </div>

            <h3 className="text-xl font-semibold mt-5">
              React
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Component-based architecture for building
              powerful and interactive user interfaces.
            </p>

          </div>


          {/* TypeScript */}
          <div className="rounded-xl border border-gray-200 p-7 hover:border-indigo-300 hover:shadow-md transition-all">

            <div className="text-3xl font-bold text-blue-600">
              TS
            </div>

            <h3 className="text-xl font-semibold mt-5">
              TypeScript
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Strong typing and better developer tooling
              throughout the component library.
            </p>

          </div>


          {/* Tailwind */}
          <div className="rounded-xl border border-gray-200 p-7 hover:border-indigo-300 hover:shadow-md transition-all">

            <div className="text-3xl font-bold text-cyan-500">
              ≋
            </div>

            <h3 className="text-xl font-semibold mt-5">
              Tailwind CSS
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Utility-first styling that makes components
              easy to customize.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <p className="text-4xl font-bold text-indigo-600">
                8+
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Components
              </p>
            </div>


            <div>
              <p className="text-4xl font-bold text-indigo-600">
                100%
              </p>

              <p className="text-sm text-gray-500 mt-2">
                TypeScript
              </p>
            </div>


            <div>
              <p className="text-4xl font-bold text-indigo-600">
                ∞
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Possibilities
              </p>
            </div>


            <div>
              <p className="text-4xl font-bold text-indigo-600">
                1
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Simple Goal
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY / OPEN SOURCE
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Users size={23} />
              </div>

              <h2 className="text-3xl font-bold mt-6">
                Built for the community.
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Great UI libraries grow through feedback,
                experimentation and contributions. This project
                is designed to be explored, customized and
                improved over time.
              </p>

              <div className="flex flex-wrap gap-4 mt-7">

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate("/components")}
                >
                  Explore Library
                  <ArrowRight size={18} className="ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
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


            {/* Right */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">

                <Heart
                  size={22}
                  className="text-red-500"
                />

                <h3 className="font-semibold mt-4">
                  Open
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Built with openness and collaboration
                  in mind.
                </p>

              </div>


              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">

                <ShieldCheck
                  size={22}
                  className="text-green-500"
                />

                <h3 className="font-semibold mt-4">
                  Reliable
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Predictable APIs and reusable patterns.
                </p>

              </div>


              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">

                <Code2
                  size={22}
                  className="text-indigo-500"
                />

                <h3 className="font-semibold mt-4">
                  Developer Focused
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Designed around a smooth development
                  experience.
                </p>

              </div>


              <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">

                <Sparkles
                  size={22}
                  className="text-purple-500"
                />

                <h3 className="font-semibold mt-4">
                  Modern
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Built for today's React applications.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-16 md:px-16 text-center">

          <div className="absolute inset-0 opacity-20">

            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500 blur-3xl" />

          </div>

          <div className="relative">

            <p className="text-indigo-400 font-medium">
              Ready to build?
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Start exploring the library.
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto mt-5">
              Discover reusable components and start
              creating better interfaces today.
            </p>

            <Button
              variant="primary"
              size="lg"
              className="mt-8"
              onClick={() => navigate("/components")}
            >
              Explore Components
              <ArrowRight size={18} className="ml-2" />
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
                UI Library
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beautiful components for modern React applications.
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
                onClick={() => navigate("/components")}
                className="hover:text-indigo-600 transition-colors"
              >
                Components
              </button>

              <button
                onClick={() => navigate("/components/button")}
                className="hover:text-indigo-600 transition-colors"
              >
                Documentation
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

export default AboutPage;