import { APP_URL } from "@/seo/metadata";

export default `<div class="dh-seo-post" style="font-size:18px; line-height:1.88; color:#25262C; word-break:keep-all; letter-spacing:0; font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Pretendard','Noto Sans KR','Segoe UI',sans-serif;">
  <style>
    .dh-seo-post, .dh-seo-post * { box-sizing:border-box; }
    .dh-seo-post { --read:860px; }
    .dh-seo-post strong { font-weight:850; }
    .dh-seo-post a { color:#2C81FC; font-weight:750; text-decoration:none; }
    .dh-seo-post > p,
    .dh-seo-post > h2,
    .dh-seo-post > ul,
    .dh-seo-post > ol,
    .dh-seo-post > table,
    .dh-seo-post > .dh-note,
    .dh-seo-post > .dh-steps,
    .dh-seo-post > .dh-shot-slots,
    .dh-seo-post > .dh-cta-row { max-width:var(--read); margin-left:auto !important; margin-right:auto !important; }
    .dh-seo-post ul { margin:18px 0 28px; padding-left:24px; }
    .dh-seo-post ol { margin:18px 0 28px; padding-left:24px; }
    .dh-seo-post li { margin:8px 0; }
    .dh-seo-post .dh-note { margin:28px 0 34px; padding:22px 24px; border-left:4px solid #2C81FC; background:#F7FAFF; color:#323844; line-height:1.75; }
    .dh-seo-post .dh-source { max-width:var(--read); margin:8px auto 34px !important; color:#6E7687; font-size:14px; line-height:1.6; }
    .dh-seo-post .dh-steps { margin:26px 0 42px; display:grid; gap:12px; }
    .dh-seo-post .dh-step { display:grid; grid-template-columns:92px 1fr; gap:20px; align-items:start; padding:20px 22px; border:1px solid #E1E7F0; border-radius:10px; background:#fff; }
    .dh-seo-post .dh-step b { display:inline-flex; align-items:flex-start; justify-content:flex-start; min-width:0; height:auto; padding:1px 0 0; border-radius:0; background:transparent; color:#2C81FC; font-size:18px; line-height:1.45; font-weight:850; }
    .dh-seo-post .dh-step span { color:#343943; line-height:1.68; }
    .dh-seo-post .dh-step span strong { display:block; margin:1px 0 8px; font-size:19px; line-height:1.42; }
    .dh-seo-post table { width:100%; border-collapse:separate; border-spacing:0; margin:24px 0 36px; border:1px solid #E1E4EA; border-radius:12px; overflow:hidden; }
    .dh-seo-post th, .dh-seo-post td { padding:16px 18px; border-bottom:1px solid #E1E4EA; text-align:left; vertical-align:top; }
    .dh-seo-post th { background:#F4F6FA; font-weight:850; color:#25262C; }
    .dh-seo-post tr:last-child td { border-bottom:0; }
    .dh-seo-post .dh-check-cards { display:none; }
    .dh-seo-post .dh-check-card { padding:16px 17px; border:1px solid #E1E7F0; border-radius:10px; background:#fff; }
    .dh-seo-post .dh-check-card b { display:block; margin-bottom:8px; color:#2C81FC; font-size:16px; line-height:1.4; }
    .dh-seo-post .dh-check-card p { margin:0; color:#25262C; font-size:15px; line-height:1.58; font-weight:750; }
    .dh-seo-post .dh-shot-slots { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; margin:24px 0 34px; }
    .dh-seo-post .dh-shot-slot { margin:0; }
    .dh-seo-post .dh-shot-slot.wide { grid-column:1 / -1; }
    .dh-seo-post .dh-shot-image { display:block; width:100%; height:auto; border:1px solid #E1E7F0; border-radius:14px; background:#F7FAFF; box-shadow:0 8px 20px rgba(16,24,40,.06); }
    .dh-seo-post .dh-shot-slot figcaption { margin:10px 0 0; color:#6E7687; font-size:14px; line-height:1.55; }
    .dh-seo-post .dh-cta-row { display:flex; justify-content:center; margin:22px 0 36px; }
    .dh-seo-post .dh-cta-row.final { margin:20px 0 28px; }
    .dh-seo-post .dh-cta-button { display:inline-flex; align-items:center; justify-content:center; min-height:52px; padding:0 26px; border-radius:10px; background:#2C81FC; color:#fff !important; font-size:17px; line-height:1.2; font-weight:850; text-decoration:none !important; box-shadow:0 8px 18px rgba(44,129,252,.18); }
    @media (max-width:720px) {
      .dh-seo-post { font-size:17px !important; line-height:1.82 !important; }
      .dh-seo-post { --read:100%; }
      .dh-seo-post h2 { font-size:26px !important; margin-top:48px !important; }
      .dh-seo-post .dh-step { grid-template-columns:1fr !important; gap:8px !important; padding:17px 18px !important; }
      .dh-seo-post .dh-step b { min-width:0 !important; height:auto !important; padding:0 !important; font-size:15px !important; }
      .dh-seo-post .dh-step span strong { font-size:18px !important; }
      .dh-seo-post table.dh-check-table { display:none !important; }
      .dh-seo-post .dh-check-cards { display:grid !important; gap:10px !important; margin:18px 0 34px !important; }
      .dh-seo-post th:first-child, .dh-seo-post td:first-child { width:72px !important; }
      .dh-seo-post th, .dh-seo-post td { min-width:0 !important; padding:10px 8px !important; font-size:12px !important; line-height:1.45 !important; overflow-wrap:anywhere !important; word-break:keep-all !important; }
      .dh-seo-post .dh-shot-slots { grid-template-columns:1fr !important; gap:14px !important; margin:22px 0 34px !important; }
      .dh-seo-post .dh-shot-image { border-radius:12px !important; }
      .dh-seo-post .dh-cta-row { justify-content:stretch !important; margin:18px 0 30px !important; }
      .dh-seo-post .dh-cta-row.final { margin:18px 0 24px !important; }
      .dh-seo-post .dh-cta-button { width:100% !important; min-height:50px !important; padding:0 16px !important; font-size:16px !important; }
    }
  </style>

  <p style="margin:0 0 20px;">K-Startup과 기업마당에는 창업자와 중소기업을 위한 지원사업 공고가 계속 올라옵니다.</p>
  <p style="margin:0 0 20px;">하지만 공고마다 대상, 지역, 마감일이 달라서 목록을 훑는 것만으로도 시간이 많이 듭니다. 조건이 맞지 않는 공고를 계속 읽다 보면 불필요한 시간을 쓰게 되고, 도중에 포기하게 되기도 합니다.</p>
  <p style="margin:0 0 20px;">오늘은 K-Startup과 기업마당 공고를 기준으로 나에게 맞는 지원사업을 찾고, 공고 내용을 바탕으로 사업계획서 작성까지 이어가는 방법을 알려드리겠습니다.</p>

  <h2 style="margin:58px 0 18px; font-size:30px; line-height:1.38; font-weight:850; color:#25262C; letter-spacing:0;">먼저 내 상황부터 정리해야 합니다</h2>
  <p style="margin:0 0 20px;">지원사업 공고를 찾기 전에 먼저 내 상황을 정리해야 합니다. 예비창업자인지, 이미 사업자를 냈는지, 업력은 얼마나 됐는지, 사업장이 어느 지역에 있는지에 따라 신청할 수 있는 공고가 달라집니다.</p>
  <p style="margin:0 0 20px;">사업 분야와 필요한 지원도 함께 확인해야 합니다. 사업화 자금이 필요한지, R&amp;D나 수출, 마케팅, 인력 지원이 필요한지에 따라 봐야 할 공고가 달라지고, 사업계획서에서 강조할 내용도 달라집니다.</p>

  <table class="dh-check-table">
    <thead>
      <tr>
        <th>기준</th>
        <th>정리할 내용</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>창업단계</td>
        <td>예비창업자, 초기창업기업, 도약기업, 중소기업 여부</td>
      </tr>
      <tr>
        <td>업력</td>
        <td>사업자등록일 기준 3년 이내, 7년 이내, 업력 제한 없음 등</td>
      </tr>
      <tr>
        <td>지역</td>
        <td>사업장 소재지, 전국 공고 가능 여부, 특정 시·도 제한 여부</td>
      </tr>
      <tr>
        <td>지원분야</td>
        <td>사업화, R&amp;D, 수출, 마케팅, 인력, 공간·보육 등</td>
      </tr>
      <tr>
        <td>마감·서류</td>
        <td>신청 마감일, 사업계획서 양식, 증빙서류, 발표자료</td>
      </tr>
    </tbody>
  </table>

  <div class="dh-check-cards" aria-label="지원사업 신청 전 정리할 기준">
    <div class="dh-check-card"><b>창업단계</b><p>예비창업자, 초기창업기업, 도약기업, 중소기업 여부</p></div>
    <div class="dh-check-card"><b>업력</b><p>사업자등록일 기준 3년 이내, 7년 이내, 업력 제한 없음 등</p></div>
    <div class="dh-check-card"><b>지역</b><p>사업장 소재지, 전국 공고 가능 여부, 특정 시·도 제한 여부</p></div>
    <div class="dh-check-card"><b>지원분야</b><p>사업화, R&amp;D, 수출, 마케팅, 인력, 공간·보육 등</p></div>
    <div class="dh-check-card"><b>마감·서류</b><p>신청 마감일, 사업계획서 양식, 증빙서류, 발표자료</p></div>
  </div>

  <h2 style="margin:58px 0 18px; font-size:30px; line-height:1.38; font-weight:850; color:#25262C; letter-spacing:0;">독스헌트로 맞춤 공고 확인부터 사업계획서 작성까지 한 번에!</h2>
  <p style="margin:0 0 20px;">사업계획서 AI 독스헌트는 입력한 기업 정보를 바탕으로 K-Startup과 기업마당에 올라온 공고 중에서 나에게 맞는 지원사업을 추천하고, 필요한 내용을 요약해서 한눈에 보기 쉽게 정리해줍니다.</p>
  <p style="margin:0 0 20px;">공고를 선택하면 지원대상, 신청기간, 제출서류, 평가 기준처럼 사업계획서에 반영해야 할 내용을 빠르게 볼 수 있습니다. 긴 공고문을 처음부터 끝까지 다시 읽지 않아도 핵심 조건을 확인할 수 있습니다.</p>

  <div class="dh-shot-slots" aria-label="독스헌트 지원사업 추천과 공고 요약 화면">
    <figure class="dh-shot-slot">
      <img class="dh-shot-image" src="/docshunt-assets/blog-inline/1780626861627x947397884088036900-1.png" alt="독스헌트 기업 프로필 입력 화면">
      <figcaption>기업 프로필에 업력, 지역, 사업 분야 같은 정보를 입력해 추천 기준을 만듭니다.</figcaption>
    </figure>
    <figure class="dh-shot-slot">
      <img class="dh-shot-image" src="/docshunt-assets/blog-inline/1780626861627x947397884088036900-2.png" alt="독스헌트 지원 가능 공고 목록 화면">
      <figcaption>사업계획서 만들기 화면에서 지원 가능 조건에 맞는 K-Startup·기업마당 공고를 확인합니다.</figcaption>
    </figure>
    <figure class="dh-shot-slot wide">
      <img class="dh-shot-image" src="/docshunt-assets/blog-inline/1780626861627x947397884088036900-3.png" alt="독스헌트 공고 신청 자격과 공고 요약 화면">
      <figcaption>공고를 선택하면 신청 자격 충족 여부와 공고 요약을 확인하고 사업계획서 작성으로 이어갈 수 있습니다.</figcaption>
    </figure>
  </div>

  <div class="dh-steps">
    <div class="dh-step"><b>1단계</b><span><strong>기업 정보를 입력하고 나에게 맞는 공고를 추천받습니다.</strong> 창업단계, 업력, 지역, 사업 분야를 바탕으로 K-Startup과 기업마당 공고를 확인합니다.</span></div>
    <div class="dh-step"><b>2단계</b><span><strong>요약된 공고 내용을 다시 한 번 확인합니다.</strong> 지원대상, 신청기간, 제출서류, 평가 기준처럼 사업계획서 작성 전에 필요한 내용을 확인합니다.</span></div>
    <div class="dh-step"><b>3단계</b><span><strong>추천받은 공고에 맞춰 독스헌트와 함께 사업계획서를 쉽고 빠르게 작성합니다.</strong> 선택한 공고의 지원대상과 제출서류를 확인한 뒤, 그 공고에 맞춰 사업계획서 작성을 시작할 수 있습니다.</span></div>
  </div>

  <h2 style="margin:58px 0 18px; font-size:30px; line-height:1.38; font-weight:850; color:#25262C; letter-spacing:0;">이제 내 상황에 맞는 지원사업을 확인해보세요</h2>
  <p style="margin:0 0 20px;">지원사업 준비는 내 상황에 맞는 공고를 빠르게 찾는 데서 시작됩니다. 공고를 찾는 데 쓰는 시간을 줄이고, 선택한 공고에 맞춰 사업계획서 작성에 더 집중해보세요.</p>

  <div class="dh-cta-row final">
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=docshunt_blog&amp;utm_medium=owned&amp;utm_campaign=kstartup_recommendation&amp;utm_content=blog_cta" target="_blank" rel="noopener">내 조건에 맞는 지원사업 추천받기</a>
  </div>

  <p class="dh-source">출처: <a href="https://www.korea.kr/news/policyNewsView.do?newsId=148956820" target="_blank" rel="noopener">정책브리핑 2026년 창업지원 통합공고</a>, <a href="https://www.k-startup.go.kr/web" target="_blank" rel="noopener">K-Startup 창업지원포털</a>, <a href="https://bizinfo.go.kr/" target="_blank" rel="noopener">기업마당</a></p>
</div>`;
