export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Sleep Better Tonight
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Your Bedroom for{" "}
          <span className="text-[#58a6ff]">Perfect Sleep</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          Track temperature, humidity, noise, and light levels in real time. Get ML-powered recommendations to create your ideal sleep environment and wake up refreshed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Optimizing — $9/mo
          </a>
          <span className="text-sm text-[#8b949e]">Cancel anytime. No contracts.</span>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
          {[
            { icon: "🌡️", label: "Temperature" },
            { icon: "💧", label: "Humidity" },
            { icon: "🔇", label: "Noise Level" },
            { icon: "💡", label: "Light Level" }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm text-[#8b949e]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm w-full text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff]">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for better sleep</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time environmental dashboard",
              "IoT sensor device integration",
              "ML-powered sleep recommendations",
              "Historical trend analysis",
              "Supabase-backed data storage",
              "Email alerts for poor conditions"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What sensors or devices do I need?",
              a: "We support popular IoT sensors like Govee, SwitchBot, and any device with a REST API. You can also manually log readings from a basic thermometer/hygrometer."
            },
            {
              q: "How does the ML recommendation engine work?",
              a: "Our model analyzes your environmental data alongside sleep science research to suggest optimal temperature (65–68°F), humidity (40–60%), and darkness levels personalized to your patterns."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-[#484f58] border-t border-[#21262d]">
        © {new Date().getFullYear()} Sleep Quality Room Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
