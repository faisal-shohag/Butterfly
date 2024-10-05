import EditContactInfo from "./EditContactInfo";
import EditIntroductionInfo from "./EditIntroductionInfo";
import EditNameAndPAssword from "./EditNameAndPAssword";
import EditProfile from "./EditProfile";
import EditSocialLinks from "./EditSocialLinks";

export default function SettingsContent({ currentNav }) {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white dark:bg-zinc-900 shadow-md">
      {currentNav === "profile" ? (
        <EditProfile />
      ) : currentNav === "nameAndPassword" ? (
        <EditNameAndPAssword />
      ) : currentNav === "ContactInfo" ? (
        <EditContactInfo />
      ) : currentNav === "SocialLinks" ? (
        <EditSocialLinks />
      ) : currentNav === "IntroductionInfo" ? (
        <EditIntroductionInfo />
      ) : (
        <div>Invalid section selected.</div>
      )}
    </div>
  );
}
