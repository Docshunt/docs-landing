"use client";

import { useRouter } from "next/navigation";

export function PrivacyPolicyVersionSelect({ version }: { version: "20260318" | "20250801" }) {
  const router = useRouter();

  return (
    <label className="legal-version-picker">
      <span>시행일</span>
      <select
        aria-label="개인정보 처리방침 시행일"
        value={version}
        onChange={(event) =>
          router.replace(event.target.value === "20260318" ? "/privacy_policy" : `/privacy_policy?version=${event.target.value}`)
        }
      >
        <option value="20260318">2026.03.18.</option>
        <option value="20250801">2025.08.01.</option>
      </select>
    </label>
  );
}
