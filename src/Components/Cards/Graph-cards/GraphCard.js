import React from "react";

const GraphCard = ({ props }) => {
  return (
    <div
      id="graph-card-one"
      style={{
        backgroundColor: props.cardStyle.themeColor,
        height: props.cardStyle.height,
      }}
    >
      <div className="text-container">
        <div className="heading-box">
          <div
            className="graph-title"
            style={{
              lineHeight: props.cardStyle.lineHeight,
              display: props.cardStyle.display,
              flexDirection: props.cardStyle.flexDirection,
              justifyContent: props.cardStyle.justifyContent,
              alignItems: props.cardStyle.alignItems,
              marginRight: 3,
            }}
          >
            <img
              className="airplane-icon"
              src={props.icon}
              style={props.iconStyle}
              alt={props.iconAltTxt}
            />
            <h2 className="amatic-bold">
              <span
                style={{
                  color: props.cardStyle.altColor,
                  letterSpacing: props.cardStyle.letterSpacing,
                  marginRight: props.cardStyle.marginRight,
                }}
              >
                {props.headingNumber}
              </span>
              {props.headingText}
            </h2>
          </div>

          <p className="primary-text">
            {props.primaryText}
            <span className="number-up-top">{props.sourceNumber}</span>
          </p>
        </div>
        <div className="graph-btm-txt">
          <p className="main-info">{props.mainInfo}</p>
          <p className="scndry-info">{props.scndryInfo}</p>
        </div>
      </div>
      <img
        className="graph-one-img"
        src={props.graph}
        style={{ top: props.cardStyle.top }}
        alt={props.imgAltTxt}
      />
    </div>
  );
};

export default GraphCard;
