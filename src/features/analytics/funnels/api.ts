import { Funnel } from "./types";

export async function fetchFunnels(): Promise<Funnel[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      id: "1",
      name: "Sign Up Funnel",
      totalConversion: 12.4,
      steps: [
        { id: "1", name: "Landing Page", value: 10000, percentage: 100 },
        { id: "2", name: "Sign Up Click", value: 4200, percentage: 42 },
        { id: "3", name: "Form Started", value: 2800, percentage: 28 },
        { id: "4", name: "Form Completed", value: 1240, percentage: 12.4 },
      ],
    },
    {
      id: "2",
      name: "Purchase Funnel",
      totalConversion: 3.2,
      steps: [
        { id: "1", name: "Product View", value: 15000, percentage: 100 },
        { id: "2", name: "Add to Cart", value: 3200, percentage: 21.3 },
        { id: "3", name: "Checkout", value: 1200, percentage: 8 },
        { id: "4", name: "Purchase", value: 480, percentage: 3.2 },
      ],
    },
  ];
}
