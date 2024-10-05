import EditContactInfo from "./EditContactInfo";
import EditIntroductionInfo from "./EditIntroductionInfo";
import EditNameAndPassword from "./EditNameAndPassword";
import EditProfile from "./EditProfile";
import EditSocialLinks from "./EditSocialLinks";

export default function SettingsContent({ currentNav }) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-md">
      {currentNav === "profile" ? (
        <EditProfile />
      ) : currentNav === "nameAndPassword" ? (
        <EditNameAndPassword />
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
