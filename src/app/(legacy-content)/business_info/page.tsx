import { JsonLd } from "@/components/json-ld";
import { BUSINESS_INFO_DESCRIPTION, BUSINESS_INFO_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: BUSINESS_INFO_TITLE,
  description: BUSINESS_INFO_DESCRIPTION,
  path: "/business_info",
});

export default function BusinessInfoPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: BUSINESS_INFO_TITLE,
          description: BUSINESS_INFO_DESCRIPTION,
          path: "/business_info",
        })}
      />
      <article className="legal-document business-info-document">
        <header className="legal-title">
          <h1>사업자 정보 확인</h1>
        </header>

        <div className="business-info-table-wrap">
          <table>
            <tbody>
              <tr>
                <th scope="row">통신판매번호</th>
                <td>2024-서울동작-0430</td>
                <th scope="row">사업자등록번호</th>
                <td>575-86-03204</td>
              </tr>
              <tr>
                <th scope="row">운영상태</th>
                <td>통신판매업신고</td>
                <th scope="row">법인여부</th>
                <td>법인</td>
              </tr>
              <tr>
                <th scope="row">상호</th>
                <td colSpan={3}>주식회사 사페레아우데</td>
              </tr>
              <tr>
                <th scope="row">대표자명</th>
                <td>김성우</td>
                <th scope="row">대표 전화번호</th>
                <td>010-2871-5352</td>
              </tr>
              <tr>
                <th scope="row">판매방식</th>
                <td>인터넷</td>
                <th scope="row">취급품목</th>
                <td>건강/식품, 기타</td>
              </tr>
              <tr>
                <th scope="row">전자우편(E-mail)</th>
                <td>maeee@maeee.co.kr</td>
                <th scope="row">신고일자</th>
                <td>20240327</td>
              </tr>
              <tr>
                <th scope="row">사업장소재지</th>
                <td colSpan={3}>서울특별시 동작구 상도동 487-7 창의키움관</td>
              </tr>
              <tr>
                <th scope="row">사업장소재지(도로명)</th>
                <td colSpan={3}>서울특별시 동작구 상도로55길 8, 창의키움관 302호 (상도동)</td>
              </tr>
              <tr>
                <th scope="row">인터넷도메인</th>
                <td colSpan={3}>-</td>
              </tr>
              <tr>
                <th scope="row">호스트서버소재지</th>
                <td colSpan={3}>-</td>
              </tr>
              <tr>
                <th scope="row">통신판매업 신고기관명</th>
                <td colSpan={3}>서울특별시 동작구 02-820-9336</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="business-info-notice">
          <p>
            본 자료는 전자상거래시장에서 소비자가 정확한 사업자 정보를 가지고 안전한 거래를 할 수 있도록 전국 시·군·구에 신고된
            통신판매업자의 신원정보를 「전자상거래 등에서의 소비자보호에 관한 법률」 제12조제4항에 따라 제공합니다.
          </p>
          <p>
            사업자 폐업 여부는 국세청 홈택스의 사업자등록상태조회에서 추가로 확인할 수 있습니다.{" "}
            <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer">
              홈택스 바로가기
            </a>
          </p>
        </div>
      </article>
    </>
  );
}
