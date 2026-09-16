const documents = [
  { x: 15, y: 40, label: "창업 지원", color: "#2563eb" },
  { x: 142.5, y: 40, label: "R&D 지원", color: "#2563eb" },
  { x: 270, y: 40, label: "판로 지원", color: "#2563eb" },
  { x: 15, y: 314, label: "수출 지원", color: "#2563eb" },
  { x: 142.5, y: 314, label: "사업화 지원", color: "#2563eb" },
  { x: 270, y: 314, label: "지역 지원", color: "#2563eb" },
];

export function MemoryReusePreview() {
  return (
    <svg viewBox="0 0 400 448" width="100%" height="100%" aria-hidden="true" style={{ display: "block", fontFamily: "inherit" }}>
      <rect width="400" height="448" fill="#f5f6f8" />
      <g fill="none" stroke="#93b4ee" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 177V156M72.5 134V148Q72.5 156 80.5 156H319.5Q327.5 156 327.5 148V134M200 156V134" />
        <path d="M200 263V291M72.5 314V299Q72.5 291 80.5 291H319.5Q327.5 291 327.5 299V314M200 291V314" />
      </g>
      {documents.map(({ x, y, label, color }, index) => (
        <g key={label}>
          <rect x={x} y={y} width="115" height="94" rx="5" fill="white" stroke="#e4e7ec" />
          <text x={x + 14} y={y + 25} fontSize="12" fontWeight="600" fill="#30394a">
            {label}
          </text>
          <path d={`M${x + 14} ${y + 40}h86M${x + 14} ${y + 49}h65`} stroke="#e5e9f2" strokeWidth="3" strokeLinecap="round" />
          {index % 2 === 0 ? (
            <g fill={color} opacity=".4">
              <rect x={x + 14} y={y + 67} width="23" height="12" rx="2" />
              <rect x={x + 43} y={y + 61} width="23" height="18" rx="2" />
              <rect x={x + 72} y={y + 56} width="23" height="23" rx="2" />
            </g>
          ) : (
            <path
              d={`M${x + 14} ${y + 62}h86v18h-86zM${x + 14} ${y + 71}h86M${x + 44} ${y + 62}v18`}
              fill="none"
              stroke={color}
              strokeOpacity=".4"
            />
          )}
        </g>
      ))}
      <rect x="129" y="177" width="142" height="86" rx="8" fill="#2563eb" />
      <text x="200" y="210" textAnchor="middle" fontSize="12" fill="#dbeafe">
        내 사업 아이템
      </text>
      <text x="200" y="237" textAnchor="middle" fontSize="15" fontWeight="700" fill="white">
        재고 관리 서비스
      </text>
    </svg>
  );
}
