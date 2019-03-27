interface ProfileLink {
    icon: string;
    text: string;
    url: string;
}

interface ProfileChart {
    value: string;
    text: string;
}

interface ProfileOrganization {
    position: string;
    time: string;
    organization: string;
    description: string;
}

export interface UserProfile {
    avatar: string;
    name: string;
    surname: string;
    position: string;

    contactMeTitle: string;
    contactMeIcon: string;
    contactMeItems: Array<ProfileLink>;

    personalSkillsTitle: string;
    personalSkillsIcon: string;
    personalSkillsItems: Array<ProfileChart>;

    connectTitle: string;
    connectIcon: string;
    connectItems: Array<ProfileLink>;

    workExperienceTitle: string;
    workExperienceIcon: string;
    workExperienceItems: Array<ProfileOrganization>;

    professionalSkillsTitle: string;
    professionalSkillsIcon: string;
    professionalSkillsItems: Array<ProfileChart>;


    educationTitle: string;
    educationIcon: string;
    educationItems: Array<ProfileOrganization>;

    proficiencyTitle: string;
    proficiencyIcon: string;
    proficiencyItems: Array<ProfileChart>;
}