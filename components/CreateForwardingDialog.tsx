"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";   // ✅ import

export function CreateForwardingDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const t = useTranslations("createForwardingDialog"); // ✅ hook

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[420px] rounded-2xl p-0 bg-white gap-0">
        <DialogHeader className="relative border-b border-[#e4e4e7] p-4 gap-1">
          <DialogTitle className="text-[16px]">{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-4">
          {/* Email From */}
          <div>
            <label className="text-sm font-medium">{t("emailFromLabel")}</label>
            <div className="flex items-center mt-1">
              <Input
                placeholder={t("emailNamePlaceholder")}
                className="rounded-r-none bg-[#f4f4f5] border-none shadow-none focus-visible:ring-0"
              />

              <Select defaultValue={t("domains.qzueos")}>
                <SelectTrigger className="w-[140px] rounded-l-none bg-[#f4f4f5] border-none shadow-none">
                  <SelectValue placeholder={t("selectDomainPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={t("domains.qzueos")}>
                    {t("domains.qzueos")}
                  </SelectItem>
                  <SelectItem value={t("domains.tempmail")}>
                    {t("domains.tempmail")}
                  </SelectItem>
                  <SelectItem value={t("domains.mailhub")}>
                    {t("domains.mailhub")}
                  </SelectItem>
                  <SelectItem value={t("domains.randommail")}>
                    {t("domains.randommail")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* To Email */}
          <div>
            <label className="text-sm font-medium">{t("toEmailLabel")}</label>
            <Input
              placeholder={t("realEmailPlaceholder")}
              className="mt-1 bg-[#f4f4f5] border-none shadow-none focus-visible:ring-0"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm font-medium">{t("durationLabel")}</label>
            <Input
              defaultValue="60"
              className="mt-1 bg-[#f4f4f5] border-none shadow-none focus-visible:ring-0"
            />
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm" className="bg-[#f4f4f5] border-none shadow-none font-normal">
                {t("quickDuration.nineDays")}
              </Button>
              <Button variant="outline" size="sm" className="bg-[#f4f4f5] border-none shadow-none font-normal">
                {t("quickDuration.fortyFiveDays")}
              </Button>
              <Button variant="outline" size="sm" className="bg-[#f4f4f5] border-none shadow-none font-normal">
                {t("quickDuration.ninetyDays")}
              </Button>
              <Button variant="outline" size="sm" className="bg-[#f4f4f5] border-none shadow-none font-normal">
                {t("quickDuration.infinite")}
              </Button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 p-4 border-t border-[#e4e4e7]">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            {t("actions.close")}
          </Button>
          <Button className="bg-black hover:bg-slate-800 text-white text-center w-[180px] cursor-pointer">
            {t("actions.create")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
