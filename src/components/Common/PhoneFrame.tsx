import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import FrameType from "../../common/enums/phone-frame";
import styles from "../../styles/phone-frame.module.css";
import iphoneStyles from "../../styles/iphone-frame.module.css";

const IPhoneXFrame = (props: {
  children: React.ReactNode;
  showFrame?: boolean;
  height?: number | string;
}) => {
  const showFrame = props.showFrame ?? true;

  const frame = (
    <div
      className={iphoneStyles.iphone_x}
      style={{
        width: "100%",
        height: props.height ?? "100%",
        // height: "49rem",
        // border:"2rem solid red",
        boxShadow:
          "0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111",
        position: "relative",
      }}
    >
      <i> </i>
      {/* <b> </b> */}
      {props.children}
    </div>
  );

  return <>{showFrame ? frame : props.children}</>;
};

const IPhoneFrame = (props: {
  children: React.ReactNode;
  showFrame?: boolean;
}) => {
  const showFrame = props.showFrame ?? true;

  const frame = (
    <div className={`${styles.marvel_device}  ${styles.iphone_x}   `}>
      <div className={styles.notch}>
        <div className={styles.camera}></div>
        <div className={styles.speaker}></div>
      </div>

      <div className={styles.top_bar}></div>
      <div className={styles.sleep}></div>
      <div className={styles.bottom_bar}></div>
      <div className={styles.volume}></div>
      <div className={`${styles.shadow}  ${styles.shadow__tr} `}> </div>
      <div className={`${styles.shadow}  ${styles.shadow__tl} `}></div>
      <div className={`${styles.shadow}  ${styles.shadow__br} `}></div>
      <div className={`${styles.shadow}  ${styles.shadow__bl} `}></div>
      <div className={styles.overflow}></div>
      <div className={styles.inner_shadow}></div>

      <div className={styles.screen}>{props.children}</div>
    </div>
  );

  return <>{showFrame ? frame : props.children}</>;
};

const Note8Frame = (props: {
  children: React.ReactNode;
  showFrame?: boolean;
}) => {
  const showFrame = props.showFrame ?? false;

  const frame = (
    <div className={`${styles.marvel_device}  ${styles.note8} `}>
      <div className={styles.inner}></div>
      <div className={styles.overflow}>
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.speaker}></div>
      <div className={styles.sensors}></div>
      <div className={styles.more_sensors}></div>
      <div className={styles.sleep}></div>
      <div className={styles.volume}></div>

      <div className={styles.screen}>{props.children}</div>
    </div>
  );

  return <>{showFrame ? frame : props.children}</>;
};

const MacBookFrame = (props: {
  children: React.ReactNode;
  showFrame?: boolean;
}) => {
  const showFrame = props.showFrame ?? false;

  const frame = (
    <div className={`${styles.marvel_device}  ${styles.macbook} `}>
      <div className={styles.top_bar}></div>
      <div className={styles.camera}></div>
      <div className={styles.screen}>{props.children}</div>
      <div className={styles.bottom_bar}></div>
    </div>
  );

  return <>{showFrame ? frame : props.children}</>;
};

const PhoneFrame = (props: {
  children: React.ReactNode;
  frameType?: FrameType;
  showFrame?: boolean;
  height?: number | string;
}) => {
  const theme = useTheme();
  const mdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const showFrame = mdUpBreakpoint ? props.showFrame : false;

  switch (props.frameType) {
    case FrameType.Iphone:
      return <IPhoneFrame showFrame={showFrame}>{props.children}</IPhoneFrame>;
    case FrameType.IphoneX:
      return (
        <IPhoneXFrame height={props.height} showFrame={showFrame}>
          {props.children}
        </IPhoneXFrame>
      );
    case FrameType.Note8:
      return <Note8Frame showFrame={showFrame}>{props.children}</Note8Frame>;
    case FrameType.MacBook:
      return (
        <MacBookFrame showFrame={showFrame}>{props.children}</MacBookFrame>
      );
    default:
      return (
        <IPhoneXFrame height={props.height} showFrame={showFrame}>
          {props.children}
        </IPhoneXFrame>
      );
  }
};

export default PhoneFrame;
