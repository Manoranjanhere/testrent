// data/PricingData.js
export const price = [
    {
      plan: "Basic Room",
      best: "Best Value",
      price: 3000, 
      ptext: "A comfortable basic room with essential amenities.",
      list: [
        { icon: "✔️", text: "1 Bed", change: "color" },
        { icon: "✔️", text: "WiFi Access", change: "color" },
        { icon: "✔️", text: "Shared Bathroom", change: "color" },
      ],
    },
    {
      plan: "Standard Room",
      best: "Most Popular",
      price: 5000, // Price for two-month rental
      ptext: "A standard room with more space and features.",
      list: [
        { icon: "✔️", text: "1 King Size Bed", change: "color" },
        { icon: "✔️", text: "Private Bathroom", change: "color" },
        { icon: "✔️", text: "Air Conditioning", change: "color" },
        { icon: "✔️", text: "Room Service", change: "color" },
      ],
    },
    {
      plan: "Luxury Suite",
      best: "Best Overall",
      price: 12000, // Price for three-month rental
      ptext: "A luxury suite with premium amenities and services.",
      list: [
        { icon: "✔️", text: "2 King Size Beds", change: "color" },
        { icon: "✔️", text: "Private Balcony", change: "color" },
        { icon: "✔️", text: "Kitchenette", change: "color" },
        { icon: "✔️", text: "24/7 Concierge Service", change: "color" },
      ],
    },
  ];
  