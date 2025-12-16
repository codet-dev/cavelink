import bankBca from "./icons/bank/bca.svg";
import bankSeabank from "./icons/bank/seabank.svg";
import bankMandiri from "./icons/bank/mandiri.svg";
import bankBri from "./icons/bank/bri.svg";
import bankBni from "./icons/bank/bni.svg";
import instagramIcon from "./icons/instagram_icon.svg";
import tiktokIcon from "./icons/tiktok_icon.svg";
import whatsappIcon from "./icons/whatsapp_icon.svg";
import discordIcon from "./icons/discord_icon.svg";

export const SELLERDATA = {
  id: "ishikatastore",
  name: "Ishikata Store",
  bio: "Thrifting Clothes",
  profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cWJWb3GDFEqIIxb-TE6LW9VQcbkBZa2wlck3kZRU6gYMhHdIucDPnNBrXFulTjqaGXU&usqp=CAU",
  cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfVZQ0fIRF0CP1BKza7ZE8bB1DbOVUqQsBQ&s",
  sosmed: {
    instagram: "http://instagram.com/ademuchl17",
    whatsapp: "http://wa.me/+6285179721795",
    tiktok: "http://tiktok.com/@ademuchl17",
  },
  catalog: [
    {
      id: 1,
      name: "Pakaian Pria",
      description: "Koleksi pakaian khusus untuk pria.",
    },
    {
      id: 2,
      name: "Pakaian Wanita",
      description: "Koleksi pakaian khusus untuk wanita.",
    },
  ],
  products: [
    {
      id: 1,
      name: "Kaos Basic Hitam",
      price: 75000,
      description: "Kaos basic pria dengan bahan katun combed 30s, nyaman dipakai sehari-hari.",
      stock: 2146,
      sold: 1450,
      rating: 4.5,
      ratingSum: 120,
      catalogId: 1,
      images: [
        "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
        "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
      ],
      variants: [
        { type: "Ukuran", options: ["S", "M", "L", "XL"] },
        { type: "Warna", options: ["Hitam", "Putih", "Abu-abu"] },
      ],
      addDate: "2025-09-10T09:30:00Z",
    },
    {
      id: 2,
      name: "Kemeja Flanel Kotak lengan panjang pria",
      price: 150000,
      description:
        "This vintage-inspired sweater vest brings together timeless style and everyday comfort. Featuring a classic argyle pattern, it delivers a retro aesthetic that never goes out of trend. Product Highlights: Design: Classic argyle pattern with a modern touch. Material: Soft, breathable, and durable knit fabric. Fit: Versatile sleeveless cut for layering in any season. Style Tips: Pair with a white shirt and chinos for a smart-casual look, or layer under a blazer for extra sophistication.",
      stock: 2146,
      sold: 1450,
      rating: 4.7,
      ratingSum: 120,
      catalogId: 1,
      images: [
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
      ],
      variants: [
        { type: "Ukuran", options: ["M", "L", "XL"] },
        { type: "Warna", options: ["Merah Kotak", "Biru Kotak", "Hijau Kotak"] },
      ],
      addDate: "2025-09-11T14:15:00Z",
    },
    {
      id: 3,
      name: "Dress Casual Polos",
      price: 200000,
      description: "Dress casual wanita dengan desain sederhana namun elegan, cocok untuk santai maupun acara semi-formal.",
      stock: 2146,
      sold: 1025,
      rating: 4.8,
      ratingSum: 120,
      catalogId: 2,
      images: ["https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_800x800/https://assets.preloved.co.id/products/115606/1932e425-6fe3-45bf-a8d7-af954be73d25.jpg"],
      variants: [
        { type: "Ukuran", options: ["S", "M", "L"] },
        { type: "Warna", options: ["Hitam", "Navy", "Beige"] },
      ],
      addDate: "2025-09-12T08:00:00Z",
    },
    {
      id: 4,
      name: "Blouse Lengan Panjang",
      price: 120000,
      description: "Blouse wanita lengan panjang berbahan ringan dan nyaman, cocok untuk kerja atau kuliah.",
      stock: 2146,
      sold: 1025,
      rating: 4.4,
      ratingSum: 120,
      catalogId: 2,
      images: ["https://i0.wp.com/mitraline.id/wp-content/uploads/2023/01/hoodie-sweater-pria-dan-wanita.webp?fit=1080%2C1080&ssl=1"],
      variants: [{ type: "Ukuran", options: ["S", "M", "L", "XL"] }],
      addDate: "2025-09-12T16:20:00Z",
    },
    {
      id: 5,
      name: "Jaket Hoodie Oversize",
      price: 180000,
      description: "Jaket hoodie oversize unisex, hangat dan stylish, cocok untuk pria maupun wanita.",
      stock: 2146,
      sold: 1025,
      rating: 4.6,
      ratingSum: 120,
      catalogId: 1,
      images: ["https://ryusei.co.id/cdn/shop/files/Artboard1_cb42bb4c-f80c-4bc4-a88c-607467e964ee.png?v=1717493043"],
      variants: [],
      addDate: "2025-09-13T11:45:00Z",
    },
  ],
};

export const CARTPRODUCT = [
  {
    productId: 1,
    quantity: 2,
    selectedVariant: ["L", "Hitam"],
  },
  {
    productId: 4,
    quantity: 1,
    selectedVariant: ["L"],
  },
  {
    productId: 5,
    quantity: 4,
    selectedVariant: [],
  },
];

export const BANK = [
  {
    name: "BCA",
    image: bankBca,
  },
  {
    name: "BNI",
    image: bankBni,
  },
  {
    name: "BRI",
    image: bankBri,
  },
  {
    name: "MANDIRI",
    image: bankMandiri,
  },
  {
    name: "SEABANK",
    image: bankSeabank,
  },
];

export const ORDERLIST = [
  {
    order_id: "ZSHRD1207447",
    date: "2025-09-10T09:30:00Z",
    name: "Codet Child",
    order_status: "onproccess",
    total_payment: 365000,
    products: [
      {
        id: 1,
        quantity: 2,
        name: "Kaos Basic Hitam",
        price: 75000,
        images: ["https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg"],
        variant: ["L", "Hitam"],
      },
      {
        id: 4,
        quantity: 1,
        name: "Blouse Lengan Panjang",
        price: 120000,
        images: ["https://i0.wp.com/mitraline.id/wp-content/uploads/2023/01/hoodie-sweater-pria-dan-wanita.webp?fit=1080%2C1080&ssl=1"],
        variant: ["L", "Hitam"],
      },
    ],
  },
  {
    order_id: "ZSHRD1207550",
    date: "2025-09-12T14:15:00Z",
    name: "Rizky Maulana",
    order_status: "completed",
    total_payment: 250000,
    products: [
      {
        id: 2,
        quantity: 1,
        name: "Kemeja Flanel Kotak",
        price: 150000,
        images: ["https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg"],
        variant: ["M", "Merah Kotak"],
      },
      {
        id: 3,
        quantity: 1,
        name: "Dress Casual Polos",
        price: 100000,
        images: ["https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_800x800/https://assets.preloved.co.id/products/115606/1932e425-6fe3-45bf-a8d7-af954be73d25.jpg"],
        variant: ["S", "Navy"],
      },
    ],
  },
  {
    order_id: "ZSHRD1207662",
    date: "2025-09-15T09:00:00Z",
    name: "Siti Rahmawati dafffsdfa",
    order_status: "cancelled",
    total_payment: 120000,
    products: [
      {
        id: 4,
        quantity: 1,
        name: "Blouse Lengan Panjang",
        price: 120000,
        images: ["https://i0.wp.com/mitraline.id/wp-content/uploads/2023/01/hoodie-sweater-pria-dan-wanita.webp?fit=1080%2C1080&ssl=1"],
        variant: ["M", "Pink"],
      },
    ],
  },
  {
    order_id: "ZSHRD1207788",
    date: "2025-09-20T16:45:00Z",
    name: "Andi Setiawan",
    order_status: "onproccess",
    total_payment: 180000,
    products: [
      {
        id: 5,
        quantity: 1,
        name: "Jaket Hoodie Oversize",
        price: 180000,
        images: ["https://ryusei.co.id/cdn/shop/files/Artboard1_cb42bb4c-f80c-4bc4-a88c-607467e964ee.png?v=1717493043"],
        variant: ["XL", "Coklat"],
      },
    ],
  },
];

export const ORDERDETAIL = [
  {
    order_id: "ZSHRD1207447",
    date: "2025-09-10T09:30:00Z",
    bank: "BCA",
    shipping: "Regular",
    name: "Codet Child",
    email: "codet@gmail.com",
    phonenumber: "0851234567890",
    province: "Jawa Barat",
    regency: "Kota Bandung",
    district: "Coblong",
    village: "Lebakgede",
    postalcode: "40132",
    landmark: "Jl. Dipati Ukur No.112-116",
    order_sub: 350000,
    shipping_sub: 15000,
    total_payment: 365000,
    products: [
      {
        id: 1,
        quantity: 2,
        name: "Kaos Basic Hitam",
        price: 75000,
        images: ["https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg"],
        variant: ["L", "Hitam"],
      },
      {
        id: 4,
        quantity: 1,
        name: "Blouse Lengan Panjang",
        price: 120000,
        images: ["https://i0.wp.com/mitraline.id/wp-content/uploads/2023/01/hoodie-sweater-pria-dan-wanita.webp?fit=1080%2C1080&ssl=1"],
        variant: ["L", "Hitam"],
      },
    ],
  },
];

export const ADMINHOME = {
  name: "Ishitaka Store",
  id: "ishitakastore",
  profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cWJWb3GDFEqIIxb-TE6LW9VQcbkBZa2wlck3kZRU6gYMhHdIucDPnNBrXFulTjqaGXU&usqp=CAU",
  new_order: 5,
  proccess_order: 4,
  shipping_order: 10,
  complete_order: 67,
  cancel_order: 2,
  return_order: 5,
  overall_sales: 320,
  revenue_estimate: 10000000,
  click: 200,
  view: 300,
};

export const SOSMED = [
  {
    name: "whatsapp",
    type: "tel",
    placeholder: "Whatsapp phone number",
    icon: whatsappIcon,
    minLength: 10,
    maxLength: 15,
    value: "085123456789",
  },
  {
    name: "discord",
    type: "text",
    placeholder: "Discord link server",
    icon: discordIcon,
    minLength: 0,
    maxLength: 50,
    value: "Ishistore",
  },
  {
    name: "instagram",
    type: "text",
    placeholder: "username",
    icon: instagramIcon,
    minLength: 0,
    maxLength: 50,
    value: "codet04",
  },
  {
    name: "tiktok",
    type: "text",
    placeholder: "username",
    icon: tiktokIcon,
    minLength: 0,
    maxLength: 50,
    value: "codet04",
  },
];

export const ADDRESS = [
  {
    name: "Codet Child",
    phonenumber: "0851234567890",
    province: "Jawa Barat",
    regency: "Kota Bandung",
    district: "Coblong",
    village: "Lebakgede",
    postalcode: "40132",
    landmark: "Jl. Dipati Ukur No.112-116",
    main: true,
  },
  {
    name: "Codet Child",
    phonenumber: "0851234567890",
    province: "Jawa Barat",
    regency: "Kota Bandung",
    district: "Coblong",
    village: "Lebakgede",
    postalcode: "40132",
    landmark: "Jl. Dipati Ukur No.112-116",
    main: false,
  },
];

export const ACCOUNT = {
  username: "ishitakastore",
  email: "Ishitaka055@gmail.com",
  phonenumber: "0897826341623",
};

export const ADDCATALOG = [
  {
    id: 1,
    name: "Kaos Basic Hitam",
    price: 75000,
    stock: 2146,
    sold: 1450,
    rating: 4.5,
    ratingSum: 120,
    catalogId: [],
    images: [
      "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
      "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
    ],
    addDate: "2025-09-10T09:30:00Z",
  },
  {
    id: 2,
    name: "Kemeja Flanel Kotak lengan panjang pria",
    price: 150000,
    stock: 2146,
    sold: 1450,
    rating: 4.7,
    ratingSum: 120,
    catalogId: [],
    images: [
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
    ],
    addDate: "2025-09-11T14:15:00Z",
  },
  {
    id: 3,
    name: "Dress Casual Polos",
    price: 200000,
    stock: 2146,
    sold: 1025,
    rating: 4.8,
    ratingSum: 120,
    catalogId: [],
    images: ["https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_800x800/https://assets.preloved.co.id/products/115606/1932e425-6fe3-45bf-a8d7-af954be73d25.jpg"],
    addDate: "2025-09-12T08:00:00Z",
  },
  {
    id: 4,
    name: "Blouse Lengan Panjang",
    price: 120000,
    stock: 2146,
    sold: 1025,
    rating: 4.4,
    ratingSum: 120,
    catalogId: [],
    addDate: "2025-09-12T16:20:00Z",
  },
  {
    id: 5,
    name: "Jaket Hoodie Oversize",
    price: 180000,
    stock: 2146,
    sold: 1025,
    rating: 4.6,
    ratingSum: 120,
    catalogId: [],
    images: ["https://ryusei.co.id/cdn/shop/files/Artboard1_cb42bb4c-f80c-4bc4-a88c-607467e964ee.png?v=1717493043"],
    addDate: "2025-09-13T11:45:00Z",
  },
];
export const EDITCATALOG = [
  {
    id: 1,
    name: "Kaos Basic Hitam",
    price: 75000,
    stock: 2146,
    sold: 1450,
    rating: 4.5,
    ratingSum: 120,
    catalogId: 1,
    images: [
      "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
      "https://drmwear.id/wp-content/uploads/2025/04/id-11134207-7rbkd-m8yiyjoyhna581.jpeg",
    ],
    addDate: "2025-09-10T09:30:00Z",
  },
  {
    id: 2,
    name: "Kemeja Flanel Kotak lengan panjang pria",
    price: 150000,
    stock: 2146,
    sold: 1450,
    rating: 4.7,
    ratingSum: 120,
    catalogId: 1,
    images: [
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/20/afaee45f-3d70-4192-a4c0-4ca0bb1e3960.jpg",
    ],
    addDate: "2025-09-11T14:15:00Z",
  },
  {
    id: 3,
    name: "Dress Casual Polos",
    price: 200000,
    stock: 2146,
    sold: 1025,
    rating: 4.8,
    ratingSum: 120,
    catalogId: 1,
    images: ["https://preloved.co.id/_ipx/f_webp,q_80,fit_cover,s_800x800/https://assets.preloved.co.id/products/115606/1932e425-6fe3-45bf-a8d7-af954be73d25.jpg"],
    addDate: "2025-09-12T08:00:00Z",
  },
  {
    id: 4,
    name: "Blouse Lengan Panjang",
    price: 120000,
    stock: 2146,
    sold: 1025,
    rating: 4.4,
    ratingSum: 120,
    catalogId: 0,
    addDate: "2025-09-12T16:20:00Z",
  },
  {
    id: 5,
    name: "Jaket Hoodie Oversize",
    price: 180000,
    stock: 2146,
    sold: 1025,
    rating: 4.6,
    ratingSum: 120,
    catalogId: 0,
    images: ["https://ryusei.co.id/cdn/shop/files/Artboard1_cb42bb4c-f80c-4bc4-a88c-607467e964ee.png?v=1717493043"],
    addDate: "2025-09-13T11:45:00Z",
  },
];
