import React from 'react';
import Link from './Link';
import { VisibilityFilters } from "../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("ToDoList");

  return (
    <div>
        <span>{t("show")}</span>
        <Link filter={VisibilityFilters.SHOW_ALL}>{t("all")}</Link>
        <Link filter={VisibilityFilters.SHOW_ACTIVE}>{t("active")}</Link>
        <Link filter={VisibilityFilters.SHOW_COMPLETED}>{t("complete")}</Link>
    </div>
  );
};

export default Footer;