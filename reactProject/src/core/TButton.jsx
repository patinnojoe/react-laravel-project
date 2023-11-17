import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TButton({
  color = "indigo",
  to = "",
  circle = "",
  href = "",
  link = "",
  target = "_blank",
  children,
}) {
  // SET CLASSES
  let classes = [
    "flex",
    "whitespace-nowrap",
    "text-sm",
    "border",
    "border-2",
    "border-transparent",
  ];

  if (link) {
    classes = [...classes, "transition-colors"];

    switch (color) {
      case "indigo":
        classes = [...classes, "text-indigo-500", "focus:border-indigo-500"];
        break;
      case "red":
        classes = [...classes, "text-red-500", "focus:border-red-500"];
    }
  } else {
    classes = [...classes, "text-white", "focus:ring-2", "focus:ring-offset-2"];
    switch (color) {
      case "indigo":
        classes = [
          ...classes,
          "text-indigo-600",
          "hover:bg-indigo-700",
          "focus:ring-indigo-600",
        ];
        break;
      case "red":
        classes = [
          ...classes,
          "text-red-500",
          "hover:bg-red-700",
          "focus:border-red-500",
        ];
        break;
      case "green":
        classes = [
          ...classes,
          "bg-emerald-500",
          "hover:bg-emerald-600",
          "focus:border-red-400",
        ];
    }
  }

  if (circle) {
    classes = [
      ...classes,
      "h-8",
      "w-8",
      "items-center",
      "justify-center",
      "rounded-full",
      "text-sm",
    ];
  } else {
    classes = [...classes, "p-0", "py-2", "px-4", "rounded-md"];
  }
  return (
    <div>
      {href && (
        <a href={href} target={target} className={classes.join(" ")}>
          {children}
        </a>
      )}

      {to && (
        <Link to={to} className={classes.join(" ")}>
          {children}
        </Link>
      )}

      {!to && !href && (
        <button className={classes.join(" ")}>{children}</button>
      )}
    </div>
  );
}

export default TButton;

// prop validation
TButton.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  circle: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  link: PropTypes.bool,
  children: PropTypes.node,
};
