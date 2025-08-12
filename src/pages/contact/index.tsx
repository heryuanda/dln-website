import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const contactCards = [
    {
      title: "contact.address",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        "Jl. Yos Sudarso Kav. 33, Sunter Jaya",
        "Jakarta Utara 14350",
        "Indonesia",
      ],
    },
    {
      title: "contact.phone",
      icon: <Phone className="h-6 w-6" />,
      details: ["(+62-21)4606034"],
    },
    {
      title: "contact.email",
      icon: <Mail className="h-6 w-6" />,
      details: ["jktequ@lanus.co.id"],
    },
  ];

  const { t } = useTranslation();
  return (
    <section className="relative py-12 md:py-16 bg-slate-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t("contact.label")}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {t("contact.caption")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+62214606034"
              className="bg-primary-orange px-3 py-2 rounded-md text-white hover:bg-base-dark-blue cursor-pointer flex items-center gap-x-2 text-sm"
            >
              <Phone size={16} /> {t("contact.callUs")}
            </a>
            <a
              href="mailto:jktequ@lanus.co.id"
              className="bg-white hover:bg-slate-100 transition-colors flex items-center gap-x-2 text-sm border rounded-md px-3 py-2"
            >
              <Mail size={16} /> {t("contact.emailUs")}
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-20 px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <div
              key={"contact-" + index}
              className="flex flex-col items-center text-center border border-primary-orange p-4 rounded-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/50 text-white mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{t(card.title)}</h3>
              <ul className="">
                {card.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
