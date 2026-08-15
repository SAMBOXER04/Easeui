import { Navbar } from "@/components/Navbar/Navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const propsData = [
    {
      prop: "logo",
      type: "React.ReactNode",
      default: "—",
      description: "Content displayed on the left side of the navbar",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description: "Navigation links or content inside the navbar",
    },
    {
      prop: "actions",
      type: "React.ReactNode",
      default: "—",
      description: "Actions displayed on the right side of the navbar",
    },
    {
      prop: "variant",
      type: '"default" | "dark" | "transparent" | "outline"',
      default: '"default"',
      description: "Controls the visual style of the navbar",
    },
    {
      prop: "sticky",
      type: "boolean",
      default: "false",
      description: "Makes the navbar stick to the top of the page",
    },
    {
      prop: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Makes the navbar take the full available width",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes for the navbar",
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
          Navbar
        </p>

        <p className="text-lg text-gray-600">
          A responsive navigation component for displaying branding,
          navigation links, and actions.
        </p>
      </header>

      {/* Usage */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        {/* Basic Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Basic Navbar
          </h3>

          <ComponentDemo
            code={`
import { Navbar } from "@/components/Navbar/Navbar";

<Navbar
  logo={
    <span className="text-xl font-bold">
      MyApp
    </span>
  }
>
  <a href="#" className="hover:text-indigo-600">
    Home
  </a>

  <a href="#" className="hover:text-indigo-600">
    About
  </a>

  <a href="#" className="hover:text-indigo-600">
    Contact
  </a>
</Navbar>
`}
          >
            <Navbar
              logo={
                <span className="text-xl font-bold">
                  MyApp
                </span>
              }
            >
              <a href="#" className="hover:text-indigo-600">
                Home
              </a>

              <a href="#" className="hover:text-indigo-600">
                About
              </a>

              <a href="#" className="hover:text-indigo-600">
                Contact
              </a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Navbar With Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Navbar With Actions
          </h3>

          <ComponentDemo
            code={`
<Navbar
  logo={
    <span className="text-xl font-bold text-indigo-600">
      Brand
    </span>
  }
  actions={
    <>
      <button className="px-4 py-2 text-sm">
        Login
      </button>

      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Sign Up
      </button>
    </>
  }
>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Pricing</a>
</Navbar>
`}
          >
            <Navbar
              logo={
                <span className="text-xl font-bold text-indigo-600">
                  Brand
                </span>
              }
              actions={
                <>
                  <button className="px-4 py-2 text-sm">
                    Login
                  </button>

                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                    Sign Up
                  </button>
                </>
              }
            >
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Dark Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Dark Navbar
          </h3>

          <ComponentDemo
            code={`
<Navbar
  variant="dark"
  logo={
    <span className="text-xl font-bold">
      DarkUI
    </span>
  }
>
  <a href="#">Home</a>
  <a href="#">Components</a>
  <a href="#">Documentation</a>
</Navbar>
`}
          >
            <Navbar
              variant="dark"
              logo={
                <span className="text-xl font-bold">
                  DarkUI
                </span>
              }
            >
              <a href="#">Home</a>
              <a href="#">Components</a>
              <a href="#">Documentation</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Transparent Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Transparent Navbar
          </h3>

          <ComponentDemo
            code={`
<div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg">
  <Navbar
    variant="transparent"
    logo={
      <span className="text-xl font-bold text-white">
        Brand
      </span>
    }
  >
    <a href="#">Home</a>
    <a href="#">Features</a>
    <a href="#">Pricing</a>
  </Navbar>
</div>
`}
          >
            <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg">
              <Navbar
                variant="transparent"
                logo={
                  <span className="text-xl font-bold text-white">
                    Brand
                  </span>
                }
              >
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
              </Navbar>
            </div>
          </ComponentDemo>
        </div>

        {/* Outline Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Outline Navbar
          </h3>

          <ComponentDemo
            code={`
<Navbar
  variant="outline"
  logo={
    <span className="text-xl font-bold">
      UI Kit
    </span>
  }
>
  <a href="#">Home</a>
  <a href="#">Components</a>
  <a href="#">Examples</a>
</Navbar>
`}
          >
            <Navbar
              variant="outline"
              logo={
                <span className="text-xl font-bold">
                  UI Kit
                </span>
              }
            >
              <a href="#">Home</a>
              <a href="#">Components</a>
              <a href="#">Examples</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Centered Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Centered Navigation
          </h3>

          <ComponentDemo
            code={`
<Navbar
  logo={
    <span className="text-xl font-bold">
      Logo
    </span>
  }
  className="justify-center"
>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</Navbar>
`}
          >
            <Navbar
              logo={
                <span className="text-xl font-bold">
                  Logo
                </span>
              }
              className="justify-center"
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* CTA Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Navbar With CTA
          </h3>

          <ComponentDemo
            code={`
<Navbar
  logo={
    <span className="text-xl font-bold text-indigo-600">
      DevUI
    </span>
  }
  actions={
    <button className="bg-indigo-600 text-white px-5 py-2 rounded-md">
      Get Started
    </button>
  }
>
  <a href="#">Docs</a>
  <a href="#">Components</a>
  <a href="#">GitHub</a>
</Navbar>
`}
          >
            <Navbar
              logo={
                <span className="text-xl font-bold text-indigo-600">
                  DevUI
                </span>
              }
              actions={
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-md">
                  Get Started
                </button>
              }
            >
              <a href="#">Docs</a>
              <a href="#">Components</a>
              <a href="#">GitHub</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Sticky Navbar */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Sticky Navbar
          </h3>

          <ComponentDemo
            code={`
<Navbar
  sticky
  logo={
    <span className="text-xl font-bold">
      StickyUI
    </span>
  }
>
  <a href="#">Home</a>
  <a href="#">Docs</a>
  <a href="#">Blog</a>
</Navbar>
`}
          >
            <Navbar
              sticky
              logo={
                <span className="text-xl font-bold">
                  StickyUI
                </span>
              }
            >
              <a href="#">Home</a>
              <a href="#">Docs</a>
              <a href="#">Blog</a>
            </Navbar>
          </ComponentDemo>
        </div>

        {/* Full Width */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Full Width Navbar
          </h3>

          <ComponentDemo
            code={`
<Navbar
  fullWidth
  logo={
    <span className="text-xl font-bold">
      FullWidth
    </span>
  }
>
  <a href="#">Home</a>
  <a href="#">Features</a>
  <a href="#">Pricing</a>
</Navbar>
`}
          >
            <Navbar
              fullWidth
              logo={
                <span className="text-xl font-bold">
                  FullWidth
                </span>
              }
            >
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
            </Navbar>
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

export default NavbarPage;