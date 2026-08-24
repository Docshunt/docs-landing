import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { PrivacyPolicyVersionSelect } from "@/components/privacy-policy-version-select";
import { PRIVACY_POLICY_DESCRIPTION, PRIVACY_POLICY_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: PRIVACY_POLICY_TITLE,
  description: PRIVACY_POLICY_DESCRIPTION,
  path: "/privacy_policy",
});

export async function PrivacyPolicyPageTemplate({ searchParams }: { searchParams: Promise<{ version?: string }> }) {
  const version = (await searchParams).version === "20250801" ? "20250801" : "20260318";
  const isCurrent = version === "20260318";

  return (
    <PageDocument>
      <JsonLd
        data={webPageJsonLd({
          name: PRIVACY_POLICY_TITLE,
          description: PRIVACY_POLICY_DESCRIPTION,
          path: "/privacy_policy",
        })}
      />
      <article className="legal-document">
        <header className="legal-title">
          <h1>독스헌트AI 개인정보 처리방침</h1>
          <PrivacyPolicyVersionSelect version={version} />
        </header>

        <p>
          주식회사 사페레아우데(영문명: SAPERE AUDE Inc., 이하 &quot;회사&quot;라 함)는 「개인정보보호법」 제30조에 따라 정보주체의
          개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          수립·공개합니다.
        </p>

        <section>
          <h2>제1조 (개인정보의 처리목적)</h2>
          <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:</p>
          <ul>
            <li>회원가입 및 서비스 제공: 본인 인증, 회원 관리, 서비스 부정이용 방지</li>
            <li>
              독스헌트AI 서비스 제공:{" "}
              {isCurrent ? "AI 기반 문서 생성 및 첨삭, 맞춤형 정부 지원사업 및 정책 자금 추천" : "AI 기반 문서 생성, 첨삭, 개인화 서비스"}
            </li>
            <li>결제 처리: 유료 서비스 이용 시 결제 및 정산</li>
            <li>고객 지원: 문의 응답, 기술 지원, 공지사항 전달</li>
          </ul>
        </section>

        <section>
          <h2>제2조 (개인정보의 처리 및 보유기간)</h2>
          <p>회사는 다음과 같은 기간 동안 개인정보를 보유합니다:</p>
          <ul>
            <li>회원 정보: 회원 탈퇴 시까지</li>
            <li>서비스 이용 기록: 3개월</li>
            <li>결제 정보: 5년 (전자상거래법에 따라)</li>
            <li>업로드 문서 및 생성 데이터: 회원 탈퇴 시까지 (언제든지 삭제 가능)</li>
          </ul>
          <p>관련 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 안전하게 보관 후 파기합니다.</p>
        </section>

        <section>
          <h2>제3조 (개인정보의 수집항목 및 수집방법)</h2>
          <h3>1. 회원가입 시 수집하는 정보</h3>
          <ul>
            <li>
              필수항목:{" "}
              {isCurrent
                ? "이메일 주소, 비밀번호, 휴대폰 번호(본인인증 및 알림 서비스용), 사업자등록번호(개인사업자의 경우 개인정보로 취급)"
                : "이메일 주소, 비밀번호"}
            </li>
            <li>선택항목: {isCurrent ? "닉네임, 회사명, 대표자명" : "닉네임, 회사명"}</li>
          </ul>
          <h3>2. 서비스 이용 중 수집하는 정보</h3>
          <ul>
            <li>자동 수집: IP주소, 쿠키, 접속 기록{isCurrent ? ", 서비스 이용 로그" : ""}</li>
            <li>사용자 업로드: 문서 및 파일</li>
            <li>서비스 생성: AI가 생성한 문서 및 콘텐츠</li>
            <li>결제 시: 결제 정보 (결제 대행업체를 통해 처리)</li>
          </ul>
          <h3>3. 문서 데이터 처리</h3>
          <p>업로드하신 문서는 AI 서비스 제공을 위해서만 사용되며:</p>
          <ul>
            <li>안전하게 암호화되어 저장됩니다</li>
            <li>언제든지 삭제하실 수 있습니다</li>
            <li>다른 사용자와 공유되지 않습니다</li>
          </ul>
        </section>

        <section>
          <h2>제4조 (데이터 보호 정책)</h2>
          <p>회사는 모든 사용자의 데이터를 완전히 보호합니다:</p>
          <h3>1. 데이터 보호 원칙</h3>
          <ul>
            <li>모든 사용자의 데이터는 AI 모델 학습에 사용되지 않습니다</li>
            <li>업로드된 문서 및 생성된 콘텐츠는 서비스 제공 목적으로만 사용됩니다</li>
            <li>사용자의 명시적 동의 없이는 데이터에 접근하지 않습니다</li>
          </ul>
          <h3>2. 고객 지원을 위한 예외적 접근</h3>
          <ul>
            <li>사용자가 기술 지원을 요청하고 데이터 접근에 동의한 경우에만 제한적으로 접근합니다</li>
            <li>접근 범위는 문제 해결에 필요한 최소한으로 제한됩니다</li>
          </ul>
          <h3>3. 데이터 삭제 권한</h3>
          <ul>
            <li>사용자는 언제든지 본인의 데이터를 삭제할 수 있습니다</li>
            <li>회원 탈퇴 시 모든 데이터가 완전히 삭제됩니다</li>
          </ul>
        </section>

        <section>
          <h2>제5조 (개인정보의 제3자 제공)</h2>
          <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외입니다:</p>
          <ul>
            <li>사용자가 동의한 경우</li>
            <li>법령에 의해 요구되는 경우</li>
            <li>결제 처리를 위한 경우 (결제 대행업체)</li>
            <li>서비스 제공을 위한 경우 (클라우드 인프라)</li>
            {isCurrent ? <li>외부 전문기관을 통한 기업 정보 조회 및 연동을 위해 사업자등록번호 등을 제공하는 경우</li> : null}
          </ul>
        </section>

        <section>
          <h2>제6조 (개인정보 처리 위탁)</h2>
          <p>서비스 제공을 위해 다음 업체에 개인정보 처리를 위탁합니다:</p>
          <ul>
            <li>Microsoft Azure: 서버 호스팅 및 데이터베이스 관리</li>
            <li>Paddle: 결제 처리</li>
            <li>OpenAI: AI 서비스 제공</li>
            <li>Google (Gemini): AI 서비스 제공</li>
            {isCurrent ? <li>제휴된 외부 전문기관: 기업 정보 조회 및 연동 서비스 제공</li> : null}
          </ul>
          <p>모든 위탁업체는 개인정보 보호에 관한 법적 의무를 준수하며, 위탁업무 범위를 초과하여 개인정보를 처리하지 않습니다.</p>
        </section>

        <section>
          <h2>제7조 (개인정보의 안전성 확보조치)</h2>
          <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
          <ul>
            <li>데이터 암호화: 개인정보를 암호화하여 저장</li>
            <li>접근 권한 관리: 필요한 직원에게만 접근 권한 부여</li>
            <li>정기 보안 점검: 시스템 보안 상태 점검</li>
            <li>직원 교육: 개인정보 보호 관련 정기 교육 실시</li>
          </ul>
        </section>

        <section>
          <h2>제8조 (정보주체의 권리·의무 및 행사방법)</h2>
          <p>언제든지 다음과 같은 권리를 행사할 수 있습니다:</p>
          <ul>
            <li>개인정보 열람: 본인의 개인정보 처리 현황을 확인할 수 있습니다</li>
            <li>개인정보 수정·삭제: 잘못된 정보의 수정이나 삭제를 요청할 수 있습니다</li>
            <li>처리 정지: 개인정보 처리 정지를 요청할 수 있습니다</li>
            <li>회원 탈퇴: 언제든지 서비스에서 탈퇴할 수 있습니다</li>
          </ul>
          {isCurrent ? (
            <p>
              연락 방법: 웹사이트 내 &apos;채널톡&apos; 실시간 상담을 이용하시거나, 고객지원 메일(
              <a href="mailto:support@docshunt.ai">support@docshunt.ai</a>)로 문의해 주시기 바랍니다.
            </p>
          ) : (
            <p>
              연락 방법: 웹사이트 내 설정에서 직접 수정하거나 <a href="mailto:support@docshunt.ai">support@docshunt.ai</a>로 문의하세요.
            </p>
          )}
        </section>

        <section>
          <h2>제9조 (개인정보의 파기)</h2>
          <p>회원 탈퇴 시 또는 보유 기간이 만료된 개인정보는 즉시 파기합니다.</p>
          <ul>
            <li>전자적 파일: 복구 불가능한 방법으로 완전 삭제</li>
            <li>백업 데이터: 모든 백업에서도 완전 삭제</li>
            <li>법령 보관 의무: 법령에 따라 보관해야 하는 정보는 별도 보관 후 기간 만료 시 파기</li>
          </ul>
        </section>

        <section>
          <h2>제10조 (개인정보 보호책임자)</h2>
          <p>개인정보 보호에 관한 업무를 총괄하는 개인정보 보호책임자는 다음과 같습니다:</p>
          <ul>
            <li>이름: 김성우</li>
            <li>직책: 대표이사</li>
            <li>
              연락처: <a href="mailto:support@docshunt.ai">support@docshunt.ai</a>
            </li>
          </ul>
          <p>개인정보 보호와 관련된 문의사항이 있으시면 언제든지 연락 주시기 바랍니다.</p>
          <h3>▶ 기타 개인정보 침해 신고 기관</h3>
          <ul>
            <li>개인정보침해신고센터: privacy.kisa.or.kr / 국번없이 118</li>
            <li>개인정보 분쟁조정위원회: www.kopico.go.kr / 국번없이 1833-6972</li>
          </ul>
        </section>

        <section>
          <h2>제11조 (개인정보 처리방침 변경)</h2>
          <p>이 개인정보 처리방침은 {isCurrent ? "2026년 3월 18일" : "2025년 8월 1일"}부터 시행됩니다.</p>
          <p>변경이 있을 경우 웹사이트 공지사항을 통해 7일 전에 안내드리며, 중요한 변경사항은 30일 전에 미리 알려드립니다.</p>
          <ul>
            <li>웹사이트 공지: 독스헌트AI 웹사이트 공지사항</li>
            <li>이메일 알림: 등록된 이메일로 개별 안내</li>
          </ul>
        </section>
      </article>
    </PageDocument>
  );
}
