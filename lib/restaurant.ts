export type DishCategory = "pizza" | "chicken" | "rice" | "pasta"

export type Dish = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: DishCategory
  rating: number
  reviews: number
  deliveryTime: string
  note: string
  tag?: {
    label: string
    tone: "discount" | "hot" | "fresh" | "bestseller" | "healthy"
  }
}

export type Promo = {
  badge: string
  title: string
  description: string
  label: string
  price: number
  image: string
}

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpl3pKP5G51SqTeOm2mNWjElfs3DV_lpcexijFighcFhEbvKdrtf24dwKP8mXzaPQ7j2qEaXrDF3D3e76UP19kUHjd49nwqoVKl8DflcVVoRIWGBDOlTVhrpnaEwa1ySQjZs8HAoz2EjcbAfYX7cKdz3VgFIiWx3pbFk9eJmASigc6QFEgQ4D0hb208UyB6LaCX3PHy0RGw8A-DQUNrEldqvr9uogPxnOGEVZ2QIg"

export const categories = [
  {
    label: "All Picks",
    image: null,
    filter: "all" as const,
  },
  {
    label: "Fried Chicken",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhUosybbqzQPrN7FuPiVSGV7fQqw8qU1vJPu58Zp1YDvN8Q6FRlgizYQJBwsxUa0MkOvWL_vU0Fvt8oIYi9rpHjnSE0-TWIxhiaTbtE9Bfpk-TyjGUiN_7tDAgY61nyeu-VnmJOH7Zy1F89qWhIphSJKaDgeGysIuFFaFHOMVxVSfLN7Vs5SBSbWt9TT0yLfFclu0RHbxP9dgOntxVN34YPkDTT9gj32LfxNwyXU",
    filter: "chicken" as const,
  },
  {
    label: "Pizza King",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIuMt4NNLO2B6VF37zGAZBdQb8eP1m5YZSPdmBao8AbgJ6QqLfc65r12PHT1PD1NbXGE7D0RZ_L0yoH4bzbIPDjj4JWnZGn_ataypD_EmjxOzWGNK5i_wDwve_E2fOb5tKEje_eSo7O-BCN4B5M-XdYcqwyVp-ZwA9C4PpjO-5Xmt_CH7pds7jf1r4FS2vNLlTHQ5SNG-KU_hvoihioDhSpdrufTQPk0KEYDCfLU",
    filter: "pizza" as const,
  },
  {
    label: "Burger Bar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAO1bOcPqsQgVy6vhvzQZtkydCvZZIw4G016TDHgB5R-EI7X_7J-Cfn5fV8qxawi63i48EUMba420Xj_5kJ52ICothvATWqfmW2LLZ9BRKAPEI15i7pMmTEx2ZaCUIqYyFwgOPGlAkWP94DBqFj-g5CZda9njEXXyD74Q2kdGgPpO9gTX4VeJFHlbWv3TKScScGZXWCzACiiebKIT8pwh8nSddn5_EgxjsCi-L2t9k",
    filter: "chicken" as const,
  },
  {
    label: "Pasta Italiano",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0LypQb297_6viY7O3UA19txdmasXlsuCVfwvjXRX3b_tHYhl5mb-HZka-BUq4xN_gOWmQSPvg0NEXy3SKCaV1TrMSo55F_obr6xY2La_HTEN6pNXCLSucBO8zhIL6sMk1dVQUU-bp53zRQbKPs9zfrguyD6k6kvVTsMJ3JO7_jmuJ353PMF9urXXNnr_UbBmokagcyLalSxFClb-VFW0r-TsCv11LU8Ml2HC0T5s",
    filter: "pasta" as const,
  },
  {
    label: "Fried Rice",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCshuuYhzkFhRpPxfcoTynMpbdLoFqWbdPSU_eHPXfqziDBTTc_s-PWNywGUZk2nZzy8Ua9dXEU9_3Mt9JPxAzK6QKjYBQmNYkSgztfvMREljf1tij9ca1VnNmsezYJSoNwkU64Iyq06TVNP63BTq7--S8BSp_BJTfhnfnQ_QGOFY2nAgxavVjkvM_rUCE4o90mtU3XT8UqeGqeQ6nFbV73bmhP7JlxjuhR_TLIaOw",
    filter: "rice" as const,
  },
  {
    label: "Noodles",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Pj7b9SXXMgR14DnJdEUCziXQJl_G9jznGtbF4lweCXe5dlVsCXLbAPQMjxbT4hCZgubsnPNmbGVLv7dnVdFmZDoHePGTb4HwVSrL9Hx0AhbSf-W7HsYyBD-az8sSi7LPk9_iBwJ2HoBo7JwHGtR305QndTCdhxWD3RPKHyiTIM65ntZrK4TzsTnDesvwbd7H7bF7NaSnWkXzlqN-Exoi-CiPy03xiXfM3-QBXiE",
    filter: "rice" as const,
  },
  {
    label: "Drinks & Juice",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrkF0AAFDZis_KyNiPVCufACO48HWpMlgeW0YeDYKlsSr53teOWo46BsEg12ecJX3KBtNYBOcWIDXCo2kpkwOb9LW6cysrgpRURorePvY9sDa_eITd6X7i3OanC0jhtEAAC4p5WyXwiQdPLXu4ewX6Z9GutiQOeg8HoNmLqz68iNoiu2-1AXO0ROPgOB-ILjuChD6MNaoenjAqrht7FMQRxafR3kaShnG8bi-jWGI",
    filter: "all" as const,
  },
  {
    label: "Chef Desserts",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmheNif3sHHA54SNNZrn1JZE5thxZfdd01UOJO0zf2Qg_XD45ZdMQdGmxo2k_U22QEc0ECYVb2GqWzr2hIiCL_ikwZX9IA4MPNlJaMXphEBzhUuaUMDcr7VQHhTW2xe9ps6ikWcQz535DRvf2x6hWF7ylXVzDPwBNTIGxv2qgTLZOULx6zvAvUG-q4tjRUN8EBdn6JWNZ2IWRZJPhYKoSX0lAc4Dsbj5Ev99O1LGQ",
    filter: "all" as const,
  },
]

export const promos: Promo[] = [
  {
    badge: "On this week",
    title: "Spicy Fried Chicken Combo",
    description:
      "Crispy wings and drumsticks with seasoned rustic fries and artisan garlic mayo.",
    label: "Combo special",
    price: 20.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_wm65ei9Vrz-Aq_8VzxgcYgiqHLYv96jqv0W5XGNmV7tGxl0LoSsIB8O2WynJusJszXgC03uMpP5HvSb_hcIm3JSmXWMN68mN01DbvbW2tIGwuHjgV5uRPPCkRgB9Ha_Gas0liRchhn0GF8pJ8IafnmwPdDCynZlsJ9t1UfWIRpufFil_zzrSNEf0ovtMl59-MgDObngg0X9Ni_u2mDhs6m55ACK7Sc1DFhIriaA",
  },
  {
    badge: "Welcome Fresheat",
    title: "Chicago Deep Pizza King",
    description:
      "Double cheese molten crust baked low and slow in seasoned cast iron pans.",
    label: "Family feast",
    price: 26.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaYyb93XOS_U7QuCBkwm3j0mdyAaF6HeEZRrC1OXFc1w_a99rkCcRCfFrIf9scbFJ7tdngSXl1uDeTV06NNxXDPGIadajyCdHCx5x0KzhdMzdHihaV5_cBmFRVBumFToRWND5t7FAb4BMdG7tByhFCEoI5X4PCQcidVWsFvwiIO5RypwVq88bwrbFUbKSpEUdi0ZlWmkmQzUHAWua9XfNcJFwR2353POXFuZsnTJQ",
  },
  {
    badge: "Chef crafted",
    title: "Special Chicken Roll",
    description:
      "Handmade flatbread rolled with char-grilled chicken breast and mint yogurt.",
    label: "Hearth favourite",
    price: 18.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNCg05AitpMWWC3pRKdswvOQpcO09P6jyr0j4FWzcetlbWoIQ0ZtK22zM875vR9vEnJn0-VbkZf5Luu7L0oAS0qUMZGKWkQY0hhscLfkdvfxeJCHUTLRsQyGFsxKP6-r3vpTVU0Sftk22WkGvBzvkfJ5lFujoGrnRm3bQjZmndQaxO4wvOZVIwX-bZ9K26XuzMrC0dtkeRHMnQifLX2JRg46RDghw5YQO2j9ZDLHs",
  },
]

export const dishes: Dish[] = [
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    description:
      "Hand-tossed dough, signature San Marzano tomato sauce, roasted chicken and bubbling mozzarella.",
    price: 26.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-w_b5CifZcPrTdX_jkilne6T0etpgWnnB8R-g2m_9iinH5Ch6plxWOyeG423dcivU8sUO8NhU3IKKawRLTfBUtB3fJWLXisOvvt6vTsu-uNYDwVWnFFK2j2fiOS4EdKzpXVCRXx5JEheqVTrEtG4oQnsDnMazqx_bQF3Q9Shjwni-CLHIFhB0vY1l_DDZwVRHt5Ypoz9eDqQW356_mvumqWVHjfV_MtIeWuqcb0U",
    category: "pizza",
    rating: 4.8,
    reviews: 340,
    deliveryTime: "20–30 min",
    note: "Free delivery available",
    tag: { label: "20% off", tone: "discount" },
  },
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    description:
      "Fragrant jasmine rice wok-tossed with cage-free chicken, garden vegetables and chilli oil.",
    price: 25.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqZzNzDejTFVl2zU0pkC4Z1Uwlg0Vy3vee1UEwQKNIG671hHqkGSjiheKWZFim-oXjRPR_jxqYe7dCPy6sjAUz7oNmzC26Z-NTRAtPR5zfirrZkH_6u8M3prZmZjdr7PUFqAf1BaVEAvajPHfFCDDTR0DbEFQgtCALWgW_NJAtcOIFxz6IkweNWWe539O6-_Pl7itZS4p51IbR87GpRms6Zg3AH6GrlFSTZrXr678",
    category: "rice",
    rating: 4.9,
    reviews: 512,
    deliveryTime: "15–25 min",
    note: "Freshly wok-tossed",
    tag: { label: "Bestseller", tone: "bestseller" },
  },
  {
    id: "crispy-chicken-leg",
    name: "Crispy Chicken Leg Piece",
    description:
      "Three-piece crunchy battered drumsticks marinated overnight in our secret 14-spice blend.",
    price: 20.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ZxT01N_O2zrSDfr407YLAa12iXaA7kqbgVLWBbus8rG3kkM2Uue7m10j_uePtCgCGr39qclHelBqV7JqF9tpwa6GVXr6H32TJcuvTo4uo9lIThBAVc-sw2Wmo6kTLbP5kidlQSJAsnh4hadIhRcFRIvxX4feHoGPHq3gXhjWMpu1KVn1ISHTVSi7D-jBz2Oswa8bZOd_U49vTnHr0mQnu_oqYY0_V9The5dMDN0",
    category: "chicken",
    rating: 4.9,
    reviews: 420,
    deliveryTime: "20–30 min",
    note: "Includes 2 house dips",
    tag: { label: "Hot spicy", tone: "hot" },
  },
  {
    id: "chinese-pasta",
    name: "Chinese Pasta Italiano",
    description:
      "Fusion penne tossed with Sichuan pepper, garlic confit and farm-raised minced chicken.",
    price: 15.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJerMxuvdtpYaok63cbxaxuuSH61v0u_aaM065dhRjhSmHKN2nQRnejtfGVnqN-hHorbJZ9t0buhK-4VLjFBGRIsI0pUmBGSMAG-379d9cbEgo_FS7xJrYyt0NalQIv4VRGYclyN8Ob-s0sfcpsT7iO0hmLi1zYfKwl9EKfLuqItlC2X4MhR1lggGLsiWLco3uNHQ-3zU7Zm4_KtZ67AvAVYppgW1H6Mo30ZuQctQ",
    category: "pasta",
    rating: 4.7,
    reviews: 189,
    deliveryTime: "15–25 min",
    note: "Fusion house recipe",
  },
  {
    id: "chicken-noodles",
    name: "Chicken Noodles",
    description:
      "Hand-pulled wheat noodles drenched in a rich umami glaze with roasted sliced chicken.",
    price: 39,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0gQCCWBPm0P3vpS7SxWA9LBFAjsghWT4Iffztu5ri4wKdMEAhlPUgQcFtmOKejs1c0BMOhF9QAnqqinwSbtb6XDLl_C0m7DEu6Tj4NgO7aZgOit5hb3ARvxosOqzsPFMkjjNOQ29Y21w9h4ZlricmFKWEO5-035KTRVkcYj3Xr2kN38d26YfJ3eTGoXA063k-AyLJPDbB62vXTC-OFruUOvnVcgZpSNa-b4NVGYA",
    category: "rice",
    rating: 4.8,
    reviews: 276,
    deliveryTime: "20–30 min",
    note: "Chef recommended",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    description:
      "Flame-seared chicken breast with Mediterranean chimichurri and roasted baby potatoes.",
    price: 20.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQB7pYtXfpmzFz13o0-0TjDRYBiu8X8P07TViOtmfYEIUC6WlZ2jfQidAncFd3NNhx2ilFPUzvurZ_r2BtllMbQr2YSfJhZVoIg5Z2TDDwyC6ntwf7dYs7tEy7p8ACA_3mgeb3vJbHr6kIOXr65N0hcZVcTXLtxwUV70TTWeg1he858NDUL4agQlBpinYkYivZYWxMT6u3mwyjV5p0y7B-rbrmb3rqOPqjBbzJxrs",
    category: "chicken",
    rating: 4.9,
    reviews: 388,
    deliveryTime: "25–35 min",
    note: "High protein / gluten-free",
    tag: { label: "Healthy", tone: "healthy" },
  },
]

export const flashDealImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrA_XJeq7zO-3ea6_2A9t7ParAeiPmFAEY2Hqj7P3bism3U5fL3bKxMUMCHe7k2nu0hFSZVaqjTudzx3v6-sZQOOhRJyUSH0OuQGlcV4Qsss1L-KW6XKoRkDF-TsZdlNrj09ZNdha7svEmveormF_06YxtcTQHkYAw5T7qWUKkRyBCjSzz2LgZ38s8sOMZmD2zJiXou4S-1Sxn0-TDNr_WWXfB7DySF_dGpuc8mNE"

export const hearthImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqIGokq6bB1nPv-Vl0k6cPjEKIcwYrEuecjMlPJQJot1n2ngWSj6lQ-7gAvAjRYkkhu7nxIdHkAKEPdJw30ue-nqlVfU0p04bXy4yhS7IjFpkw1ssH_z4Xt8pZdZCxf8CnHODD-yVPwnP-US7vb6wwMeEkfMHzTByhXC2LltabfsEQXOxWKoUckB5xfvwBY2SMH-Ui4S6qyOuszGvfTTxdlutgT23phFZR_wD8kHo"

export const testimonialImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDf4B1SBbnOqoo5WLRJbcv3gCE-GI6AnHJ8AQM77VnJnGA010dg9dSlK5j2bPrjrLBxbWP1TJtZQkPJuZ2ygv_leBJR2TAFxEM4bo8FdiWwQewboZ8-omYSZq8QoNfeWsDe3T_IGkUXnuDTbK-d3VyxNKMVbdOTf31My0HL7JIFULlPj-ZAefV-kI8jWmvPph3jNkXxKXr_FkFNlq3Z3ICice3UYGSnrOhKC1rd68M"

export const testimonialAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBNIrN9XsCUorBsraMS_yfx3XzDnr_5JTl1v8xdkBV4ksABoyaoBqDOmc5g6IN86dUaw0TtYuvjYH6f6vR8GT-2DwgZHT5thvpqL_LYzPSTaxhmp4MyTGpWbBUCU_J4FI56Fsq9DNI_3de9RHJBLyQCYL3rxtqVjKVNvjHQ78H1GHx5-RtW05RJOZDCvHGPWUZi6oqr_V9kinUY8WDx77gyJLE0LLznCMzozRj6VXk"

export const posts = [
  {
    id: "fast-food-frenzy",
    date: { day: "15", month: "Dec" },
    author: "By Admin",
    category: "Noodles",
    title: "Fast food frenzy: a taste of convenience",
    excerpt:
      "How quick artisanal cooking keeps gourmet textures intact while delivering in under 30 minutes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXBdxWHUW2lY7iO-_6sXrAPFAOatx8hJHnFxqCQtfCaIcwFg0bvQCbw5s8qMCDcR-JGYoUDxlX4WJUaQvz6WKoXnE0zxJQDhH51BahrWCAOBJDtfYccwPwmzXgDyO6JRwJTU6dvJ1UCy9eWPjztRP3X02Kp3RXDIowBN2o3l4peUlQM33-ZCv-dqjynGuRxFKPHvwbNhrtStEe5kDlkaNp-NUXYmd6Oi8-K6MoRlk",
  },
  {
    id: "health-safety",
    date: { day: "17", month: "Dec" },
    author: "By Admin",
    category: "Chicken",
    title: "Benefits of health and safety measures",
    excerpt:
      "Behind the kitchen scenes: how our contactless hygiene protocol safeguards every prepared meal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXOWwDrxJZ69u7w-ppVK79kMH1iY1F5svz7boIZ4o3s0h8fEaqHE0UCDZqy4lC2aAgFj1uIV7n0EuqoTUvtI8kbb4QzCKeo4IcvR0E0tWhsCLXSTzX_rE1S50Zz1XLSBaimklIwQNjsOwVP3eg7LM1JxzgBspFPytht5RtnX-aOxUnaeiY-ykWHqdpR4Pkj9eORki0Q0dye13kTKkQlloDGY9Vl6UZWcAoxmaTjE",
  },
  {
    id: "quick-cravings",
    date: { day: "25", month: "Dec" },
    author: "By Admin",
    category: "Kitchen",
    title: "Quick cravings: unravelling fast food delights",
    excerpt:
      "The culinary chemistry behind why our spicy batter crust stays crunchy through every delivery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkvsLamzzHFN7VwGK6TvUGoQ56iyamCS3N-rCO-f9tRuLEBAuf65-_lkpBtJXoWz8A9HInnXp4hlX1RGgRljtd8Z2_27Yco8YTPbIvLhPNsfpqRzVy7u84PSbF7MpvCgwU_g_Mg2-qrvx0DypH1sRWrOOUK47ctF7JhH_0kC5laJObklyofS_DfF18RTSUy1L5UwiM-CBfkcFrK_mtBYV_qjurMaaWfG4D_qHhQcc",
  },
]

export const dishCategories: { label: string; value: "all" | DishCategory }[] = [
  { label: "All", value: "all" },
  { label: "Pizza favorites", value: "pizza" },
  { label: "Spicy chicken", value: "chicken" },
  { label: "Rice & noodles", value: "rice" },
  { label: "Pasta italiano", value: "pasta" },
]
