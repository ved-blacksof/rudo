import FormHeader from "./formHeader";

import { useFormContext } from "../../context";
import { useState, useEffect } from "react";

const ReportDetail = () => {
  const [data, setData] = useState(0);
  const { ansData } = useFormContext();

  useEffect(() => {
    const marks = Object.keys(ansData).reduce((a, c) => a + ansData[c], 0);
    const score = Math.floor((marks / 80) * 100);
    setData(score);
  }, [ansData]);

  return (
    <>
      <FormHeader />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
        className=" bg-formBg relative py-20 px-3"
      >
        <div
          style={{
            backgroundImage: `linear-gradient( to right  , #4ABE9A 0% , #4ABE9A ${data}% , #fff ${data}%   , #fff  100%)`,
          }}
          className="max-w-screen-md bg-white rounded-3xl pb-1 font-bold text-white items-center flex-nowrap h-12 mx-auto lg:w-9/12 text-xl lg:text-3xl grid place-content-center"
        >
          {data < 50 ? "Sour" : "Sweet"}
        </div>
        <div className=" grid place-content-center gap-2">
          <svg
            width="465"
            height="307"
            viewBox="0 0 465 467"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M163.497 62.9751L47.3106 213.145C41.06 221.223 43.0131 232.914 51.5504 238.522L279.431 388.223C288.313 394.058 300.303 390.71 304.878 381.118L401.668 178.184C405.865 169.385 402.076 158.852 393.237 154.742L184.752 57.8066C177.329 54.3554 168.506 56.5009 163.497 62.9751Z"
              fill="url(#paint0_linear_1050_9718)"
            />
            <path
              d="M167.218 77.0884L51.0314 227.258C44.7808 235.337 46.7339 247.027 55.2711 252.636L283.152 402.336C292.034 408.171 304.023 404.824 308.598 395.232L405.389 192.297C409.585 183.498 405.797 172.966 396.957 168.855L188.473 71.9199C181.05 68.4687 172.227 70.6142 167.218 77.0884Z"
              fill="url(#paint1_linear_1050_9718)"
            />
            <path
              d="M322.671 337.442C318.95 337.442 314.837 337.128 310.215 336.423C308.805 336.227 307.825 334.896 308.06 333.485C308.256 332.075 309.588 331.096 310.998 331.331C331.289 334.426 344.685 329.882 348.72 318.561C351.266 311.432 350.012 301.874 345.273 292.278C340.533 282.602 332.855 274.141 324.238 269.049C323.024 268.344 322.593 266.738 323.337 265.524C324.042 264.31 325.648 263.879 326.862 264.623C336.302 270.185 344.724 279.43 349.895 290.006C355.222 300.817 356.554 311.863 353.538 320.285C351.148 327.14 343.941 337.442 322.671 337.442Z"
              fill="#1D1D1D"
            />
            <path
              d="M143.004 337.446C121.774 337.446 114.566 327.144 112.138 320.289C109.161 311.867 110.492 300.821 115.78 290.01C120.99 279.434 129.373 270.189 138.813 264.627C140.027 263.922 141.633 264.314 142.338 265.528C143.043 266.742 142.652 268.348 141.437 269.053C132.82 274.106 125.181 282.567 120.403 292.282C115.702 301.879 114.449 311.436 116.956 318.565C120.99 329.886 134.387 334.43 154.677 331.335C156.087 331.139 157.38 332.079 157.615 333.49C157.811 334.9 156.871 336.192 155.461 336.427C150.838 337.132 146.686 337.446 143.004 337.446Z"
              fill="#1D1D1D"
            />
            <g filter="url(#filter0_iii_1050_9718)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M175.077 355.327C173.746 354.337 172.451 353.309 171.192 352.245C146.014 330.96 135.242 295.115 135.242 255.308C135.242 203.602 164.033 157.968 203.674 142.574C203.797 142.526 203.92 142.48 204.043 142.435C212.549 139.223 220.012 139.247 229.975 139.279C230.61 139.282 231.255 139.284 231.912 139.285L231.916 139.283C242.884 134.975 255.967 139.675 266.426 144.415C272.265 147.059 277.842 150.368 283.098 154.261C285.636 156.14 288.098 158.156 290.479 160.298C314.725 182.111 330.472 217.057 330.472 255.309C330.472 308.065 311.553 353.861 265.255 368.032C262.322 377.183 250.404 384.032 236.149 384.032C222.915 384.032 211.695 378.129 207.809 369.961C195.081 367.147 184.219 362.127 175.077 355.327Z"
                fill="url(#paint2_radial_1050_9718)"
              />
            </g>
            <g filter="url(#filter1_iii_1050_9718)">
              <ellipse
                cx="236.149"
                cy="363.64"
                rx="29.7973"
                ry="20.3876"
                fill="url(#paint3_radial_1050_9718)"
              />
            </g>
            <g filter="url(#filter2_f_1050_9718)">
              <path
                d="M205.371 368.129C209.578 379.267 227.087 383.538 235.316 384.281C256.589 384.281 266.274 372.035 268.458 365.911C308.957 354.915 323.394 309.053 327.589 290.605C294.482 333.056 205.759 346.604 163.496 344.962C164.577 352.914 191.863 363.72 205.371 368.129Z"
                fill="#EBAD1E"
              />
            </g>
            <path
              d="M165.681 350.762C165.564 350.762 165.407 350.762 165.289 350.723C155.144 349.195 152.48 338.737 152.48 333.41C152.48 331.999 153.616 330.824 155.066 330.824C156.476 330.824 157.651 331.96 157.651 333.41C157.651 333.84 157.808 344.377 166.112 345.631C167.522 345.827 168.501 347.159 168.266 348.569C168.031 349.822 166.935 350.762 165.681 350.762Z"
              fill="#1D1D1D"
            />
            <path
              d="M299.996 350.762C298.742 350.762 297.645 349.861 297.45 348.569C297.254 347.158 298.194 345.866 299.604 345.631C307.908 344.377 308.065 333.879 308.065 333.409C308.065 331.999 309.24 330.863 310.65 330.863C312.06 330.863 313.235 331.999 313.235 333.449C313.235 338.776 310.572 349.195 300.427 350.762C300.231 350.723 300.113 350.762 299.996 350.762Z"
              fill="#1D1D1D"
            />
            <mask
              id="mask0_1050_9718"
              maskUnits="userSpaceOnUse"
              x="187"
              y="258"
              width="97"
              height="50"
            >
              <path
                d="M202.064 258.558C198.302 258.558 196.42 258.558 194.312 259.511C191.45 260.804 188.402 265.006 188.061 268.129C187.81 270.428 188.185 271.575 188.934 273.869C191.32 281.176 195.405 287.894 200.942 293.432C210.191 302.681 222.736 307.877 235.816 307.877C248.896 307.877 261.44 302.681 270.69 293.432C276.46 287.661 280.654 280.607 282.991 272.941C283.689 270.651 284.038 269.507 283.773 267.378C283.408 264.456 280.578 260.634 277.889 259.433C275.93 258.558 274.134 258.558 270.54 258.558L235.816 258.558L202.064 258.558Z"
                fill="url(#paint4_linear_1050_9718)"
              />
            </mask>
            <g mask="url(#mask0_1050_9718)">
              <g filter="url(#filter3_i_1050_9718)">
                <path
                  d="M202.064 258.558C198.302 258.558 196.42 258.558 194.312 259.511C191.45 260.804 188.402 265.006 188.061 268.129C187.81 270.428 188.185 271.575 188.934 273.869C191.32 281.176 195.405 287.894 200.942 293.432C210.191 302.681 222.736 307.877 235.816 307.877C248.896 307.877 261.44 302.681 270.69 293.432C276.46 287.661 280.654 280.607 282.991 272.941C283.689 270.651 284.038 269.507 283.773 267.378C283.408 264.456 280.578 260.634 277.889 259.433C275.93 258.558 274.134 258.558 270.54 258.558L235.816 258.558L202.064 258.558Z"
                  fill="url(#paint5_linear_1050_9718)"
                />
              </g>
              <g filter="url(#filter4_i_1050_9718)">
                <path
                  d="M188.174 271.307C186.378 262.753 185.48 258.476 187.481 255.617C187.703 255.3 187.936 255.012 188.202 254.729C190.588 252.184 194.868 252.184 203.428 252.184H270.33C277.872 252.184 281.643 252.184 284.058 255.104C286.473 258.024 285.905 260.999 284.768 266.949C284.679 267.417 284.578 267.865 284.463 268.288C282.203 276.616 281.073 280.78 280.565 281.671C278.846 284.686 278.949 284.607 275.589 285.477C274.596 285.734 273.248 285.734 270.552 285.734H196.739C190.71 285.734 189.413 277.208 188.174 271.307Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter5_i_1050_9718)">
                <path
                  d="M187.502 299.49C185.706 308.044 184.808 312.321 186.809 315.18C187.031 315.497 187.265 315.784 187.53 316.067C189.916 318.613 194.196 318.613 202.756 318.613H269.658C277.2 318.613 280.971 318.613 283.386 315.693C285.802 312.773 285.233 309.798 284.097 303.848C284.007 303.38 283.906 302.932 283.791 302.509C281.531 294.181 280.401 290.016 279.893 289.126C278.174 286.111 278.277 286.19 274.917 285.32C273.924 285.063 272.576 285.063 269.881 285.063H196.067C190.038 285.063 188.741 293.589 187.502 299.49Z"
                  fill="white"
                />
              </g>
            </g>
            <g filter="url(#filter6_i_1050_9718)">
              <path
                d="M221.749 243.794C224.513 243.794 226.809 241.527 226.215 238.827C225.274 234.542 223.125 230.576 219.974 227.425C215.633 223.084 209.744 220.645 203.605 220.645C197.465 220.645 191.577 223.084 187.235 227.425C184.247 230.414 182.16 234.135 181.149 238.167C180.386 241.212 183 243.794 186.139 243.794C189.082 243.794 191.368 241.299 192.619 238.635C193.21 237.375 194.019 236.215 195.022 235.212C197.299 232.936 200.386 231.657 203.605 231.657C206.824 231.657 209.911 232.936 212.187 235.212C213.027 236.052 213.731 237.003 214.286 238.03C215.861 240.949 218.431 243.794 221.749 243.794Z"
                fill="#C4C4C4"
              />
              <path
                d="M221.749 243.794C224.513 243.794 226.809 241.527 226.215 238.827C225.274 234.542 223.125 230.576 219.974 227.425C215.633 223.084 209.744 220.645 203.605 220.645C197.465 220.645 191.577 223.084 187.235 227.425C184.247 230.414 182.16 234.135 181.149 238.167C180.386 241.212 183 243.794 186.139 243.794C189.082 243.794 191.368 241.299 192.619 238.635C193.21 237.375 194.019 236.215 195.022 235.212C197.299 232.936 200.386 231.657 203.605 231.657C206.824 231.657 209.911 232.936 212.187 235.212C213.027 236.052 213.731 237.003 214.286 238.03C215.861 240.949 218.431 243.794 221.749 243.794Z"
                fill="#221725"
              />
            </g>
            <g filter="url(#filter7_i_1050_9718)">
              <path
                d="M286.837 243.794C289.601 243.794 291.897 241.527 291.303 238.827C290.362 234.542 288.213 230.576 285.062 227.425C280.721 223.084 274.832 220.645 268.693 220.645C262.553 220.645 256.665 223.084 252.323 227.425C249.335 230.414 247.248 234.135 246.237 238.167C245.474 241.212 248.088 243.794 251.227 243.794C254.17 243.794 256.456 241.299 257.706 238.635C258.298 237.375 259.107 236.215 260.11 235.212C262.387 232.936 265.474 231.657 268.693 231.657C271.912 231.657 274.999 232.936 277.275 235.212C278.115 236.052 278.819 237.003 279.374 238.03C280.949 240.949 283.519 243.794 286.837 243.794Z"
                fill="#C4C4C4"
              />
              <path
                d="M286.837 243.794C289.601 243.794 291.897 241.527 291.303 238.827C290.362 234.542 288.213 230.576 285.062 227.425C280.721 223.084 274.832 220.645 268.693 220.645C262.553 220.645 256.665 223.084 252.323 227.425C249.335 230.414 247.248 234.135 246.237 238.167C245.474 241.212 248.088 243.794 251.227 243.794C254.17 243.794 256.456 241.299 257.706 238.635C258.298 237.375 259.107 236.215 260.11 235.212C262.387 232.936 265.474 231.657 268.693 231.657C271.912 231.657 274.999 232.936 277.275 235.212C278.115 236.052 278.819 237.003 279.374 238.03C280.949 240.949 283.519 243.794 286.837 243.794Z"
                fill="#221725"
              />
            </g>
            <g filter="url(#filter8_i_1050_9718)">
              <path
                d="M224.864 132.393C237.439 123.551 232.285 103.499 220.506 93.121C208.738 82.709 191.567 77.3293 189.94 78.4804C188.314 79.6315 184.02 102.389 194.124 118.297C204.228 134.205 217.181 137.804 224.864 132.393Z"
                fill="url(#paint6_linear_1050_9718)"
              />
            </g>
            <path
              d="M224.395 132.036L226.155 130.702C231.767 138.169 234.969 141.015 235.003 141.026L233.553 142.684C233.416 142.583 230.168 139.704 224.395 132.036Z"
              fill="#318C1C"
            />
            <path
              d="M210.08 92.3499C209.953 92.1025 209.96 91.7857 210.115 91.5349C210.371 91.1471 210.879 91.0278 211.255 91.2608C213.683 92.7699 217.211 95.4195 220.315 99.511C224.052 104.443 226.192 110.198 226.689 116.63C226.729 117.093 226.383 117.471 225.919 117.51C225.456 117.55 225.078 117.204 225.039 116.74C224.012 103.041 215.428 95.7693 210.412 92.6626C210.252 92.574 210.138 92.4623 210.08 92.3499Z"
              fill="url(#paint7_linear_1050_9718)"
            />
            <g filter="url(#filter9_f_1050_9718)">
              <ellipse
                cx="234.766"
                cy="142.207"
                rx="7.4186"
                ry="1.96921"
                fill="#744500"
                fill-opacity="0.6"
              />
            </g>
            <ellipse
              cx="275.496"
              cy="352.601"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 275.496 352.601)"
              fill="#878787"
              fill-opacity="0.2"
            />
            <ellipse
              cx="295.889"
              cy="330.752"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 295.889 330.752)"
              fill="#878787"
              fill-opacity="0.2"
            />
            <ellipse
              cx="273.526"
              cy="317.123"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 273.526 317.123)"
              fill="#B77D00"
              fill-opacity="0.37"
            />
            <ellipse
              cx="290.801"
              cy="301.262"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 290.801 301.262)"
              fill="#B77D00"
              fill-opacity="0.37"
            />
            <ellipse
              cx="306.176"
              cy="284.267"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 306.176 284.267)"
              fill="#B77D00"
              fill-opacity="0.37"
            />
            <ellipse
              cx="287.647"
              cy="281.84"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 287.647 281.84)"
              fill="#B77D00"
              fill-opacity="0.37"
            />
            <ellipse
              cx="166.692"
              cy="178.549"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 166.692 178.549)"
              fill="#B77D00"
              fill-opacity="0.17"
            />
            <ellipse
              cx="169.846"
              cy="197.971"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 169.846 197.971)"
              fill="#B77D00"
              fill-opacity="0.17"
            />
            <ellipse
              cx="152.57"
              cy="213.832"
              rx="5.8666"
              ry="3.98656"
              transform="rotate(-39.6655 152.57 213.832)"
              fill="#B77D00"
              fill-opacity="0.17"
            />
            <g filter="url(#filter10_df_1050_9718)">
              <ellipse
                cx="236.149"
                cy="401.909"
                rx="51.6292"
                ry="6.30935"
                fill="#1C1C1C"
                fill-opacity="0.1"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_iii_1050_9718"
                x="129.157"
                y="127.629"
                width="212.932"
                height="265.253"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4.42534"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_innerShadow_1050_9718"
                />
                <feOffset dx="11.6165" dy="7.19118" />
                <feGaussianBlur stdDeviation="13.276" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-9.95701" />
                <feGaussianBlur stdDeviation="8.57409" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_1050_9718"
                  result="effect2_innerShadow_1050_9718"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-6.08484" dy="8.85068" />
                <feGaussianBlur stdDeviation="8.57409" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.59 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_1050_9718"
                  result="effect3_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter1_iii_1050_9718"
                x="200.267"
                y="333.295"
                width="77.2951"
                height="59.5831"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4.42534"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_innerShadow_1050_9718"
                />
                <feOffset dx="11.6165" dy="7.19118" />
                <feGaussianBlur stdDeviation="13.276" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-9.95701" />
                <feGaussianBlur stdDeviation="8.57409" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_1050_9718"
                  result="effect2_innerShadow_1050_9718"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-6.08484" dy="8.85068" />
                <feGaussianBlur stdDeviation="8.57409" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.59 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_1050_9718"
                  result="effect3_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter2_f_1050_9718"
                x="154.321"
                y="281.43"
                width="182.444"
                height="112.026"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="4.5875"
                  result="effect1_foregroundBlur_1050_9718"
                />
              </filter>
              <filter
                id="filter3_i_1050_9718"
                x="187.982"
                y="258.559"
                width="95.8789"
                height="52.0024"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.68402" />
                <feGaussianBlur stdDeviation="5.36804" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter4_i_1050_9718"
                x="186.344"
                y="250.171"
                width="99.4023"
                height="35.5638"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-2.01302" />
                <feGaussianBlur stdDeviation="5.36804" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter5_i_1050_9718"
                x="185.672"
                y="283.049"
                width="99.4023"
                height="35.5638"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-2.01302" />
                <feGaussianBlur stdDeviation="5.36804" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter6_i_1050_9718"
                x="181.016"
                y="220.645"
                width="45.2949"
                height="23.1504"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="17.7481"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_innerShadow_1050_9718"
                />
                <feOffset dx="6.17325" dy="-4.69704" />
                <feGaussianBlur stdDeviation="6.94491" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter7_i_1050_9718"
                x="246.104"
                y="220.645"
                width="45.2949"
                height="23.1504"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="17.7481"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_innerShadow_1050_9718"
                />
                <feOffset dx="6.17325" dy="-6.03905" />
                <feGaussianBlur stdDeviation="6.94491" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter8_i_1050_9718"
                x="187.633"
                y="78.3281"
                width="49.0766"
                height="58.6965"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4.55316" dy="2.27658" />
                <feGaussianBlur stdDeviation="6.32383" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_1050_9718"
                />
              </filter>
              <filter
                id="filter9_f_1050_9718"
                x="224.726"
                y="137.617"
                width="20.0808"
                height="9.18036"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1.31072"
                  result="effect1_foregroundBlur_1050_9718"
                />
              </filter>
              <filter
                id="filter10_df_1050_9718"
                x="174.52"
                y="385.6"
                width="123.258"
                height="32.6191"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1050_9718"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1050_9718"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect2_foregroundBlur_1050_9718"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1050_9718"
                x1="183.908"
                y1="48.7823"
                x2="277.612"
                y2="404.164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1050_9718"
                x1="187.629"
                y1="62.8956"
                x2="281.333"
                y2="418.278"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF8500" stop-opacity="0.9" />
                <stop offset="1" stop-color="#E75553" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_1050_9718"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(232.76 348.245) rotate(84.5861) scale(35.9473 55.6761)"
              >
                <stop stop-color="#FFBB0C" />
                <stop offset="1" stop-color="#FFC907" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1050_9718"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(232.757 345.904) rotate(84.9162) scale(38.2738 55.705)"
              >
                <stop stop-color="#FFBB0C" />
                <stop offset="1" stop-color="#FFC907" />
              </radialGradient>
              <linearGradient
                id="paint4_linear_1050_9718"
                x1="235.816"
                y1="307.877"
                x2="225.751"
                y2="250.17"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FB39A2" />
                <stop offset="1" stop-color="#C520FF" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1050_9718"
                x1="235.816"
                y1="307.877"
                x2="205.621"
                y2="244.131"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3A2EC0" />
                <stop offset="1" stop-color="#FF20C1" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_1050_9718"
                x1="224.903"
                y1="96.4833"
                x2="191.576"
                y2="113.657"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#008B0E" />
                <stop offset="1" stop-color="#038B00" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_1050_9718"
                x1="211.582"
                y1="91.753"
                x2="226.736"
                y2="114.202"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid place-content-center ">
          <div className=" bg-green text-white pt-4 pb-2 px-16  flex flex-nowrap gap-2 items-center justify-center font-epilogue rounded-2xl">
            <h1 className=" lg:text-3xl text-xl min-w-full">
              Financial Wellness Score
            </h1>
            <span className="lg:text-4xl text-2xl  font-bold ">{data}</span>
          </div>
          <div className=" font-epilogue grid place-content-center gap-4 mt-8 text-center max-w-screen-md mx-auto">
            <h1 className=" lg:text-3xl text-xl px-4 font-semibold">
              Sweet, sour and minty! Just as you like it!
            </h1>
            <span className=" lg:text-xl text-lg min-w-full px-3 lg:leading-9">
              You are on the right track. Financially healthy folks are
              successfully managing all aspects of their financial life. They
              have good to excellent credit, a manageable debt, an emergency
              savings fund and are on the right track for retirement. The goal
              for you is staying the course and reaching your financial goals.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReportDetail;
