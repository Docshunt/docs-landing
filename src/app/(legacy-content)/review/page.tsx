import { JsonLd } from "@/components/json-ld";
import { REVIEW_DESCRIPTION, REVIEW_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

const reviews = [
  [
    "사업계획서를 처음 해봐야 하는 사람들은 꼭 한번쯤 경험해보는걸 추천합니다. 사업계획서는 어떻게 쓰는건지, 어떤 내용이 들어가야 하는지 감이 딱 잡히게 됩니다. 효율 대비 금액이 적게 느껴질 정도네요",
    "후추춧",
    "창업 진행 중",
  ],
  [
    "어디부터 어떻게 초안을 잡아야 하는지 난감했는데...그 부분을 해결해 주시니 일사천리로 계획서가 마무리가 되었습니다. 아직 100% 완성된 단계는 아니지만, 이런식으로 방향을 잡아야 한다는 것에 대한 기본틀을 제공받은 덕분에 아주 만족스러운 결과물이 될것 같습니다.",
    "펫아로마",
    "청년창업사관학교 준비 중",
  ],
  ["사람이 쓴건가 의심될 정도로 퀄리티가 뛰어남.", "김박탄", "창업 준비 중"],
  [
    "정말 개떡같이 말해도 찰떡같이 알아듣는 서비스네요! GPT쓰다 질문 이해 못하고 원론적인 내용만 말하길래 화딱지나서 이걸 써보긴 했는데 이것도 결국 AI니까 비슷비슷하겠지...싶었거든요? 근데 어머나... 경험많은 선생님이 빨간펜 잡고 어루만져주시나? 싶게 굉장히 상세하고 근거 자료가 굉장히 논리정연하게 제시되어서 놀랐어요. 처음에는 비싼가 싶었는데 써보고나니 진짜 이거 써주는 고퀄 알바생 고용한 느낌이라 시급 생각하면 전혀 아깝지가 않네요!",
    "아그린",
    "예비창업자",
  ],
  [
    "아이템 관련한 자료만 만들고 나머지 자료는 어떻게 해야하나 고민중이였는데. 단시간에 한눈에 보기 좋게 정리를 잘 해주고, 생각하지 못한 시장상황 (다른 권역)까지 알려주니 아주 좋은 플랫폼 인것 같습니다. 초안을 잘 정리해서 사용하면 백전백승일것으로 판단됩니다.",
    "현직백수",
    "창업 예정",
  ],
  [
    "사업은 잘 되고 있었지만, 사업계획서 작성은 처음이라 초안 잡기에 너무 좋았어요. 100% 신뢰하며 작성하진 않았고, 내용을 바탕으로 전문성을 더 보완했습니다. 대표자들 시간 환산하면 정말 저렴한 가격인 것 같습니다. 완전 강추합니다!",
    "김해삐",
    "청년창업사관학교 준비 중",
  ],
  ["사업계획서를 쉽고 빠르게 작성할 수 있어 도움이 많이 되었습니다", "최철호", "창업 6년차 초기창업패키지 준비중"],
  ["사업계획서 작성에 큰 도움이 되었습니다!!", "dllo", "창업기업대표"],
  ["예창패를 처음 준비하신다면 정말 도움되는 초안을 주는 에이아이.. ", "강똥", "예창패 준비 중"],
  [
    "정리하느라 머리가 너무 아픈 시간이 아까울 만큼 잘 정리되어 보내주셔서 저는 다른 사업계획서도 추가로 진행하려고합니다.",
    "나무",
    "창업 3년차 초창패 준비중",
  ],
] as const;

export const metadata = buildPageMetadata({
  title: REVIEW_TITLE,
  description: REVIEW_DESCRIPTION,
  path: "/review",
});

export default function ReviewPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: REVIEW_TITLE, description: REVIEW_DESCRIPTION, path: "/review" })} />
      <article className="legal-document legacy-review-document">
        <header className="legal-title">
          <h1>독스헌트 사용 후기</h1>
        </header>
        <div className="legacy-review-grid">
          {reviews.map(([body, name, context]) => (
            <figure key={`${name}-${context}`} className="legacy-review-card">
              <blockquote>{body}</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </>
  );
}
