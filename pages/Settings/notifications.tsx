import SettingsLayout from "@/components/Settings/SettingsLayout";
import { NotificationsForm } from "@/components/Settings/notifications/notifications-form";
import { Separator } from "@/components/ui/separator";

export default function Page(props: any) {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <Separator />
        <NotificationsForm />
      </div>
    </SettingsLayout>
  );
}
