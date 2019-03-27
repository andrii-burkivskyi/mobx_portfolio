import React from "react";
import { observer } from "mobx-react";

import { ComponentProps } from "./IconTypes.d";

const files = require["context"]("svg-sprite-loader!svgo-loader!../../assets/icons", false, /.*\.svg$/);
files.keys().map(files);

const Icon: React.SFC<ComponentProps> = ({ className, width, height, glyph, fill }) => (
    <svg className={className} style={{ width, height, fill }}>
        <use xlinkHref={glyph} />
    </svg>
);

export default observer(Icon);
