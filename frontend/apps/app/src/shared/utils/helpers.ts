export const env = {
  googleClientId: "", //process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
}

export const routes = {
  home: "/",
  auth: "/auth",
  manage: "/manage",
  pricing: "/#pricing",
  benefits: "/#benefits",
  terms: "/legal/terms-of-service",
  policy: "/legal/privacy-policy",

  // my third-party
  github: "https://github.com/paragoda/justclickonme",
  discord: "https://discord.gg/zc3Mw5RDTh",
  producthunt: "https://www.producthunt.com/posts/justclickonme",

  // third-party
  shopifyPolicyGenerator: "https://www.shopify.com/tools/policy-generator",
}

export const constants = {
  refreshTokenCookie: "freshme",
}
