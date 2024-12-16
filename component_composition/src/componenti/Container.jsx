import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, SetCollapsed] = useState(null);

  function handleCollapse() {
    SetCollapsed((collapse) => !collapse);
  }
  return (
    <>
      <button onClick={handleCollapse}>
        {collapsed ? (
          <div className="wrapper">
            <h3>Chiudi</h3>
            <p>clicca per comprimere</p>
          </div>
        ) : (
          title
        )}
      </button>
      {collapsed && (
        <div className={`container ${collapsed ? "open" : "closed"}`}>
          {children}
        </div>
      )}
    </>
  );
}
