import SettingsLayout from "@/components/Settings/SettingsLayout";
import { DisplayForm } from "@/components/Settings/delete/display-form";
import { Separator } from "@/components/ui/separator";

export default function Page(props: any) {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-red-500">
            Delete Account?
          </h3>
          <p className="text-sm pt-1 text-muted-foreground">
            Are you certain about deleting your account? Once deleted, you won
            {"'"}t be able to Login with this account anymore. Your account will
            be disabled, and if not recovered within 30 days from the day you
            submit the deletion request, it will be permanently deleted.
          </p>
        </div>
        <Separator />
        <DisplayForm />
      </div>
    </SettingsLayout>
  );
}
