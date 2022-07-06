import React from "react";
import PropertyTitle from "./propertys/PropertyTitle";
import TextStyle from "./propertys/TextStyle";
import TextColor from "./propertys/TextColor";
import TextSize from "./propertys/TextSize";
import Rotate from "./propertys/Rotate";
import Zindex from "./propertys/Zindex";
import useTextProperty from "./TextProperty.hook";

export default function TextProperty({ id, ...rest }) {
  const { models, operations } = useTextProperty(rest);
  const { currentTextSyle } = models;
  const { onChangeTextStyle } = operations;

  return (
    <div id="property-modal" key={id}>
      <PropertyTitle {...rest} />
      <div id="control-box">
        <TextStyle
          currentTextSyle={currentTextSyle}
          onChangeTextStyle={onChangeTextStyle}
          {...rest}
        />
        <TextColor {...rest} />
        <TextSize {...rest} />
        <Rotate {...rest} />
        <Zindex {...rest} />
      </div>
    </div>
  );
}
