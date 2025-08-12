import {
  ChartColumnBig,
  Warehouse,
  ReceiptText,
  Files,
  PackageSearch,
} from "lucide-react";

const online = [
  {
    label: "services.eStock.label",
    description: "services.eStock.content",
    link: "https://estock.temasline.com",
    icon: ChartColumnBig,
  },
  {
    label: "services.edms.label",
    description: "services.edms.content",
    link: "https://edms.temasline.com",
    icon: Warehouse,
  },
  {
    label: "services.eFaktur.label",
    description: "services.eFaktur.content",
    link: "https://efaktur.temasline.com",
    icon: ReceiptText,
  },
  {
    label: "services.eEir.label",
    description: "services.eEir.content",
    link: "https://eir.temasline.com",
    icon: Files,
  },
  {
    label: "services.eSearching.label",
    description: "services.eSearching.content",
    link: "https://searching.temasline.com",
    icon: PackageSearch,
  },
];

export { online };
