const LogoIcon = (props: {
  className?: string;
  strokeWidth?: number;
  fill?: string;
  width?: string;
  height?: string;
  arrowIconFill?: string;
}) => {
  return (
    <svg
      width="150"
      height="36"
      viewBox="0 0 150 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2919 7.55029L19.2919 35.9999H4.02393L19.2919 7.55029Z"
        fill={props.fill || "#D0BCFF"}
      />
      <path
        d="M20.0022 8.18262L28.8789 25.2524L20.0022 35.2413V8.18262Z"
        fill={props.fill || "#D0BCFF"}
      />
      <path
        d="M37.4005 16.4016V35.9054H20.5347L37.4005 16.4016Z"
        fill={props.fill || "#D0BCFF"}
      />
      <path
        d="M9.23187 24.7465L3.49662 35.8445L1.16486 35.8304L1.16485 16.0852L9.23187 24.7465Z"
        fill={props.fill || "#D0BCFF"}
      />
      <ellipse
        cx="1.5305"
        cy="14.2518"
        rx="0.591783"
        ry="0.632213"
        fill={props.fill || "#D0BCFF"}
      />
      <ellipse
        cx="19.6147"
        cy="6.72401"
        rx="0.591783"
        ry="0.632213"
        fill={props.fill || "#D0BCFF"}
      />
      <ellipse
        cx="37.3926"
        cy="14.2518"
        rx="0.591783"
        ry="0.632213"
        fill={props.fill || "#D0BCFF"}
      />
      <path
        d="M44.8939 18.188V16.856C46.1659 16.112 47.1619 15.368 47.8819 14.624C48.6019 13.88 49.1539 12.992 49.5379 11.96H50.5819V16.496H55.4059V18.188H50.5819V29.132C50.5819 29.972 50.6179 30.68 50.6899 31.256C50.7859 31.832 50.9299 32.3 51.1219 32.66C51.3139 32.996 51.5659 33.236 51.8779 33.38C52.1899 33.524 52.5859 33.596 53.0659 33.596C53.6659 33.596 54.1699 33.476 54.5779 33.236C55.0099 32.972 55.4299 32.54 55.8379 31.94L56.7379 32.624C56.4019 33.512 55.8139 34.196 54.9739 34.676C54.1579 35.132 53.1379 35.36 51.9139 35.36C50.3299 35.36 49.1179 34.988 48.2779 34.244C47.4619 33.476 47.0539 32.384 47.0539 30.968V18.188H44.8939ZM61.6673 29.276C61.6673 30.26 61.6913 31.04 61.7393 31.616C61.7873 32.192 61.9073 32.636 62.0993 32.948C62.3153 33.236 62.6153 33.428 62.9993 33.524C63.3833 33.62 63.9233 33.692 64.6193 33.74V35H55.0433V33.74C55.7393 33.692 56.2913 33.62 56.6993 33.524C57.1073 33.428 57.4193 33.236 57.6353 32.948C57.8513 32.66 57.9833 32.252 58.0313 31.724C58.1033 31.172 58.1393 30.44 58.1393 29.528V14.444C58.1393 13.028 58.1153 11.9 58.0673 11.06C58.0433 10.22 57.9833 9.584 57.8873 9.152C57.8393 8.864 57.7553 8.636 57.6353 8.468C57.5393 8.276 57.3833 8.132 57.1673 8.036C56.9513 7.916 56.6633 7.832 56.3033 7.784C55.9433 7.736 55.4993 7.712 54.9713 7.712V6.488L61.5953 5.12V18.836H61.7393C62.0993 18.356 62.5433 17.924 63.0713 17.54C63.6233 17.132 64.2113 16.784 64.8353 16.496C65.4593 16.208 66.1073 15.98 66.7793 15.812C67.4753 15.644 68.1473 15.56 68.7953 15.56C69.8993 15.56 70.9073 15.752 71.8193 16.136C72.7553 16.52 73.4753 17.036 73.9793 17.684C74.3873 18.236 74.6873 18.968 74.8793 19.88C75.0713 20.768 75.1673 21.98 75.1673 23.516V29.276C75.1673 30.26 75.1913 31.04 75.2393 31.616C75.2873 32.168 75.4073 32.6 75.5993 32.912C75.8153 33.224 76.1153 33.428 76.4993 33.524C76.8833 33.62 77.4233 33.692 78.1193 33.74V35H68.5793V33.74C69.2513 33.716 69.7913 33.656 70.1993 33.56C70.6073 33.44 70.9073 33.236 71.0993 32.948C71.3153 32.66 71.4473 32.252 71.4953 31.724C71.5673 31.172 71.6033 30.44 71.6033 29.528V24.992C71.6033 22.304 71.2913 20.396 70.6673 19.268C70.0433 18.116 68.9993 17.54 67.5353 17.54C66.4073 17.54 65.3753 17.828 64.4393 18.404C63.5273 18.98 62.8073 19.772 62.2793 20.78C62.1593 21.044 62.0513 21.296 61.9553 21.536C61.8833 21.752 61.8233 22.004 61.7753 22.292C61.7273 22.58 61.6913 22.916 61.6673 23.3C61.6673 23.66 61.6673 24.116 61.6673 24.668V29.276ZM94.8765 31.652C92.8365 34.124 90.3045 35.36 87.2805 35.36C85.8645 35.36 84.5805 35.132 83.4285 34.676C82.2765 34.196 81.2805 33.536 80.4405 32.696C79.6245 31.832 78.9885 30.812 78.5325 29.636C78.0765 28.436 77.8485 27.116 77.8485 25.676C77.8485 24.212 78.0885 22.856 78.5685 21.608C79.0485 20.36 79.7205 19.292 80.5845 18.404C81.4725 17.516 82.5165 16.82 83.7165 16.316C84.9405 15.812 86.2725 15.56 87.7125 15.56C90.0405 15.56 91.8405 16.196 93.1125 17.468C94.3845 18.716 95.0205 20.516 95.0205 22.868C95.0205 23.204 94.9485 23.408 94.8045 23.48C94.6845 23.552 94.3845 23.588 93.9045 23.588H82.0605C82.0125 23.78 81.9765 24.02 81.9525 24.308C81.9285 24.572 81.9165 24.872 81.9165 25.208C81.9165 26.456 82.0605 27.596 82.3485 28.628C82.6605 29.636 83.0925 30.5 83.6445 31.22C84.2205 31.94 84.8925 32.504 85.6605 32.912C86.4525 33.296 87.3285 33.488 88.2885 33.488C89.2965 33.488 90.2325 33.272 91.0965 32.84C91.9605 32.384 92.8485 31.652 93.7605 30.644L94.8765 31.652ZM88.9365 21.932C89.4165 21.932 89.8005 21.92 90.0885 21.896C90.3765 21.872 90.5925 21.824 90.7365 21.752C90.8805 21.68 90.9765 21.584 91.0245 21.464C91.0725 21.32 91.0965 21.14 91.0965 20.924C91.0965 19.82 90.7365 18.944 90.0165 18.296C89.3205 17.624 88.3605 17.288 87.1365 17.288C84.5445 17.288 82.9365 18.836 82.3125 21.932H88.9365ZM100.645 27.476C100.645 28.388 100.777 29.228 101.041 29.996C101.305 30.74 101.665 31.388 102.121 31.94C102.601 32.468 103.165 32.888 103.813 33.2C104.485 33.512 105.205 33.668 105.973 33.668C106.813 33.668 107.569 33.476 108.241 33.092C108.937 32.708 109.525 32.168 110.005 31.472C110.509 30.752 110.893 29.9 111.157 28.916C111.445 27.908 111.589 26.792 111.589 25.568C111.589 24.344 111.445 23.228 111.157 22.22C110.869 21.188 110.473 20.312 109.969 19.592C109.465 18.848 108.853 18.272 108.133 17.864C107.437 17.456 106.669 17.252 105.829 17.252C104.845 17.252 103.969 17.492 103.201 17.972C102.433 18.428 101.845 19.076 101.437 19.916C100.909 20.972 100.645 22.424 100.645 24.272V27.476ZM100.573 18.476H100.717C101.485 17.468 102.325 16.736 103.237 16.28C104.173 15.8 105.253 15.56 106.477 15.56C107.773 15.56 108.973 15.812 110.077 16.316C111.205 16.82 112.177 17.516 112.993 18.404C113.833 19.292 114.481 20.348 114.937 21.572C115.417 22.772 115.657 24.068 115.657 25.46C115.657 26.876 115.417 28.196 114.937 29.42C114.457 30.62 113.797 31.664 112.957 32.552C112.141 33.44 111.169 34.136 110.041 34.64C108.913 35.144 107.689 35.396 106.369 35.396C105.001 35.396 103.717 35.144 102.517 34.64C101.341 34.136 100.369 33.452 99.6012 32.588L97.9092 35H97.1172V13.256C97.1172 10.832 96.9612 9.284 96.6492 8.612C96.5772 8.444 96.4932 8.312 96.3972 8.216C96.3012 8.096 96.1572 8 95.9652 7.928C95.7732 7.832 95.5092 7.748 95.1732 7.676C94.8372 7.604 94.3812 7.532 93.8052 7.46V6.56L100.573 5.12V18.476ZM133.308 31.652C131.268 34.124 128.736 35.36 125.712 35.36C124.296 35.36 123.012 35.132 121.86 34.676C120.708 34.196 119.712 33.536 118.872 32.696C118.056 31.832 117.42 30.812 116.964 29.636C116.508 28.436 116.28 27.116 116.28 25.676C116.28 24.212 116.52 22.856 117 21.608C117.48 20.36 118.152 19.292 119.016 18.404C119.904 17.516 120.948 16.82 122.148 16.316C123.372 15.812 124.704 15.56 126.144 15.56C128.472 15.56 130.272 16.196 131.544 17.468C132.816 18.716 133.452 20.516 133.452 22.868C133.452 23.204 133.38 23.408 133.236 23.48C133.116 23.552 132.816 23.588 132.336 23.588H120.492C120.444 23.78 120.408 24.02 120.384 24.308C120.36 24.572 120.348 24.872 120.348 25.208C120.348 26.456 120.492 27.596 120.78 28.628C121.092 29.636 121.524 30.5 122.076 31.22C122.652 31.94 123.324 32.504 124.092 32.912C124.884 33.296 125.76 33.488 126.72 33.488C127.728 33.488 128.664 33.272 129.528 32.84C130.392 32.384 131.28 31.652 132.192 30.644L133.308 31.652ZM127.368 21.932C127.848 21.932 128.232 21.92 128.52 21.896C128.808 21.872 129.024 21.824 129.168 21.752C129.312 21.68 129.408 21.584 129.456 21.464C129.504 21.32 129.528 21.14 129.528 20.924C129.528 19.82 129.168 18.944 128.448 18.296C127.752 17.624 126.792 17.288 125.568 17.288C122.976 17.288 121.368 18.836 120.744 21.932H127.368ZM135.369 35H134.577V28.808H135.477C136.413 32.192 138.117 33.884 140.589 33.884C141.549 33.884 142.305 33.656 142.857 33.2C143.433 32.72 143.721 32 143.721 31.04C143.721 30.68 143.661 30.38 143.541 30.14C143.445 29.876 143.241 29.612 142.929 29.348C142.641 29.06 142.221 28.736 141.669 28.376C141.141 28.016 140.433 27.56 139.545 27.008C138.729 26.504 138.021 26.036 137.421 25.604C136.821 25.172 136.317 24.74 135.909 24.308C135.501 23.852 135.189 23.372 134.973 22.868C134.781 22.364 134.685 21.776 134.685 21.104C134.685 20.288 134.817 19.544 135.081 18.872C135.369 18.176 135.753 17.588 136.233 17.108C136.713 16.628 137.277 16.256 137.925 15.992C138.573 15.704 139.281 15.56 140.049 15.56C140.697 15.56 141.369 15.668 142.065 15.884C142.761 16.076 143.373 16.34 143.901 16.676L144.621 15.92H145.305V21.104H144.369C143.841 19.64 143.265 18.596 142.641 17.972C142.017 17.348 141.249 17.036 140.337 17.036C139.521 17.036 138.861 17.252 138.357 17.684C137.877 18.116 137.637 18.716 137.637 19.484C137.637 19.892 137.697 20.252 137.817 20.564C137.961 20.852 138.177 21.14 138.465 21.428C138.753 21.716 139.113 22.016 139.545 22.328C140.001 22.616 140.541 22.952 141.165 23.336C142.197 23.984 143.073 24.56 143.793 25.064C144.537 25.568 145.137 26.072 145.593 26.576C146.049 27.056 146.385 27.56 146.601 28.088C146.817 28.616 146.925 29.216 146.925 29.888C146.925 31.592 146.373 32.936 145.269 33.92C144.165 34.88 142.713 35.36 140.913 35.36C139.041 35.36 137.433 34.82 136.089 33.74L135.369 35Z"
        fill={props.fill || "#D0BCFF"}
      />
    </svg>
  );
};

export default LogoIcon;
