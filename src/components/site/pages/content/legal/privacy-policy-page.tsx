import { PrivacyPolicyPageTemplate } from "@/components/site/templates/content/legal/privacy-policy-template";

export { metadata } from "@/components/site/templates/content/legal/privacy-policy-template";

export default function PrivacyPolicyPage(props: Parameters<typeof PrivacyPolicyPageTemplate>[0]) {
  return <PrivacyPolicyPageTemplate {...props} />;
}
