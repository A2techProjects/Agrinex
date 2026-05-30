import {
  Plus,
  Minus,
  ArrowRight,
  Asterisk,
} from "lucide-react";

const services = [
  {
    title: "Smart Crop Monitoring",
    description:
      "We provide AI-powered monitoring systems that help farmers track crop health, detect diseases early, and improve production efficiency.",
  },

  {
    title: "Precision Agriculture",
    description:
      "Using satellite data, IoT devices, and analytics, we optimize irrigation, fertilizer usage, and field productivity.",
  },

  {
    title: "Sustainable Farming",
    description:
      "AgriNex promotes eco-friendly farming practices focused on long-term sustainability and environmental balance.",
  },

  {
    title: "Market Intelligence",
    description:
      "Farmers gain access to real-time market insights, pricing trends, and demand forecasting for smarter decisions.",
  },
];

const news = [
  {
    date: "December 12, 2025",
    title:
      "AgriNex expands smart farming support across rural Bangladesh",
  },

  {
    date: "November 22, 2025",
    title:
      "AI-based irrigation system reduces water usage by 40%",
  },

  {
    date: "October 18, 2025",
    title:
      "AgriNex launches farmer education initiative",
  },

  {
    date: "September 06, 2025",
    title:
      "Partnership announced with sustainable agriculture organizations",
  },
];

export default function AboutPage() {
  return (
    <main className="px-2 md:px-8">
      <img
        src="https://cdn.pixabay.com/photo/2025/08/17/07/43/tractor-9779346_1280.jpg"
        alt="Banner"
        className="mt-28 h-72 w-full rounded-3xl object-cover md:h-128"
      />

      {/* About */}
      <section className="mt-12 grid gap-12 md:grid-cols-[0.55fr_1.45fr]">
        <div className="flex items-center gap-2">
          <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary font-bold text-black">
            <Asterisk size={22} />
          </span>

          <span className="font-cottorway text-xl font-medium uppercase text-stone-800">
            ABOUT US
          </span>
        </div>

        <div>
          <h2 className="font-cottorway text-3xl font-semibold leading-tight tracking-tight text-stone-900 md:text-4xl xl:text-[3.5rem] xl:leading-16">
            AgriNex delivers advanced
            farming support with data-driven
            analysis, sustainable practices,
            and reliable agricultural
            services.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="max-w-xl text-sm text-black/65 md:text-lg">
              AgriNex is a smart
              agricultural platform that
              empowers farmers with modern
              technology and innovative
              solutions. By combining
              real-time crop monitoring with
              advanced analytics, we help
              reduce risks and maximize
              yields.
            </p>

            <p className="max-w-xl text-sm text-black/65 md:text-lg">
              Our platform supports farmers
              through precision agriculture,
              sustainability-focused
              practices, and market insights
              that improve long-term
              agricultural growth and
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-24 grid grid-cols-2 border-t border-black/15 md:grid-cols-5">
        {[
          {
            label: "Farmers supported",
            value: "193K",
          },

          {
            label: "Countries reached",
            value: "09",
          },

          {
            label: "Years of experience",
            value: "28",
          },

          {
            label: "Agriculture awards",
            value: "70",
          },

          {
            label: "Experts on team",
            value: "26",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border-r border-black/15 px-4 py-5 last:border-r-0"
          >
            <p className="text-sm text-black/45">
              {item.label}
            </p>

            <h3 className="mt-2 text-5xl tracking-[-0.05em] md:text-7xl">
              {item.value}
            </h3>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="mt-28 grid gap-12 md:grid-cols-[0.55fr_1.45fr]">
        <div className="flex items-center gap-2">
          <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary font-bold text-black">
            <Asterisk size={22} />
          </span>

          <span className="font-cottorway text-xl font-medium uppercase text-stone-800">
            Services
          </span>
        </div>

        <div>
          <h2 className="font-cottorway text-3xl font-semibold leading-tight tracking-tight text-stone-900 md:text-4xl xl:text-[3.5rem] xl:leading-16">
            AgriNex transforms modern
            agriculture through intelligent
            systems, automation, and
            data-driven farming solutions.
          </h2>

          <div className="mt-16 border-t border-black/15">
            {services.map(
              (service, index) => (
                <details
                  key={index}
                  className="group border-b border-black/15 py-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <div className="flex gap-8">
                      <span className="text-sm text-black/40">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-2xl md:text-3xl">
                          {service.title}
                        </h3>

                        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-open:grid-rows-[1fr]">
                          <div className="overflow-hidden">
                            <p className="mt-4 max-w-3xl text-sm text-black/65 md:text-lg">
                              {
                                service.description
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-2 size-5 shrink-0">
                      <Plus className="absolute inset-0 transition-opacity duration-300 group-open:opacity-0" />

                      <Minus className="absolute inset-0 opacity-0 transition-opacity duration-300 group-open:opacity-100" />
                    </div>
                  </summary>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      <img
        src="https://cdn.pixabay.com/photo/2025/07/27/13/52/combine-harvester-9738590_1280.jpg"
        alt="Banner"
        className="mt-28 h-72 w-full rounded-3xl object-cover md:h-128"
      />

      {/* News */}
      <section className="mt-28 mb-12 grid gap-12 md:grid-cols-[0.55fr_1.45fr]">
        <div className="flex items-center gap-2">
          <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary font-bold text-black">
            <Asterisk size={22} />
          </span>

          <span className="font-cottorway text-xl font-medium uppercase text-stone-800">
            News
          </span>
        </div>

        <div>
          <h2 className="font-cottorway text-3xl font-semibold leading-tight tracking-tight text-stone-900 md:text-4xl xl:text-[3.5rem] xl:leading-16">
            Stay updated on our latest
            agricultural innovations,
            sustainability initiatives, and
            farmer-focused technologies.
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {news.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[260px] flex-col justify-between border border-black/15 p-5"
              >
                <div>
                  <p className="text-sm text-black/40">
                    {item.date}
                  </p>

                  <h3 className="mt-4 text-xl leading-snug">
                    {item.title}
                  </h3>
                </div>

                <button className="mt-10 text-left text-sm underline underline-offset-4">
                  Read more
                </button>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-full border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white">
            View all
          </button>
        </div>
      </section>
    </main>
  );
}