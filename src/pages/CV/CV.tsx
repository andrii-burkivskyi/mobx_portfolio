import { hot } from 'react-hot-loader';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import ChartList, { ChartListColor, ChartListSize } from '../../components/CV/ChartList/ChartList';
import DateRangeList from '../../components/CV/DateRangeList/DateRangeList';
import LinkList from '../../components/CV/LinkList/LinkList';
import ListBlock, { ListBlockColor } from '../../components/CV/ListBlock/ListBlock';
import UserInfo from '../../components/CV/UserInfo/UserInfo';
import CV from './CV.store';

import styles from "./cv.scss";

@observer
class CVView extends Component {
    componentDidMount() {
        CV.init();
    }

    render() {
        return (
            <DocumentTitle title={CV.title}>
                <div className={styles.wood_table}>
                    <div className={styles.blanc}>
                        <div className={styles.left_column}>
                            <UserInfo
                                avatar={CV.userProfile.data.avatar}
                                name={CV.userProfile.data.name}
                                surname={CV.userProfile.data.surname}
                                position={CV.userProfile.data.position}
                            />

                            <ListBlock
                                icon={CV.userProfile.data.contactMeIcon}
                                title={CV.userProfile.data.contactMeTitle}
                            >
                                <LinkList items={CV.userProfile.data.contactMeItems} />
                            </ListBlock>

                            <ListBlock
                                icon={CV.userProfile.data.personalSkillsIcon}
                                title={CV.userProfile.data.personalSkillsTitle}
                            >
                                <ChartList items={CV.userProfile.data.personalSkillsItems} />
                            </ListBlock>

                            <ListBlock
                                icon={CV.userProfile.data.connectIcon}
                                title={CV.userProfile.data.connectTitle}
                            >
                                <LinkList items={CV.userProfile.data.connectItems} />
                            </ListBlock>
                        </div>

                        <div className={styles.right_column}>
                            <ListBlock
                                icon={CV.userProfile.data.workExperienceIcon}
                                title={CV.userProfile.data.workExperienceTitle}
                                color={ListBlockColor.BLACK}
                            >
                                <DateRangeList items={CV.userProfile.data.workExperienceItems} />
                            </ListBlock>

                            <ListBlock
                                icon={CV.userProfile.data.professionalSkillsIcon}
                                title={CV.userProfile.data.professionalSkillsTitle}
                                color={ListBlockColor.BLACK}
                            >
                                <ChartList
                                    items={CV.userProfile.data.professionalSkillsItems}
                                    color={ChartListColor.BLACK}
                                    size={ChartListSize.LARGE}
                                />
                            </ListBlock>

                            <ListBlock
                                icon={CV.userProfile.data.educationIcon}
                                title={CV.userProfile.data.educationTitle}
                                color={ListBlockColor.BLACK}
                            >
                                <DateRangeList items={CV.userProfile.data.educationItems} />
                            </ListBlock>

                            <ListBlock
                                icon={CV.userProfile.data.proficiencyIcon}
                                title={CV.userProfile.data.proficiencyTitle}
                                color={ListBlockColor.BLACK}
                            >
                                <ChartList
                                    items={CV.userProfile.data.proficiencyItems}
                                    color={ChartListColor.BLACK}
                                    size={ChartListSize.LARGE}
                                />
                            </ListBlock>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

export default hot(module)(CVView);