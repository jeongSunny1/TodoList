import React from "react";
import {
  Form,
  FormLabel,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

function FormFieldSwitch({ form }: any) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="communication_emails"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-slate-100">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Communication emails
                </FormLabel>
                <FormDescription>
                  Receive emails about your account activity.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default FormFieldSwitch;
