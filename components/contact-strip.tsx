import { Mail, MapPin, PhoneCall } from "lucide-react"

const contactItems = [
  {
    icon: MapPin,
    label: "Restaurant address",
    value: "4648 Rocky Road, Philadelphia",
    href: "https://maps.google.com/?q=4648+Rocky+Road+Philadelphia",
    external: true,
  },
  {
    icon: Mail,
    label: "Send us an email",
    value: "info@fresheat.com",
    href: "mailto:info@fresheat.com",
    external: false,
  },
  {
    icon: PhoneCall,
    label: "Direct order hotline",
    value: "+1 (800) 373-7432",
    href: "tel:+18003737432",
    external: false,
  },
]

export function ContactStrip() {
  return (
    <section id="contact" className="scroll-mt-28 bg-ember py-10 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value, href, external }) => (
            <div key={label} className="flex items-center gap-3.5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-charcoal/20 text-cream">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-[9px] font-bold tracking-[0.18em] text-cream/70 uppercase">
                  {label}
                </span>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="font-display mt-0.5 block truncate text-base font-bold text-cream underline-offset-4 hover:underline"
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
