import React, { ReactElement } from 'react';

export default function BirthdayLogoSvg(
  props: React.SVGProps<SVGSVGElement>,
): ReactElement {
  return (
    <svg viewBox="0 0 114 32" {...props} className="logo">
      <defs>
        <linearGradient
          x1="100%"
          y1="50%"
          x2="0%"
          y2="50%"
          id="BirthdayLogo_svg__a"
        >
          <stop stopColor="#FF4746" offset="0%" />
          <stop stopColor="#FF70A7" offset="50%" />
          <stop stopColor="#BC47FF" offset="80%" />
          <stop stopColor="#7E48FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="100%"
          x2="50%"
          y2="0%"
          id="BirthdayLogo_svg__c"
        >
          <stop stopOpacity={0.5} offset="0%" />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          x1="93.379%"
          y1="78.481%"
          x2="19.38%"
          y2="50%"
          id="BirthdayLogo_svg__f"
        >
          <stop stopColor="#FF4746" offset="0%" />
          <stop stopColor="#FF70A7" offset="50%" />
          <stop stopColor="#BC47FF" offset="80%" />
          <stop stopColor="#7E48FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="43.393%"
          y1="60.013%"
          x2="23.881%"
          y2="40.47%"
          id="BirthdayLogo_svg__g"
        >
          <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="BirthdayLogo_svg__i"
        >
          <stop stopColor="#0076F5" offset="0%" />
          <stop stopColor="#00E4F5" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="39.212%"
          y1="60.013%"
          x2="21.224%"
          y2="-34.941%"
          id="BirthdayLogo_svg__k"
        >
          <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <path
          d="M31.728 2.324l2.02 16.544c-2.576.443-4.906.345-6.99-.292-2.083-.637-4.069-1.859-5.957-3.666L31.728 2.324z"
          id="BirthdayLogo_svg__b"
        />
        <path
          d="M31.728 2.324l2.02 16.544c-1.917-1.715-3.916-2.891-6-3.528-2.083-.637-4.399-.78-6.947-.43L31.728 2.324z"
          id="BirthdayLogo_svg__e"
        />
        <radialGradient
          cx="84.572%"
          cy="-1.741%"
          fx="84.572%"
          fy="-1.741%"
          r="41.424%"
          gradientTransform="matrix(-.27737 .75185 -.96076 -.21706 1.064 -.657)"
          id="BirthdayLogo_svg__h"
        >
          <stop stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </radialGradient>
        <filter
          x="-123.6%"
          y="-48.4%"
          width="347.2%"
          height="293.4%"
          filterUnits="objectBoundingBox"
          id="BirthdayLogo_svg__d"
        >
          <feOffset dy={8} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={4}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <circle id="BirthdayLogo_svg__j" cx={31.722} cy={2.256} r={2.256} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M44.432 18.776v6.701h3.68l.78 2.234h-4.46c-1.23 0-2.227-1-2.227-2.234v-6.701a2.23 2.23 0 012.227-2.234h3.68v2.234h.78v-4.468c0-.617.5-1.117 1.115-1.117h1.115v13.403c0 .617-.499 1.117-1.115 1.117h-1.114v-8.935h-4.461zm11.145 8.935c-1.23 0-2.226-1-2.226-2.234v-2.233a2.23 2.23 0 012.226-2.234h3.681v2.234h.78v-4.468h-6.13v-1.117c0-.617.498-1.117 1.113-1.117h5.018c1.23 0 2.229 1 2.229 2.234v7.818c0 .617-.5 1.117-1.115 1.117H60.04v-4.467h-4.462v2.233h3.681l.78 2.234h-4.46zm8.92 0V17.66c0-.617.498-1.117 1.113-1.117h1.113v10.052c0 .617-.498 1.117-1.113 1.117h-1.113zm2.226-13.395c0 .311-.107.574-.32.788a1.066 1.066 0 01-.786.321 1.09 1.09 0 01-.793-.321 1.062 1.062 0 01-.327-.788c0-.322.109-.59.327-.803a1.09 1.09 0 01.793-.322c.31 0 .573.107.786.322.213.214.32.481.32.803zm2.232 13.395V14.308c0-.617.499-1.117 1.113-1.117h1.113v13.403c0 .617-.498 1.117-1.113 1.117h-1.113zm7.512.005l-3.005-9.453c-.18-.59.159-1.214.747-1.394l1.058-.327 2.452 8.028 2.207-7.237c.18-.59.795-.922 1.382-.742l1.022.327-3.786 12.563a2.227 2.227 0 01-2.129 1.58l-1.84.001c-.615 0-1.113-.5-1.113-1.117v-1.117h1.85c.613 0 1.153-.497 1.155-1.112z"
          fill="#FFF"
        />
        <path
          d="M85.962 27.857v-1.579h-1.62v1.579h1.62zm4.843.103c.785 0 1.45-.197 1.994-.59.545-.394.925-.92 1.14-1.578v2.065h1.34V16.94h-1.34v4.883a3.075 3.075 0 00-1.14-1.579c-.545-.393-1.21-.59-1.994-.59-.717 0-1.355.168-1.914.502-.56.334-.998.816-1.317 1.445-.32.63-.479 1.367-.479 2.213 0 .846.16 1.58.479 2.205.319.625.758 1.104 1.317 1.438.56.335 1.197.502 1.914.502zm.382-1.18c-.824 0-1.484-.263-1.98-.79-.495-.525-.743-1.25-.743-2.175 0-.924.248-1.65.744-2.176.495-.526 1.155-.789 1.98-.789.53 0 1.003.12 1.42.362.417.24.743.587.979 1.04.235.452.353.973.353 1.563s-.118 1.109-.353 1.556a2.565 2.565 0 01-.98 1.04c-.416.246-.89.369-1.42.369zm9.804 1.18c.677 0 1.285-.123 1.825-.369a3.4 3.4 0 001.317-1.032c.339-.443.557-.944.655-1.505h-1.428c-.098.55-.365.99-.802 1.32-.437.33-.979.494-1.626.494-.717 0-1.323-.23-1.818-.693-.496-.462-.758-1.155-.788-2.08h6.462c.04-.206.059-.452.059-.737 0-.679-.155-1.298-.464-1.859a3.45 3.45 0 00-1.34-1.342c-.583-.334-1.267-.502-2.052-.502-.776 0-1.463.168-2.061.502a3.53 3.53 0 00-1.406 1.445c-.338.63-.508 1.367-.508 2.213 0 .846.17 1.58.508 2.205a3.54 3.54 0 001.406 1.438c.598.335 1.285.502 2.06.502zm2.502-4.514h-5.167c.04-.885.31-1.556.81-2.013.5-.457 1.119-.686 1.855-.686.46 0 .888.098 1.28.295.393.197.702.497.927.9.226.403.324.904.295 1.504zm7.021 4.41l3.165-8.097h-1.443l-2.502 6.667-2.532-6.667h-1.442l3.164 8.098h1.59z"
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.56}
        />
        <use
          fill="url(#BirthdayLogo_svg__a)"
          xlinkHref="#BirthdayLogo_svg__b"
        />
        <use
          fill="url(#BirthdayLogo_svg__c)"
          xlinkHref="#BirthdayLogo_svg__b"
        />
        <path
          d="M30.628 21.993l-3.938-3.945 1.968-3.944 6.397 6.41a2.095 2.095 0 010 2.958l-7.874 7.89a2.084 2.084 0 01-2.951 0 2.095 2.095 0 010-2.958l6.398-6.41z"
          fill="#8F8F90"
        />
        <path
          d="M24.231 12.616a2.085 2.085 0 012.952 0l1.476 1.48-17.222 17.258a2.085 2.085 0 01-2.952 0l-1.476-1.48L24.23 12.617zm-7.381 5.425l-2.953 2.958-3.937-3.945-4.921 4.931 3.937 3.946-1.967 3.944-6.398-6.41a2.095 2.095 0 010-2.959l7.874-7.89a2.085 2.085 0 012.952 0l5.413 5.425z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <use
          fill="#000"
          filter="url(#BirthdayLogo_svg__d)"
          xlinkHref="#BirthdayLogo_svg__e"
        />
        <use
          fill="url(#BirthdayLogo_svg__f)"
          xlinkHref="#BirthdayLogo_svg__e"
        />
        <use
          fill="url(#BirthdayLogo_svg__g)"
          xlinkHref="#BirthdayLogo_svg__e"
        />
        <use
          fill="url(#BirthdayLogo_svg__h)"
          xlinkHref="#BirthdayLogo_svg__e"
        />
        <path
          d="M32.039 15.937c.298.091.42.558.271 1.042a1.311 1.311 0 01-.284.51c-.281-.201-.565-.39-.85-.568.009-.088.027-.18.056-.272.148-.484.509-.803.807-.712zm-3.17-.969c.452.138.719.592.634 1.045a13.678 13.678 0 00-1.68-.65.917.917 0 011.047-.395zm4.278-1.02l.173 1.415a.354.354 0 01-.069-.014c-.298-.09-.42-.557-.271-1.041.04-.135.099-.257.167-.36zm-7.581.01c.343.105.525.527.434.972-.46-.077-.93-.132-1.41-.166a1.1 1.1 0 01.033-.135c.148-.485.57-.785.943-.67zm-3.1.01c-.149.485-.45.822-.673.754-.18-.055-.255-.357-.2-.725l.836-.962c.138.156.16.532.036.934zm8.759-1.155c.372.114.554.598.406 1.082-.148.485-.57.785-.942.67-.373-.113-.555-.598-.407-1.082.148-.484.57-.784.943-.67zm-3.305-1.01a.917.917 0 11-.536 1.753.917.917 0 01.536-1.754zm-3.169-.97c.298.092.42.558.272 1.042-.148.484-.51.803-.808.712-.298-.091-.42-.558-.271-1.042.148-.484.51-.803.807-.711zm8.085.568l.113.928c-.173-.182-.226-.548-.113-.928zM30.478 9.71a.917.917 0 11-.536 1.753.917.917 0 01.536-1.753zm-3.304-1.01c.372.113.554.598.406 1.082-.148.484-.57.785-.942.67-.373-.113-.555-.598-.407-1.082.148-.484.57-.784.943-.67zm5.198-1.093l.21 1.711a.567.567 0 01-.285-.01c-.373-.115-.555-.6-.407-1.084.088-.285.27-.507.482-.617zM29.53 6.543a.917.917 0 11-.536 1.753.917.917 0 01.536-1.753zm2.456-2.11l.22 1.798a1.036 1.036 0 01-.588-.008c-.521-.16-.824-.681-.676-1.165.132-.433.579-.689 1.044-.625zm-1.988.336c-.135.442-.55.716-.96.655l.984-1.135a.97.97 0 01-.024.48zm1.73-2.445l.014.115-.014.046c-.154.453-.44.761-.654.696a.205.205 0 01-.062-.032l.717-.825z"
          fill="#FFF"
          style={{
            mixBlendMode: 'overlay',
          }}
        />
        <g>
          <use
            fill="url(#BirthdayLogo_svg__i)"
            xlinkHref="#BirthdayLogo_svg__j"
          />
          <use
            fill="url(#BirthdayLogo_svg__k)"
            xlinkHref="#BirthdayLogo_svg__j"
          />
        </g>
      </g>
    </svg>
  );
}
