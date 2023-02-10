const ProfileIcon = (props) => (
    <svg
      width={44}
      height={44}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={44}
        height={44}
      >
        <circle cx={22} cy={22} r={22} fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)" stroke="#000" strokeWidth={2}>
        <circle cx={21.676} cy={52.088} r={22.618} />
        <circle cx={22} cy={22} r={21} />
        <circle cx={22} cy={18.765} r={6.765} />
      </g>
    </svg>
  )
  
  export default ProfileIcon