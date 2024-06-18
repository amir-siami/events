import Link from "next/link";

function Button({ link, children, classes, onClick }) {
  if (link) {
    return (
      <Link
        href={link}
        className="inline-block px-6 py-2 font-medium text-white bg-emerald-600 rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
