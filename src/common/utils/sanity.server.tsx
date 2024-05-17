import { sanityConfig } from "./sanity-config";
import { createClient } from "next-sanity";
// import { createPreviewSubscriptionHook } from 'next-sanity'

export const sanityClient = createClient(sanityConfig);

// export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig)
