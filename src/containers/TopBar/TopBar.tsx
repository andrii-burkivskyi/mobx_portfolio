import React, {Component} from "react";
import { observer } from "mobx-react";
import Button, { ButtonTheme, ButtonColor, ButtonSize, ButtonIconPosition } from "../../components/Button/Button";

import styles from "./top_bar.scss";
import bem from "../../utils/bem";
import TopBar from "./TopBar.store";
import routes from "../../pages/routes";

@observer
export default class TopBarView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Button
                        theme={ButtonTheme.TOP_BAR}
                        color={ButtonColor.WHITE}
                        size={ButtonSize.NORMAL}
                        iconPosition={ButtonIconPosition.LEFT}
                        iconWidth={20}
                        text="Andrii Burkivskyi"
                        glyph="#logo"
                        to={routes.CV.path}
                    />

                    <Button
                        className={styles.menu_button}
                        theme={ButtonTheme.TOP_BAR}
                        color={ButtonColor.WHITE}
                        size={ButtonSize.NORMAL}
                        padding="0"
                        iconWidth={25}
                        glyph="#menu"
                        onClick={TopBar.menu.toggle}
                    />
                </div>

                <div className={bem(styles.navigation, { isOpen: TopBar.menu.isOpen.get() })}>
                    <Button
                        theme={ButtonTheme.TOP_BAR}
                        color={ButtonColor.WHITE}
                        size={ButtonSize.NORMAL}
                        iconPosition={ButtonIconPosition.LEFT}
                        text="UI Kit"
                        glyph="#projects-list"
                        onClick={TopBar.menu.close}
                        to={routes.UIKitRoot.path}
                    />
                    
                    <Button
                        theme={ButtonTheme.TOP_BAR}
                        color={ButtonColor.WHITE}
                        size={ButtonSize.NORMAL}
                        iconPosition={ButtonIconPosition.LEFT}
                        text="Source"
                        glyph="#github"
                        href="https://github.com/andrii-burkivskyi/portfolio"
                    />

                    <Button
                        theme={ButtonTheme.TOP_BAR}
                        color={ButtonColor.WHITE}
                        size={ButtonSize.NORMAL}
                        iconPosition={ButtonIconPosition.LEFT}
                        text="Contact me"
                        glyph="#mail"
                        onClick={TopBar.toggleContactMeModal}
                    />

                </div>
            </div>
        );
    }
}