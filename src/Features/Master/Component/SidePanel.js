import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SidePanel() {
    const { t } = useTranslation("Master");
    return (
        <div>
            <ul>
                <li>
                    <Link to="/login">{t("login")}</Link>
                </li>
                <li>
                    <Link to="/todolist">{t("todolist")}</Link>
                </li>
                <li>
                    {/*<Link to="/nestedrouter">{t("nestedrouter")}</Link>*/}
                </li>
                <li>
                    <Link to="/weather">{t("weather")}</Link>
                </li>
                <li>
                    {/*<Link to="/">{t("nonepage")}</Link>*/}
                </li>
            </ul>
        </div>
    );
}
