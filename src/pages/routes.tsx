// import React from "react";
import Route from "../utils/route";
import CVView from "./CV/CV";
import UIKitRootView from "./UIKit/Root/UIKitRoot";
import UIKitFormsView from "./UIKit/Forms/UIKitForms";

class Routes {
    CV = new Route({
        exact: true,
        path: "/",
        component: CVView
    })
    UIKitRoot = new Route({
        path: "/ui-kit",
        component: UIKitRootView
    })
    UIKitForm = new Route({
        path: "/ui-kit",
        component: UIKitFormsView
    })
}

export default  new Routes;