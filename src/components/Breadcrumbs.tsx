import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/%20/g, " ");
    const paths = pathname.split("/").filter((path) => path !== "");
    setBreadcrumbs(paths);
  }, [location]);

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link to={`/${encodeURIComponent(breadcrumb)}`}>{breadcrumb}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
