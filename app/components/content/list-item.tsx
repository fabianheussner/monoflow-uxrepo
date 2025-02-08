import React from "react";
import { ThumbnailIcon, Icon, Text, Divider } from "@components";
import { cn } from "@utils";
import { VariantProps, cva } from "class-variance-authority";
import { icons } from "lucide-react";

export interface ListItemProps {
  title: string;
  description?: string;
  icon?: keyof typeof icons;
  isDrilldown?: boolean;
  hasDivider?: boolean;
}

export const ListItem = ({
  title,
  description,
  icon,
  isDrilldown,
  hasDivider,
}: ListItemProps) => {
  return (
    <>
      <div className="flex items-center gap-3 py-2">
        {icon && <ThumbnailIcon icon={icon} size="small" />}
        <div className="flex flex-col flex-1">
          <Text size="BodyLgBold">{title}</Text>
          {description && (
            <Text size="BodyMd" className="text-textVariant">
              {description}
            </Text>
          )}
        </div>
        {isDrilldown && (
          <Icon name="ChevronRight" size={20} className="text-textVariant" />
        )}
      </div>
      {hasDivider && <Divider />}
    </>
  );
};
