import React from "react";

export interface IPage extends React.FC {
    layout?: (page: React.ReactNode) =>  JSX.Element;
}
