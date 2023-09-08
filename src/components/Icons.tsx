import React from 'react';
import Svg, {
  SvgProps,
  Path,
  Rect,
  G,
  Defs,
  ClipPath,
  Circle,
} from 'react-native-svg';
import {colors} from '../styles';

export const Car = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : '#000000'}
      d="M70 32.5h2.5c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5h-7l-3-7.5c-2-4.5-6.5-7.5-11.5-7.5H29.25c-5.25 0-9.75 3-11.75 7.5l-3.25 7.5H7.5C6 27.5 5 28.5 5 30s1 2.5 2.5 2.5H10c-3 2.25-5 6-5 10v10c0 2.25 1 4.25 2.5 5.5v4.5c0 4.25 3.25 7.5 7.5 7.5h5c4.25 0 7.5-3.25 7.5-7.5V60h25v2.5c0 4.25 3.25 7.5 7.5 7.5h5c4.25 0 7.5-3.25 7.5-7.5V58c1.5-1.25 2.5-3.25 2.5-5.5v-10c0-4-2-7.75-5-10ZM67.5 45c0 1.5-1 2.5-2.5 2.5h-7.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5H65c1.5 0 2.5 1 2.5 2.5ZM15 42.5h7.5c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H15c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5ZM26 55l3-5.75c1.25-2.5 3.75-4.25 6.75-4.25h8.75c2.75 0 5.5 1.5 6.75 4.25l3 5.75H26Zm-3.75-33C23.5 19.25 26 17.5 29 17.5h21.75c3 0 5.75 1.75 7 4.5l3.5 8h-42.5l3.5-8Z"
    />
  </Svg>
);

export const Mechanic = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" {...props}>
    <G fill={props.fill ? props.fill : '#000000'} clipPath="url(#a)">
      <Path d="M6 40C6.002 21.22 21.222 6.002 40 6 58.78 6.002 74 21.22 74 40 74 58.779 58.78 73.999 40 74 21.223 73.999 6.003 58.779 6 40Zm13.658-20.343c-5.21 5.215-8.426 12.39-8.427 20.343 0 7.953 3.216 15.129 8.426 20.343 5.215 5.21 12.39 8.425 20.343 8.426 7.953-.001 15.129-3.216 20.343-8.426 5.21-5.215 8.425-12.39 8.426-20.343-.001-7.952-3.216-15.128-8.427-20.343-5.213-5.21-12.39-8.425-20.342-8.425-7.952 0-15.128 3.215-20.342 8.425Z" />
      <Path d="M79.964 41.638c.022-.543.036-1.089.036-1.638 0-.548-.014-1.094-.036-1.638l-4.797-.588a35.784 35.784 0 0 0-.188-2.057l4.61-1.462a39.992 39.992 0 0 0-.595-3.218l-4.826.305a34.602 34.602 0 0 0-.565-1.992l4.265-2.285a40.098 40.098 0 0 0-1.183-3.05l-4.688 1.188a34.924 34.924 0 0 0-.922-1.852l3.77-3.03a39.987 39.987 0 0 0-1.722-2.782l-4.39 2.03c-.399-.562-.816-1.11-1.247-1.647l3.15-3.671a40.136 40.136 0 0 0-2.203-2.42l-3.942 2.802a36.341 36.341 0 0 0-1.524-1.393l2.424-4.19a40.254 40.254 0 0 0-2.61-1.973l-3.36 3.48a35.338 35.338 0 0 0-1.755-1.091L59.28 4.9a40.22 40.22 0 0 0-2.924-1.462l-2.664 4.039a34.807 34.807 0 0 0-1.93-.745l.75-4.784a39.69 39.69 0 0 0-3.144-.895l-1.88 4.463a34.605 34.605 0 0 0-2.03-.38L45.316.3a40.12 40.12 0 0 0-3.257-.3l-1.027 4.732a36.08 36.08 0 0 0-2.064 0L37.94 0a40.286 40.286 0 0 0-3.256.3l-.142 4.838c-.684.106-1.36.234-2.031.38l-1.879-4.463a39.699 39.699 0 0 0-3.143.895l.748 4.783c-.651.23-1.295.478-1.929.745L23.644 3.44c-.997.448-1.972.937-2.924 1.462l1.614 4.564c-.596.347-1.181.711-1.755 1.091l-3.36-3.479a40.341 40.341 0 0 0-2.61 1.973l2.425 4.19c-.522.45-1.03.915-1.524 1.393l-3.942-2.802a40.234 40.234 0 0 0-2.204 2.42l3.15 3.67c-.43.538-.847 1.086-1.247 1.648l-4.389-2.03a39.994 39.994 0 0 0-1.722 2.782l3.77 3.03a35.552 35.552 0 0 0-.922 1.852l-4.688-1.189a39.88 39.88 0 0 0-1.183 3.05l4.264 2.285c-.207.657-.395 1.32-.565 1.993l-4.825-.306a40.122 40.122 0 0 0-.596 3.218l4.61 1.462c-.082.68-.144 1.367-.187 2.058l-4.798.588C.014 38.906 0 39.452 0 40c0 .55.014 1.095.036 1.638l4.798.587a35.5 35.5 0 0 0 .187 2.06l-4.61 1.46c.156 1.088.354 2.161.596 3.218l4.825-.305c.17.673.358 1.336.565 1.992l-4.264 2.285a39.98 39.98 0 0 0 1.183 3.05l4.687-1.187c.29.627.597 1.244.922 1.851l-3.77 3.03a40.05 40.05 0 0 0 1.722 2.781l4.39-2.03c.4.562.816 1.11 1.247 1.648l-3.15 3.671a40.706 40.706 0 0 0 2.203 2.42l3.942-2.803c.494.479 1.002.944 1.524 1.394l-2.424 4.19c.841.692 1.713 1.35 2.61 1.972l3.36-3.479c.573.38 1.158.745 1.754 1.092l-1.614 4.564a39.866 39.866 0 0 0 2.925 1.461l2.664-4.039c.633.268 1.277.516 1.929.747l-.749 4.783c1.03.34 2.079.638 3.144.894l1.878-4.462c.67.144 1.348.272 2.032.379l.142 4.837a40.13 40.13 0 0 0 3.256.3l1.028-4.732c.342.01.686.017 1.032.017.345 0 .689-.007 1.032-.017L42.06 80a40.307 40.307 0 0 0 3.256-.3l.142-4.838a35.565 35.565 0 0 0 2.031-.379l1.879 4.462a39.377 39.377 0 0 0 3.144-.894l-.75-4.783c.653-.23 1.297-.478 1.93-.746l2.664 4.038a39.855 39.855 0 0 0 2.925-1.46l-1.614-4.565a35.264 35.264 0 0 0 1.755-1.092l3.36 3.48a39.924 39.924 0 0 0 2.609-1.973l-2.424-4.19c.522-.45 1.03-.915 1.524-1.393l3.942 2.803a40.623 40.623 0 0 0 2.204-2.42l-3.15-3.672c.43-.538.847-1.086 1.247-1.647l4.389 2.03a39.878 39.878 0 0 0 1.722-2.782l-3.77-3.03c.325-.607.632-1.224.922-1.851l4.688 1.188c.433-.997.83-2.014 1.183-3.05l-4.265-2.286c.208-.656.396-1.32.565-1.992l4.826.305c.241-1.056.44-2.13.595-3.218l-4.61-1.46c.082-.681.145-1.368.188-2.06l4.797-.587Zm-14.007-17.97c.415.655.804 1.33 1.168 2.018l-13.382 7.726a15.235 15.235 0 0 0-1.169-2.018l13.383-7.727ZM45.831 9.89a30.633 30.633 0 0 1 17.328 10.007l-13.884 8.017a15.206 15.206 0 0 0-3.444-1.995V9.89Zm-6.997-.532A31.78 31.78 0 0 1 40 9.333c.39 0 .779.01 1.166.025V24.81c-.386-.029-.773-.048-1.166-.048-.393 0-.78.02-1.166.048V9.358Zm-4.665.532v16.03a15.209 15.209 0 0 0-3.444 1.992l-13.884-8.015A30.63 30.63 0 0 1 34.17 9.89ZM14.043 23.667l13.383 7.727c-.438.64-.83 1.313-1.169 2.017l-13.382-7.725c.365-.689.755-1.363 1.168-2.019Zm-3.037 26.341A30.625 30.625 0 0 1 9.333 40c0-3.505.59-6.87 1.672-10.008l13.89 8.02c-.084.651-.133 1.314-.133 1.989 0 .674.049 1.337.134 1.989l-13.89 8.018Zm3.037 6.325a30.636 30.636 0 0 1-1.167-2.018l13.382-7.726c.338.705.73 1.378 1.168 2.018l-13.383 7.726ZM34.17 70.111a30.634 30.634 0 0 1-17.327-10.008l13.883-8.016a15.2 15.2 0 0 0 3.444 1.993v16.031Zm6.997.532c-.387.014-.775.023-1.166.023-.39 0-.779-.009-1.166-.023V55.19c.385.03.773.05 1.166.05.393 0 .78-.02 1.166-.05v15.454ZM40 46.095a6.095 6.095 0 1 1 0-12.19 6.095 6.095 0 0 1 0 12.19Zm5.83 24.016v-16.03a15.211 15.211 0 0 0 3.445-1.994l13.884 8.016A30.635 30.635 0 0 1 45.83 70.11Zm20.127-13.778-13.383-7.726c.438-.64.831-1.313 1.17-2.019l13.381 7.727a30.712 30.712 0 0 1-1.168 2.018Zm3.038-6.325-13.89-8.02c.085-.65.133-1.314.133-1.988 0-.674-.048-1.337-.133-1.989l13.89-8.019A30.618 30.618 0 0 1 70.667 40c0 3.505-.59 6.872-1.672 10.008Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h80v80H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Eye = (props: SvgProps) => (
  <Svg width={22} height={15} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
      fill={props.fill ? props.fill : '#00000099'}
    />
  </Svg>
);

export const ChevronLeft = (props: SvgProps) => (
  <Svg width={10} height={16} fill="none" {...props}>
    <Path
      d="M9.016 13.734a1.083 1.083 0 1 1-1.532 1.532l-6.5-6.5a1.083 1.083 0 0 1-.033-1.498L6.91.768a1.083 1.083 0 0 1 1.597 1.464L3.25 7.967l5.766 5.767Z"
      fill={props.fill ? props.fill : colors.gray75}
    />
  </Svg>
);

export const ChevronRight = (props: SvgProps) => (
  <Svg width={11} height={19} fill="none" {...props}>
    <Path
      d="m1.5 17.578 8.04-8.039L1.5 1.5"
      stroke={props.stroke ? props.stroke : '#000000'}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChevronUp = (props: SvgProps) => (
  <Svg width={12} height={8} fill="none" {...props}>
    <Path
      d="M1.59 7.09A.833.833 0 0 1 .41 5.91l5-5A.833.833 0 0 1 6.564.887l5 4.583a.833.833 0 1 1-1.126 1.229L6.025 2.653 1.59 7.09Z"
      fill={props.fill ? props.fill : colors.primary}
    />
  </Svg>
);

export const ChevronDown = (props: SvgProps) => (
  <Svg width={14} height={8} fill="none" {...props}>
    <Path
      d="M12.293.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.383.03l-6-5.5A1 1 0 1 1 1.676.763L6.97 5.616 12.293.293Z"
      fill={props.fill ? props.fill : colors.black}
    />
  </Svg>
);

export const Logout = (props: SvgProps) => (
  <Svg width={20} height={17} fill="none" {...props}>
    <Path
      d="m19.756 7.74-3.333-3.332a.83.83 0 1 0-1.175 1.175l1.908 1.916H5a.836.836 0 0 0-.833.833c0 .459.375.834.833.834h12.157l-1.908 1.908a.83.83 0 0 0 0 1.175c.159.166.367.25.584.25a.853.853 0 0 0 .591-.242l3.333-3.333a.84.84 0 0 0 0-1.183Z"
      fill={props.fill ? props.fill : colors.gray75}
    />
    <Path
      d="M12.499 11.665a.836.836 0 0 0-.834.834v2.5H1.668V1.666h9.998v2.5c0 .458.376.833.834.833a.836.836 0 0 0 .833-.834V.833A.836.836 0 0 0 12.499 0H.833A.836.836 0 0 0 0 .833v14.999c0 .458.375.833.833.833H12.5a.836.836 0 0 0 .833-.833v-3.333a.836.836 0 0 0-.833-.834Z"
      fill={props.fill ? props.fill : colors.gray75}
    />
  </Svg>
);

export const DeliveryTruck = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G fill="#000" clipPath="url(#a)">
      <Path d="M29.59 9.719a.75.75 0 0 0-.61-.32h-4.654V7.416c0-.41-.34-.75-.75-.75H6.716c-.41 0-.751.34-.751.75v12.128c0 .41.34.75.75.75h2.122c.39 1.361 1.65 2.372 3.132 2.372 1.48 0 2.741-1.001 3.132-2.372h8.315c.39 1.361 1.65 2.372 3.132 2.372 1.48 0 2.742-1.001 3.132-2.372h1.55c.411 0 .751-.34.751-.75V13.37c0-.16-.05-.31-.14-.43L29.59 9.719Zm.9 3.872h-3.362v-2.682H28.6l1.891 2.682ZM7.466 8.178h15.36v10.626H15.17a3.264 3.264 0 0 0-3.202-2.651 3.256 3.256 0 0 0-3.202 2.651H7.466V8.178Zm4.503 12.988c-.97 0-1.761-.79-1.761-1.761 0-.971.79-1.762 1.76-1.762.971 0 1.762.791 1.762 1.762 0 .97-.79 1.76-1.761 1.76Zm14.589 0c-.97 0-1.761-.79-1.761-1.761 0-.971.79-1.762 1.76-1.762.971 0 1.762.791 1.762 1.762 0 .97-.79 1.76-1.761 1.76Zm3.202-2.362a3.264 3.264 0 0 0-3.202-2.651c-.86 0-1.651.34-2.232.89V10.91h1.291v3.432c0 .41.34.75.75.75H30.5v3.713h-.74ZM-1.25 8.178h5.354c.41 0 .75-.34.75-.75 0-.411-.34-.751-.75-.751H-1.25c-.41 0-.75.34-.75.75s.34.75.75.75ZM4.104 9.408H-.02c-.41 0-.75.34-.75.75 0 .411.34.751.75.751h4.123a.75.75 0 1 0 0-1.501ZM4.104 12.14H1.502c-.41 0-.75.34-.75.75s.34.751.75.751h2.602a.75.75 0 1 0 0-1.501ZM4.104 14.872h-.9c-.411 0-.751.34-.751.75s.34.75.75.75h.9a.75.75 0 1 0 0-1.501Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Clock = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      d="M8.5 0C3.813 0 0 3.813 0 8.5 0 13.187 3.813 17 8.5 17c4.687 0 8.5-3.813 8.5-8.5C17 3.813 13.187 0 8.5 0Zm0 15.938c-4.101 0-7.438-3.337-7.438-7.438 0-4.101 3.337-7.438 7.438-7.438 4.101 0 7.438 3.337 7.438 7.438 0 4.101-3.337 7.438-7.438 7.438Z"
      fill={props.fill ? props.fill : colors.primary}
    />
    <Path
      d="M9.031 3.188H7.97V8.72l3.343 3.343.751-.751L9.031 8.28V3.188Z"
      fill={props.fill ? props.fill : colors.primary}
    />
  </Svg>
);

export const Minus = (props: SvgProps) => (
  <Svg width={14} height={2} fill="none" {...props}>
    <Path
      d="M1.167 1h11.666"
      stroke={props.stroke ? props.stroke : '#344054'}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Plus = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="M7 1.167v11.666M1.167 7h11.666"
      stroke={props.stroke ? props.stroke : '#344054'}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CheckBox = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={3.5}
      fill="#fff"
      stroke="#FC6435"
    />
    <Path
      d="M8.18 9.683a1 1 0 0 0-1.36 1.467l1.36-1.467ZM9.75 12.5l-.679.734a1 1 0 0 0 1.447-.093l-.767-.641Zm4.247-3.526a1 1 0 1 0-1.536-1.282l1.536 1.282ZM6.82 11.15l2.25 2.084 1.359-1.468-2.25-2.083-1.36 1.467Zm3.697 1.99 3.479-4.166-1.536-1.282-3.478 4.167 1.535 1.282Z"
      fill="#FC6435"
    />
  </Svg>
);

export const UnCheckedBox = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={3.5}
      fill="#fff"
      stroke="#CCC"
    />
  </Svg>
);

export const Facebook = (props: SvgProps) => (
  <Svg viewBox="0 0 25 48" {...props}>
    <Path
      fill="#4460A0"
      fillRule="evenodd"
      d="M24.784.34v7.574l-4.495.012c-3.524 0-4.203 1.674-4.203 4.12v5.421h8.394l-1.089 8.476h-7.305V48H7.33V25.943H0v-8.476h7.33v-6.251C7.33 3.957 11.754 0 18.24 0c3.092 0 5.76.234 6.544.34Z"
    />
  </Svg>
);

export const Google = (props: SvgProps) => (
  <Svg viewBox="0 0 47 48" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#FBBC05"
        d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 0 0 .213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 0 1 9.827 24"
      />
      <Path
        fill="#EA4335"
        d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 0 0-21.09 13.071l7.908 6.04a13.849 13.849 0 0 1 13.182-9.51"
      />
      <Path
        fill="#34A853"
        d="M23.714 37.867a13.849 13.849 0 0 1-13.182-9.51l-7.909 6.038a23.43 23.43 0 0 0 21.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
      />
      <Path
        fill="#4285F4"
        d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
      />
    </G>
  </Svg>
);

export const Cancel = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : '#686868'}
      d="m6.663 6 5.2-5.199A.469.469 0 0 0 11.2.138L6 5.338.8.138a.469.469 0 1 0-.663.663l5.2 5.2-5.2 5.2a.469.469 0 1 0 .663.662l5.2-5.2 5.2 5.2a.467.467 0 0 0 .663 0 .469.469 0 0 0 0-.662L6.663 6Z"
    />
  </Svg>
);

export const SearchIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : '#000'}
      d="M8 14.992a6.865 6.865 0 0 0 4.465-1.628l5.427 5.427c.124.124.279.186.45.186a.636.636 0 0 0 .45-1.085l-5.428-5.427A6.98 6.98 0 0 0 14.992 8 6.994 6.994 0 0 0 8 1.008C4.155 1.008 1.008 4.155 1.008 8c0 3.86 3.147 6.992 6.992 6.992ZM8 2.28A5.727 5.727 0 0 1 13.721 8a5.717 5.717 0 0 1-5.72 5.72A5.727 5.727 0 0 1 2.278 8C2.28 4.853 4.853 2.28 8 2.28Z"
    />
  </Svg>
);

export const Check = (props: SvgProps) => (
  <Svg width={16} height={12} fill="none" {...props}>
    <G clipPath="url(#a)" opacity={0.8}>
      <Path
        fill={props.fill ? props.fill : '#000'}
        d="M5.82 12a.917.917 0 0 1-.65-.269L.27 6.83a.917.917 0 1 1 1.297-1.297l4.216 4.214L14.21.307a.918.918 0 0 1 1.369 1.221L6.504 11.693a.918.918 0 0 1-.659.306H5.82Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15.812v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : colors.primary}
      fillRule="evenodd"
      d="M19.286 20.586h-3.643v-4.571H8.357v4.571H4.714v-10.53l7.274-6.846 7.298 6.869v10.507ZM21.65 9.158 11.966 0l-9.68 9.142v13.73h8.5v-4.571h2.428v4.571h8.5V9.158h-.063Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const BagIcon = (props: SvgProps) => (
  <Svg width={26} height={25} fill="none">
    <Path
      stroke={props.stroke ? props.stroke : colors.primary}
      strokeWidth={2}
      d="m.62 23.98 3.783-17.5h17.194l3.783 17.5H.62Z"
    />
    <Path
      stroke={props.stroke ? props.stroke : colors.primary}
      strokeWidth={2}
      d="M18 6.5a5.5 5.5 0 1 0-11 0"
    />
  </Svg>
);

export const ShopIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : colors.primary}
      d="m30 28.586-4.689-4.688a8.028 8.028 0 1 0-1.413 1.414L28.585 30 30 28.586ZM19 25a6 6 0 1 1 0-12 6 6 0 0 1 0 12ZM10 24H5.333v2H10v-2ZM10 14H5.333v2H10v-2ZM8.667 19H5.333v2h3.334v-2Z"
    />
  </Svg>
);

export const UserIcon = (props: SvgProps) => (
  <Svg width={25} height={23} fill="none" {...props}>
    <Path
      stroke={props.stroke ? props.stroke : colors.primary}
      strokeWidth={1.5}
      d="M.789 22.25c.482-4.636 5.395-8.5 11.711-8.5 6.316 0 11.229 3.864 11.711 8.5H.79Z"
    />
    <Circle
      cx={12}
      cy={7}
      r={6.25}
      stroke={props.stroke ? props.stroke : colors.primary}
      strokeWidth={1.5}
    />
  </Svg>
);

export const HeartIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : colors.primary}
      fillRule="evenodd"
      d="M22.75 11.523 13 23.156 3.25 11.475C2.084 9.855 1.625 8.76 1.625 7.262c0-2.794 1.995-5.309 4.875-5.332 2.37-.02 5.055 2.4 6.5 4.224 1.406-1.76 4.13-4.224 6.5-4.224 2.804 0 4.875 2.538 4.875 5.332 0 1.498-.363 2.674-1.625 4.26ZM19.5.406c-2.708 0-4.757 1.59-6.5 3.25C11.34 1.894 9.208.406 6.5.406 2.686.406 0 3.686 0 7.262c0 1.918.786 3.3 1.646 4.598l10.102 12.111c1.133 1.2 1.348 1.2 2.481 0L24.354 11.86C25.366 10.562 26 9.18 26 7.262 26 3.685 23.314.406 19.5.406Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ReturnIcon = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M7.5 16.5V18c0 5.79 4.71 10.5 10.5 10.5S28.5 23.79 28.5 18 23.79 7.5 18 7.5h-3V3L9 9l6 6v-4.5h3c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5v-1.5h-3Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Lock = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Path
      fill="#000"
      d="M25.5 15.375h-.375V12a7.125 7.125 0 1 0-14.25 0v3.375H10.5A4.124 4.124 0 0 0 6.375 19.5V27a4.125 4.125 0 0 0 4.125 4.125h15A4.124 4.124 0 0 0 29.625 27v-7.5a4.125 4.125 0 0 0-4.125-4.125ZM13.125 12a4.875 4.875 0 0 1 9.75 0v3.375h-9.75V12Zm14.25 15a1.875 1.875 0 0 1-1.875 1.875h-15A1.875 1.875 0 0 1 8.625 27v-7.5a1.875 1.875 0 0 1 1.875-1.875h15a1.875 1.875 0 0 1 1.875 1.875V27Z"
    />
  </Svg>
);

export const GiftCard = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G fill="#000" clipPath="url(#a)">
      <Path d="M5 22.5h4V25H5v-2.5Z" />
      <Path d="M29.5 8h-2.9a4.2 4.2 0 0 0-3.74-6 8.48 8.48 0 0 0-5.68 2A6.84 6.84 0 0 0 16 5.34 6.84 6.84 0 0 0 14.82 4a8.48 8.48 0 0 0-5.68-2A4.2 4.2 0 0 0 5.4 8H2.5A2.5 2.5 0 0 0 0 10.5v17A2.5 2.5 0 0 0 2.5 30h27a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 29.5 8ZM18.84 5.88a6 6 0 0 1 4-1.38 1.7 1.7 0 1 1 0 3.4h-5.36a4.64 4.64 0 0 1 1.36-2.02ZM9.14 4.5a6 6 0 0 1 4 1.38 4.64 4.64 0 0 1 1.36 2H9.14a1.7 1.7 0 0 1 0-3.4v.02Zm-6.64 6h27V13h-27v-2.5Zm0 17V18h27v9.5h-27Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Basket = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.fill ? props.fill : colors.primary}
      d="M18.807 6.714h-2.325a.943.943 0 0 0-.078-.115L12.53 1.807a.93.93 0 1 0-1.447 1.17l3.021 3.737H5.896l3.021-3.738a.93.93 0 1 0-1.446-1.17L3.596 6.6a.933.933 0 0 0-.078.115H1.193a.729.729 0 0 0 0 1.458h.786c.626 3.178.956 6.406.985 9.645a.729.729 0 0 0 .73.722h12.613a.729.729 0 0 0 .729-.722c.03-3.239.359-6.467.985-9.645h.786a.729.729 0 0 0 0-1.458ZM7.159 14.637a.679.679 0 0 1-1.357 0v-4.022a.679.679 0 1 1 1.357 0v4.022Zm3.52 0a.679.679 0 0 1-1.358 0v-4.022a.679.679 0 1 1 1.357 0v4.022Zm3.519 0a.679.679 0 0 1-1.358 0v-4.022a.678.678 0 1 1 1.358 0v4.022Z"
    />
  </Svg>
);

export const SettingsIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.966 1.667c-.592 0-1.087 0-1.493.027-.423.03-.822.091-1.21.252A3.666 3.666 0 0 0 11.28 3.93c-.194.468-.246.96-.266 1.497-.016.43-.234.79-.554.975-.321.185-.741.194-1.122-.008-.474-.25-.927-.451-1.43-.517a3.667 3.667 0 0 0-2.71.726c-.332.255-.586.57-.822.921-.227.338-.475.767-.771 1.28l-.034.058c-.296.514-.543.942-.723 1.308-.186.38-.332.757-.386 1.173-.127.964.134 1.939.726 2.71.308.402.709.694 1.163.98.365.228.567.596.567.967 0 .37-.202.738-.567.968-.454.285-.855.577-1.163.979a3.667 3.667 0 0 0-.727 2.71c.055.416.2.793.387 1.173.18.366.427.794.723 1.307l.034.059c.296.513.543.941.77 1.28.237.351.49.666.823.92a3.667 3.667 0 0 0 2.71.727c.503-.066.956-.267 1.43-.517.38-.202.8-.193 1.122-.008.32.185.538.545.554.975.02.536.072 1.03.266 1.497a3.666 3.666 0 0 0 1.985 1.984c.387.16.786.223 1.209.252.406.027.9.027 1.493.027h.068c.592 0 1.087 0 1.493-.027.423-.03.822-.091 1.21-.252a3.667 3.667 0 0 0 1.984-1.984c.194-.468.246-.96.266-1.497.016-.43.234-.79.554-.975.321-.185.741-.194 1.122.008.474.25.927.451 1.43.517a3.666 3.666 0 0 0 2.71-.726c.332-.255.586-.57.822-.922.227-.338.475-.766.771-1.28l.034-.058c.296-.513.544-.941.723-1.307.186-.38.332-.757.387-1.173a3.667 3.667 0 0 0-.727-2.71c-.308-.402-.709-.694-1.163-.98-.365-.229-.567-.597-.567-.967s.202-.738.567-.968c.454-.285.855-.577 1.163-.979a3.667 3.667 0 0 0 .727-2.71c-.055-.416-.2-.793-.387-1.173-.18-.366-.427-.794-.723-1.307l-.034-.059c-.296-.513-.544-.942-.77-1.28-.237-.351-.49-.666-.823-.921a3.667 3.667 0 0 0-2.71-.726c-.503.066-.956.267-1.43.517-.38.202-.8.193-1.122.008-.32-.185-.538-.545-.554-.975-.02-.536-.072-1.03-.266-1.497a3.667 3.667 0 0 0-1.985-1.984c-.387-.16-.786-.223-1.209-.252-.406-.027-.9-.027-1.493-.027h-.068ZM14.03 3.793c.103-.042.259-.081.58-.103.33-.023.756-.023 1.391-.023s1.061 0 1.39.023c.322.022.478.06.581.103.409.17.733.494.902.902.053.13.098.33.115.806.04 1.057.585 2.074 1.553 2.633.968.559 2.122.522 3.057.028.421-.222.617-.284.755-.302.439-.058.882.06 1.232.33.089.067.201.183.38.45.185.275.398.643.716 1.193.317.55.53.92.675 1.216.142.29.186.444.2.555.058.438-.06.881-.33 1.232-.084.11-.236.25-.64.503-.895.562-1.503 1.543-1.503 2.66 0 1.119.608 2.1 1.503 2.662.404.254.556.392.64.503.27.35.388.794.33 1.232-.014.11-.058.265-.2.554a22.84 22.84 0 0 1-.675 1.216c-.318.55-.531.92-.716 1.194-.18.267-.291.382-.38.45-.35.27-.794.388-1.232.33-.138-.018-.334-.08-.755-.303-.935-.494-2.089-.53-3.057.029s-1.513 1.576-1.553 2.633c-.017.476-.061.677-.115.806-.169.408-.494.732-.902.901-.103.043-.259.082-.58.104-.33.023-.756.023-1.391.023s-1.061 0-1.391-.023c-.321-.022-.477-.061-.58-.104a1.667 1.667 0 0 1-.902-.901c-.054-.13-.098-.33-.116-.806-.04-1.057-.584-2.074-1.552-2.633-.969-.559-2.122-.523-3.057-.029-.421.223-.617.285-.755.303a1.667 1.667 0 0 1-1.233-.33c-.088-.067-.2-.183-.38-.45a22.73 22.73 0 0 1-.715-1.193c-.317-.55-.53-.92-.676-1.216-.141-.29-.185-.445-.2-.555a1.666 1.666 0 0 1 .33-1.232c.085-.11.237-.25.64-.503.896-.562 1.504-1.543 1.504-2.66 0-1.119-.608-2.1-1.503-2.662-.404-.254-.556-.393-.64-.503a1.667 1.667 0 0 1-.33-1.232c.014-.11.058-.266.2-.555.145-.297.358-.666.675-1.216.318-.55.531-.918.716-1.193.18-.267.291-.383.38-.45.35-.27.793-.388 1.232-.33.138.018.334.08.755.302.935.494 2.089.53 3.057-.028.968-.559 1.513-1.576 1.552-2.633.018-.476.063-.677.116-.806.169-.408.493-.732.902-.902Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Star = (props: SvgProps) => (
  <Svg width={11} height={10} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#0B1E50"
        fillRule="evenodd"
        d="m5.294 8.394 2.441 1.477c.447.27.995-.13.877-.636L7.965 6.46l2.159-1.87a.587.587 0 0 0-.336-1.03l-2.84-.241L5.834.694a.588.588 0 0 0-1.082 0L3.641 3.312l-2.84.24a.587.587 0 0 0-.336 1.03l2.159 1.87-.647 2.777a.587.587 0 0 0 .876.636l2.441-1.47Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10.588v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const GraduationIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#000"
      d="M30.264 8.02 16.265 2.741a.757.757 0 0 0-.535.002l.005-.002-14 5.279a.752.752 0 0 0-.005 1.402l.005.002 1.515.571v13.156l-1.601 2.4a.743.743 0 0 0 .002.835l-.002-.003 1.727 2.59a.749.749 0 0 0 1.246.003l.002-.003 1.727-2.59a.743.743 0 0 0-.002-.835l.002.003-1.601-2.4v-12.59l3.409 1.285-1.677 10.119a.75.75 0 0 0 .471.822l.005.002c2.672 1.056 5.767 1.674 9.004 1.686h.005a25.931 25.931 0 0 0 9.25-1.744l-.177.06a.752.752 0 0 0 .48-.814v.004L24.042 11.77l6.222-2.346a.751.751 0 0 0 .005-1.402l-.005-.002ZM4.825 25.967 4 27.205l-.825-1.238L4 24.729l.825 1.238Zm19.122-4.377c-2.366.874-5.099 1.38-7.95 1.38A23.56 23.56 0 0 1 7.9 21.544l.164.052 1.526-9.21 6.145 2.317a.752.752 0 0 0 .535-.002l-.005.002 6.34-2.39 1.342 9.277ZM16 13.198 4.126 8.721 16 4.243l11.875 4.478L16 13.198Z"
    />
  </Svg>
);
